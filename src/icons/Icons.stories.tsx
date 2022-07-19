import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stack, Box, Typography } from "@mui/material";

import {
  MediumIcon,
  SpidIcon,
  CieIcon,
  CheckIbanIcon,
  PNIcon,
  InteropIcon,
} from "./";

export interface IconBoxProps {
  icon: JSX.Element;
  name: string;
}

export default {
  title: "Assets/Icons",
} as ComponentMeta<typeof Box>;

const IconBox = ({ name, icon }: IconBoxProps): JSX.Element => (
  <Stack
    spacing={2}
    sx={{
      backgroundColor: "background.paper",
      borderRadius: 2,
      p: 1,
      pt: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {icon}
    {name && <Typography sx={{ fontSize: 12 }}>{name}</Typography>}
  </Stack>
);

export const Overview: ComponentStory<typeof Box> = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      gap: 2,
    }}
  >
    <IconBox name={"MediumIcon"} icon={<MediumIcon />} />
    <IconBox name={"SpidIcon"} icon={<SpidIcon />} />
    <IconBox name={"CieIcon"} icon={<CieIcon />} />
    <IconBox name={"CheckIbanIcon"} icon={<CheckIbanIcon />} />
    <IconBox name={"PNIcon"} icon={<PNIcon />} />
    <IconBox name={"InteropIcon"} icon={<InteropIcon />} />
  </Box>
);

Overview.parameters = {
  controls: { hideNoControlsWarning: true },
};

Overview.decorators = [
  (Story) => (
    <div style={{ padding: "16px", backgroundColor: "#F5F5F5" }}>
      <Story />
    </div>
  ),
];
