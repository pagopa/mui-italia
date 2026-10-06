import { MIDivider } from '@components/MIDivider';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { breakpointsChromaticValues } from '@theme';

const componentMaxWidth = 400;

type MIDividerStoryArgs = Omit<React.ComponentProps<typeof MIDivider>, 'component' | 'children'> & {
  htmlElement: 'hr' | 'li' | 'div';
  showLabel: boolean;
  label: string;
};

const noControlsParameters = {
  controls: { hideNoControlsWarning: true },
};

const meta: Meta<MIDividerStoryArgs> = {
  title: 'Components/MIDivider',
  component: MIDivider,
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
    controls: {
      include: ['htmlElement', 'showLabel', 'label'],
    },
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
  args: {
    htmlElement: 'hr',
    variant: 'fullWidth',
    light: false,
    showLabel: false,
    label: 'Dettagli',
  },
  argTypes: {
    htmlElement: {
      options: ['hr', 'li', 'div'],
      control: { type: 'radio' },
      description:
        "Controllo Storybook: seleziona l'elemento HTML usato per la prop component del divider.",
      table: {
        category: 'Storybook controls',
        type: { summary: "'hr' | 'li' | 'div'" },
        defaultValue: { summary: 'hr' },
      },
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Controllo Storybook: mostra o nasconde il contenuto testuale del divider.',
      table: {
        category: 'Storybook controls',
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo mostrato nel divider quando showLabel è attivo.',
      if: { arg: 'showLabel', eq: true },
      table: {
        category: 'Storybook controls',
        type: { summary: 'string' },
      },
    },
    sx: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({ htmlElement, showLabel, label }) => (
    <Box sx={{ width: 360, maxWidth: '100%' }}>
      <MIDivider component={htmlElement}>{showLabel ? label : undefined}</MIDivider>
    </Box>
  ),
};

export default meta;

type Story = StoryObj<MIDividerStoryArgs>;

export const Playground: Story = {};

export const Default: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Configurazione base del divider con componente hr'
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%' }}>
      <MIDivider component="hr" />
    </Box>
  ),
};

export const WithContent: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con contenuto testuale, utile per separare sezioni correlate.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%' }}>
      <MIDivider>Dettagli aggiuntivi</MIDivider>
    </Box>
  ),
};

export const Padding4: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 4px.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%', py: 0.5 }}>
      <MIDivider />
    </Box>
  ),
};

export const Padding8: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 8px.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%', py: 1 }}>
      <MIDivider />
    </Box>
  ),
};

export const Padding16: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 16px.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%', py: 2 }}>
      <MIDivider />
    </Box>
  ),
};

export const Padding32: Story = {
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 32px.',
      },
    },
  },
  render: () => (
    <Box sx={{ width: 360, maxWidth: '100%', py: 4 }}>
      <MIDivider />
    </Box>
  ),
};
