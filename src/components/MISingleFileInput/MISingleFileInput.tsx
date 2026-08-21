'use client';

import { useRef, ChangeEvent, DragEvent, useState } from 'react';
import {
  Box,
  LinearProgress,
  FormControl,
  FormLabel,
  FormHelperText,
  IconButton,
  Input,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* Icons */
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ReportIcon from '@mui/icons-material/Report';

/* Utils */
import { getContainerStyle, getStatus } from './utils';
import { theme } from '@theme';
import { MIButton } from '@components/MIButton';
import foundationNext from 'theme/foundations-next/foundationNext';
import { UploadStatus } from 'types/singleFileInput';
import { generateRandomID, verifyAccept, truncateFileName } from 'utils/singleFileInput';

export type MISingleFileInputProps = {
  /** The file to be displayed. */
  value: File | null;

  /** The label of the input */
  label?: string;

  /** Sets the error status. */
  error?: boolean;

  /** If true and no file is selected, the component is shown in error state. */
  required?: boolean;

  /** The MIME types that the input should accept. */
  accept?: Array<string>;

  /** Sets the loading status */
  loading?: boolean;

  /** If enabled, sets the icon and the dropzone label alligned vertically. */
  vertical?: boolean;

  /** Callback called when the file is selected. */
  onFileSelected: (file: File) => void;

  /** Callback called when the file is removed. */
  onFileRemoved?: (file: File) => void;

  /** Callback called when the file is rejected. */
  onFileRejected?: (file: File) => void;

  /** The label to be displayed in the dropzone. */
  dropzoneLabel: string;

  /** The label to be displayed for the upload button in the dropzone. */
  dropzoneButton: string;

  /** The support text displayed below the dropzone instruction text. */
  dropzoneSupportText?: string;

  /** The label to be displayed above the spinner on loading state. */
  loadingLabel?: string;

  /** If true, forces the drag-over visual state. Useful for static previews. */
  dragOver?: boolean;

  /**
   * The label to be displayed when the file is rejected.
   *
   * If the label is not provided, the rejected state (on rejected file) will not be displayed.
   * */
  rejectedLabel?: string;

  /** If true, forces the rejected visual state. Useful for static previews. */
  rejected?: boolean;

  /** Label shown for the retry action in rejected status. */
  retryButtonLabel?: string;

  /** Helper text shown below the container. */
  helperText?: string;
};

const formatFileSize = (size: number) => `${Math.max(0, Math.round(size / 1024))} KB`;

const formatLastModified = (timestamp: number) =>
  new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(new Date(timestamp))
    .replace(', ', ',');

export const MISingleFileInput = ({
  value,
  label,
  error,
  required = false,
  accept,
  loading,
  vertical = false,

  onFileSelected,
  onFileRemoved,
  onFileRejected,
  dropzoneLabel,
  dropzoneButton,
  dropzoneSupportText,
  loadingLabel = 'Caricamento in corso...',
  dragOver = false,
  rejectedLabel,
  rejected = false,
  retryButtonLabel = 'Riprova',
  helperText,
}: MISingleFileInputProps): JSX.Element => {
  const muiTheme = useTheme();
  const isMobileViewport = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isVerticalLayout = vertical || isMobileViewport;

  const uploadInputRef = useRef<HTMLInputElement>(null);

  const [id, _] = useState(generateRandomID);
  const [isFileRejected, setIsFileRejected] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const hasRequiredError = required && !value;

  const status = getStatus(
    value,
    !!loading,
    !!error || hasRequiredError,
    (rejected || isFileRejected) && !!rejectedLabel,
    dragOver || isDragOver
  );
  const containerStyle = getContainerStyle(status);
  const typographySemiBoldFontWeight = foundationNext.typography.fontWeightMedium;

  const isDropzoneErrorLike = status === UploadStatus.REJECTED || status === UploadStatus.ERROR;
  const dropzonePrimaryLabel =
    status === UploadStatus.REJECTED ? rejectedLabel ?? dropzoneLabel : dropzoneLabel;
  const showDropzoneActionButton = status !== UploadStatus.DRAG_OVER;
  const dropzoneButtonLabel = status === UploadStatus.REJECTED ? retryButtonLabel : dropzoneButton;

  const chooseFileHandler = () => {
    setIsFileRejected(false);
    setIsDragOver(false);

    const target = uploadInputRef.current;
    target?.click();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsFileRejected(false);
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragOver(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) {
      return;
    }

    if (verifyAccept(droppedFile.type, accept)) {
      onFileSelected(droppedFile);
    } else {
      setIsFileRejected(true);
      if (onFileRejected) {
        onFileRejected(droppedFile);
      }
    }
    e.dataTransfer.clearData();
  };

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      setIsFileRejected(false);
      setIsDragOver(false);
      onFileSelected(file);
    }
  };

  const handleRemoveFile = () => {
    if (value && onFileRemoved) {
      onFileRemoved(value);
    }
  };

  const showDropzone =
    status === UploadStatus.IDLE ||
    status === UploadStatus.DRAG_OVER ||
    status === UploadStatus.REJECTED ||
    status === UploadStatus.ERROR;

  const minHeight =
    status === UploadStatus.SELECTED
      ? isVerticalLayout
        ? 118
        : 94
      : isVerticalLayout
      ? 236
      : status === UploadStatus.DRAG_OVER
      ? 92
      : 96;

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel error={!!error || hasRequiredError} sx={{ fontWeight: 600, mb: 1 }} htmlFor={id}>
        {label}
      </FormLabel>

      <Box
        sx={{
          position: 'relative',
          minHeight,
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...containerStyle,
        }}
      >
        {showDropzone && (
          <Box
            sx={{
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
              flex: 1,
              width: '100%',
              px: 3,
              py: isVerticalLayout ? 3 : 0,
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            component="button"
            type="button"
            onClick={chooseFileHandler}
            data-testid="loadFromPc"
          >
            <Stack
              direction={isVerticalLayout ? 'column' : 'row'}
              alignItems="center"
              justifyContent={isVerticalLayout ? 'center' : 'space-between'}
              spacing={isVerticalLayout ? 2 : 1}
              sx={{ width: '100%', height: '100%' }}
            >
              <Stack
                direction={isVerticalLayout ? 'column' : 'row'}
                spacing={isVerticalLayout ? 1 : 1.5}
                alignItems="center"
                sx={{
                  width: isVerticalLayout ? '100%' : 'auto',
                  justifyContent: 'center',
                }}
              >
                {status === UploadStatus.REJECTED ? (
                  <ErrorIcon sx={{ color: theme.colors.error[850] }} />
                ) : (
                  <FileUploadOutlinedIcon
                    sx={{
                      color: status === UploadStatus.ERROR ? theme.colors.error[850] : undefined,
                    }}
                  />
                )}

                <Stack
                  spacing={0.5}
                  sx={{
                    textAlign: isVerticalLayout ? 'center' : 'left',
                    width: isVerticalLayout ? '100%' : 'auto',
                    alignItems: isVerticalLayout ? 'center' : 'flex-start',
                  }}
                >
                  <Typography
                    display="inline"
                    variant="body2"
                    sx={{
                      fontWeight: typographySemiBoldFontWeight,
                      color: isDropzoneErrorLike
                        ? theme.colors.error[850]
                        : theme.colors.neutral.black,
                    }}
                  >
                    {dropzonePrimaryLabel}
                  </Typography>
                  {dropzoneSupportText && (
                    <Typography
                      display="inline"
                      variant="body2"
                      sx={{
                        color: isDropzoneErrorLike
                          ? theme.colors.error[850]
                          : theme.colors.neutral.grey[700],
                        fontWeight: typographySemiBoldFontWeight,
                        fontSize: '12px',
                        lineHeight: '18px',
                      }}
                    >
                      {dropzoneSupportText}
                    </Typography>
                  )}
                </Stack>
              </Stack>

              {showDropzoneActionButton && (
                <MIButton
                  variant="contained"
                  color={isDropzoneErrorLike ? 'error' : 'primary'}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  {dropzoneButtonLabel}
                </MIButton>
              )}

              <Input
                inputProps={{ accept: accept?.join(',') }}
                type="file"
                id={id}
                sx={{ display: 'none' }}
                required={required}
                inputRef={uploadInputRef}
                onChange={handleSelectFile}
                data-testid="fileInput"
              />
            </Stack>
          </Box>
        )}

        {status === UploadStatus.LOADING && (
          <Box p={3} width="100%">
            <Stack
              direction={isVerticalLayout ? 'column' : 'row'}
              justifyContent={isVerticalLayout ? 'center' : 'space-between'}
              alignItems="center"
              spacing={3}
            >
              <Stack
                direction="column"
                spacing={1.5}
                sx={{
                  width: '100%',
                  alignItems: isVerticalLayout ? 'center' : 'flex-start',
                }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    fontWeight: typographySemiBoldFontWeight,
                    textAlign: isVerticalLayout ? 'center' : 'left',
                  }}
                >
                  {loadingLabel}
                </Typography>

                <LinearProgress
                  variant="indeterminate"
                  sx={{
                    width: '100%',
                    height: '6px',
                    '&.MuiLinearProgress-root': {
                      backgroundColor: theme.colors.neutral.grey[100],
                      borderRadius: '4px',
                    },
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.colors.blue[500],
                      width: '32px',
                      borderRadius: '4px',
                    },
                  }}
                />
              </Stack>

              {/* Cancel Button */}
              <MIButton
                variant="outlined"
                onClick={handleRemoveFile}
                sx={{
                  whiteSpace: 'nowrap',
                  minWidth: '106px',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Annulla
              </MIButton>
            </Stack>
          </Box>
        )}

        {status === UploadStatus.SELECTED && value && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: '100%', columnGap: 1, py: 3 }}
          >
            <CheckCircleRoundedIcon sx={(theme) => ({ mr: 1, color: theme.colors.success[700] })} />
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              flexDirection="column"
              flex={1}
              minWidth={0}
            >
              <Typography
                fontWeight={typographySemiBoldFontWeight}
                variant="body2"
                sx={{
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {truncateFileName(value.name)}
              </Typography>
              <Stack
                direction={isVerticalLayout ? 'column' : 'row'}
                spacing={isVerticalLayout ? 0.25 : 1}
                sx={{ width: '100%', minWidth: 0 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    flexShrink: 0,
                    color: theme.colors.neutral.grey[700],
                    fontWeight: typographySemiBoldFontWeight,
                  }}
                >
                  {formatFileSize(value.size)}
                </Typography>
                {value.lastModified && (
                  <Typography
                    variant="caption"
                    sx={{
                      minWidth: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      color: theme.colors.neutral.grey[700],
                    }}
                  >
                    {formatLastModified(value.lastModified)}
                  </Typography>
                )}
              </Stack>
            </Box>
            {onFileRemoved && (
              <IconButton onClick={handleRemoveFile} sx={{ p: 0, alignSelf: 'flex-start' }}>
                <CloseIcon sx={{ color: theme.colors.neutral.black }} />
              </IconButton>
            )}
          </Box>
        )}
      </Box>

      {helperText && (
        <FormHelperText
          error
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 1,
            mx: 3,
            columnGap: 0.5,
          }}
        >
          {status === UploadStatus.ERROR && <ReportIcon sx={{ fontSize: 16 }} />}
          <Typography
            variant="caption"
            sx={{
              color: theme.colors.error[600],
            }}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default MISingleFileInput;
