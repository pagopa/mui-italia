'use client';
import { ButtonNaked } from '@components/ButtonNaked';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Alert, Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import foundation from 'theme/foundation';
import { colors } from 'theme/foundations/colors';

const COLOR_MAP = {
  white: {
    bg: colors.neutral.white,
    border: colors.neutral.grey[100],
    icon: colors.neutral.grey[300],
    text: colors.neutral.black,
    action: colors.blue[500],
  },
  info: {
    bg: colors.blue[50],
    border: colors.blue[50],
    icon: colors.blue[200],
    text: colors.neutral.black,
    action: colors.blue[500],
  },
};

export interface EnvironmentBannerProps {
  bgColor?: 'white' | 'info';
  title?: string;
  message?: string;
  icon?: ReactNode;
  onClose?: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
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
              <CloseRoundedIcon fontSize="small" />
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
                  color: foundation.palette.primary.main,
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
