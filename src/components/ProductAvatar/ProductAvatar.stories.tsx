import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack, Typography } from "@mui/material";

import { ProductAvatar } from "./ProductAvatar";

const productMockImages = {
  "prod-io": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-io/logo.svg",
    background: "#0073E6",
    title: "App Io",
  },
  "prod-io-premium": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-io-premium/logo.svg",
    background: "#0073E6",
    title: "App Io Premium",
  },
  "prod-ciban": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-ciban/logo.svg",
    background: "#008CA8",
    title: "Check-IBAN",
  },
  "prod-pn": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-pn/logo.svg",
    background: "#0066CC",
    title: "Piattaforma Notifiche",
  },
  "prod-interop": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-interop/logo.svg",
    background: undefined,
    title: "PDND",
  },
  "prod-cgn": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-cgn/logo.png",
    background: undefined,
    title: "Carta Giovani",
  },
  "prod-pagopa": {
    url: "https://dev.selfcare.pagopa.it/resources/products/prod-pagopa/logo.svg",
    background: "#0066CC",
    title: "Pagamenti pagoPA",
  },
};

/* Generate random value without repeating values
  Source of this snippet: https://akashmittal.com/javascript-random-array-element-no-repeat/ */
const alreadyPicked: Array<number> = [];

const randomValueFromArray = (array: Array<string>) => {
  if (alreadyPicked.length === 0) {
    for (const [i] of array.entries()) {
      alreadyPicked.push(i);
    }
  }
  const randomValueIndex = Math.floor(Math.random() * alreadyPicked.length);
  const indexOfItemInMyArray = alreadyPicked[randomValueIndex];
  alreadyPicked.splice(randomValueIndex, 1);
  return array.indexOf(array[indexOfItemInMyArray]);
};

export default {
  title: "Components/ProductAvatar",
  component: ProductAvatar,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1em",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductAvatar>;

export const Default: ComponentStory<typeof ProductAvatar> = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = Object.keys(productMockImages)[
    randomIndex
  ] as keyof typeof productMockImages;
  const url = productMockImages[item].url;
  const bgColor = productMockImages[item].background;
  const altText = productMockImages[item].title + " logo";

  const getRandomProduct = () => {
    const randomNumber = randomValueFromArray(Object.keys(productMockImages));
    setRandomIndex(randomNumber);
  };

  return (
    <Stack gap={2} alignItems="flex-start">
      <ProductAvatar
        logoUrl={url}
        logoBgColor={bgColor}
        logoAltText={altText}
        size="small"
      />
      <ProductAvatar
        logoUrl={url}
        logoBgColor={bgColor}
        logoAltText={altText}
      />
      <ProductAvatar
        logoUrl={url}
        logoBgColor={bgColor}
        logoAltText={altText}
        size="large"
      />
      <div>
        <Typography variant="overline">Product:</Typography>
        <Typography variant="h6">{productMockImages[item].title}</Typography>
      </div>
      <Button variant="contained" onClick={getRandomProduct}>
        Get random product
      </Button>
    </Stack>
  );
};
