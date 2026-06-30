import { Timeline } from '@mui/lab';
import React, { ReactElement } from 'react';
import { checkChildren } from 'utils/children.utility';
import { MITimelineItemInternalProps, MITimelineItemProps, MITimelineProps } from './types';
import MITimelineItem from './MITimelineItem';

const MITimeline: React.FC<MITimelineProps> = ({ children }) => {
  checkChildren(children, [{ cmp: MITimelineItem }], 'MITimeline');

  const timelineItems = React.Children.toArray(children) as Array<
    ReactElement<MITimelineItemProps>
  >;

  const items: ReactElement<MITimelineItemInternalProps>[] = timelineItems.map((item, index) =>
    React.cloneElement(item as ReactElement<MITimelineItemInternalProps>, {
      key: item.key,
      isFirst: index === 0,
      isLast: index === timelineItems.length - 1,
    })
  );

  return <Timeline sx={{ px: 0, py: 2 }}>{items}</Timeline>;
};

export default MITimeline;
