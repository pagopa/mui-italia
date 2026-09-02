import {
  AccountBalance as AccountBalanceIcon,
  EmojiObjectsOutlined as EmojiObjectsOutlinedIcon,
  HowToReg as HowToRegIcon,
  SaveAlt as SaveAltIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  FormControlLabel,
  Radio,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps, FC } from 'react';

import { MIBoxedModule, MIBoxedModuleTitle } from '@components/MIBoxedModule';
import { MIButton } from '@components/MIButton';
import { MIChip } from '@components/MIChip';

type MIBoxedModuleStoryArgs = ComponentProps<typeof MIBoxedModule> & {
  title?: string;
  content?: string;
  enableIcon?: boolean;
  enableAction?: boolean;
  loadingLabel?: string;
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
    layout: 'padded',
    controls: {
      include: [
        'loading',
        'loadingLabel',
        'title',
        'content',
        'enableIcon',
        'enableAction',
        'direction',
      ],
    },
  },
  args: {
    loading: false,
    loadingLabel: 'Content loading, please wait...',
    title: 'Product title',
    content: 'Description',
    enableIcon: true,
    enableAction: true,
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Mostra lo stato di caricamento del modulo.',
      table: {
        category: 'MIBoxedModule',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description:
        'Direzione del contenuto interno. Se non valorizzata, il componente usa horizontal su desktop e vertical su mobile.',
      table: {
        category: 'MIBoxedModule',
      },
    },
    loadingLabel: {
      control: { type: 'text' },
      description:
        'Controllo Storybook: testo usato come localeText.loadingLabel durante lo stato di caricamento.',
      table: {
        category: 'Storybook controls',
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato come titolo del modulo.',
      table: {
        category: 'Storybook controls',
      },
    },
    content: {
      control: { type: 'text' },
      description: 'Controllo Storybook: testo usato come children del componente.',
      table: {
        category: 'Storybook controls',
      },
    },
    enableIcon: {
      control: { type: 'boolean' },
      description: "Controllo Storybook: abilita o disabilita l'icona.",
      table: {
        category: 'Storybook controls',
      },
    },
    enableAction: {
      control: { type: 'boolean' },
      description: "Controllo Storybook: abilita o disabilita l'action.",
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
    slots: {
      control: false,
      table: {
        disable: true,
      },
    },
    localeText: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  render: function RenderWithState({
    content,
    enableIcon,
    title,
    children,
    enableAction,
    loadingLabel,
    loading,
    direction,
    ...props
  }) {
    const theme = useTheme();

    const boxedContent = content ?? children;
    const icon = enableIcon ? <BoxedIcon /> : undefined;
    const action = enableAction ? <BoxedAction /> : undefined;

    return (
      <MIBoxedModule
        {...props}
        loading={loading}
        direction={direction}
        icon={icon}
        action={action}
        localeText={{ loadingLabel }}
      >
        {title && <MIBoxedModuleTitle>{title}</MIBoxedModuleTitle>}

        {boxedContent && (
          <Box>
            {boxedContent}

            <Stack direction="row" sx={{ alignItems: 'center', mt: 1 }}>
              <EmojiObjectsOutlinedIcon htmlColor={theme.colors.purple[500]} fontSize="small" />
              <Typography variant="caption-semibold" color={theme.colors.purple[500]}>
                Suggested because you are already client
              </Typography>
            </Stack>
          </Box>
        )}
      </MIBoxedModule>
    );
  },
};

export default meta;

type Story = StoryObj<MIBoxedModuleStoryArgs>;

export const Playground: Story = {};

export const NoTitle: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: function RenderWithState() {
    const theme = useTheme();

    return (
      <MIBoxedModule
        action={<SaveAltIcon htmlColor={theme.colors.blue[500]} />}
        direction="horizontal"
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}
        >
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
            Codice avviso
          </Typography>
          <Typography
            variant="caption-semibold"
            color={theme.colors.neutral.grey[700]}
            sx={{ mr: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
          >
            0000 0000 0000 0000 00
          </Typography>
          <MIChip label="Pagato" color="success" />
        </Stack>
      </MIBoxedModule>
    );
  },
};

export const ForceDirection: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: function RenderWithState() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const Action = () => (
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={3}
        sx={{
          justifyContent: 'flex-end',
          mt: 3,
        }}
      >
        <MIButton endIcon={<SaveAltIcon />} variant="text" fullWidth={isMobile}>
          Scarica documento
        </MIButton>
        <MIButton fullWidth={isMobile}>Paga 774,00 €</MIButton>
      </Stack>
    );

    return (
      <MIBoxedModule action={<Action />} direction="vertical">
        <MIBoxedModuleTitle>0000 0000 0000 0000 00</MIBoxedModuleTitle>

        <Stack direction="row" sx={{ mt: '6px' }}>
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
            Oggetto
          </Typography>
          <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
            Accertamento TARI 2025 - 00016/2026
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ mt: '6px' }}>
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
            Pagato il
          </Typography>
          <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
            12/04/2026
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ alignItems: 'center', mt: '6px' }}>
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
            Status
          </Typography>
          <MIChip label="Pagato" color="success" />
        </Stack>
      </MIBoxedModule>
    );
  },
};

