import { StoryFn, Meta } from '@storybook/react-vite';

import { Paper } from '@mui/material';

export default {
  title: 'MUI Components/Navigation/Pagination',

  component: Paper,
  parameters: { controls: { sort: 'size' } },
} as Meta<typeof Paper>;

const Template: StoryFn<typeof Paper> = () => (
  <Paper elevation={0} variant="outlined" square={false} />
);

export const Default = Template.bind({});
