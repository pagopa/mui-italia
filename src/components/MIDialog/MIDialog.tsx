import {
  Dialog as MuiDialog,
  DialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps,
  DialogContent as MuiDialogContent,
  DialogContentProps,
  DialogActions as MuiDialogActions,
  DialogActionsProps,
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface MIDialogProps extends DialogProps {}

const StyledDialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
  },
}));

export const MIDialog: React.FC<MIDialogProps> = (props) => {
  return <StyledDialog {...props} />;
};

interface MIDialogTitleProps extends DialogTitleProps {}

const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  color: theme.colors.neutral.black,
}));

export const MIDialogTitle: React.FC<MIDialogTitleProps> = (props) => {
  return <StyledDialogTitle {...props} />;
};

interface MIDialogContentProps extends DialogContentProps {}

const StyledDialogContent = styled(MuiDialogContent)(() => ({
  padding: '0 24px',
}));

export const MIDialogContent: React.FC<MIDialogContentProps> = (props) => {
  return <StyledDialogContent {...props} />;
};

interface MIDialogActionsProps extends DialogActionsProps {}

const StyledDialogActions = styled(MuiDialogActions)(() => ({
  padding: '16px 24px',
  gap: '10px',
}));

export const MIDialogActions: React.FC<MIDialogActionsProps> = (props) => {
  return <StyledDialogActions {...props} />;
};

interface MIDialogContentTextProps extends DialogContentTextProps {}

const StyledDialogContentText = styled(MuiDialogContentText)(() => ({}));

export const MIDialogContentText: React.FC<MIDialogContentTextProps> = (props) => {
  return <StyledDialogContentText {...props} />;
};

export default MIDialog;
