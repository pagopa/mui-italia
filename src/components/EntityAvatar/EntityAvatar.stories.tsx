import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack, Typography } from "@mui/material";

import { EntityAvatar } from "./EntityAvatar";

type EntityImage = {
  src: string | undefined;
  alt: string;
};

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const entityMockImages: Array<EntityImage> = [
  {
    src: `${cdnPath}1199250158.png`,
    alt: "Comune di Milano",
  },
  {
    src: `${cdnPath}2438750586.png`,
    alt: "Comune di Roma",
  },
  {
    src: `${cdnPath}162210348.png`,
    alt: "Comune di Parma",
  },
  {
    src: `${cdnPath}82003830161.png`,
    alt: "Comune di Sotto il Monte Giovanni XXIII",
  },
  {
    src: `${cdnPath}172960361.png`,
    alt: "Comune di Castelfranco Emilia",
  },
  {
    src: `${cdnPath}82001510492.png`,
    alt: "Comune di Campo nell'Elba",
  },
  {
    src: `${cdnPath}117100537.png`,
    alt: "Comune di Castiglione della Pescaia",
  },
  {
    src: `${cdnPath}142680669.png`,
    alt: "Comune di Pescasseroli",
  },
  {
    src: `${cdnPath}81000410688.png`,
    alt: "Comune di San Valentino in Abruzzo Citeriore",
  },
  {
    src: undefined,
    alt: "Ente senza stemma",
  },
];

/* Generate random value without repeating values
  Source of this snippet: https://akashmittal.com/javascript-random-array-element-no-repeat/ */
const alreadyPicked: Array<number> = [];

const randomValueFromArray = (array: Array<EntityImage>) => {
  if (alreadyPicked.length === 0) {
    for (const [i] of array.entries()) {
      alreadyPicked.push(i);
    }
  }
  const randomValueIndex = Math.floor(Math.random() * alreadyPicked.length);
  const indexOfItemInMyArray = alreadyPicked[randomValueIndex];
  alreadyPicked.splice(randomValueIndex, 1);
  console.log(array[indexOfItemInMyArray]);
  return array.indexOf(array[indexOfItemInMyArray]);
};

export default {
  title: "Components/EntityAvatar",
  component: EntityAvatar,
} as ComponentMeta<typeof EntityAvatar>;

export const Default: ComponentStory<typeof EntityAvatar> = (args) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const getRandomEntity = () => {
    const randomNumber = randomValueFromArray(entityMockImages);
    setRandomIndex(randomNumber);
  };

  return (
    <Stack gap={2} alignItems="flex-start">
      <EntityAvatar
        customSrc={entityMockImages[randomIndex].src}
        {...args}
      ></EntityAvatar>
      <div>
        <Typography variant="overline">Entity:</Typography>
        <Typography variant="h6">
          {entityMockImages[randomIndex].alt}
        </Typography>
      </div>
      <Button variant="contained" onClick={getRandomEntity}>
        Get random Entity
      </Button>
    </Stack>
  );
};
