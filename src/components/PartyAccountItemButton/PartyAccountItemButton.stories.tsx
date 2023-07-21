import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack } from "@mui/material";

import { breakpointsChromaticValues } from "@theme";

import { PartyAccount } from "@components/PartyAccountItem";
import { PartyAccountItemButton } from "@components/PartyAccountItemButton";
import { Tag } from "@components/Tag";

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const partyMockImages: Array<PartyAccount> = [
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
    image: `${cdnPath}81000410688.png`,
    name: "Comune di San Valentino in Abruzzo Citeriore",
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
    image: undefined,
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
    parentName: "Comune di Castelfranco Emilia",
  },
];

const itemWithParentName = {
  image: `${cdnPath}172960361.png`,
  name: "Amministrazione Comunale",
  role: "Referente amministrativo",
  parentName: "Comune di Castelfranco Emilia",
};

/* Tag Element */
const tag: JSX.Element = <Tag color="warning" value="Da completare" />;
const componentMaxWidth = 400;

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
  title: "Components/PartyAccountItemButton",
  component: PartyAccountItemButton,
  parameters: {
    layout: "padded",
    chromatic: {
      viewports: breakpointsChromaticValues.filter(
        (resolution) => resolution <= componentMaxWidth
      ),
    },
  },
} as ComponentMeta<typeof PartyAccountItemButton>;

const Template: ComponentStory<typeof PartyAccountItemButton> = (args) => {
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

      <PartyAccountItemButton
        {...args}
        image={item.image}
        partyName={item.name}
        partyRole={item.role}
        parentPartyName={item.parentName}
      />
    </Stack>
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  endSlot: tag,
};

export const Selected = Template.bind({});
Selected.args = {
  selectedItem: true,
};

export const WithTag = Template.bind({});
WithTag.args = {
  endSlot: tag,
};

export const WithParentName: ComponentStory<
  typeof PartyAccountItemButton
> = () => (
  <PartyAccountItemButton
    image={itemWithParentName.image}
    partyName={itemWithParentName.name}
    partyRole={itemWithParentName.role}
    parentPartyName={itemWithParentName.parentName}
  />
);
