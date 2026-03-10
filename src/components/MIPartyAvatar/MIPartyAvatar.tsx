'use client';

import { Avatar } from '@mui/material';

import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

import { theme } from '@theme';

export interface MIPartyAvatarProps {
  /** The id attribute added to the element */
  id?: string;
  /** The logo src */
  customSrc: string | undefined;
  /** The alt text showed instead of the image */
  customAlt: string | undefined;
  /** Logo Dimension */
  size?: 'small' | 'large';
  /** If true it will not display the component */
  /* loading?: boolean; */
}

export const MIPartyAvatar = ({
  customAlt,
  customSrc,
  size = 'small',
  id,
}: MIPartyAvatarProps): JSX.Element => (
  <Avatar
    id={id}
    alt={customAlt}
    src={customSrc}
    variant="square"
    sx={{
      position: 'relative',
      width: size === 'small' ? 44 : 66,
      height: size === 'small' ? 44 : 66,
      backgroundColor: '#f4f5f8',
      borderRadius: 2,
      border: '1px solid #e6e7e9',
      boxSizing: 'border-box',
      padding: theme.spacing(0.75) /* 6px */,
      /* Color of the fallback icon */
      color: theme.palette.text.disabled,
      '& .MuiAvatar-img': {
        objectFit: 'contain',
        objectPosition: 'center',
      },
    }}
  >
    <AccountBalanceOutlinedIcon sx={{ color: '#bbc2d6' }} fontSize="small" />
  </Avatar>
);
