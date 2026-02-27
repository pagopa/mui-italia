import { Meta, StoryFn } from '@storybook/react-vite';

import { Sidenav, SidenavItem } from '@components/Sidenav';
export default {
  title: 'Mui Components/Surfaces/InteropSidebar',
  component: Sidenav,
  parameters: { controls: { sort: 'size' } },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2em',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sidenav>;

export const Default: StoryFn<typeof Sidenav> = () => (
  <Sidenav labelMobile="open" mobile={false} onSidenavOpen={() => alert('open')} open={true}>
    <SidenavItem label="Item 1" />
    <SidenavItem label="Item 2" />
    <SidenavItem label="Item 3" />
  </Sidenav>
);
