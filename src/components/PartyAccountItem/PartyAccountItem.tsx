import { Typography, Box, SxProps } from "@mui/material";
import { useMemo } from "react";

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
}

export const PartyAccountItem = ({
  partyName,
  partyRole,
  image,
  noWrap = true,
  containerSx,
  infoContainerSx,
}: PartyAccountItemProps) => {
  const containerStyle = useMemo(
    () => ({
      userSelect: "none",
      ...containerSx,
    }),
    []
  ) as SxProps;

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
            <Typography
              variant="body1"
              component="h6"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                lineHeight: 1.25,
                ...(noWrap && {
                  whiteSpace: "nowrap",
                }),
              }}
            >
              {partyName}
            </Typography>
          )}
          {partyRole && <Typography variant="caption">{partyRole}</Typography>}
        </Box>
      </Box>
    </Box>
  );
};
