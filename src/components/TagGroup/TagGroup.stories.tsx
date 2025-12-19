import { StoryFn, Meta } from '@storybook/react';

// Components
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
