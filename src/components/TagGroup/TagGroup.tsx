"use client";

import React from "react";

// Components
import { Stack } from "@mui/material";
import { Tag } from "@components/Tag";

export interface TagGroupProps {
  children: JSX.Element | Array<JSX.Element>;
  visibleItems: number;
  tagRef?: React.Ref<HTMLButtonElement>;
}

export const TagGroup = ({
  children,
  visibleItems = NaN,
}: TagGroupProps): JSX.Element => (
  <Stack
    spacing={0.5}
    direction="row"
    justifyContent="flex-start"
    alignItems="flex-start"
    sx={(theme) => ({
      flexWrap: "wrap",
      mt: -0.5,
      ml: -0.5,
      "& > *": { marginTop: `${theme.spacing(0.5)} !important`, ml: 0.5 },
    })}
  >
    {/* If visibleItems is not set, show all children items.
    If set, just show the first [n] children items */}
    {visibleItems
      ? React.Children.map(children, (child, i) =>
          i < visibleItems
            ? child
            : visibleItems === i && (
                <Tag value={`+${React.Children.count(children) - i}`} />
              )
        )
      : children}
  </Stack>
);
