import { ComponentStory, ComponentMeta } from '@storybook/react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    value: 'Tag Content',
    variant: 'default',
    ariaLabel: 'Stato: test',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  variant: 'default',
  icon: StarRoundedIcon,
};

export const InfoTag = Template.bind({});
InfoTag.args = {
  variant: 'info',
};

export const WarningTag = Template.bind({});
WarningTag.args = {
  variant: 'warning',
};

export const ErrorTag = Template.bind({});
ErrorTag.args = {
  variant: 'error',
};

export const SuccessTag = Template.bind({});
SuccessTag.args = {
  variant: 'success',
};

export const NoIconTag = Template.bind({});
NoIconTag.args = {
  icon: undefined,
};

export const OnlyIconTag = Template.bind({});
OnlyIconTag.args = {
  variant: 'only-icon',
  icon: AttachFileRoundedIcon,
};
