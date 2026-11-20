'use client';

import { MIPaginationSelect } from '@components/MIPaginationSelect';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';
import { useState } from 'react';

const componentMaxWidth = 900;
const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

type StoryArgs = React.ComponentProps<typeof MIPaginationSelect> & {
  labelText: string;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/MIPaginationSelect',
  component: MIPaginationSelect,
  tags: ['!dev'],
  parameters: {
    theme: 'next',
    controls: { include: ['labelText', 'locale'] },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    labelText: '',
    locale: 'it',
  },
  argTypes: {
    labelText: {
      control: 'text',
      description:
        'Controllo Storybook: label personalizzata; vuota usa il testo della lingua scelta.',
    },
    locale: { control: 'select', options: ['it', 'en'] },
    label: { control: false },
    options: { control: false },
    onChange: { control: false },
    value: { control: false },
  },
  render: function RenderPlayground({ labelText, locale }) {
    const [value, setValue] = useState<unknown>(20);
    return (
      <MIPaginationSelect
        label={labelText}
        locale={locale}
        options={options}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Playground: Story = {};

