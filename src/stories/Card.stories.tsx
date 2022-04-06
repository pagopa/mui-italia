import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Mui Components/Surfaces/Card",
  component: Card,
  parameters: { controls: { sort: "size" } },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "2em",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => (
  <Card sx={{ minWidth: 275, maxWidth: 300 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Check IBAN
      </Typography>
      <Typography variant="body2">
        Verifica l&apos;abbinamento di un IBAN ad un CF di un cittadino o di
        un&apos;impresa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">
        Attiva prodotto
      </Button>
    </CardActions>
  </Card>
);

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const WithMedia: ComponentStory<typeof Card> = () => (
  <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      component="img"
      height="200"
      image="https://www.pagopa.it/static/a94115c08531ba61e1f714ca9b9eadf3/c31a8/comp-img%402x.webp"
      alt="pagoPA"
    />
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Check IBAN
      </Typography>
      <Typography variant="body2">
        Verifica l&apos;abbinamento di un IBAN ad un CF di un cittadino o di
        un&apos;impresa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">
        Attiva prodotto
      </Button>
    </CardActions>
  </Card>
);

WithMedia.parameters = {
  controls: { hideNoControlsWarning: true },
};