export const Loading: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    loading: true,
    localeText: {
      loadingLabel: 'Caricamento modulo in corso',
    },
  },
};

export const CustomSkeleton: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    loading: true,
    localeText: {
      loadingLabel: 'Caricamento riepilogo pagamento in corso',
    },
    slots: {
      skeleton: () => (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', flex: '1 0 0' }}>
            <Skeleton variant="rounded" width="196px" height="23px" sx={{ borderRadius: '8px' }} />

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Skeleton
                variant="rounded"
                width="79px"
                height="15px"
                sx={{ borderRadius: '8px', mr: 2, my: 0 }}
              />
              <Skeleton
                variant="rounded"
                width="160px"
                height="15px"
                sx={{ borderRadius: '8px' }}
              />
            </Box>

            <Skeleton variant="rounded" width="137px" height="15px" sx={{ borderRadius: '8px' }} />
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Skeleton variant="rounded" width="79px" height="23px" sx={{ borderRadius: '8px' }} />
              <Skeleton
                variant="rounded"
                width="120px"
                height="15px"
                sx={{ borderRadius: '8px' }}
              />
            </Box>
            <Skeleton variant="circular" width="22px" height="22px" />
          </Box>
        </Box>
      ),
    },
  },
};

export const ComplexContent: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: function RenderWithState() {
    const theme = useTheme();

    const radioLabel = (
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}
      >
        <Box sx={{ flex: '1 1 auto' }}>
          <MIBoxedModuleTitle>Payment object</MIBoxedModuleTitle>

          <Box>
            <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
              Codice avviso
            </Typography>
            <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
              0000 0000 0000 0000 00
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" color={theme.colors.neutral.grey[700]} sx={{ mr: 0.5 }}>
              Scade il
            </Typography>
            <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
              [gg/mm/aaaa]
            </Typography>
          </Box>

          <Stack direction="row" sx={{ alignItems: 'center', mr: 0.5 }}>
            <HowToRegIcon htmlColor={theme.colors.purple[500]} fontSize="small" />
            <Typography variant="caption-semibold" color={theme.colors.purple[500]}>
              Sei già cliente
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            textAlign: 'right',
            flexShrink: 0,
            width: { xs: '100%', md: 'auto' },
            position: 'relative',
            left: { xs: '35px', md: 0 },
          }}
        >
          <Typography
            variant="caption-semibold"
            color={theme.colors.blue[500]}
            sx={{
              fontSize: '1rem',
              display: 'block',
            }}
          >
            398,50 €
          </Typography>
          <Typography
            variant="caption-semibold"
            color={theme.colors.neutral.grey[700]}
            sx={{ fontSize: '0.75rem' }}
          >
            Costi di notifica inclusi
          </Typography>
        </Box>
      </Stack>
    );

    return (
      <MIBoxedModule>
        <FormControlLabel
          control={<Radio />}
          label={radioLabel}
          labelPlacement="start"
          sx={{
            alignItems: { xs: 'flex-start', md: 'center' },
            width: '100%',
            justifyContent: 'space-between',
            '& .MuiFormControlLabel-label': {
              width: '100%',
            },
          }}
        />
      </MIBoxedModule>
    );
  },
};
