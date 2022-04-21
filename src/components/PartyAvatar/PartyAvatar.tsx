import { Avatar } from "@mui/material";

import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

import { theme } from "@theme";

export interface PartyAvatarProps {
  /** The id attribute added to the element */
  id?: string;
  /** The logo src */
  customSrc: string | undefined;
  /** The alt text showed instead of the image */
  customAlt: string | undefined;
  /** Logo Dimension set in pixels */
  size?: number;
  /** If true it will not display the component */
  /* loading?: boolean; */
}

export const PartyAvatar = ({
  customAlt,
  customSrc,
  size = 48,
  id,
}: PartyAvatarProps): JSX.Element => (
  <Avatar
    id={id}
    alt={customAlt}
    src={customSrc}
    sx={{
      position: "relative",
      width: size,
      height: size,
      backgroundColor: customSrc
        ? theme.palette.background.paper
        : theme.palette.grey[200],
      boxSizing: "border-box",
      padding: theme.spacing(0.75) /* 6px */,
      /* Color of the fallback icon */
      color: theme.palette.text.disabled,
      "& .MuiAvatar-img": {
        objectFit: "contain",
        objectPosition: "center",
      },
      /* Inner shadow */
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        boxShadow: `inset 0 0 0 1px ${theme.palette.divider}`,
        borderRadius: "inherit",
      },
    }}
  >
    <AccountBalanceRoundedIcon />
  </Avatar>
);
