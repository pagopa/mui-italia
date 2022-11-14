import { useRef, ChangeEvent, DragEvent, ReactNode, useState } from "react";
import {
  Box,
  CircularProgress,
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
              position: "absolute",
              inset: 0,
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
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
                  <ErrorIcon color="error" sx={{ margin: "0 10px" }} />
                  <Typography color="error" display="inline" variant="body2">
                    {rejectedLabel}
                  </Typography>
                </>
              )}

              {status === UploadStatus.IDLE && (
                <>
                  <CloudUploadIcon color="primary" sx={{ margin: "0 10px" }} />
                  <Typography display="inline" variant="body2">
                    {dropzoneLabel}
                  </Typography>
                </>
              )}

              {status === UploadStatus.ERROR && (
                <>
                  <CloudUploadIcon color="error" sx={{ margin: "0 10px" }} />
                  <Typography color="error" display="inline" variant="body2">
                    {dropzoneLabel}
                  </Typography>
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
          <OrientedBox>
            <CircularProgress sx={{ mr: 2 }} />

            <Typography display="inline" variant="body2">
              {loadingLabel}
            </Typography>
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
