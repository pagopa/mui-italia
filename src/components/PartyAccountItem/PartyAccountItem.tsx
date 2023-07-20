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
  topicName?: string;
};
export interface PartyAccountItemProps {
  image?: string;
  /* The name of the party. E.g: "Comune di Roma".  */
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
  /* Label showed above partyName. */
  topicPartyName?: string;
}

export const PartyAccountItem = ({
  partyName,
  topicPartyName,
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
        <Box
          sx={{
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
            ...infoContainerSx,
          }}
        >
          {topicPartyName && (
            <Tooltip arrow title={maxCharacter ? topicPartyName : ""}>
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
                {topicPartyName}
              </Typography>
            </Tooltip>
          )}
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
