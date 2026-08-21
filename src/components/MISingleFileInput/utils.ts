import { alpha, SxProps } from '@mui/system';
import { theme } from '@theme';
import { UploadStatus } from './MISingleFileInput';

function getDashedBorderStyle(color: string): SxProps {
  return {
    border: '1px solid transparent',
    backgroundImage:
      `repeating-linear-gradient(90deg, ${color} 0 9px, transparent 9px 18px), ` +
      `repeating-linear-gradient(180deg, ${color} 0 9px, transparent 9px 18px), ` +
      `repeating-linear-gradient(90deg, ${color} 0 9px, transparent 9px 18px), ` +
      `repeating-linear-gradient(180deg, ${color} 0 9px, transparent 9px 18px)`,
    backgroundPosition: 'top left, top right, bottom left, top left',
    backgroundSize: '100% 1px, 1px 100%, 100% 1px, 1px 100%',
    backgroundRepeat: 'no-repeat',
  };
}

/**
 * Truncate file name string if it is longer than 30 characters.
 * Keeps the file extension.
 *
 * @param fileName
 * @returns truncated file name
 */
export const truncateFileName = (fileName: string) => {
  const splittedFileName = fileName.split('.');
  const fileExtension = splittedFileName[1];
  const truncatedFileName = splittedFileName[0];
  if (truncatedFileName.length >= 30) {
    return `${truncatedFileName}... .${fileExtension ?? ''}`;
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
  return accept.includes(type) || accept.includes(type.split('/')[0] + '/*');
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
  isFileRejected: boolean,
  isDragOver: boolean
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

  if (isDragOver) {
    return UploadStatus.DRAG_OVER;
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
        ...getDashedBorderStyle(theme.colors.blue[300]),
        backgroundColor: alpha(theme.colors.blue[500], 0.08),
        '&:hover': {
          backgroundColor: alpha(theme.colors.blue[500], 0.2),
        },
      };
    case UploadStatus.DRAG_OVER:
      return {
        ...getDashedBorderStyle(theme.colors.blue[300]),
        backgroundColor: alpha(theme.colors.blue[500], 0.18),
      };
    case UploadStatus.LOADING:
      return {
        border: '1px solid',
        borderColor: theme.colors.neutral.grey[200],
        backgroundColor: 'white',
      };
    case UploadStatus.REJECTED:
      return {
        border: '1px solid',
        borderColor: theme.colors.error[400],
        backgroundColor: theme.colors.error[100],
      };
    case UploadStatus.ERROR:
      return {
        ...getDashedBorderStyle(theme.colors.error[400]),
        backgroundColor: theme.colors.error[100],
      };
    case UploadStatus.SELECTED:
      return {
        border: '1px solid',
        borderColor: theme.colors.neutral.grey[100],
        backgroundColor: 'white',
        px: 3,
      };
    default:
      return {};
  }
}

export function generateRandomID(): string {
  /* eslint-disable no-bitwise */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const randomNum =
      typeof window !== 'undefined'
        ? window.crypto.getRandomValues(new Uint8Array(1))[0] | 0
        : (Math.random() * 16) | 0;
    const v = c === 'x' ? randomNum : (randomNum & 0x3) | 0x8;
    return v.toString(16);
  });
}
