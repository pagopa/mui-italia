import { alpha, SxProps } from '@mui/system';
import { theme } from '@theme';
import { UploadStatus } from 'types/singleFileInput';

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
        border: '1px dashed',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primaryAction.selected,
      };
    case UploadStatus.LOADING:
      return {
        border: '1px solid',
        borderColor: theme.palette.divider,
        backgroundColor: 'white',
      };
    case UploadStatus.REJECTED:
    case UploadStatus.ERROR:
      return {
        border: '1px dashed',
        borderColor: theme.palette.error.main,
        backgroundColor: alpha(theme.palette.error.main, 0.1),
      };
    case UploadStatus.SELECTED:
      return {
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        backgroundColor: 'white',
        px: 3,
      };
    default:
      return {};
  }
}

export function getColorStyle(status: UploadStatus): 'primary' | 'error' {
  switch (status) {
    case UploadStatus.IDLE:
      return 'primary';
    case UploadStatus.ERROR:
      return 'error';
    default:
      return 'primary';
  }
}
