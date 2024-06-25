import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default {
  title: "MUI Components/Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { controls: { sort: "size" } },
} as ComponentMeta<typeof Breadcrumbs>;

export const TwoItems: ComponentStory<typeof Breadcrumbs> = () => (
  <Breadcrumbs>
    <Link
      sx={{ display: "flex", alignItems: "center" }}
      underline="hover"
      color="inherit"
      href="#"
    >
      <EmailRoundedIcon sx={{ mr: 1 }} fontSize="inherit" />
      Notifiche
    </Link>
    <Typography
      sx={{ display: "flex", alignItems: "center" }}
      color="inherit"
      fontWeight={600}
    >
      Dettagli Notifica
    </Typography>
  </Breadcrumbs>
);
TwoItems.parameters = {
  controls: { hideNoControlsWarning: true },
};
