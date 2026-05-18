import { styled } from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { ComponentType } from 'react';
import { AllowedAlertSeverity } from 'types/MIAlert';

type MUIBaseAlertProps = Omit<MUIAlertProps, 'variant'>;

type StyledAlertOwnerState = {
  severity?: AllowedAlertSeverity;
  title?: string;
  variant?: 'default' | 'header';
};

export type StyledAlertProps = MUIBaseAlertProps & StyledAlertOwnerState;

export const StyledAlert = styled(MUIAlert as ComponentType<MUIBaseAlertProps>, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledAlertOwnerState>(({ theme, severity = 'success', title, variant }) => {
  const severityPalette = theme.palette[severity];
  const isHeaderVariant = variant === 'header';
  const isDefaultVariant = variant === 'default';

  return {
    backgroundColor: severityPalette[100],
    justifyContent: isHeaderVariant ? 'center' : undefined,
    alignItems: isHeaderVariant ? 'center' : isDefaultVariant || title ? 'flex-start' : 'center',

    ...(!isHeaderVariant && {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      borderColor: severityPalette.main,
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
      fontSize: isHeaderVariant ? '14px' : isDefaultVariant ? '16px' : undefined,
      flex: isHeaderVariant ? '0 1 auto' : 1,
      width: isHeaderVariant ? 'auto' : '100%',
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-word',
      color: severityPalette[850],
    },
  };
});
