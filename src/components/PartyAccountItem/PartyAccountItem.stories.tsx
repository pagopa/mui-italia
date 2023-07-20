import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack } from "@mui/material";

import { breakpointsChromaticValues } from "@theme";

import { PartyAccountItem, PartyAccount } from "@components/PartyAccountItem";

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const partyMockImages: Array<PartyAccount> = [
  {
    image: `${cdnPath}81000410688.png`,
    name: "Comune di San Valentino in Abruzzo Citeriore",
  },
  {
    image: `${cdnPath}1199250158.png`,
    name: "Comune di Milano",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}2438750586.png`,
    name: "Comune di Roma",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}162210348.png`,
    name: "Comune di Parma",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}82003830161.png`,
    name: "Comune di Sotto il Monte Giovanni XXIII",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}172960361.png`,
    name: "Comune di Castelfranco Emilia",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}82001510492.png`,
    name: "Comune di Campo nell'Elba",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}117100537.png`,
    name: "Comune di Castiglione della Pescaia",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}142680669.png`,
    name: "Comune di Pescasseroli",
  },
  {
    image: `${cdnPath}189800204.png`,
    name: "Comune di Mantova",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}82002590105.png`,
    name: "Comune di Ne",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}74260845.png`,
    name: "Comune di Agrigento",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}80001950403.png`,
    name: "Comune di Castrocaro Terme e Terra del Sole",
    role: "Referente amministrativo",
  },
  {
    image: undefined,
    name: "Ente senza stemma",
    role: "Referente amministrativo",
  },
  {
    image: `${cdnPath}339370272.png`,
    name: `Commissario straordinario per la realizzazione di
    approdi temporanei e di interventi complementari per la
    salvaguardia di Venezia e della sua laguna e ulteriori
    interventi per la salvaguardia della laguna di Venezia`,
    role: `Operatore - Operatore API Operatore - Operatore API`,
  },
  {
    image: `${cdnPath}172960361.png`,
    name: "Amministrazione Comunale",
    role: "Referente amministrativo",
    topicName: "Comune di Castelfranco Emilia",
  },
];

const componentMaxWidth = 500;

/* Generate random value without repeating values
  Source of this snippet: https://akashmittal.com/javascript-random-array-element-no-repeat/ */
const alreadyPicked: Array<number> = [];

const randomValueFromArray = (array: Array<PartyAccount>) => {
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
  title: "Components/PartyAccountItem",
  component: PartyAccountItem,
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
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth
      ),
    },
  },
} as ComponentMeta<typeof PartyAccountItem>;

const Template: ComponentStory<typeof PartyAccountItem> = (args) => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = partyMockImages[randomIndex];

  const getRandomParty = () => {
    const randomNumber = randomValueFromArray(partyMockImages);
    setRandomIndex(randomNumber);
  };

  return (
    <Stack gap={2} alignItems="flex-start" sx={{ maxWidth: componentMaxWidth }}>
      <Button variant="contained" onClick={getRandomParty}>
        Get random Party
      </Button>

      <PartyAccountItem
        {...args}
        image={item.image}
        partyName={item.name}
        partyRole={item.role}
        topicPartyName={item.topicName}
      />
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  noWrap: false,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  noWrap: true,
};
