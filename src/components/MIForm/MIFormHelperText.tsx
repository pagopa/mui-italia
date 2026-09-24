import {
  type FormHelperTextProps,
  FormHelperText as MuiFormHelperText,
  styled,
} from '@mui/material';

export type MIFormHelperTextProps = FormHelperTextProps;

const StyledFormHelperText = styled(MuiFormHelperText)(({ theme }) => ({
  '&.Mui-error': {
    color: theme.colors.error[600],
  },
}));

const MIFormHelperText: React.FC<MIFormHelperTextProps> = ({ children, ...rest }) => (
  <StyledFormHelperText {...rest}>{children}</StyledFormHelperText>
);

export default MIFormHelperText;
