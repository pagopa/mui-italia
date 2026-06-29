import { Timeline } from '@mui/lab';
import React, { ReactElement } from 'react';
import { checkChildren } from 'utils/children.utility';
import { MITimelineItemInternalProps, MITimelineProps } from './types';
import MITimelineItem from './MITimelineItem';

const MITimeline: React.FC<MITimelineProps> = ({ children }) => {
  checkChildren(children, [{ cmp: MITimelineItem }], 'MITimeline');

  const timelineItems = React.Children.toArray(children) as Array<
    ReactElement<MITimelineItemInternalProps>
  >;

  return (
    <Timeline sx={{ px: 0, py: 2 }}>
      {timelineItems.map((item, index) =>
        React.cloneElement(item, {
          key: item.key ?? index,
          isFirst: index === 0,
          isLast: index === timelineItems.length - 1,
        })
      )}
    </Timeline>
  );
};

export default MITimeline;
