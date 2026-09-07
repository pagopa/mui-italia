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
import {
  CheckCircleRounded as CheckCircleRoundedIcon,
  Close as CloseIcon,
  Error as ErrorIcon,
  FileUploadOutlined as FileUploadOutlinedIcon,
  Report as ReportIcon,
} from '@mui/icons-material';

/* Utils */
import { theme } from '@theme';
import { MIButton } from '@components/MIButton';
import foundationNext from 'theme/foundations-next/foundationNext';
import { UploadStatus } from 'types/singleFileInput';
import { generateRandomID, verifyAccept, truncateFileName } from 'utils/singleFileInput';
import { getContainerStyle, getStatus } from './utils';

export type MISingleFileInputProps = {
  /** The file to be displayed. */
  value: File | null;

  /** The label of the input */
  label?: string;

  /** Sets the error status. */
  error?: boolean;

  /** The MIME types that the input should accept. */
  accept?: Array<string>;

  /** Sets the loading status */
  loading?: boolean;

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

  /** Aria label for the remove file button. */
  onFileRemoveAriaLabel?: string;

  /** Label for the cancel button in loading state. */
  cancelButtonLabel?: string;
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

type DropzoneStateProps = {
  status: UploadStatus;
  isVerticalLayout: boolean;
  dropzoneLabel: string;
  rejectedLabel?: string;
  dropzoneSupportText?: string;
  retryButtonLabel: string;
  dropzoneButton: string;
  typographySemiBoldFontWeight: string | number | undefined;
  dropzonePrimaryLabelId: string;
  dropzoneSupportTextId: string;
  dropzoneAriaLabel: string;
  chooseFileHandler: () => void;
  handleDragOver: (e: DragEvent) => void;
  handleDrop: (e: DragEvent) => void;
  handleDragEnter: (e: DragEvent) => void;
  handleDragLeave: (e: DragEvent) => void;
};

const DropzoneState = ({
  status,
  isVerticalLayout,
  dropzoneLabel,
  rejectedLabel,
  dropzoneSupportText,
  retryButtonLabel,
  dropzoneButton,
  typographySemiBoldFontWeight,
  dropzonePrimaryLabelId,
  dropzoneSupportTextId,
  dropzoneAriaLabel,
  chooseFileHandler,
  handleDragOver,
  handleDrop,
  handleDragEnter,
  handleDragLeave,
}: DropzoneStateProps): JSX.Element => {
  const isDropzoneErrorLike = status === UploadStatus.REJECTED || status === UploadStatus.ERROR;
  const dropzonePrimaryLabel =
    status === UploadStatus.REJECTED ? rejectedLabel ?? dropzoneLabel : dropzoneLabel;
  const showDropzoneActionButton = status !== UploadStatus.DRAG_OVER;
  const dropzoneButtonLabel = status === UploadStatus.REJECTED ? retryButtonLabel : dropzoneButton;

  return (
    <Box
      sx={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        flex: 1,
        width: '100%',
        p: 3,
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      component="div"
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
              id={dropzonePrimaryLabelId}
              display="inline"
              variant="body2"
              sx={{
                fontWeight: typographySemiBoldFontWeight,
                color: isDropzoneErrorLike ? theme.colors.error[850] : theme.colors.neutral.black,
              }}
            >
              {dropzonePrimaryLabel}
            </Typography>
            {dropzoneSupportText && (
              <Typography
                id={dropzoneSupportTextId}
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
            aria-label={dropzoneAriaLabel}
            onClick={(event) => {
              event.stopPropagation();
              chooseFileHandler();
            }}
          >
            {dropzoneButtonLabel}
          </MIButton>
        )}
      </Stack>
    </Box>
  );
};

type LoadingStateProps = {
  isVerticalLayout: boolean;
  typographySemiBoldFontWeight: string | number | undefined;
  loadingLabel: string;
  loadingAriaLabel: string;
  cancelButtonLabel: string;
  handleRemoveFile: () => void;
};

const LoadingState = ({
  isVerticalLayout,
  typographySemiBoldFontWeight,
  loadingLabel,
  loadingAriaLabel,
  cancelButtonLabel,
  handleRemoveFile,
}: LoadingStateProps): JSX.Element => (
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

      <MIButton
        variant="outlined"
        aria-label={loadingAriaLabel}
        onClick={handleRemoveFile}
        sx={{
          whiteSpace: 'nowrap',
          minWidth: '106px',
          fontWeight: 600,
          textTransform: 'none',
        }}
      >
        {cancelButtonLabel}
      </MIButton>
    </Stack>
  </Box>
);

type SelectedStateProps = {
  isVerticalLayout: boolean;
  value: File;
  onFileRemoved?: (file: File) => void;
  handleRemoveFile: () => void;
  removeFileAriaLabel: string;
  typographySemiBoldFontWeight: string | number | undefined;
};

const SelectedState = ({
  isVerticalLayout,
  value,
  onFileRemoved,
  handleRemoveFile,
  removeFileAriaLabel,
  typographySemiBoldFontWeight,
}: SelectedStateProps): JSX.Element => (
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
      <IconButton
        onClick={handleRemoveFile}
        aria-label={removeFileAriaLabel}
        sx={{ p: 0, alignSelf: 'flex-start' }}
      >
        <CloseIcon sx={{ color: theme.colors.neutral.black }} />
      </IconButton>
    )}
  </Box>
);

