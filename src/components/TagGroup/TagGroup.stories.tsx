import { StoryFn, Meta } from '@storybook/react-vite';

// Components
import { Box, Typography } from '@mui/material';
import { Tag } from '@components/Tag';
import { TagGroup } from './TagGroup';

const groupLabels: Array<string> = [
  'Pagamenti',
  'Udienze',
  'Riscossione',
  'Anagrafe',
  'Lorem Ipsum',
  'Dolor',
  'Sit amet',
  'Consectetur',
];

export default {
  title: 'Components/Tag Group',
  component: TagGroup,
  args: {
    visibleItems: 4,
  },
} as Meta<typeof TagGroup>;

export const Default: StoryFn<typeof TagGroup> = (args) => (
  <TagGroup {...args}>
    {groupLabels.map((item: string, i: number) => (
      <Tag key={`${i}-${item}`} value={item} />
    ))}
  </TagGroup>
);

export const TruncateValueTag: StoryFn<typeof TagGroup> = (args) => (
  <Box width="400px" p="10px" sx={{ border: `1px solid blue`, borderRadius: '5px' }}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => (
          <Tag key={`${i}-${item}`} value={item} />
        ))}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="truncate" />
      </>
    </TagGroup>
  </Box>
);

export const WrapValueTag: StoryFn<typeof TagGroup> = (args) => (
  <Box width="400px" p="10px" sx={{ border: `1px solid blue`, borderRadius: '5px' }}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => (
          <Tag key={`${i}-${item}`} value={item} />
        ))}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="wrap" />
      </>
    </TagGroup>
  </Box>
);
