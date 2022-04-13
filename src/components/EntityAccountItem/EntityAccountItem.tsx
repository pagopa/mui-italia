import { Typography, Box } from "@mui/material";

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
  noWrap: boolean;
}

export const EntityAccountItem = ({
  entityName,
  entityRole,
  image,
  noWrap = true,
}: EntityAccountItemProps) => (
  <Box
    sx={{
      userSelect: "none",
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <EntityAvatar customAlt={entityName} customSrc={image} />
      {/* Avatar Container */}
      {/* Info Container */}
      <Box
        sx={{
          ml: 1.25,
          alignSelf: "center",
          userSelect: "text",
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
        {entityRole && <Typography variant="caption">{entityRole}</Typography>}
      </Box>
    </Box>
  </Box>
);