type StatusContentProps = {
  status: UploadStatus;
  value: File | null;
  isVerticalLayout: boolean;
  dropzoneLabel: string;
  rejectedLabel?: string;
  dropzoneSupportText?: string;
  retryButtonLabel: string;
  dropzoneButton: string;
  typographySemiBoldFontWeight: string | number | undefined;
  dropzonePrimaryLabelId: string;
  dropzoneSupportTextId: string;
  dropzoneAriaLabel: string;
  loadingLabel: string;
  loadingAriaLabel: string;
  cancelButtonLabel: string;
  onFileRemoved?: (file: File) => void;
  removeFileAriaLabel: string;
  chooseFileHandler: () => void;
  handleDragOver: (e: DragEvent) => void;
  handleDrop: (e: DragEvent) => void;
  handleDragEnter: (e: DragEvent) => void;
  handleDragLeave: (e: DragEvent) => void;
  handleRemoveFile: () => void;
};

const StatusContent = ({
  status,
  value,
  isVerticalLayout,
  dropzoneLabel,
  rejectedLabel,
  dropzoneSupportText,
  retryButtonLabel,
  dropzoneButton,
  typographySemiBoldFontWeight,
  dropzonePrimaryLabelId,
  dropzoneSupportTextId,
  dropzoneAriaLabel,
  loadingLabel,
  loadingAriaLabel,
  cancelButtonLabel,
  onFileRemoved,
  removeFileAriaLabel,
  chooseFileHandler,
  handleDragOver,
  handleDrop,
  handleDragEnter,
  handleDragLeave,
  handleRemoveFile,
}: StatusContentProps): JSX.Element => {
  if (status === UploadStatus.LOADING) {
    return (
      <LoadingState
        isVerticalLayout={isVerticalLayout}
        typographySemiBoldFontWeight={typographySemiBoldFontWeight}
        loadingLabel={loadingLabel}
        loadingAriaLabel={loadingAriaLabel}
        cancelButtonLabel={cancelButtonLabel}
        handleRemoveFile={handleRemoveFile}
      />
    );
  }

  if (status === UploadStatus.SELECTED && value) {
    return (
      <SelectedState
        isVerticalLayout={isVerticalLayout}
        value={value}
        onFileRemoved={onFileRemoved}
        handleRemoveFile={handleRemoveFile}
        removeFileAriaLabel={removeFileAriaLabel}
        typographySemiBoldFontWeight={typographySemiBoldFontWeight}
      />
    );
  }

  return (
    <DropzoneState
      status={status}
      isVerticalLayout={isVerticalLayout}
      dropzoneLabel={dropzoneLabel}
      rejectedLabel={rejectedLabel}
      dropzoneSupportText={dropzoneSupportText}
      retryButtonLabel={retryButtonLabel}
      dropzoneButton={dropzoneButton}
      typographySemiBoldFontWeight={typographySemiBoldFontWeight}
      dropzonePrimaryLabelId={dropzonePrimaryLabelId}
      dropzoneSupportTextId={dropzoneSupportTextId}
      dropzoneAriaLabel={dropzoneAriaLabel}
      chooseFileHandler={chooseFileHandler}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
      handleDragEnter={handleDragEnter}
      handleDragLeave={handleDragLeave}
    />
  );
};

