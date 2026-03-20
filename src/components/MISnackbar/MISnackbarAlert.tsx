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
import { colors } from './../../theme/foundations/colors';

// props that apply to all severities
type BaseAlertProps = {
  title?: string;
  description: string;
  onClose: () => void;
};

// props when severity is 'error' - errorCode is allowed
type ErrorSeverityProps = BaseAlertProps & {
  severity: 'error';
  errorCode?: string;
};

// props when severity is not 'error' - errorCode is strictly forbidden
type OtherSeverityProps = BaseAlertProps & {
  severity: 'success' | 'info' | 'warning';
  errorCode?: never;
};

export type MISnackbarAlertProps = ErrorSeverityProps | OtherSeverityProps;

export const MISnackbarAlert = forwardRef<HTMLDivElement, MISnackbarAlertProps>(
  ({ severity = 'success', title, description, errorCode, onClose, ...rest }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const screenReaderText = [title, description, errorCode ? `Error code: ${errorCode}` : '']
      .filter(Boolean)
      .join('. ');

    return (
      <StyledAlert
        severity={severity}
        icon={getIcon(severity)}
        onClose={onClose}
        slots={{
          closeIcon: CloseRoundedIcon,
        }}
        sx={{
          alignItems: 'flex-start',
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
              marginLeft: -4,
              marginRight: -6,
              marginTop: 2,
            }}
          >
            <TextField
              inputProps={{
                'aria-label': `Error code: ${errorCode}`,
              }}
              value={errorCode}
              InputProps={{
                readOnly: true,
                endAdornment: <CopyToClipboardButton value={errorCode!} sx={{ p: 0.5, mr: 0 }} />,
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
