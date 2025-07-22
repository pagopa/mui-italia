"use client";

import React from "react";

import { Typography, Box, Tooltip } from "@mui/material";

import { PartyAvatar } from "@components/PartyAvatar";

import { theme } from "@theme";

export interface PartyAccountItemButtonProps {
  selectedItem?: boolean;
  /* The name of the party. E.g: "Comune di Roma".  */
  partyName: string;
  /* The role of the user. E.g: "Referente amministrativo" */
  partyRole?: string;
  image?: string;
  action?: React.Dispatch<React.MouseEvent<HTMLDivElement, MouseEvent>>;
  disabled?: boolean;
  /* Slot available for custom state components. E.g: Tag with action */
  endSlot?: JSX.Element | Array<JSX.Element> | undefined;
  /* The number of characters beyond which the multiLine is applied */
  maxCharactersNumberMultiLine?: number;
  /* Label showed above partyName. */
  parentPartyName?: string;
}

export const PartyAccountItemButton = ({
  partyName,
  partyRole,
  image,
  selectedItem,
  action,
  disabled,
  endSlot,
  maxCharactersNumberMultiLine = 50,
  parentPartyName,
}: PartyAccountItemButtonProps) => {
  const maxCharacter =
    partyName && partyName.length > maxCharactersNumberMultiLine;
  const truncatedText = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as const,
    width: "100%",
    whiteSpace: "normal" as const,
  };
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        width: "100%",
        backgroundColor: "background.paper",
        color: "text.primary",
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
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.primaryAction.hover,
          },
        }),
      }}
      role="button"
      tabIndex={0}
      onClick={action}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Avatar Container */}
        <Box
          sx={{
            ...(disabled && {
              opacity: theme.palette.action.disabledOpacity,
            }),
            display: "flex",
            alignItems: "center",
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
          {parentPartyName && (
            <Tooltip arrow title={maxCharacter ? parentPartyName : ""}>
              <Typography
                variant="caption"
                component="h6"
                color="inherit"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  lineHeight: 1.25,
                  ...(maxCharacter && {
                    ...truncatedText,
                    WebkitLineClamp: 1,
                  }),
                }}
              >
                {parentPartyName}
              </Typography>
            </Tooltip>
          )}
          {partyName && (
            <Tooltip arrow title={maxCharacter ? partyName : ""}>
              <Typography
                variant="body1"
                component="h6"
                color="inherit"
                sx={{
                  fontWeight: theme.typography.fontWeightMedium,
                  lineHeight: 1.25,
                  ...(maxCharacter && {
                    ...truncatedText,
                    WebkitLineClamp: 2,
                  }),
                }}
              >
                {partyName}
              </Typography>
            </Tooltip>
          )}
          {partyRole && (
            <Typography
              variant="caption"
              color="inherit"
              sx={{
                ...truncatedText,
                WebkitLineClamp: 1,
              }}
            >
              {partyRole}
            </Typography>
          )}
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
};
