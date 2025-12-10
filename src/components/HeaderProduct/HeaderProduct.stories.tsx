import { StoryFn, Meta } from '@storybook/react';

import { breakpointsChromaticValues } from '@theme';

import { HeaderProduct, PartyEntity, ProductEntity } from '@components/HeaderProduct';
import { LogoIOApp } from '@assets/LogoIOApp';
import foundation from 'theme/foundation';

export default {
  title: 'Components/HeaderProduct (WIP)',
  component: HeaderProduct,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: '#F5F5F5' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
} as Meta<typeof HeaderProduct>;

const productsList: Array<ProductEntity> = [
  {
    id: '0',
    title: `Area Riservata`,
    productUrl: '#area-riservata',
    linkType: 'external',
  },
  {
    id: '1',
    title: `Piattaforma Notifiche`,
    productUrl: '#piattaforma-notifiche',
    linkType: 'external',
  },
  {
    id: '2',
    title: `App IO`,
    productUrl: '#app-io',
    linkType: 'internal',
    icon: <LogoIOApp size={32} title="io" color="default" />,
  },
  {
    id: '3',
    title: `Interoperabilità`,
    productUrl: '#interoperabilità',
    linkType: 'internal',
  },
  {
    id: '4',
    title: ``,
    productUrl: '#no-title',
    linkType: 'external',
    icon: <LogoIOApp size={32} title="io" color="default" />,
  },
];

const cdnPath = 'https://assets.cdn.io.italia.it/logos/organizations/';

const partyList: Array<PartyEntity> = [
  {
    id: '0',
    name: `Commissario straordinario per la realizzazione di
    approdi temporanei e di interventi complementari per la
    salvaguardia di Venezia e della sua laguna e ulteriori
    interventi per la salvaguardia della laguna di Venezia`,
    productRole: 'Referente amministrativo',
    logoUrl: `${cdnPath}1199250158.png`,
  },
  {
    id: '1',
    logoUrl: `${cdnPath}2438750586.png`,
    name: 'Comune di Roma',
    productRole: 'Referente amministrativo',
  },
  {
    id: '2',
    logoUrl: `${cdnPath}162210348.png`,
    name: 'Comune di Parma',
    productRole: 'Referente amministrativo',
  },
  {
    id: '3',
    logoUrl: `${cdnPath}82003830161.png`,
    name: 'Comune di Sotto il Monte Giovanni XXIII',
    productRole: 'Referente amministrativo',
  },
  {
    id: '4',
    logoUrl: `${cdnPath}172960361.png`,
    name: 'Comune di Castelfranco Emilia',
    productRole: 'Referente amministrativo',
  },
  {
    id: '5',
    logoUrl: `${cdnPath}82001510492.png`,
    name: "Comune di Campo nell'Elba",
    productRole: 'Referente amministrativo',
  },
  {
    id: '6',
    logoUrl: `${cdnPath}117100537.png`,
    name: 'Comune di Castiglione della Pescaia',
    productRole: 'Referente amministrativo',
  },
  {
    id: '7',
    logoUrl: `${cdnPath}142680669.png`,
    name: 'Comune di Pescasseroli',
  },
  {
    id: '8',
    logoUrl: `${cdnPath}81000410688.png`,
    name: 'Comune di San Valentino in Abruzzo Citeriore',
  },
  {
    id: '9',
    logoUrl: `${cdnPath}189800204.png`,
    name: 'Comune di Mantova',
    productRole: 'Referente amministrativo',
  },
  {
    id: '10',
    logoUrl: `${cdnPath}82002590105.png`,
    name: 'Comune di Ne',
    productRole: 'Referente amministrativo',
  },
  {
    id: '11',
    logoUrl: `${cdnPath}74260845.png`,
    name: 'Comune di Agrigento',
    productRole: 'Referente amministrativo',
  },
  {
    id: '12',
    logoUrl: `${cdnPath}80001950403.png`,
    name: 'Comune di Castrocaro Terme e Terra del Sole',
    productRole: 'Referente amministrativo',
  },
  {
    id: '13',
    logoUrl: undefined,
    name: 'Ente senza stemma',
    productRole: 'Referente amministrativo',
  },
  {
    id: '14',
    logoUrl: `${cdnPath}172960361.png`,
    name: 'Amministrazione Comunale',
    productRole: 'Referente amministrativo',
    parentName: 'Comune di Castelfranco Emilia',
  },
];

export const DefaultWithoutParties: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct productsList={[productsList[0]]} />
);

export const DefaultWithoutPartiesAndIcon: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct productsList={[productsList[2]]} />
);

export const DefaultOnlyIcon: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct productsList={[productsList[4]]} />
);

export const OnlyIconAndChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct chipLabel="beta" productsList={[productsList[4]]} />
);

export const DefaultWithoutPartiesWithChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct chipLabel="Beta" productsList={[productsList[0]]} />
);

export const DefaultWithoutPartiesWithChipAndIcon: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct chipLabel="Beta" productsList={[productsList[2]]} />
);

export const WithProductSelection: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    productId="1"
    productsList={productsList}
    onSelectedProduct={(p) => console.log('Selected Item:', p.title)}
    partyList={[partyList[0]]}
  />
);

export const WithProductSelectionWithChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    chipLabel="Beta"
    productId="1"
    productsList={productsList}
    onSelectedProduct={(p) => console.log('Selected Item:', p.title)}
    partyList={[partyList[0]]}
  />
);

export const WithoutProductSelection: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct productsList={[productsList[0]]} partyList={[partyList[0]]} />
);

export const WithoutProductSelectionWithChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct chipLabel="Beta" productsList={[productsList[0]]} partyList={[partyList[0]]} />
);
export const WithoutProductSelectionWithChipAndIcon: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct chipLabel="Beta" productsList={[productsList[2]]} partyList={[partyList[0]]} />
);

export const WithPartySelection: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    productsList={[productsList[0]]}
    partyList={partyList}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);
export const WithPartySelectionAndIcon: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    productsList={[productsList[2]]}
    partyList={partyList}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);

export const WithPartySelectionWithChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    chipLabel="Beta"
    productsList={[productsList[0]]}
    partyList={partyList}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);

export const WithProductSelectionWithPartySelectionWithChip: StoryFn<typeof HeaderProduct> = () => (
  <HeaderProduct
    borderBottom={3}
    borderColor={foundation.palette.warning.main}
    chipColor="warning"
    chipLabel="Collaudo"
    productsList={productsList}
    partyList={partyList}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);

export const WithProductSelectionWithPartySelectionWithChipAndIconFunction: StoryFn<
  typeof HeaderProduct
> = () => (
  <HeaderProduct
    borderBottom={3}
    borderColor={foundation.palette.warning.main}
    chipColor="warning"
    chipLabel="Collaudo"
    productsList={productsList}
    partyList={partyList}
    onSelectedProduct={(e) => console.log('Selected Product: ', e.title)}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);

export const WithProductSelectionWithPartySelectionWithChipWithParentName: StoryFn<
  typeof HeaderProduct
> = () => (
  <HeaderProduct
    borderBottom={3}
    borderColor={foundation.palette.warning.main}
    chipColor="warning"
    chipLabel="Collaudo"
    productsList={productsList}
    partyList={partyList}
    partyId={'14'}
    onSelectedParty={(e) => console.log('Selected Item:', e.name)}
  />
);
