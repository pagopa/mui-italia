import { Meta, StoryFn } from '@storybook/react-vite';
import MIPaper from '@components/MIPaper/MIPaper';
import { theme } from '@theme';

export default {
  title: 'Components/MIPaper',
  component: MIPaper,
  argTypes: {
    variant: {
      options: ['flat', 'outlined'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'flat' },
      },
    },
    borderRadius: {
      options: [8, 16, 24],
      control: { type: 'radio' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
      },
    },
    padding: {
      options: [16, 24],
      control: { type: 'radio' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '16' },
      },
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  parameters: {
    controls: {
      include: ['variant', 'borderRadius', 'padding', 'children'],
    },
  },
} as Meta<typeof MIPaper>;

const Template: StoryFn<typeof MIPaper> = (args) => (
  <div style={{ background: theme.colors.neutral.grey[50], padding: theme.spacing(2) }}>
    <MIPaper borderRadius={24} {...args} sx={{ minWidth: '300px', ...args.sx }} />
  </div>
);

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  padding: 16,
  children: 'Questo è un MIPaper Flat standard con angoli a 8px e padding a 16px.',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  padding: 24,
  children: 'Questo è un MIPaper Outlined con angoli a 16px e padding a 24px.',
};
