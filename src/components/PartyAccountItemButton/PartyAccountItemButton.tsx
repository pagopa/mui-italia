import React from "react";

import { Typography, Box } from "@mui/material";

import { PartyAvatar } from "@components/PartyAvatar";

import { theme } from "@theme";

export interface PartyAccountItemButtonProps {
  selectedItem?: boolean;
  /* The name of the party. E.g: "Comune di Roma" */
  partyName: string;
  /* The role of the user. E.g: "Referente amministrativo" */
  partyRole?: string;
  image?: string;
  action?: React.Dispatch<React.MouseEvent<HTMLDivElement, MouseEvent>>;
  disabled?: boolean;
  /* Slot available for custom state components. E.g: Tag with action */
  endSlot?: JSX.Element | Array<JSX.Element> | undefined;
}

export const PartyAccountItemButton = ({
  partyName,
  partyRole,
  image,
  selectedItem,
  action,
  disabled,
  endSlot,
}: PartyAccountItemButtonProps) => (
  <Box
    sx={{
      p: 1.5,
      width: "100%",
      backgroundColor: "background.paper",
      transitionProperty: "background-color",
      transitionDuration: `${theme.transitions.duration.short}ms`,
      userSelect: "none",
      boxSizing: "border-box",
      ...(!disabled && {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }),
      ...(selectedItem && {
        boxShadow: `inset 2px 0 0 0 ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primaryAction.selected,
        "&:hover": {
          backgroundColor: theme.palette.primaryAction.hover,
        },
      }),
    }}
    role="button"
    onClick={action}
  >
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {/* Avatar Container */}
      <Box
        sx={{
          ...(disabled && {
            opacity: theme.palette.action.disabledOpacity,
          }),
        }}
      >
        <PartyAvatar customAlt={partyName} customSrc={image} />
      </Box>
      {/* Info Container */}
      <Box
        sx={{
          ml: 1.25,
          alignSelf: "center",
          userSelect: "text",
          ...(disabled && {
            opacity: theme.palette.action.disabledOpacity,
            userSelect: "none",
          }),
        }}
      >
        {partyName && (
          <Typography
            variant="body1"
            component="h6"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: 1.25,
            }}
          >
            {partyName}
          </Typography>
        )}
        {partyRole && <Typography variant="caption">{partyRole}</Typography>}
      </Box>
      {endSlot && (
        <Box
          sx={{ display: "flex", alignItems: "center", ml: "auto", pl: 1.25 }}
        >
          {endSlot}
        </Box>
      )}
    </Box>
  </Box>
);
