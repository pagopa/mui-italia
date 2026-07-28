import { styled, Alert as MUIAlert } from '@mui/material';
import { AllowedAlertSeverity } from '@lib-types/MIAlert';

type StyledAlertProps = {
  ownerState: {
    severity?: AllowedAlertSeverity;
    title?: string;
    variant?: 'default' | 'header';
  };
};

export const StyledAlert = styled(MUIAlert, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledAlertProps>(({ theme, ownerState, title }) => {
  const { severity = 'success', variant = 'default' } = ownerState;
  const severityPalette = theme.colors[severity];
  const isHeaderVariant = variant === 'header';
  const isDefaultVariant = variant === 'default';

  return {
    backgroundColor: severityPalette[100],
    justifyContent: isHeaderVariant ? 'center' : undefined,
    alignItems: isDefaultVariant || title ? 'flex-start' : 'center',
    flex: 1,

    ...(isDefaultVariant && {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      borderColor: severityPalette[500],
    }),

    ...(isHeaderVariant && {
      border: 'none',
      borderRadius: 0,
      width: 'auto',
      boxSizing: 'border-box',
      padding: '10px 16px !important',
    }),

    [theme.breakpoints.down('sm')]: {
      alignItems: isHeaderVariant ? 'center' : 'flex-start',
    },

    '& .MuiAlert-icon': {
      opacity: 1,
      alignItems: 'center',
      marginRight: theme.spacing(1),
      color: severityPalette[850],
    },

    '& .MuiAlert-message': {
      padding: 0,
      lineHeight: isHeaderVariant ? '20px' : '22px',
      fontWeight: isHeaderVariant
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
      fontSize: isHeaderVariant ? '14px' : '16px',
      flex: isHeaderVariant ? '0 1 auto' : 1,
      width: isHeaderVariant ? 'auto' : '100%',
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-word',
      color: severityPalette[850],
    },
  };
});
