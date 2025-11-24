import { SyntheticEvent } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { breakpointsChromaticValues } from '@theme';

import { Hero } from '@components/Hero';

import heroBackground from './assets/hero_background.png';
import heroImage from './assets/hero_image.png';

const firstCTA = {
  label: 'CallToAction 1',
  title: 'CTA 1',
  onClick: (_: SyntheticEvent) => {},
};

const secondCTA = {
  label: 'CallToAction 2',
  title: 'CTA 2',
  onClick: (_: SyntheticEvent) => {},
};

export default {
  title: 'Components/Hero',
  component: Hero,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: '#F5F5F5' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues,
    },
  },
  args: {
    title: 'Title',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lacus consequat, accumsan metus sed, pharetra dui. Praesent at accumsan odio. Praesent augue ipsum, pharetra eget metus vel, bibendum dapibus augue. Nunc maximus id eros finibus laoreet. Integer iaculis, neque at feugiat accumsan, nisi magna iaculis nisl, ultricies euismod nulla orci sit amet justo.',
    inverse: false,
    background: heroBackground,
    showPrimary: true,
    ctaPrimary: firstCTA,
    ctaSecondary: secondCTA,
  },
  argTypes: {
    inverse: {
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Hero>;

export const WithImage: StoryFn<typeof Hero> = (args) => <Hero {...args} />;
export const WithImageProps = WithImage.bind({});
WithImage.args = {
  type: 'image',
  image: heroImage,
  altText: 'altText',
};

export const JustText: StoryFn<typeof Hero> = (args) => <Hero {...args} />;
export const JustTextProps = JustText.bind({});
JustText.args = {
  type: 'text',
};
JustText.argTypes = {
  image: { table: { disable: true } },
  altText: { table: { disable: true } },
};
