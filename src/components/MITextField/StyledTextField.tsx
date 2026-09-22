import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

type StyledTextFieldProps = {
  successState?: boolean;
};

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'successState',
})<StyledTextFieldProps>(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontSize: theme.typography.fontSize,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.blue[500],
  },
  '& .MuiInputLabel-root.Mui-focused.Mui-error': {
    color: theme.colors.error[600],
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.colors.error[600],
  },
  '& .MuiInputLabel-root.Mui-error .MuiFormLabel-asterisk, & .MuiFormLabel-asterisk.Mui-error': {
    color: theme.colors.error[600],
  },
  '& .MuiFormHelperText-root': {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '14px',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: theme.colors.error[600],
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.radius[8],
    padding: theme.spacing(1.5),
    '&.MuiInputBase-adornedEnd': {
      paddingRight: theme.spacing(0),
    },
    '& .MuiInputAdornment-positionStart': {
      color: theme.palette.decorativeIcon,
      '& .MuiSvgIcon-root': {
        padding: `${theme.spacing(0.5)} ${theme.spacing(0.25)}`,
      },
    },
    '& .MuiInputAdornment-positionEnd': {
      marginRight: 0,
      '& .MuiSvgIcon-root': {
        height: '24px',
        width: '24px',
      },
      '& .MuiSvgIcon-colorError': {
        color: theme.colors.error[600],
      },
      '& .MuiSvgIcon-colorSuccess': {
        color: theme.colors.success[700],
      },
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.blue[500],
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.error[600],
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colors.error[600],
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(0),
  },
  '& .MuiInputBase-multiline': {
    alignItems: 'flex-start',
    '& .MuiInputAdornment-positionEnd': {
      alignSelf: 'flex-start',
      marginTop: theme.spacing(1.5),
      marginRight: theme.spacing(0.5),
    },
  },
}));
