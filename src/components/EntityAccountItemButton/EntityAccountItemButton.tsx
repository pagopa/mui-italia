import React from "react";

import { Typography, Box } from "@mui/material";

import { EntityAvatar } from "@components/EntityAvatar";

import { theme } from "@theme";

export interface EntityAccountItemButtonProps {
  selectedItem?: boolean;
  /* The name of the entity. E.g: "Comune di Roma" */
  entityName: string;
  /* The role of the user. E.g: "Referente amministrativo" */
  entityRole?: string;
  image?: string;
  action?: React.Dispatch<React.MouseEvent<HTMLDivElement, MouseEvent>>;
  disabled?: boolean;
  /* Slot available for custom state components. E.g: Tag with action */
  endSlot?: JSX.Element | Array<JSX.Element> | undefined;
}

export const EntityAccountItemButton = ({
  entityName,
  entityRole,
  image,
  selectedItem,
  action,
  disabled,
  endSlot,
}: EntityAccountItemButtonProps) => (
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
        <EntityAvatar customAlt={entityName} customSrc={image} />
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
        {entityName && (
          <Typography
            variant="body1"
            component="h6"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: 1.25,
            }}
          >
            {entityName}
          </Typography>
        )}
        {entityRole && <Typography variant="caption">{entityRole}</Typography>}
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
