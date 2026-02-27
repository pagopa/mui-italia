import { useState } from 'react';
import { Sidenav } from '../Sidenav';
// import { InteropSidebarItems } from './InteropSidebarItems';
// import { useGetSidebarItems } from './useGetSidebarItems';

export const InteropSidebar: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  //   const interopRoutes = useGetSidebarItems();
  const [open, setIsOpen] = useState(true);

  return (
    <Sidenav
      labelMobile="navigation menu" // TODO understand how to translate this string
      mobile={mobile}
      open={open}
      onSidenavOpen={setIsOpen}
    >
      {/* <InteropSidebarItems routes={interopRoutes} /> */}test
    </Sidenav>
  );
};
