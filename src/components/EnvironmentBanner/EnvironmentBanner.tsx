'use client';
import { ButtonNaked } from '@components/ButtonNaked';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { blue, divider, decorativeIcon, neutral, warning } from 'theme/colors';

const COLOR_MAP = {
  white: {
    bg: 'background.paper',
    border: divider,
    icon: decorativeIcon,
    text: neutral.black,
    action: blue[500],
  },
  info: {
    bg: blue[50],
    border: blue[100],
    icon: blue[200],
    text: neutral.black,
    action: blue[500],
  },
  warning: {
    bg: warning[100],
    border: warning[400],
    icon: warning[850],
    text: warning[850],
    action: warning[850],
  },
};

export interface EnvironmentBannerProps {
  bgColor?: 'white' | 'info' | 'warning';
  title?: string;
  message?: string;
  icon?: ReactNode;
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
    color?: string;
  };
}

export const EnvironmentBanner = ({
  bgColor = 'white',
  title,
  message,
  icon,
  onClose,
  actionButton,
}: EnvironmentBannerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const variant = COLOR_MAP[bgColor];

  return (
    <Box sx={{ position: 'relative' }}>
      <Alert
        icon={false}
        sx={{
          position: 'relative',
          borderRadius: '8px',
          borderLeft: 'none',
          backgroundColor: variant.bg,
          border: `1px solid ${variant.border}`,
          color: variant.text,
        }}
        {...(onClose && {
          action: (
            <IconButton
              onClick={onClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: COLOR_MAP.white.text,
              }}
            >
              <CloseIcon />
            </IconButton>
          ),
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: 2,
            flex: 1,
          }}
        >
          <Box
            sx={{
              color: variant.icon,
            }}
          >
            {icon}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              flex: 1,
              alignItems: isMobile ? 'center' : 'flex-start',
            }}
          >
            {title && (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'fontWeightMedium',
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {title}
              </Typography>
            )}

            {message && (
              <Typography
                variant="body2"
                sx={{
                  color: variant.text,
                  textAlign: isMobile ? 'center' : 'left',
                }}
              >
                {message}
              </Typography>
            )}

            {actionButton && (
              <ButtonNaked
                onClick={actionButton.onClick}
                sx={{
                  alignSelf: isMobile ? 'center' : 'flex-start',
                  fontWeight: 'fontWeightMedium',
                  p: 0,
                  minWidth: 'auto',
                  color: actionButton.color ?? variant.action,
                }}
              >
                {actionButton.label}
              </ButtonNaked>
            )}
          </Box>
        </Box>
      </Alert>
    </Box>
  );
};
