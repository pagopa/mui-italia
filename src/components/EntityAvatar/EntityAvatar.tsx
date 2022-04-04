import { Avatar } from "@mui/material";

import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

import { theme } from "@theme";

export interface EntityAvatarProps {
  /** The id attribute added to the element */
  id?: string;
  /** The logo src */
  customSrc?: string | undefined;
  /** The alt text showed instead of the image */
  customAlt?: string | undefined;
  /** Logo Dimension set in pixels */
  size: number;
  /** If true it will not display the component */
  /* loading?: boolean; */
}

export const EntityAvatar = ({
  customAlt,
  customSrc,
  size = 48,
  id,
}: EntityAvatarProps): JSX.Element => (
  <Avatar
    id={id}
    alt={customAlt}
    src={customSrc}
    sx={{
      width: size,
      height: size,
      backgroundColor: customSrc
        ? theme.palette.background.paper
        : theme.palette.grey[200],
      boxSizing: "border-box",
      padding: theme.spacing(1) /* 8px */,
      boxShadow: `inset 0 0 0 1px ${theme.palette.divider}`,
      /* Color of the fallback icon */
      color: theme.palette.text.disabled,
      "& .MuiAvatar-img": {
        objectFit: "contain",
        objectPosition: "center",
      },
    }}
  >
    <AccountBalanceRoundedIcon />
  </Avatar>
);
