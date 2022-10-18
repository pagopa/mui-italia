import { alpha, SxProps } from "@mui/system";
import { theme } from "@theme";
import { UploadStatus } from "./SingleFileInput";

/**
 * Truncate file name string if it is longer than 30 characters.
 * Keeps the file extension.
 *
 * @param fileName
 * @returns truncated file name
 */
export const truncateFileName = (fileName: string) => {
  const splittedFileName = fileName.split(".");
  const fileExtension = splittedFileName[1];
  const truncatedFileName = splittedFileName[0];
  if (truncatedFileName.length >= 30) {
    return `${truncatedFileName}... .${fileExtension ?? ""}`;
  }
  return fileName;
};

/**
 * Check if a mime type matches the set given in accept
 *
 * @link https://stackoverflow.com/a/66489392
 *
 * @param type the mime type to test, ex image/png
 * @param accept the mime types to accept, ex audio/*,video/*,image/png
 * @returns true if the mime is accepted, false otherwise
 */
export function verifyAccept(type: string, accept?: Array<string>): boolean {
  if (!accept) {
    return true;
  }
  return accept.includes(type) || accept.includes(type.split("/")[0] + "/*");
}

/**
 * Returns the current status of the SingleFileInput based on his current state
 *
 * @param file the current file
 * @param isLoading if the component is currently loading
 * @param isFileRejected if the file is rejected
 * @returns the current SingleFileInput status
 */
export function getStatus(
  file: File | null,
  isLoading: boolean,
  error: boolean,
  isFileRejected: boolean
): UploadStatus {
  if (error) {
    return UploadStatus.ERROR;
  }

  if (isLoading) {
    return UploadStatus.LOADING;
  }

  if (isFileRejected) {
    return UploadStatus.REJECTED;
  }

  if (!file) {
    return UploadStatus.IDLE;
  }

  return UploadStatus.SELECTED;
}

/**
 *
 * @param status the current status of the SingleFileInput
 * @returns the associated container styles
 */
export function getContainerStyle(status: UploadStatus): SxProps {
  switch (status) {
    case UploadStatus.IDLE:
      return {
        border: "1px dashed",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primaryAction.selected,
      };
    case UploadStatus.LOADING:
      return {
        border: "1px dashed",
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primaryAction.selected,
      };
    case UploadStatus.REJECTED:
    case UploadStatus.ERROR:
      return {
        border: "1px dashed",
        borderColor: theme.palette.error.main,
        backgroundColor: alpha(theme.palette.error.main, 0.1),
      };
    case UploadStatus.SELECTED:
      return {
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        backgroundColor: "white",
        px: 4,
      };
    default:
      return {};
  }
}

export function generateRandomID(): string {
  // SSR safe
  if (window) {
    return window.crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 15);
}
