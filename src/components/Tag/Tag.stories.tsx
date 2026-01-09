import { StoryFn, Meta } from '@storybook/react';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    value: 'Tag Content',
    variant: 'default',
    color: 'default',
    icon: <AttachFileRoundedIcon />,
    ariaLabel: 'Stato: test',
  },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
