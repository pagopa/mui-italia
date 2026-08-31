'use client';

// Components
import { Tag } from '@components/Tag';
import { Stack } from '@mui/material';
import { Children, Ref } from 'react';

export interface TagGroupProps {
  children: JSX.Element | Array<JSX.Element>;
  visibleItems: number;
  tagRef?: Ref<HTMLButtonElement>;
}

const TagGroup = ({ children, visibleItems = NaN }: TagGroupProps): JSX.Element => (
  <Stack
    spacing={0.5}
    direction="row"
    sx={(theme) => ({
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      mt: -0.5,
      ml: -0.5,
      '& > *': { marginTop: `${theme.spacing(0.5)} !important`, ml: 0.5 },
    })}
  >
    {/* If visibleItems is not set, show all children items.
    If set, just show the first [n] children items */}
    {visibleItems
      ? Children.map(children, (child, i) =>
          i < visibleItems
            ? child
            : visibleItems === i && <Tag value={`+${Children.count(children) - i}`} />
        )
      : children}
  </Stack>
);

export default TagGroup;
