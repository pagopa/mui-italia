'use client';

import {
  AlertTitle as MUIAlertTitle,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { getColor, getIcon } from '@components/MIAlert/utils';
import { StyledAlert } from '@components/MIAlert/StyledAlert';
import { CopyToClipboardButton } from '@components/CopyToClipboardButton';
import { forwardRef } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { neutral } from 'theme/colors';
import { colors } from 'theme/foundations/colors';
import { AllowedAlertSeverity } from 'types/MIAlert';

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

export const MISnackbarAlert = forwardRef<HTMLDivElement, MISnackbarAlertProps>(
  (
    { severity = 'success', title, description, errorCode, errorCodeAriaLabel, onClose, ...rest },
    ref
  ) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    //combine title, description and error code into a single string for screen readers
    const screenReaderText = [title, description, errorCodeAriaLabel ? errorCodeAriaLabel : '']
      .filter(Boolean)
      .join('. ');

    return (
      <StyledAlert
        ref={ref}
        severity={severity}
        icon={getIcon(severity)}
        title={title}
        onClose={onClose}
        slots={{
          closeIcon: CloseRoundedIcon,
        }}
        sx={{
          '& .MuiAlert-action .MuiIconButton-root': {
            color: neutral.black,
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
        <Stack direction={isMobile ? 'column' : 'row'} flex={1}>
          <Stack direction="column" flex={1} minWidth={0} gap={title ? '4px' : 0}>
            {title && <MUIAlertTitle color={getColor(theme, severity)}>{title}</MUIAlertTitle>}
            {description}
          </Stack>
        </Stack>
        {errorCode && (
          <Stack
            sx={{
              marginLeft: -4, //negative margin to align the TextField with the icon of the alert
              marginRight: -6, //negative margin to align the TextField with the close icon of the alert
              marginTop: 2,
            }}
          >
            <TextField
              inputProps={{
                'aria-label': errorCodeAriaLabel ?? `Error code: ${errorCode}`,
              }}
              value={errorCode}
              InputProps={{
                readOnly: true,
                endAdornment: <CopyToClipboardButton value={errorCode} sx={{ p: 0.5, mr: 0 }} />,
              }}
              sx={{
                background: theme.palette.background.paper,
                borderRadius: 2,

                '& .MuiOutlinedInput-root': {
                  height: '48px',
                  px: 1.5,

                  '& fieldset': {
                    borderColor: colors.neutral.grey[650],
                    borderRadius: 2,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.neutral.grey[650],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.neutral.grey[650],
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
