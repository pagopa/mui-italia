import type * as Icons from '@mui/icons-material';

type BreadcrumbsVariant = 'responsive' | 'mobileOnly';

export type MIIconName = keyof typeof Icons;

export interface MIBreadcrumbsProps {
  /**
   * Array di elementi delle breadcrumbs.
   * Ogni elemento rappresenta un elemento della gerarchia di navigazione.
   * L'ordine degli elementi è importante e deve rispecchiare l'ordine gerarchico di navigazione.
   * Esempio: Home - Elenco Ricevute - Dettaglio Ricevuta
   */
  elements?: MIBreadcrumbProps[];
  /**
   * Etichetta del bottone "Indietro".
   * Visibile sempre nella variante 'mobileOnly',
   * altrimenti visibile per risoluzioni mobile.
   * @default "Indietro"
   * - utilizzare string vuota per nascondere l'etichetta e mostrare solo l'icona di back
   * - oppure è possibile valorizzare la prop per gestire le traduzioni 
   */
  mobileButtonLabel?: string;
  /**
   * Nome dell'icona da importare da "@mui/icons-material" da usare nel bottone "Indietro".
   * @default "ArrowBack"
   */
  mobileButtonIcon?: MIIconName;
  /**
   * Variante del breadcrumb
   * @default "responsive"
   * - "responsive": breadcrumb responsive per mobile e desktop
   * - "mobileOnly": breadcrumb solo per mobile
   */
  variant?: BreadcrumbsVariant;
}

export interface MIBreadcrumbProps {
  label: string;
  /**
   * Callback che viene eseguita quando l'elemento viene cliccato.
   * Se non specificato, l'elemento non sarà cliccabile.
   */
  onClick?: () => void;
  target?: React.HTMLAttributeAnchorTarget;
  href?: string;
  /**
   * Nome dell'icona da importare da @mui/icons-material.
   * E.g. 'Home', 'ArrowBack', etc.
   */
  icon?: MIIconName;
  /**
   * Se true, l'elemento è disattivo (non cliccabile e con stile non attivo).
   * @default false
   */
  disabled?: boolean;
}