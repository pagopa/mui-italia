import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Chip, Box, Stack, Typography } from "@mui/material";

import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import { ButtonNaked } from "@components/ButtonNaked";
import { theme } from "../theme";

export default {
  title: "MUI Components/Lab/Timeline",
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
    <Timeline
      sx={{
        px: "0",
        py: theme.spacing(2),
      }}
    >
      {notificationStatusHistory.map((h: any) => (
        <TimelineItem key={h.activeFrom}>
          <TimelineOppositeContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              flex: "15% 0",
              p: "0",
              pr: theme.spacing(2.5),
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography variant="sidenav" component="div">
                {getDay(h.activeFrom)}
              </Typography>
              <Typography
                color="text.secondary"
                variant="caption"
                component="div"
              >
                {getMonthString(h.activeFrom)}
              </Typography>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                my: theme.spacing(1),
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: 0,
              px: theme.spacing(2.5),
              my: theme.spacing(2.5),
            }}
          >
            <Stack spacing={1} alignItems="baseline">
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                {getTime(h.activeFrom)}
              </Typography>
              <Chip size="small" label={h.statusLabel} color={h.state} />
              {h.description && (
                <Typography
                  color="text.secondary"
                  variant="body2"
                  component="div"
                >
                  {h.description}
                </Typography>
              )}
              <ButtonNaked
                href="#"
                target="_blank"
                variant="naked"
                color="primary"
                startIcon={<AttachFileRoundedIcon />}
              >
                Attestato opponibile a Terzi
              </ButtonNaked>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
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
