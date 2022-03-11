import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Timeline, TimelineSeparator, TimelineConnector } from "@mui/lab";
import { Chip, Box, Typography } from "@mui/material";

import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import { ButtonNaked } from "@components/ButtonNaked";
import {
  TimelineNotification,
  TimelineNotificationDot,
  TimelineNotificationItem,
  TimelineNotificationContent,
  TimelineNotificationOppositeContent,
} from "@components/TimelineNotification";

export default {
  title: "Components/TimelineNotification",
  component: Timeline,
  parameters: { controls: { sort: "size" } },
  backgrounds: [{ name: "dark background", value: "#000", default: true }],
} as ComponentMeta<typeof Timeline>;

// Mock Data
const notificationStatusHistory: Array<{
  statusLabel: string;
  state: string;
  activeFrom: string;
  description?: string;
}> = [
  {
    statusLabel: "Pagata",
    state: "success",
    activeFrom: "2022-02-22T11:22:00.957Z",
  },
  {
    statusLabel: "In inoltro",
    state: "warning",
    description: "Lorem ipsum dolor bla bla",
    activeFrom: "2022-02-22T11:22:12.971Z",
  },
  {
    statusLabel: "Perfezionata per visione",
    state: "success",
    activeFrom: "2022-02-22T08:12:29.991Z",
  },
  {
    statusLabel: "Destinatario irreperibile",
    state: "error",
    activeFrom: "2022-02-09T11:24:33.061Z",
  },
];

function getMonthString(dateString: string): string {
  const date = new Date(dateString);
  return date
    .toLocaleString("default", { month: "long" })
    .toUpperCase()
    .substring(0, 3);
}

function getDay(dateString: string): string {
  const date = new Date(dateString);
  return `0${date.getDate()}`.slice(-2);
}

function getTime(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}`;
}
export const Default: ComponentStory<typeof Timeline> = () => (
  <Box
    sx={{
      width: 450,
      backgroundColor: "background.paper",
      borderRadius: 2,
    }}
  >
    <TimelineNotification>
      {notificationStatusHistory.map((item: any, i: number) => (
        <TimelineNotificationItem key={item.activeFrom}>
          <TimelineNotificationOppositeContent>
            <Typography variant="sidenav" component="div">
              {getDay(item.activeFrom)}
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
              component="div"
            >
              {getMonthString(item.activeFrom)}
            </Typography>
          </TimelineNotificationOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineNotificationDot
              variant={i === 0 ? "outlined" : undefined}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineNotificationContent>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              {getTime(item.activeFrom)}
            </Typography>
            <Chip size="small" label={item.statusLabel} color={item.state} />
            {item.description && (
              <Typography
                color="text.secondary"
                variant="body2"
                component="div"
              >
                {item.description}
              </Typography>
            )}
            <ButtonNaked
              href="#"
              target="_blank"
              variant="naked"
              color="primary"
              weight="light"
              startIcon={<AttachFileRoundedIcon />}
            >
              Attestato opponibile a Terzi
            </ButtonNaked>
          </TimelineNotificationContent>
        </TimelineNotificationItem>
      ))}
    </TimelineNotification>
  </Box>
);
Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
Default.decorators = [
  (Story) => (
    <div style={{ padding: "1em", backgroundColor: "#F5F5F5" }}>
      <Story />
    </div>
  ),
];
