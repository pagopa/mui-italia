import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

export const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  padding: 0,
  flexShrink: 0,
  color: hasError ? theme.colors.error[600] : theme.colors.neutral.black,
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
  boxSizing: 'border-box',
  gap: theme.spacing(1),
  margin: 0,
  minWidth: 0,
  padding: hasLabel ? theme.spacing(2, 0) : 0,
  width: '100%',
  '& .MuiFormControlLabel-label': {
    flex: 1,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
  },
}));
