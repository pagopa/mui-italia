import React from 'react';

export type SidenavContextProps = {
  /**
   *  Open state of the Sidenav
   */
  open: boolean;
  onSidenavOpen: (open: boolean) => void;
  mobile: boolean;
};

export function SidenavContext(name: string, defaultValue: SidenavContextProps) {
  const context = React.createContext<SidenavContextProps>(defaultValue);
  context.displayName = name;
  const useContext = () => React.useContext<SidenavContextProps>(context);
  return {
    useContext,
    Provider: context.Provider,
  } as const;
}
