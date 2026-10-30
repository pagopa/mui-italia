import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  padding: 0,
  color: theme.colors.neutral.black,
  '&:not(.Mui-checked)': hasError
    ? {
        color: theme.colors.error[600],
      }
    : {},
  '&.Mui-checked': {
    color: theme.colors.blue[500],
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.colors.blue[500]}`,
    outlineOffset: 2,
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel, {
  shouldForwardProp: (prop) => prop !== 'hasLabel',
})<{ hasLabel: boolean }>(({ theme, hasLabel }) => ({
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  margin: 0,
  padding: hasLabel ? theme.spacing(2, 0) : 0,
  '&.Mui-disabled': {
    opacity: 0.5,
  },
}));
