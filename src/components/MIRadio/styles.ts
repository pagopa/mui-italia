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
  color: hasError ? theme.palette.error.main : theme.palette.text.primary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  gap: theme.spacing(1),
  margin: 0,
  minWidth: 0,
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
