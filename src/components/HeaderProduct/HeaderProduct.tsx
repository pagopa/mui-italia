import React from "react";
import { Container, Stack, Typography } from "@mui/material";

/* type UserAction = {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}; */

type HeaderProductProps = {
  entitySelection: React.ReactNode;
};

export const HeaderProduct = ({ entitySelection }: HeaderProductProps) => (
  <Stack
    component="header"
    justifyContent="center"
    sx={{
      borderBottom: 1,
      borderColor: "divider",
      backgroundColor: "background.paper",
      py: 2,
    }}
  >
    <Container>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography sx={{ fontSize: [20, 28], fontWeight: "bold" }}>
          Piattaforma Notifiche
        </Typography>

        {entitySelection}
      </Stack>
    </Container>
  </Stack>
);
