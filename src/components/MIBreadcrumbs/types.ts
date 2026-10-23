import { BreadcrumbsOwnProps } from '@mui/material/Breadcrumbs/Breadcrumbs';
import { LinkProps } from '@mui/material/Link';
import { TypographyProps } from '@mui/material/Typography';
import { ComponentPropsWithoutRef, ReactElement } from 'react';

type MIBreadcrumbsVariant = 'extended' | 'compact';

export interface MIBreadcrumbsProps
  extends ComponentPropsWithoutRef<'nav'>, Pick<BreadcrumbsOwnProps, 'sx'> {
  /**
   * Array di componenti MIBreadcrumbItem
   * L'ordine degli elementi è importante e deve rispecchiare l'ordine gerarchico di navigazione.
   * Esempio:
   * <MIBreadcrumbs>
   *  <MIBreadcrumbItem label="Home" href="/" />
   *  <MIBreadcrumbItem label="Elenco Ricevute" href="/ricevute" />
   *  <MIBreadcrumbItem label="Dettaglio Ricevuta" current/>
   * </MIBreadcrumbs>
   */
  children?: Array<ReactElement<MIBreadcrumbItemProps>>;
  /**
   * Etichetta del bottone "Indietro".
   * Visibile sempre nella variante 'mobileOnly',
   * altrimenti visibile per risoluzioni mobile.
   * @default "Indietro"
   * - utilizzare string vuota per nascondere l'etichetta e mostrare solo l'icona di back
   * - oppure è possibile valorizzare la prop per gestire le traduzioni
   */
  backButtonLabel?: string;
  /**
   * Callback che viene eseguita quando il bottone "Indietro" viene cliccato.
   * @default () => window.history.back()
   */
  backButtonAction?: () => void;
  /**
   * Variante delle breadcrumbs
   * @default "extended"
   * - "extended": breadcrumbs responsive per mobile e desktop
   * - "compact": viene mostrato solo il pulsante indietro e i children del breadcrumb vengono omessi (se presenti)
   */
  variant?: MIBreadcrumbsVariant;
}

type BaseMIBreadcrumbItemProps = {
  label: string;
  type?: 'regular' | 'back';
};

type CurrentBreadcrumbItemProps = BaseMIBreadcrumbItemProps &
  Pick<TypographyProps, 'sx'> & {
    current: true;
    href?: never;
    onClick?: never;
    target?: never;
    rel?: never;
  };

type LinkBreadcrumbItemProps = BaseMIBreadcrumbItemProps &
  Pick<LinkProps, 'href' | 'target' | 'rel' | 'sx'> & {
    current?: false;
    onClick?: never;
  };

type ActionBreadcrumbItemProps = BaseMIBreadcrumbItemProps &
  Pick<LinkProps, 'sx'> & {
    current?: false;
    onClick: () => void;
    href?: never;
    target?: never;
    rel?: never;
  };

export type MIBreadcrumbItemProps =
  | CurrentBreadcrumbItemProps
  | LinkBreadcrumbItemProps
  | ActionBreadcrumbItemProps;
