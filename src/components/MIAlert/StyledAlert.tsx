import { styled } from '@mui/material';
import MUIAlert from '@mui/material/Alert';
import type { Theme } from '@mui/material/styles';
import type { AllowedAlertSeverity } from './types';

type StyledAlertProps = {
  theme: Theme;
  severity?: AllowedAlertSeverity;
  title?: string;
};

export const StyledAlert = styled(MUIAlert)(
  ({ theme, severity = 'success', title }: StyledAlertProps) => {
    const severityPalette = theme.palette[severity];

    return {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      alignItems: title ? 'flex-start' : 'center',
      borderColor: severityPalette.main,
      backgroundColor: severityPalette[100],

      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
      },

      '& .MuiAlert-icon': {
        opacity: 1,
        alignItems: 'center',
        marginRight: theme.spacing(1),
        color: severityPalette[850],
      },

      '& .MuiAlert-message': {
        padding: 0,
        overflow: 'inherit',
        lineHeight: '22px',
        fontWeight: theme.typography.fontWeightRegular,
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
        color: severityPalette[850],
      },
    };
  }
);