const HelperTextSection = ({
  helperText,
  status,
}: {
  helperText?: string;
  status: UploadStatus;
}): JSX.Element | null => {
  if (!helperText) {
    return null;
  }

  return (
    <FormHelperText
      error
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 0.5,
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
  );
};

export const MISingleFileInput = ({
  value,
  label,
  error,
  accept,
  loading,

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
  onFileRemoveAriaLabel = 'Rimuovi file',
  cancelButtonLabel = 'Annulla',
}: MISingleFileInputProps): JSX.Element => {
  const muiTheme = useTheme();
  const isMobileViewport = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isVerticalLayout = isMobileViewport;

  const uploadInputRef = useRef<HTMLInputElement>(null);

  const [id] = useState(generateRandomID);
  const [isFileRejected, setIsFileRejected] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const status = getStatus(
    value,
    !!loading,
    !!error,
    (rejected || isFileRejected) && !!rejectedLabel,
    dragOver || isDragOver
  );
  const containerStyle = getContainerStyle(status);
  const typographySemiBoldFontWeight = foundationNext.typography.fontWeightMedium;
  const dropzonePrimaryLabelId = `${id}-dropzone-primary-label`;
  const dropzoneSupportTextId = `${id}-dropzone-support-text`;

  const dropzonePrimaryLabelForAria =
    status === UploadStatus.REJECTED ? rejectedLabel ?? dropzoneLabel : dropzoneLabel;
  const dropzoneButtonLabelForAria =
    status === UploadStatus.REJECTED ? retryButtonLabel : dropzoneButton;

  const dropzoneAriaLabel = [
    dropzoneButtonLabelForAria,
    dropzonePrimaryLabelForAria,
    dropzoneSupportText,
    helperText,
  ]
    .filter(Boolean)
    .join('. ');
  const loadingAriaLabel = [loadingLabel, cancelButtonLabel].filter(Boolean).join('. ');
  const removeFileAriaLabel = [onFileRemoveAriaLabel, value?.name].filter(Boolean).join('. ');

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

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel error={!!error} sx={{ fontWeight: 600, mb: 1 }} htmlFor={id}>
        {label}
      </FormLabel>

      <Box
        sx={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...containerStyle,
        }}
      >
        <StatusContent
          status={status}
          value={value}
          isVerticalLayout={isVerticalLayout}
          dropzoneLabel={dropzoneLabel}
          rejectedLabel={rejectedLabel}
          dropzoneSupportText={dropzoneSupportText}
          retryButtonLabel={retryButtonLabel}
          dropzoneButton={dropzoneButton}
          typographySemiBoldFontWeight={typographySemiBoldFontWeight}
          dropzonePrimaryLabelId={dropzonePrimaryLabelId}
          dropzoneSupportTextId={dropzoneSupportTextId}
          dropzoneAriaLabel={dropzoneAriaLabel}
          loadingLabel={loadingLabel}
          loadingAriaLabel={loadingAriaLabel}
          cancelButtonLabel={cancelButtonLabel}
          onFileRemoved={onFileRemoved}
          removeFileAriaLabel={removeFileAriaLabel}
          chooseFileHandler={chooseFileHandler}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleRemoveFile={handleRemoveFile}
        />
      </Box>

      <Input
        inputProps={{ accept: accept?.join(',') }}
        type="file"
        id={id}
        sx={{ display: 'none' }}
        inputRef={uploadInputRef}
        onChange={handleSelectFile}
        data-testid="fileInput"
      />

      <HelperTextSection helperText={helperText} status={status} />
    </FormControl>
  );
};

export default MISingleFileInput;
