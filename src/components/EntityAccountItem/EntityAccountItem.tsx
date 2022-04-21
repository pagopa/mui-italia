import { Typography, Box, SxProps } from "@mui/material";
import { useMemo } from "react";

import { EntityAvatar } from "@components/EntityAvatar";
import { theme } from "@theme";

export type EntityAccount = {
  image: string | undefined;
  name: string;
  role?: string | undefined;
};
export interface EntityAccountItemProps {
  image?: string;
  /* The name of the entity. E.g: "Comune di Roma" */
  entityName: string;
  /* The role of the user. E.g: "Referente amministrativo" */
  entityRole?: string;
  noWrap?: boolean;
  /* Style to override overall style */
  containerSx?: SxProps;
  /* Style to override info container style */
  infoContainerSx?: SxProps;
}

export const EntityAccountItem = ({
  entityName,
  entityRole,
  image,
  noWrap = true,
  containerSx,
  infoContainerSx
}: EntityAccountItemProps) => {
  const containerStyle = useMemo(
    () => ({
      backgroundColor: "background.paper",
      userSelect: "none",
      ...containerSx,
    }),
    []
  ) as SxProps;

  return (
    <Box
      sx={containerStyle}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Avatar Container */}
        <EntityAvatar customAlt={entityName} customSrc={image} />
        {/* Info Container */}
        <Box
          sx={{
            ml: 1.25,
            alignSelf: "center",
            userSelect: "text",
            ...infoContainerSx
          }}
        >
          {entityName && (
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
              {entityName}
            </Typography>
          )}
          {entityRole && (
            <Typography variant="caption">{entityRole}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
