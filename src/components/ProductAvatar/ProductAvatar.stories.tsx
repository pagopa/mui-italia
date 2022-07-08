import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack, Typography } from "@mui/material";

import { ProductAvatar, Product } from "./ProductAvatar";

const productMockImages: Array<Product> = [
  "app-io",
  "check-iban",
  "piattaforma-notifiche",
  "interop-platform",
  "carta-giovani-nazionale",
  "pago-pa-payment",
];

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
  const item = productMockImages[randomIndex];

  const getRandomProduct = () => {
    const randomNumber = randomValueFromArray(productMockImages);
    setRandomIndex(randomNumber);
  };

  return (
    <Stack gap={2} alignItems="flex-start">
      <ProductAvatar product={item} size="small" />
      <ProductAvatar product={item} />
      <ProductAvatar product={item} size="large" />
      <div>
        <Typography variant="overline">Product:</Typography>
        <Typography variant="h6">{productMockImages[randomIndex]}</Typography>
      </div>
      <Button variant="contained" onClick={getRandomProduct}>
        Get random product
      </Button>
    </Stack>
  );
};
