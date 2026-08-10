import { FormControlLabel, Stack, FormGroup, Typography } from '@mui/material';
import { MISwitch } from '@components/MISwitch';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Report } from '@mui/icons-material';

type MISwitchStoryArgs = React.ComponentProps<typeof MISwitch>;

const meta: Meta<MISwitchStoryArgs> = {
  title: 'MUI Components/Inputs/MISwitch',
  component: MISwitch,
};

export default meta;

type Story = StoryObj<MISwitchStoryArgs>;

export const Playground: Story = {
  args: {},
};

export const PrimaryChecked: Story = {
  args: {
    checked: true,
  },
};

export const PrimaryDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Switch color='primary' nello stato disabled='true'",
      },
    },
  },
  render: () => (
    <Stack direction="row" alignContent="center" gap={4}>
      <MISwitch checked disabled />
      <MISwitch disabled />
    </Stack>
  ),
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: "Switch con label all'interno di un form con label",
      },
    },
  },
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={<MISwitch />}
        label={
          <Stack
            sx={{
              ml: 1,
            }}
          >
            <Typography variant="caption-semibold">Label</Typography>
            <Typography variant="body2">Label</Typography>
          </Stack>
        }
      />
    </FormGroup>
  ),
};

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: "Switch con label all'interno di un form con lable e un errore",
      },
    },
  },
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={<MISwitch />}
        label={
          <Stack
            sx={{
              ml: 1,
            }}
          >
            <Typography variant="caption-semibold">Label</Typography>
            <Typography variant="body2">Label</Typography>
            <Stack direction={'row'} alignContent="center">
              <Report color="error" fontSize="small" />
              <Typography color="error" variant="caption">
                Helper text
              </Typography>
            </Stack>
          </Stack>
        }
      />
    </FormGroup>
  ),
};
