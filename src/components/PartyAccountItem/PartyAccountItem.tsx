"use client";

import { Typography, Box, SxProps } from "@mui/material";
import { useMemo } from "react";
import { Tooltip } from "@mui/material";

import { PartyAvatar } from "@components/PartyAvatar";
import { theme } from "@theme";

export type PartyAccount = {
  image: string | undefined;
  name: string;
  role?: string | undefined;
};
export interface PartyAccountItemProps {
  image?: string;
  /* The name of the party. E.g: "Comune di Roma" */
  partyName: string;
  /* The role of the user. E.g: "Referente amministrativo" */
  partyRole?: string;
  noWrap?: boolean;
  /* Style to override overall style */
  containerSx?: SxProps;
  /* Style to override info container style */
  infoContainerSx?: SxProps;
  /* The number of characters beyond which the multiLine is applied */
  maxCharactersNumberMultiLine?: number;
}

export const PartyAccountItem = ({
  partyName,
  partyRole,
  image,
  noWrap = true,
  containerSx,
  infoContainerSx,
  maxCharactersNumberMultiLine = 50,
}: PartyAccountItemProps) => {
  const containerStyle = useMemo(
    () => ({
      userSelect: "none",
      ...containerSx,
    }),
    []
  ) as SxProps;

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
    <Box sx={containerStyle}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Avatar Container */}
        <PartyAvatar customAlt={partyName} customSrc={image} />
        {/* Info Container */}
        <Box
          sx={{
            ml: 1.25,
            alignSelf: "center",
            userSelect: "text",
            ...infoContainerSx,
          }}
        >
          {partyName && (
            <Tooltip arrow title={maxCharacter ? partyName : ""}>
              <Typography
                textAlign="start"
                variant="body1"
                component="h6"
                sx={{
                  fontWeight: theme.typography.fontWeightBold,
                  lineHeight: 1.25,
                  ...(noWrap && {
                    whiteSpace: "nowrap",
                  }),
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
              sx={{
                ...truncatedText,
                WebkitLineClamp: 1,
              }}
            >
              {partyRole}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
