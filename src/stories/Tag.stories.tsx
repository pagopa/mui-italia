import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import type { SvgIconProps } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Tag, TagProps } from '@components/Tag';
import type { Variants as TagVariants } from '../components/Tag/Tag';

type IconName = 'none' | 'star' | 'attachFile' | 'localOffer';

type TagStoryArgs = TagProps & {
  iconName: IconName;
  customIconColor?: string;
  customBorderColor?: string;
};

const iconMap: Record<IconName, ComponentType<SvgIconProps> | undefined> = {
  none: undefined,
  star: StarRoundedIcon,
  attachFile: AttachFileRoundedIcon,
  localOffer: LocalOfferRoundedIcon,
};

const semanticVariants = ['info', 'warning', 'error', 'success'] as const;

type SemanticVariant = (typeof semanticVariants)[number];

const isSemanticVariant = (variant: TagVariants): variant is SemanticVariant =>
  semanticVariants.includes(variant as SemanticVariant);

const getValue = (args: TagStoryArgs): string => ('value' in args ? args.value : 'Tag Content');

const getMode = (args: TagStoryArgs): 'truncate' | 'wrap' | undefined =>
  'mode' in args ? args.mode : undefined;

const getDefaultSlotProps = (customIconColor?: string, customBorderColor?: string) => {
  const slotProps = {
    ...(customBorderColor ? { root: { borderColor: customBorderColor } } : {}),
    ...(customIconColor ? { icon: { color: customIconColor } } : {}),
  };

  return Object.keys(slotProps).length > 0 ? slotProps : undefined;
};

const renderTag = (args: TagStoryArgs) => {
  const { iconName, customIconColor, customBorderColor } = args;
  const variant = args.variant ?? 'default';
  const selectedIcon = iconMap[iconName];
  const ariaLabel = args['aria-label'];

  if (variant === 'only-icon') {
    return (
      <Tag
        variant="only-icon"
        icon={selectedIcon ?? AttachFileRoundedIcon}
        aria-label={ariaLabel}
        slotProps={getDefaultSlotProps(customIconColor, undefined)}
      />
    );
  }

  if (isSemanticVariant(variant)) {
    return (
      <Tag variant={variant} value={getValue(args)} mode={getMode(args)} aria-label={ariaLabel} />
    );
  }

  return (
    <Tag
      variant="default"
      value={getValue(args)}
      mode={getMode(args)}
      icon={selectedIcon}
      aria-label={ariaLabel}
      slotProps={getDefaultSlotProps(customIconColor, customBorderColor)}
    />
  );
};

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'value',
        'variant',
        'mode',
        'iconName',
        'customIconColor',
        'customBorderColor',
        'aria-label',
      ],
    },
  },
  args: {
    value: 'Tag Content',
    variant: 'default',
    mode: undefined,
    iconName: 'star',
    customIconColor: '',
    customBorderColor: '',
    'aria-label': undefined,
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Testo visualizzato nel Tag. Non è disponibile per la variante only-icon.',
      if: { arg: 'variant', neq: 'only-icon' },
    },
    variant: {
      options: ['default', 'info', 'warning', 'error', 'success', 'only-icon'],
      control: { type: 'select' },
      description: 'Variante visiva del Tag.',
    },
    mode: {
      options: [undefined, 'truncate', 'wrap'],
      control: { type: 'select' },
      description:
        'Gestione del testo quando il valore supera lo spazio disponibile: truncate o wrap.',
    },
    iconName: {
      options: ['none', 'star', 'attachFile', 'localOffer'],
      control: { type: 'select' },
      description:
        'Controllo Storybook: seleziona una delle icone di esempio da passare alla prop icon.',
      table: {
        category: 'Storybook controls',
      },
    },
    customIconColor: {
      control: { type: 'color' },
      description:
        'Controllo Storybook: imposta slotProps.icon.color per le varianti default e only-icon.',
      table: {
        category: 'Storybook controls',
      },
    },
    customBorderColor: {
      control: { type: 'color' },
      description:
        'Controllo Storybook: imposta slotProps.root.borderColor per la variante default.',
      table: {
        category: 'Storybook controls',
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description:
        'Etichetta accessibile. È particolarmente rilevante quando il Tag mostra solo un’icona.',
    },
  },
  render: renderTag,
} satisfies Meta<TagStoryArgs>;

export default meta;

type Story = StoryObj<TagStoryArgs>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap alignItems="center">
      <Tag variant="default" value="Default" icon={StarRoundedIcon} />
      <Tag variant="info" value="Info" />
      <Tag variant="warning" value="Warning" />
      <Tag variant="error" value="Error" />
      <Tag variant="success" value="Success" />
      <Tag variant="only-icon" icon={AttachFileRoundedIcon} aria-label="Allegato" />
    </Stack>
  ),
};

export const DefaultCustomization: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2">
        Personalizzazione della variante default tramite slotProps.
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Tag
          variant="default"
          value="Icona blu"
          icon={StarRoundedIcon}
          slotProps={{
            icon: { color: '#0073E6' },
          }}
        />

        <Tag
          variant="default"
          value="Bordo viola"
          icon={LocalOfferRoundedIcon}
          slotProps={{
            root: { borderColor: '#6B46C1' },
          }}
        />

        <Tag
          variant="default"
          value="Icona e bordo"
          icon={AttachFileRoundedIcon}
          slotProps={{
            root: { borderColor: '#D97706' },
            icon: { color: '#D97706' },
          }}
        />
      </Stack>
    </Stack>
  ),
};

export const ValueModes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack spacing={3}>
      <Box
        width="220px"
        p={2}
        sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}
      >
        <Typography variant="body2" mb={1}>
          mode="truncate"
        </Typography>
        <Tag
          variant="default"
          icon={AttachFileRoundedIcon}
          value="Valore molto lungo che viene troncato quando lo spazio disponibile è limitato"
          mode="truncate"
        />
      </Box>

      <Box
        width="220px"
        p={2}
        sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1 }}
      >
        <Typography variant="body2" mb={1}>
          mode="wrap"
        </Typography>
        <Tag
          variant="default"
          icon={AttachFileRoundedIcon}
          value="Valoremoltolungochepuòandareacapoquandolospaceèlimitato"
          mode="wrap"
        />
      </Box>
    </Stack>
  ),
};

export const OnlyIcon: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Tag variant="only-icon" icon={AttachFileRoundedIcon} aria-label="Allegato" />
      <Tag
        variant="only-icon"
        icon={StarRoundedIcon}
        aria-label="Preferito"
        slotProps={{
          icon: { color: '#0073E6' },
        }}
      />
    </Stack>
  ),
};
