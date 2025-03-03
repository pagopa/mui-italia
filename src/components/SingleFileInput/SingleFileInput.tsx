"use client";

import { useRef, ChangeEvent, DragEvent, ReactNode, useState } from "react";
import {
  Box,
  Button,
  LinearProgress,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Typography,
} from "@mui/material";

/* Icons */
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ErrorIcon from "@mui/icons-material/Error";

/* Utils */
import {
  generateRandomID,
  getContainerStyle,
  getColorStyle,
  getStatus,
  truncateFileName,
  verifyAccept,
} from "./utils";

export type SingleFileInputProps = {
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

  /** The label to be displayed above the spinner on loading state. */
  loadingLabel?: string;

  /**
   * The label to be displayed when the file is rejected.
   *
   * If the label is not provided, the rejected state (on rejected file) will not be displayed.
   * */
  rejectedLabel?: string;
};

const OrientedBox = ({
  vertical,
  children,
}: {
  vertical?: boolean;
  children: ReactNode;
}) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection={vertical ? "column" : "row"}
    margin="auto"
    flex={1}
    p={3}
  >
    {children}
  </Box>
);

export enum UploadStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  REJECTED = "REJECTED",
  ERROR = "ERROR",
  SELECTED = "SELECTED",
}

export const SingleFileInput = ({
  value,
  label,
  error,
  accept,
  loading,
  vertical = false,

  onFileSelected,
  onFileRemoved,
  onFileRejected,
  dropzoneLabel,
  dropzoneButton,
  loadingLabel = "Caricamento in corso...",
  rejectedLabel,
}: SingleFileInputProps): JSX.Element => {
  const uploadInputRef = useRef<HTMLButtonElement>();

  const [id, _] = useState(generateRandomID);
  const [isFileRejected, setIsFileRejected] = useState(false);

  const status = getStatus(
    value,
    !!loading,
    !!error,
    isFileRejected && !!rejectedLabel
  );
  const containerStyle = getContainerStyle(status);

  const chooseFileHandler = () => {
    setIsFileRejected(false);

    const target = uploadInputRef.current;
    target?.click();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsFileRejected(false);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    status === UploadStatus.REJECTED ||
    status === UploadStatus.ERROR;

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel error={error} sx={{ fontWeight: 600, mb: 1 }} htmlFor={id}>
        {label}
      </FormLabel>

      <Box
        sx={{
          position: "relative",
          minHeight: 80,
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...containerStyle,
        }}
      >
        {showDropzone && (
          <Box
            sx={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              flex: 1,
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
            <OrientedBox vertical={vertical}>
              {status === UploadStatus.REJECTED && (
                <>
                  <ErrorIcon
                    color="error"
                    sx={{
                      mb: vertical ? "10px" : 0,
                      mr: vertical ? 0 : "10px",
                    }}
                  />
                  <Typography color="error" display="inline" variant="body2">
                    {rejectedLabel}
                  </Typography>
                </>
              )}

              {(status === UploadStatus.IDLE ||
                status === UploadStatus.ERROR) && (
                <>
                  <CloudUploadIcon color={getColorStyle(status)} />
                  <Typography
                    color={
                      status === UploadStatus.ERROR
                        ? getColorStyle(status)
                        : "text." + getColorStyle(status)
                    }
                    display="inline"
                    variant="body2"
                    sx={{
                      my: vertical ? "10px" : 0,
                      mx: vertical ? 0 : "10px",
                    }}
                  >
                    {dropzoneLabel}
                  </Typography>
                  <Button variant="contained">{dropzoneButton}</Button>
                </>
              )}

              <Input
                inputProps={{ accept }}
                type="file"
                id={id}
                sx={{ display: "none" }}
                inputRef={uploadInputRef}
                onChange={handleSelectFile}
                data-testid="fileInput"
              />
            </OrientedBox>
          </Box>
        )}

        {status === UploadStatus.LOADING && (
          <OrientedBox vertical={vertical}>
            <Typography display="inline-block" variant="body2" component="span">
              {loadingLabel}
            </Typography>

            <LinearProgress
              variant="indeterminate"
              sx={
                vertical
                  ? {
                      ml: 0,
                      mt: 2,
                      width: "100%",
                    }
                  : {
                      ml: 2,
                      mt: 0,
                      display: "flex",
                      flexDirection: "row",
                      flex: 1,
                    }
              }
            />
          </OrientedBox>
        )}

        {status === UploadStatus.SELECTED && value && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <AttachFileIcon sx={{ mr: 1 }} color="primary" />
              <Typography color="primary">
                {truncateFileName(value.name)}
              </Typography>
              <Typography fontWeight={600} sx={{ marginLeft: "30px" }}>
                {(value.size / 1024).toFixed(2)}&nbsp;KB
              </Typography>
            </Box>
            {onFileRemoved && (
              <IconButton onClick={handleRemoveFile}>
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
    </FormControl>
  );
};

export default SingleFileInput;
