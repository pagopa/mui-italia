type BreadcrumbsVariant = 'default' | 'wizard';

export interface MIBreadcrumbsProps {
  breadcrumbs?: MIBreadcrumb[];
  /**
   * Etichetta del bottone "Indietro"
   * @default "Indietro"
   * utilizzare string vuota per nascondere l'etichetta e mostrare solo l'icona di back
   * oppure è possibile valorizzare la prop per gestire le traduzioni 
   */
  backButtonLabel?: string;
  /**
   * Variante del breadcrumb
   * @default "default"
   * - "default": breadcrumb standard
   * - "wizard": breadcrumb con bottone "Indietro"
   */
  variant?: BreadcrumbsVariant;
}


export interface MIBreadcrumb {
  label: string;
  showBackButton?: boolean;
}