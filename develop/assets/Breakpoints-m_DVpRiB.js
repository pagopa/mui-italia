import{j as e}from"./iframe-rw-T87Ps.js";import{u as r,M as d}from"./blocks-BCoOsg7x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundation/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Questa pagina documenta i breakpoint responsive usati da ",e.jsx(n.code,{children:"@pagopa/mui-italia"}),"."]}),`
`,e.jsx(n.p,{children:"I breakpoint definiscono le soglie di larghezza viewport usate dal tema MUI per costruire layout responsive."}),`
`,e.jsx(n.p,{children:"Sono disponibili tramite:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`theme.breakpoints;
`})}),`
`,e.jsxs(n.p,{children:["e possono essere usati sia negli oggetti ",e.jsx(n.code,{children:"sx"}),", sia negli styled component, sia con ",e.jsx(n.code,{children:"useMediaQuery"}),"."]}),`
`,e.jsx(n.h2,{id:"valori",children:"Valori"}),`
`,e.jsxs(n.p,{children:["I breakpoint sono gli stessi nel tema corrente e in ",e.jsx(n.code,{children:"themeNext"}),"."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Breakpoint"}),e.jsx("th",{children:"Valore minimo"}),e.jsx("th",{children:"Uso tipico"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xs"})}),e.jsx("td",{children:e.jsx("code",{children:"0px"})}),e.jsx("td",{children:"Mobile e viewport molto stretti"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sm"})}),e.jsx("td",{children:e.jsx("code",{children:"640px"})}),e.jsx("td",{children:"Mobile large / tablet piccoli"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"md"})}),e.jsx("td",{children:e.jsx("code",{children:"900px"})}),e.jsx("td",{children:"Tablet e layout intermedi"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"lg"})}),e.jsx("td",{children:e.jsx("code",{children:"1200px"})}),e.jsx("td",{children:"Desktop"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xl"})}),e.jsx("td",{children:e.jsx("code",{children:"1536px"})}),e.jsx("td",{children:"Desktop ampi"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xxl"})}),e.jsx("td",{children:e.jsx("code",{children:"1920px"})}),e.jsx("td",{children:"Schermi molto ampi"})]})]})]}),`
`,e.jsx(n.p,{children:"La configurazione nel tema è:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`breakpoints: {
  values: {
    xs: 0,
    sm: 640,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1920,
  },
}
`})}),`
`,e.jsxs(n.h2,{id:"breakpoint-custom-xxl",children:["Breakpoint custom ",e.jsx(n.code,{children:"xxl"})]}),`
`,e.jsxs(n.p,{children:["Oltre ai breakpoint standard di MUI, il tema aggiunge ",e.jsx(n.code,{children:"xxl"}),"."]}),`
`,e.jsx(n.p,{children:"Questo breakpoint è disponibile perché il progetto estende i breakpoint MUI tramite override TypeScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}
`})}),`
`,e.jsx(n.p,{children:"Puoi quindi usarlo come gli altri breakpoint:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box
  sx={{
    px: {
      xs: 2,
      md: 4,
      xxl: 8,
    },
  }}
/>
`})}),`
`,e.jsxs(n.h2,{id:"uso-con-sx",children:["Uso con ",e.jsx(n.code,{children:"sx"})]}),`
`,e.jsxs(n.p,{children:["Il modo più comune per usare i breakpoint è attraverso la sintassi responsive di MUI negli oggetti ",e.jsx(n.code,{children:"sx"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box
  sx={{
    display: 'grid',
    gap: {
      xs: 2,
      md: 3,
      lg: 4,
    },
    gridTemplateColumns: {
      xs: 'repeat(4, 1fr)',
      md: 'repeat(8, 1fr)',
      lg: 'repeat(12, 1fr)',
    },
  }}
/>
`})}),`
`,e.jsx(n.p,{children:"In questo esempio:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["da ",e.jsx(n.code,{children:"xs"})," in su il layout usa 4 colonne;"]}),`
`,e.jsxs(n.li,{children:["da ",e.jsx(n.code,{children:"md"})," in su passa a 8 colonne;"]}),`
`,e.jsxs(n.li,{children:["da ",e.jsx(n.code,{children:"lg"})," in su passa a 12 colonne."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"uso-con-themebreakpointsup",children:["Uso con ",e.jsx(n.code,{children:"theme.breakpoints.up"})]}),`
`,e.jsxs(n.p,{children:["Usa ",e.jsx(n.code,{children:"theme.breakpoints.up()"})," quando devi applicare uno stile da una soglia in su."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box
  sx={(theme) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
  })}
/>
`})}),`
`,e.jsx(n.p,{children:"Equivale a:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["padding ",e.jsx(n.code,{children:"2"})," sotto ",e.jsx(n.code,{children:"md"}),";"]}),`
`,e.jsxs(n.li,{children:["padding ",e.jsx(n.code,{children:"4"})," da ",e.jsx(n.code,{children:"md"})," in su;"]}),`
`,e.jsxs(n.li,{children:["padding ",e.jsx(n.code,{children:"6"})," da ",e.jsx(n.code,{children:"lg"})," in su."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"uso-con-themebreakpointsdown",children:["Uso con ",e.jsx(n.code,{children:"theme.breakpoints.down"})]}),`
`,e.jsxs(n.p,{children:["Usa ",e.jsx(n.code,{children:"theme.breakpoints.down()"})," quando devi applicare uno stile fino a una certa soglia."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box
  sx={(theme) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  })}
/>
`})}),`
`,e.jsx(n.p,{children:"Questo è utile quando il layout desktop è quello di default e vuoi aggiungere un comportamento specifico per mobile."}),`
`,e.jsxs(n.h2,{id:"uso-con-usemediaquery",children:["Uso con ",e.jsx(n.code,{children:"useMediaQuery"})]}),`
`,e.jsxs(n.p,{children:["Usa ",e.jsx(n.code,{children:"useMediaQuery"})," quando il comportamento React deve cambiare in base al breakpoint, non solo lo stile."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useMediaQuery, useTheme } from '@mui/material';

const Component = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};
`})}),`
`,e.jsx(n.p,{children:"Questo approccio è utile quando devi renderizzare strutture diverse, non solo cambiare CSS."}),`
`,e.jsx(n.p,{children:"Esempi presenti nel progetto:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.up('md'));
`})}),`
`,e.jsx(n.h2,{id:"uso-negli-styled-component",children:"Uso negli styled component"}),`
`,e.jsx(n.p,{children:"Negli styled component puoi usare i breakpoint tramite il tema."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(6),
  },
}));
`})}),`
`,e.jsx(n.h2,{id:"tema-corrente-e-theme-next",children:"Tema corrente e Theme Next"}),`
`,e.jsxs(n.p,{children:["I breakpoint non cambiano tra tema corrente e ",e.jsx(n.code,{children:"themeNext"}),"."]}),`
`,e.jsx(n.p,{children:"Entrambi i temi definiscono gli stessi valori:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`xs: 0;
sm: 640;
md: 900;
lg: 1200;
xl: 1536;
xxl: 1920;
`})}),`
`,e.jsx(n.p,{children:"Questo significa che il comportamento responsive dei layout resta coerente quando si passa da un tema all’altro."}),`
`,e.jsxs(n.p,{children:["La differenza tra tema corrente e ",e.jsx(n.code,{children:"themeNext"})," riguarda altri aspetti del tema, come palette semantica e alcuni token visuali, ma non le soglie responsive."]}),`
`,e.jsx(n.h2,{id:"regole-di-utilizzo",children:"Regole di utilizzo"}),`
`,e.jsx(n.h3,{id:"usa-i-breakpoint-del-tema",children:"Usa i breakpoint del tema"}),`
`,e.jsx(n.p,{children:"Evita media query hardcoded."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Da evitare
<Box sx={{ '@media (min-width: 900px)': { padding: 32 } }} />

// Preferibile
<Box
  sx={(theme) => ({
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  })}
/>
`})}),`
`,e.jsx(n.p,{children:"Usare i breakpoint del tema rende il codice più leggibile e mantiene i componenti allineati al Design System."}),`
`,e.jsxs(n.h3,{id:"usa-sx-per-variazioni-di-stile",children:["Usa ",e.jsx(n.code,{children:"sx"})," per variazioni di stile"]}),`
`,e.jsxs(n.p,{children:["Se cambia solo lo stile, preferisci la sintassi responsive di ",e.jsx(n.code,{children:"sx"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Stack
  direction={{
    xs: 'column',
    md: 'row',
  }}
  spacing={{
    xs: 2,
    md: 4,
  }}
/>
`})}),`
`,e.jsxs(n.h3,{id:"usa-usemediaquery-solo-quando-cambia-il-rendering",children:["Usa ",e.jsx(n.code,{children:"useMediaQuery"})," solo quando cambia il rendering"]}),`
`,e.jsxs(n.p,{children:["Usa ",e.jsx(n.code,{children:"useMediaQuery"})," quando devi cambiare la struttura del componente."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

return isMobile ? <MobileStepper /> : <DesktopStepper />;
`})}),`
`,e.jsxs(n.p,{children:["Se devi solo cambiare padding, direction, gap o display, preferisci ",e.jsx(n.code,{children:"sx"}),"."]}),`
`,e.jsx(n.h3,{id:"parti-da-mobile",children:"Parti da mobile"}),`
`,e.jsx(n.p,{children:"Quando possibile, definisci prima lo stile mobile e poi aggiungi override progressivi sui breakpoint superiori."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box
  sx={{
    px: {
      xs: 2,
      sm: 3,
      md: 4,
      lg: 6,
    },
  }}
/>
`})}),`
`,e.jsx(n.p,{children:"Questo rende più chiara la progressione responsive e riduce gli override."}),`
`,e.jsx(n.h3,{id:"evita-breakpoint-non-necessari",children:"Evita breakpoint non necessari"}),`
`,e.jsx(n.p,{children:"Non è necessario specificare ogni breakpoint se il valore non cambia."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Da evitare
<Box
  sx={{
    px: {
      xs: 2,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
    },
  }}
/>

// Preferibile
<Box
  sx={{
    px: {
      xs: 2,
      md: 4,
    },
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"esempio-completo",children:"Esempio completo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const ResponsiveExample = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xxl: 8,
        },
        py: {
          xs: 3,
          md: 6,
        },
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        spacing={{
          xs: 2,
          md: 4,
        }}
      >
        <Typography variant="h2">Layout responsive</Typography>

        {isDesktop && (
          <Typography variant="body1">Questo testo viene renderizzato solo da lg in su.</Typography>
        )}
      </Stack>
    </Box>
  );
};
`})})]})}function x(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
