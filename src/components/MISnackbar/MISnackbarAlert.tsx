'use client';

import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import { StyledAlert } from '@components/MIAlert/StyledAlert';
import { getColor, getIcon } from '@components/MIAlert/utils';
import { AllowedAlertSeverity } from '@lib-types/alert.types';
import { CloseRounded as CloseRoundedIcon } from '@mui/icons-material';
import {
  AlertTitle as MUIAlertTitle,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { forwardRef } from 'react';

// props that apply to all severities
type BaseAlertProps = {
  title?: string;
  description: string;
  onClose: () => void;
};

type ErrorSeverity = Extract<AllowedAlertSeverity, 'error'>;
type NonErrorSeverity = Exclude<AllowedAlertSeverity, 'error'>;

// props when severity is 'error' - errorCode is allowed
type ErrorSeverityProps = BaseAlertProps & {
  severity: ErrorSeverity;
  errorCode?: string;
  errorCodeAriaLabel?: string; // allows to provide a custom aria-label for the error code, if not provided it will default to "Error code: {errorCode}"
};

// props when severity is not 'error' - errorCode is strictly forbidden
type OtherSeverityProps = BaseAlertProps & {
  severity: NonErrorSeverity;
  errorCode?: never;
  errorCodeAriaLabel?: never;
};

export type MISnackbarAlertProps = ErrorSeverityProps | OtherSeverityProps;

const MISnackbarAlert = forwardRef<HTMLDivElement, MISnackbarAlertProps>(
  (
    { severity = 'success', title, description, errorCode, errorCodeAriaLabel, onClose, ...rest },
    ref
  ) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // combine title, description and error code aria label into a single string for screen readers
    const screenReaderText = [title, description, errorCodeAriaLabel ? errorCodeAriaLabel : '']
      .filter(Boolean)
      .join('. ');

    return (
      <StyledAlert
        ownerState={{
          severity,
          title,
        }}
        ref={ref}
        severity={severity}
        icon={getIcon(severity)}
        title={title}
        onClose={onClose}
        slots={{
          closeIcon: CloseRoundedIcon,
        }}
        sx={{
          // Apply CSS Grid when errorCode exists to avoid negative margin to align the text field
          ...(errorCode && {
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            '& .MuiAlert-icon': {
              gridColumn: 1,
              gridRow: 1,
            },
            '& .MuiAlert-message': {
              display: 'contents',
            },
            '& .MuiAlert-action': {
              gridColumn: 3,
              gridRow: 1,
            },
          }),
          '& .MuiAlert-action .MuiIconButton-root': {
            color: theme.colors.neutral.black,
            opacity: 1,
            pt: 0,
          },
          '& .MuiAlert-action .MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
          },
        }}
        {...rest}
        tabIndex={0}
        aria-label={screenReaderText}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          sx={{
            ...(errorCode && {
              gridColumn: 2,
              gridRow: 1,
            }),
            flex: 1,
          }}
        >
          <Stack direction="column" sx={{ flex: 1, minWidth: 0, gap: title ? '4px' : 0 }}>
            {title && <MUIAlertTitle color={getColor(theme, severity)}>{title}</MUIAlertTitle>}
            {description}
          </Stack>
        </Stack>

        {/* Error Code TextField */}
        {errorCode && (
          <Stack
            sx={{
              gridColumn: '1 / -1', // Spans from the far left edge to the far right edge
              gridRow: 2,
              marginTop: 2,
            }}
          >
            <TextField
              slotProps={{
                input: {
                  readOnly: true,
                  endAdornment: <CopyToClipboardButton value={errorCode} sx={{ p: 0.5, mr: 0 }} />,
                },
                htmlInput: {
                  'aria-label': errorCodeAriaLabel ?? `Error code: ${errorCode}`,
                },
              }}
              value={errorCode}
              sx={{
                background: theme.palette.background.paper,
                borderRadius: 2,

                '& .MuiOutlinedInput-root': {
                  height: '48px',
                  px: 1.5,

                  '& fieldset': {
                    borderColor: theme.colors.neutral.grey[650],
                    borderRadius: 2,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.colors.neutral.grey[650],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.colors.neutral.grey[650],
                  },
                },
                '& .MuiInputBase-input': {
                  padding: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
            />
          </Stack>
        )}
      </StyledAlert>
    );
  }
);

MISnackbarAlert.displayName = 'MISnackbarAlert';

export default MISnackbarAlert;
