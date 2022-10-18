import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Timeline, TimelineConnector } from "@mui/lab";
import { Chip, Box, Typography } from "@mui/material";

import { breakpointsChromaticValues } from "@theme";

/* Icons */
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import { ButtonNaked } from "@components/ButtonNaked";
import {
  TimelineNotification,
  TimelineNotificationDot,
  TimelineNotificationItem,
  TimelineNotificationSeparator,
  TimelineNotificationContent,
  TimelineNotificationOppositeContent,
} from "@components/TimelineNotification";

export default {
  title: "Components/TimelineNotification",
  component: Timeline,
  parameters: {
    controls: { sort: "size" },
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  backgrounds: [{ name: "dark background", value: "#000", default: true }],
} as ComponentMeta<typeof Timeline>;

// Mock Data
const notificationStatusHistory: Array<{
  minor?: boolean;
  statusLabel: string;
  state?: string;
  activeFrom: string;
  title?: string;
  description?: string;
  fiscalCode?: string;
}> = [
  {
    statusLabel: "Pagata",
    state: "success",
    activeFrom: "2022-02-22T11:22:00.957Z",
  },
  {
    minor: true,
    statusLabel: "In inoltro",
    title: "Minor event with multiple destinataries",
    description: "Description",
    activeFrom: "2022-02-22T11:22:12.971Z",
    fiscalCode: "MRARSS08S05I480N - Mario Rossi",
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
    minor: true,
    statusLabel: "In inoltro",
    title: "Minor event with single destinatary",
    description: "Description",
    activeFrom: "2022-02-22T11:22:12.971Z",
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
      maxWidth: 450,
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
          <TimelineNotificationSeparator>
            <TimelineConnector />
            <TimelineNotificationDot
              variant={i === 0 ? "outlined" : undefined}
              size={item.minor ? "small" : "default"}
            />
            <TimelineConnector />
          </TimelineNotificationSeparator>
          <TimelineNotificationContent>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              {getTime(item.activeFrom)}
            </Typography>
            {item.state && (
              <Chip size="small" label={item.statusLabel} color={item.state} />
            )}
            {item.title && (
              <Typography
                color="text.primary"
                variant="caption-semibold"
                component="div"
              >
                {item.title}
              </Typography>
            )}
            {item.description && (
              <Typography
                color="text.primary"
                variant="caption"
                component="div"
              >
                {item.description}
              </Typography>
            )}
            {item.minor && item.fiscalCode && (
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                {item.fiscalCode}
              </Typography>
            )}
            {!item.minor && (
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
            )}
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
