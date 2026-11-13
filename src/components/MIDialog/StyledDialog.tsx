import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.spacing(2),
  },
}));

export const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  color: theme.colors.neutral.black,
  padding: theme.spacing(3, 3, 1),
}));

export const StyledDialogContent = styled(MuiDialogContent)(() => ({
}));

export const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  gap: theme.spacing(2.5),
  flexDirection: 'column-reverse',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
}));

export const StyledDialogContentText = styled(MuiDialogContentText)(() => ({}));

export const StyledDialogContentTextDescription = styled(MuiDialogContentText)(({ theme }) => ({
  padding: theme.spacing(0.5, 3, 1),
}));