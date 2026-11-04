import { type FormControlProps, FormControl as MuiFormControl, styled } from '@mui/material';

export type MIFormControlProps = FormControlProps;

const StyledFormControl = styled(MuiFormControl)(({ theme }) => ({
  '.Mui-error': {
    color: theme.colors.error[600],
  },
  '.MuiFormLabel-asterisk': {
    color: theme.colors.error[600],
  },
}));

const MIFormControl: React.FC<MIFormControlProps> = ({ children, ...rest }) => (
  <StyledFormControl {...rest}>{children}</StyledFormControl>
);

export default MIFormControl;
