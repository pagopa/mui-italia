/* import { useState } from "react"; */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Settings as SettingsIcon } from "@mui/icons-material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { PreHeader, RootLinkType, JwtUser } from "./PreHeader";

export default {
  title: "Components/PreHeader",
  component: PreHeader,
  decorators: [
    (Story) => (
      <div style={{ padding: 0, backgroundColor: "#F5F5F5" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as ComponentMeta<typeof PreHeader>;

/*
User info
*/
const user: JwtUser = {
  id: "1",
  name: "Ermenegildo",
  surname: "Zegna",
  email: "mario.rossi@gmail.com",
};

/*
Links Section
*/
const pagoPALink: RootLinkType = {
  label: "PagoPA S.p.A.",
  href: "https://www.pagopa.it/",
  ariaLabel: "Link: vai al sito di PagoPA S.p.A.",
  title: "Sito di PagoPA S.p.A.",
};

export const LoggedOut: ComponentStory<typeof PreHeader> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <PreHeader
    rootLink={pagoPALink}
    loggedUser={false}
    onAssistanceClick={() => {
      console.log("Clicked/Tapped on Assistance");
    }}
    onLogin={() => {
      console.log("User login");
    }}
    /*
    subHeaderLeftComponent={
      <Typography component="span" variant="h5" fontWeight={700}>
        Interoperabilità
      </Typography>
    }
    subHeaderRightComponent={
      doesRouteAllowTwoColumnsLayout(history.location) && party !== null ? (
        <PartySelect />
      ) : null
    } */
    userActions={[
      {
        id: "logout",
        label: "Logout",
        onClick: () => {
          console.log("User logged out");
        },
        icon: <SettingsIcon fontSize="small" color="inherit" sx={{ mr: 1 }} />,
      },
    ]}
  />
);

export const LoggedIn: ComponentStory<typeof PreHeader> = () => (
  /* const { lang, setLang } = useState<LangCode>("it"); */

  <PreHeader
    rootLink={pagoPALink}
    loggedUser={user}
    /*  loggedUser={party !== null ? user : undefined} */
    onAssistanceClick={() => {
      console.log("Clicked/Tapped on Assistance");
    }}
    onLogin={() => {
      console.log("User login");
    }}
    /*
    subHeaderLeftComponent={
      <Typography component="span" variant="h5" fontWeight={700}>
        Interoperabilità
      </Typography>
    }
    subHeaderRightComponent={
      doesRouteAllowTwoColumnsLayout(history.location) && party !== null ? (
        <PartySelect />
      ) : null
    } */
    userActions={[
      {
        id: "profile",
        label: "Profilo",
        onClick: () => {
          console.log("Clicked/Tapped on Profile");
        },
        icon: <SettingsIcon fontSize="small" color="inherit" />,
      },
      {
        id: "logout",
        label: "Esci",
        onClick: () => {
          console.log("User logged out");
        },
        icon: <LogoutRoundedIcon fontSize="small" color="inherit" />,
      },
    ]}
  />
);
