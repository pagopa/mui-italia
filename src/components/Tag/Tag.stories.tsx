import { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

import { Tag } from './Tag';
import { Box, Typography } from '@mui/material';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    value: 'Tag Content',
    variant: 'default',
    ariaLabel: 'Stato: test',
  },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => <Tag {...args} />;

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

export const TruncateValueTag: StoryObj<typeof Tag> = {
  render: () => (
    <Box width="175px" p="10px" sx={{ border: `1px solid blue`, borderRadius: '5px' }}>
      <Typography variant="body1">Tag must be in this Box</Typography>
      <hr />
      <Tag
        variant="default"
        icon={AttachFileRoundedIcon}
        value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue"
        mode="truncate"
      />
    </Box>
  ),
};

export const WrapValueTag: StoryObj<typeof Tag> = {
  render: () => (
    <Box width="175px" p="10px" sx={{ border: `1px solid blue`, borderRadius: '5px' }}>
      <Typography variant="body1">Tag must be in this Box</Typography>
      <hr />
      <Tag
        variant="default"
        icon={AttachFileRoundedIcon}
        value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue"
        mode="wrap"
      />
    </Box>
  ),
};
