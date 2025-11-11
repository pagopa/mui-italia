import { StoryFn, Meta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    value: 'Tag Content',
    variant: 'default',
    color: 'default',
  },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
