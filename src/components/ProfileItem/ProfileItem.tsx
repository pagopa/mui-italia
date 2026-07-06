'use client';

import { MouseEvent } from 'react';
import { Avatar, Badge, Box, SxProps, Theme, Tooltip, Typography } from '@mui/material';

import { ButtonNaked } from '@components/ButtonNaked';

import { useResizeObserver } from '../../utils/useResizeObserver';

const compactBreakpoint = 160;

export interface ProfileItemProps {
  /** The id attribute added to the root element */
  id?: string;
  /** Label showed above the profile name */
  caption?: string;
  /** Current profile name */
  profileName: string;
  /** Initials displayed inside the profile circle */
  profileInitials: string;
  /** Switch profile action label */
  switchLabel?: string;
  /** Switch profile action aria-label */
  switchAriaLabel?: string;
  /** If true, shows the switch profile action */
  showSwitchProfile?: boolean;
  /** If true, disables the switch profile action */
  disabled?: boolean;
  /** Callback fired when the switch profile action is clicked */
  onSwitchProfile: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Style to override the root element */
  sx?: SxProps<Theme>;
}

export const ProfileItem = ({
  id,
  caption = 'Stai operando come',
  profileName,
  profileInitials,
  switchLabel = 'Cambia profilo',
  switchAriaLabel,
  showSwitchProfile = true,
  disabled = false,
  onSwitchProfile,
  sx,
}: ProfileItemProps) => {
  const { ref, size } = useResizeObserver<HTMLDivElement>();
  const isCompact = size !== null && size.width < compactBreakpoint;
  const resolvedSwitchAriaLabel = switchAriaLabel ?? `${switchLabel}: ${profileName}`;
  const rootSx: SxProps<Theme> = [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isCompact ? 0 : 3,
      width: '100%',
      boxSizing: 'border-box',
      py: 2,
      px: isCompact ? 1 : 2,
      backgroundColor: 'background.paper',
    },
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ];

  const avatar = (
    <Badge
      overlap="circular"
      variant="dot"
      color="success"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      sx={{
        '& .MuiBadge-badge': {
          width: 10,
          height: 10,
          minWidth: 10,
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.background.paper}`,
        },
      }}
    >
      <Avatar
        aria-hidden
        sx={{
          width: 45,
          height: 45,
          bgcolor: 'grey.400',
          color: 'common.white',
          fontSize: 23,
          fontWeight: 600,
        }}
      >
        {profileInitials}
      </Avatar>
    </Badge>
  );

  return (
    <Box id={id} ref={ref} sx={rootSx}>
      {isCompact && showSwitchProfile ? (
        <ButtonNaked
          color="primary"
          component="button"
          disabled={disabled}
          type="button"
          aria-label={resolvedSwitchAriaLabel}
          onClick={onSwitchProfile}
          sx={{
            borderRadius: '50%',
            '&.Mui-disabled': {
              opacity: 0.38,
            },
          }}
        >
          {avatar}
        </ButtonNaked>
      ) : (
        avatar
      )}

      {!isCompact && (
        <Box sx={{ flex: '0 1 auto', minWidth: 0 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            noWrap
            sx={{ display: 'block', lineHeight: 1.2 }}
          >
            {caption}
          </Typography>
          <Tooltip arrow title={profileName}>
            <Typography
              variant="body2"
              component="p"
              noWrap
              sx={{
                fontWeight: 600,
                lineHeight: 1.25,
                fontSize: 21
              }}
            >
              {profileName}
            </Typography>
          </Tooltip>
          {showSwitchProfile && (
            <ButtonNaked
              color="primary"
              component="button"
              disabled={disabled}
              size="small"
              type="button"
              aria-label={resolvedSwitchAriaLabel}
              onClick={onSwitchProfile}
              sx={{
                mt: 0.25,
                justifyContent: 'flex-start',
                fontSize: 15,
                lineHeight: 1.3,
                textDecoration: 'underline',
              }}
            >
              {switchLabel}
            </ButtonNaked>
          )}
        </Box>
      )}
    </Box>
  );
};
