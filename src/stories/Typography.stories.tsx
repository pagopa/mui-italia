import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Foundation/Typography",
  component: Typography,
  /* argTypes: {
    variant: {
      options: [
        "body1",
        "headline",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "overline",
        "sidenav",
        "caption",
        "caption-semibold",
      ],
      control: { type: "select" },
    },
  }, */
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "body1",
  children: "Default Typography Component",
};

export const Headline = Template.bind({});
Headline.args = {
  variant: "headline",
  children: "Headline",
};

export const H1 = Template.bind({});
H1.args = {
  variant: "h1",
  children: "Heading Title 1",
};

export const H2 = Template.bind({});
H2.args = {
  variant: "h2",
  children: "Heading Title 2",
};

export const H3 = Template.bind({});
H3.args = {
  variant: "h3",
  children: "Heading Title 3",
};

export const H4 = Template.bind({});
H4.args = {
  variant: "h4",
  children: "Heading Title 4",
};

export const H5 = Template.bind({});
H5.args = {
  variant: "h5",
  children: "Heading Title 5",
};

export const H6 = Template.bind({});
H6.args = {
  variant: "h6",
  children: "Heading Title 6",
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  children: "Overline",
};

export const Sidenav = Template.bind({});
Sidenav.args = {
  variant: "sidenav",
  children: "Sidenav",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere maximus semper. Etiam mauris magna, commodo sed egestas vel, scelerisque a turpis. Nulla a viverra eros. Nunc suscipit elementum tortor non ornare. Pellentesque vel erat nibh. Sed vulputate facilisis tincidunt. Phasellus euismod nibh ac faucibus faucibus. Suspendisse convallis, libero fermentum dictum commodo, nisi velit euismod sem, quis mollis nisl nibh lobortis nibh. Integer rhoncus tincidunt tellus laoreet scelerisque. Donec sodales nulla vel elit pretium, in dictum neque rhoncus.",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  children: "Caption",
};

export const CaptionSemiBold = Template.bind({});
CaptionSemiBold.args = {
  variant: "caption-semibold",
  children: "Caption Semibold",
};

/* export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
}; */
