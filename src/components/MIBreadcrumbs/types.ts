
import { BreadcrumbsOwnProps } from '@mui/material/Breadcrumbs/Breadcrumbs';
import { ReactElement } from 'react';

type MIBreadcrumbsVariant = 'extended' | 'compact';

export interface MIBreadcrumbsProps extends Pick<BreadcrumbsOwnProps, 'children'> {
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
  children?: ReactElement<MIBreadcrumbItemProps>[];
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

export interface MIBreadcrumbItemProps {
  /**
   * Etichetta del breadcrumb.
   */
  label: string;
  /**
   * Callback che viene eseguita quando l'elemento viene cliccato.
   * Se non specificato, l'elemento non sarà cliccabile.
   */
  onClick?: () => void;
  /**
   * Target dell'elemento (solo se href è specificato).
   */
  target?: React.HTMLAttributeAnchorTarget;
  /**
   * URL a cui punta l'elemento (solo se onClick non è specificato).
   */
  href?: string;
  /**
   * Se true, l'elemento è l'elemento corrente (non cliccabile e con stile non attivo).
   * @default false
   */
  current?: boolean;
  /**
   * Tipo di elemento.
   * @default "regular"
   * - "regular": elemento regolare
   * - "back": elemento di tipo "back"
   */
  type?: 'regular' | 'back';
}