'use client';

import { ButtonNaked } from '@components/ButtonNaked';
import { Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import MUIPaper, { PaperProps as MUIPaperProps } from '@mui/material/Paper';
import { ElementType, HTMLAttributeAnchorTarget } from 'react';
import { MarginSxProps } from '@types';


type ButtonCTA = {
  label: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

type LinkCTA = {
  label: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

type PaperCTA = ButtonCTA | LinkCTA;

interface MIPaperCtaProps {
  cta: PaperCTA;
  ariaLabelledBy?: string;
  severity?: AllowedPaperSeverity;
  isMobile: boolean;
}

// Props shared by all variants
interface BasePaperProps extends Pick<MUIPaperProps, 'severity' | 'id'> {
  description: string;
  sx?: MarginSxProps;
}

// Default MIPaper variant (allows title and action)
interface DefaultPaperProps extends BasePaperProps {
  variant?: 'default';
  title?: string;
  action?: PaperCTA;
}

// Header MIPaper variant
interface HeaderPaperProps extends BasePaperProps {
  variant: 'header';
  title?: never;
  action?: never;
}

export type MIPaperProps = DefaultPaperProps | HeaderPaperProps;

type MUIBasePaperProps = Omit<MUIPaperProps, 'variant'>;

interface StyledPaperProps extends MUIBasePaperProps {
  variant: 'default' | 'header';
}

const StyledPaper = styled(MUIPaper as React.ComponentType<MUIBasePaperProps>, {
  // This prevents 'variant' from being written to the HTML DOM
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledPaperProps>(({ theme, severity = 'success', variant }) => {
  const severityPalette = theme.colors[severity];

  return {
    backgroundColor: severityPalette[100],
    justifyContent: variant === 'header' ? 'center' : 'flex-start',
    alignItems: variant === 'header' ? 'center' : 'flex-start',

    ...(variant === 'default' && {
      border: '1px solid',
      borderRadius: 8,
      padding: theme.spacing(2),
      borderColor: severityPalette[500],
    }),

    // different styles for the 'header' variant
    ...(variant === 'header' && {
      border: 'none',
      borderRadius: 0,
      width: 'auto',
      boxSizing: 'border-box',
      padding: '10px 16px !important', // Override MUI's default padding with !important
    }),

    [theme.breakpoints.down('sm')]: {
      alignItems: variant === 'header' ? 'center' : 'flex-start',
    },

    '& .MuiPaper-icon': {
      opacity: 1,
      alignItems: 'center',
      marginRight: theme.spacing(1),
      color: severityPalette[850],
    },

    '& .MuiPaper-message': {
      padding: 0,
      overflow: 'inherit',
      lineHeight: variant === 'header' ? '20px' : '22px',
      fontWeight:
        variant === 'header'
          ? theme.typography.fontWeightMedium
          : theme.typography.fontWeightRegular,
      fontSize: variant === 'header' ? '14px' : '16px',
      display: 'flex',
      flexDirection: 'column',
      overflowWrap: 'anywhere',
      wordBreak: 'break-word',
      color: severityPalette[850],
      flex: variant === 'header' ? '0 1 auto' : 1,
      width: variant === 'header' ? 'auto' : '100%',
    },
  };
});

export const MIPaper: React.FC<MIPaperProps> = ({
  severity,
  description,
  variant = 'default',
  title,
  action,
  sx,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledPaper severity={severity} icon={getIcon(severity)} variant={variant} sx={sx} {...rest}>
      <Stack direction={isMobile ? 'column' : 'row'} flex={1}>
        <Stack direction="column" flex={1} minWidth={0} gap={title ? '4px' : 0}>
          {title && <MUIPaperTitle color={getColor(theme, severity)}>{title}</MUIPaperTitle>}
          {description}
        </Stack>
        {action && <MIPaperCta cta={action} severity={severity} isMobile={isMobile} />}
      </Stack>
    </StyledPaper>
  );
};

const MIPaperCta = ({ cta, severity = 'success', isMobile }: Readonly<MIPaperCtaProps>) => {
  const isLink = 'href' in cta;

  let target: HTMLAttributeAnchorTarget | undefined;
  let rel: string | undefined;

  if (isLink) {
    target = cta.target ?? '_self';
    rel = target === '_blank' ? cta.rel ?? 'noopener noreferrer' : cta.rel;
  }

  const commonProps = {
    onClick: !isLink ? cta.onClick : undefined,
    component: (isLink ? 'a' : 'button') as ElementType,
    href: isLink ? cta.href : undefined,
    target,
    rel,
  };

  return (
    <ButtonNaked
      {...commonProps}
      sx={(theme) => ({
        pt: isMobile ? 2 : 0,
        minWidth: 'auto',
        fontWeight: 600,
        fontSize: '16px',
        textDecoration: 'none',
        alignSelf: isMobile ? 'flex-start' : 'center',
        paddingLeft: isMobile ? theme.spacing(0) : theme.spacing(8),
        color: theme.colors[severity][850],
      })}
    >
      {cta.label}
    </ButtonNaked>
  );
};
