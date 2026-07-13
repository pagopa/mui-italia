import { MIBoxedModule, MIBoxedModuleTitle } from '@components/MIBoxedModule';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps, FC } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Avatar, Box, useTheme } from '@mui/material';
import { MIButton } from '@components/MIButton';

type MIBoxedModuleStoryArgs = ComponentProps<typeof MIBoxedModule> & {
  title?: string;
  content?: string;
  enableIcon?: boolean;
  enableAction?: boolean;
};

const BoxedIcon: FC = () => {
  const theme = useTheme();

  return (
    <Avatar
      variant="rounded"
      sx={{
        border: '1px solid',
        borderColor: theme.colors.neutral.black[60],
        bgcolor: theme.colors.neutral.grey[50],
      }}
    >
      <AccountBalanceIcon sx={{ color: theme.colors.neutral.grey[300] }} />
    </Avatar>
  );
};

const BoxedAction: FC = () => <MIButton variant="text">Bottone</MIButton>;

const meta: Meta<MIBoxedModuleStoryArgs> = {
  title: 'Components/MIBoxedModule',
  component: MIBoxedModule,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['loading', 'content', 'enableIcon', 'title', 'enableAction'],
    },
  },
  args: {
    loading: false,
    title: 'Product title',
    content: 'Description',
    enableIcon: false,
    enableAction: false,
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Mostra lo stato di caricamento e impedisce qualsiasi azione.',
      table: {
        category: 'MIBoxedModule',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    content: {
      description: 'Controllo Storybook: testo usato come children del componente.',
      control: { type: 'text' },
      table: {
        category: 'Storybook controls',
      },
    },
    enableIcon: {
      description: "Controllo Storybook: abilita o disabilita l'icona",
      control: { type: 'boolean' },
      table: {
        category: 'Storybook controls',
      },
    },
    title: {
      description: 'Controllo Storybook: test usato come titolo del componente.',
      control: { type: 'text' },
      table: {
        category: 'Storybook controls',
        type: { summary: 'string' },
      },
    },
    enableAction: {
      description: "Controllo Storybook: abilita o disabilita l'action",
      control: { type: 'boolean' },
      table: {
        category: 'Storybook controls',
      },
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    icon: {
      control: false,
      table: {
        disable: true,
      },
    },
    action: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: ({ content, enableIcon, title, children, enableAction, ...rest }) => {
    const boxedContent = content ?? children;
    const Icon = enableIcon ? <BoxedIcon /> : undefined;
    const Action = enableAction ? <BoxedAction /> : undefined;

    return (
      <MIBoxedModule icon={Icon} action={Action} {...rest}>
        {title && <MIBoxedModuleTitle>{title}</MIBoxedModuleTitle>}
        {boxedContent && <Box>{boxedContent}</Box>}
      </MIBoxedModule>
    );
  },
};

export default meta;

type Story = StoryObj<MIBoxedModuleStoryArgs>;

export const Playground: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    enableIcon: true,
  },
};
