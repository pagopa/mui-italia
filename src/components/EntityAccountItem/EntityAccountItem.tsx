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
  /* Function called when user click on element */
  onClick?: () => void;
  /* Disabled status */
  disabled?: boolean;
  /* Selected status */
  isSelected?: boolean;
  /* Slot available for custom state components. E.g: Tag with action */
  endSlot?: JSX.Element | Array<JSX.Element> | undefined;
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
  onClick,
  disabled = false,
  isSelected = false,
  endSlot,
  containerSx,
  infoContainerSx
}: EntityAccountItemProps) => {
  const containerStyle = useMemo(() => {
    // button style
    if (onClick) {
      return {
        p: 1.5,
        transitionProperty: "background-color",
        transitionDuration: `${theme.transitions.duration.short}ms`,
        boxSizing: "border-box",
        ...(!disabled && {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        ...(isSelected && {
          boxShadow: `inset 2px 0 0 0 ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.primaryAction.selected,
          "&:hover": {
            backgroundColor: theme.palette.primaryAction.hover,
          },
        }),
        ...containerSx
      };
    }
    return {
      backgroundColor: "background.paper",
      userSelect: "none",
      ...containerSx
    };
  }, []) as SxProps;

  return (
    <Box
      sx={containerStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
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
