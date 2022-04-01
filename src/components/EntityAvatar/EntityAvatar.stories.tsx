import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

/* Assets */
import stemmaMilano from "@static/entities/citta-milano.png";
import stemmaSottoIlMonte from "@static/entities/comune-sotto-il-monte.jpg";
import stemmaCastelfrancoEmilia from "@static/entities/comune-castelfranco-emilia.png";
import stemmaParma from "@static/entities/comune-parma.png";
import stemmaRoma from "@static/entities/comune-roma.png";
import stemmaCampoNellElba from "@static/entities/comune-campo-nell-elba.png";
import stemmaCastiglioneDellaPescaia from "@static/entities/comune-castiglione-della-pescaia.png";
import stemmaPescasseroli from "@static/entities/comune-pescasseroli.png";
import stemmaSanValentinoEtc from "@static/entities/comune-sanvalentino-etc.png";

import { Button, Stack, Typography } from "@mui/material";

import { EntityAvatar } from "./EntityAvatar";

type EntityImage = {
  src: string;
  alt: string;
};

const entityMockImages: Array<EntityImage> = [
  {
    src: stemmaMilano,
    alt: "Comune di Milano",
  },
  {
    src: stemmaRoma,
    alt: "Comune di Roma",
  },
  {
    src: stemmaParma,
    alt: "Comune di Parma",
  },
  {
    src: stemmaSottoIlMonte,
    alt: "Comune di Sotto il Monte Giovanni XXIII",
  },
  {
    src: stemmaCastelfrancoEmilia,
    alt: "Comune di Castelfranco Emilia",
  },
  {
    src: stemmaCampoNellElba,
    alt: "Comune di Campo nell'Elba",
  },
  {
    src: stemmaCastiglioneDellaPescaia,
    alt: "Comune di Castiglione della Pescaia",
  },
  {
    src: stemmaPescasseroli,
    alt: "Comune di Pescasseroli",
  },
  {
    src: stemmaSanValentinoEtc,
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
