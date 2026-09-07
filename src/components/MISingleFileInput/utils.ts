import { alpha, SxProps } from '@mui/system';
import { theme } from '@theme';
import { UploadStatus } from 'types/singleFileInput';

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
 * Returns the current status of the MISingleFileInput based on his current state
 *
 * @param file the current file
 * @param isLoading if the component is currently loading
 * @param isFileRejected if the file is rejected
 * @returns the current MISingleFileInput status
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
 * @param status the current status of the MISingleFileInput
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
