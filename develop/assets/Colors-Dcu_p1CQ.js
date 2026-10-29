import{j as e,t as n}from"./iframe-5Wy2T5h3.js";import{u as s,M as c,C as l,a as o}from"./blocks-DevmtdjR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";function t(r){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundation/Colors"}),`
`,e.jsx(i.h1,{id:"colori",children:"Colori"}),`
`,e.jsxs(i.p,{children:["Questa pagina documenta il sistema colore usato da ",e.jsx(i.code,{children:"@pagopa/mui-italia"}),"."]}),`
`,e.jsx(i.p,{children:"Il sistema colore è diviso in due livelli distinti:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Colori primitivi"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Colori semantici"})}),`
`]}),`
`,e.jsx(i.p,{children:"Questa distinzione è importante perché non tutti i colori hanno lo stesso scopo."}),`
`,e.jsx(i.p,{children:"Un colore può essere semplicemente una tonalità disponibile nel design system, oppure può rappresentare un significato preciso nell’interfaccia, come “errore”, “successo”, “testo primario”, “sfondo” o “azione principale”."}),`
`,e.jsx(i.h2,{id:"indice",children:"Indice"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"#colori-primitivi",children:"Colori primitivi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#colori-primitivi-di-stato",children:"Colori primitivi di stato"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"#colori-semantici",children:"Colori semantici"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#palette-semantica-principale",children:"Palette semantica principale"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#colori-semantici-di-interazione",children:"Colori semantici di interazione"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#colori-semantici-di-stato",children:"Colori semantici di stato"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#colori-semantici-custom",children:"Colori semantici custom"})}),`
`]}),`
`]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#differenza-tra-colori-primitivi-e-colori-semantici",children:"Differenza tra colori primitivi e colori semantici"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"#theme-next-e-colori",children:"Theme Next e colori"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#cosa-non-cambia-con-theme-next",children:"Cosa non cambia con Theme Next"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#cosa-cambia-con-theme-next",children:"Cosa cambia con Theme Next"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#impatto-sui-componenti-mi",children:"Impatto sui componenti MI"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"#linee-guida-di-utilizzo",children:"Linee guida di utilizzo"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"#usa-themepalette-quando-il-colore-ha-un-significato-semantico",children:["Usa ",e.jsx(i.code,{children:"theme.palette"})," quando il colore ha un significato semantico"]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"#usa-themecolors-quando-ti-serve-una-tonalit%C3%A0-primitiva-specifica",children:["Usa ",e.jsx(i.code,{children:"theme.colors"})," quando ti serve una tonalità primitiva specifica"]})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#evita-colori-hardcoded",children:"Evita colori hardcoded"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#non-importare-direttamente-i-colori",children:"Non importare direttamente i colori"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"colori-primitivi",children:"Colori primitivi"}),`
`,e.jsxs(i.p,{children:["I ",e.jsx(i.strong,{children:"colori primitivi"})," sono le tonalità base definite dal design system."]}),`
`,e.jsx(i.p,{children:"Si chiamano “primitivi” perché non descrivono da soli un significato dell’interfaccia: sono semplicemente colori disponibili, organizzati in scale."}),`
`,e.jsx(i.p,{children:"Per esempio:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"blue[500]"})," è una specifica tonalità di blu;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"neutral.grey[700]"})," è una specifica tonalità di grigio;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"success[100]"})," è una specifica tonalità chiara della scala success;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"error[600]"})," è una specifica tonalità della scala error."]}),`
`]}),`
`,e.jsx(i.p,{children:"Questi colori rispondono alla domanda:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“Quale tonalità voglio usare?”"}),`
`]}),`
`,e.jsx(i.p,{children:"Non rispondono invece alla domanda:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“Che ruolo ha questo colore nell’interfaccia?”"}),`
`]}),`
`,e.jsxs(i.p,{children:["Per esempio, ",e.jsx(i.code,{children:"theme.colors.blue[500]"})," non significa automaticamente “colore primario”."]}),`
`,e.jsx(i.p,{children:"È solo una tonalità di blu. Potrebbe essere usata per un’icona, un bordo, un’illustrazione o un componente custom, ma non porta con sé un significato funzionale."}),`
`,e.jsx(i.p,{children:"I colori primitivi sono disponibili tramite:"}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:"theme.colors"})}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.colors.blue[500]"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.colors.neutral.grey[700]"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.colors.turquoise[50]"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.colors.success[850]"})}),`
`]}),`
`,e.jsx(i.p,{children:"Usa i colori primitivi quando stai costruendo un componente custom che non è già coperto da un componente MUI o da un ruolo semantico della palette."}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Box
  sx={(theme) => ({
    backgroundColor: theme.colors.blue[50],
    color: theme.colors.blue[850],
  })}
/>
`})}),`
`,e.jsxs(i.p,{children:["In questo esempio stiamo scegliendo direttamente due tonalità della scala ",e.jsx(i.code,{children:"blue"}),"."]}),`
`,e.jsxs(i.p,{children:["Questo è utile quando il design richiede una combinazione specifica di colori, ma bisogna fare attenzione: se il colore rappresenta un ruolo semantico dell’interfaccia, è preferibile usare ",e.jsx(i.code,{children:"theme.palette"}),"."]}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Neutral",subtitle:"Colori neutri di base.",colors:{black:n.colors.neutral.black,white:n.colors.neutral.white,850:n.colors.neutral.grey[850],700:n.colors.neutral.grey[700],650:n.colors.neutral.grey[650],450:n.colors.neutral.grey[450],300:n.colors.neutral.grey[300],200:n.colors.neutral.grey[200],100:n.colors.neutral.grey[100],50:n.colors.neutral.grey[50]}})," ",e.jsx(o,{title:"Blue",subtitle:"Scala primitiva blue.",colors:{850:n.colors.blue[850],600:n.colors.blue[600],500:n.colors.blue[500],400:n.colors.blue[400],300:n.colors.blue[300],200:n.colors.blue[200],150:n.colors.blue[150],100:n.colors.blue[100],50:n.colors.blue[50]}})," ",e.jsx(o,{title:"Turquoise",subtitle:"Scala primitiva turquoise.",colors:{850:n.colors.turquoise[850],600:n.colors.turquoise[600],500:n.colors.turquoise[500],300:n.colors.turquoise[300],150:n.colors.turquoise[150],100:n.colors.turquoise[100],50:n.colors.turquoise[50]}})," ",e.jsx(o,{title:"Blue Italia",subtitle:"Scala primitiva Blue Italia.",colors:{850:n.colors.blueitalia[850],600:n.colors.blueitalia[600],500:n.colors.blueitalia[500],400:n.colors.blueitalia[400],100:n.colors.blueitalia[100],50:n.colors.blueitalia[50]}}),e.jsx(o,{title:"Purple",subtitle:"Scala primitiva purple.",colors:{850:n.colors.purple[850],500:n.colors.purple[500],250:n.colors.purple[250],100:n.colors.purple[100],50:n.colors.purple[50]}})]}),`
`,e.jsx(i.h2,{id:"colori-primitivi-di-stato",children:"Colori primitivi di stato"}),`
`,e.jsx(i.p,{children:"Le scale seguenti rappresentano colori primitivi collegati agli stati."}),`
`,e.jsx(i.p,{children:"Non sono la stessa cosa di:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.info"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.success"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.warning"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.error"})}),`
`]}),`
`,e.jsx(i.p,{children:"Usa queste scale primitive quando un componente custom ha bisogno di una tonalità specifica."}),`
`,e.jsxs(i.p,{children:["Usa invece ",e.jsx(i.code,{children:"theme.palette.*"})," quando hai bisogno del ruolo semantico generico previsto da MUI."]}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Info",subtitle:"Scala primitiva info.",colors:{850:n.colors.info[850],700:n.colors.info[700],500:n.colors.info[500],400:n.colors.info[400],100:n.colors.info[100]}})," ",e.jsx(o,{title:"Success",subtitle:"Scala primitiva success.",colors:{850:n.colors.success[850],700:n.colors.success[700],500:n.colors.success[500],400:n.colors.success[400],100:n.colors.success[100]}})," ",e.jsx(o,{title:"Warning",subtitle:"Scala primitiva warning.",colors:{850:n.colors.warning[850],700:n.colors.warning[700],500:n.colors.warning[500],400:n.colors.warning[400],100:n.colors.warning[100]}}),e.jsx(o,{title:"Error",subtitle:"Scala primitiva error.",colors:{850:n.colors.error[850],600:n.colors.error[600],500:n.colors.error[500],400:n.colors.error[400],100:n.colors.error[100]}})]}),`
`,e.jsx(i.h2,{id:"colori-semantici",children:"Colori semantici"}),`
`,e.jsxs(i.p,{children:["I ",e.jsx(i.strong,{children:"colori semantici"})," sono colori che descrivono un ruolo o un significato nell’interfaccia."]}),`
`,e.jsxs(i.p,{children:["Si chiamano “semantici” perché il loro nome non indica solo una tonalità, ma comunica anche ",e.jsx(i.strong,{children:"a cosa serve quel colore"}),"."]}),`
`,e.jsx(i.p,{children:"Per esempio:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"primary"})," indica il colore principale dell’interfaccia;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"error"})," indica uno stato di errore;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"success"})," indica uno stato positivo o completato;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"warning"})," indica uno stato di attenzione;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"text.primary"})," indica il colore del testo principale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"background.paper"})," indica il colore di una superficie;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"divider"})," indica il colore dei separatori."]}),`
`]}),`
`,e.jsx(i.p,{children:"Questi colori rispondono alla domanda:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“Che ruolo ha questo colore nell’interfaccia?”"}),`
`]}),`
`,e.jsx(i.p,{children:"Non rispondono soltanto alla domanda:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“Che tonalità è?”"}),`
`]}),`
`,e.jsx(i.p,{children:"I colori semantici sono disponibili tramite:"}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:"theme.palette"})}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.primary.main"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.text.primary"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.background.paper"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.success.main"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"theme.palette.error.main"})}),`
`]}),`
`,e.jsx(i.p,{children:"Usa i colori semantici quando il colore rappresenta un significato dell’interfaccia."}),`
`,e.jsx(i.p,{children:"Esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Button color="primary">
  Continua
</Button>

<Box
  sx={(theme) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  })}
/>
`})}),`
`,e.jsx(i.p,{children:"In questo esempio non stiamo scegliendo manualmente una specifica tonalità di blu o grigio."}),`
`,e.jsx(i.p,{children:"Stiamo dicendo che il bottone usa il colore dell’azione primaria e che il box usa i colori semantici previsti per testo e background."}),`
`,e.jsx(i.p,{children:"Questo rende i componenti più coerenti, più facili da mantenere e più resistenti a eventuali cambiamenti futuri del tema."}),`
`,e.jsx(i.h2,{id:"palette-semantica-principale",children:"Palette semantica principale"}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Primary",subtitle:"Colore semantico principale per azioni primarie ed elementi ad alta enfasi.",colors:{main:n.palette.primary.main,light:n.palette.primary.light,dark:n.palette.primary.dark,contrastText:n.palette.primary.contrastText,100:n.palette.primary[100]}})," ",e.jsx(o,{title:"Secondary",subtitle:"Colore semantico secondario usato dai componenti MUI quando supportano color='secondary'.",colors:{main:n.palette.secondary.main,light:n.palette.secondary.light,dark:n.palette.secondary.dark,contrastText:n.palette.secondary.contrastText}})," ",e.jsx(o,{title:"Text",subtitle:"Colori semantici usati per testi e contenuti tipografici.",colors:{primary:n.palette.text.primary,secondary:n.palette.text.secondary,disabled:n.palette.text.disabled}})," ",e.jsx(o,{title:"Background",subtitle:"Colori semantici usati per sfondi di pagina e superfici.",colors:{paper:n.palette.background.paper,default:n.palette.background.default}}),e.jsx(o,{title:"Divider",subtitle:"Colore semantico per separatori e bordi generici.",colors:{divider:n.palette.divider}})]}),`
`,e.jsx(i.h2,{id:"colori-semantici-di-interazione",children:"Colori semantici di interazione"}),`
`,e.jsx(i.p,{children:"I colori di interazione sono usati da MUI per stati come hover, selected, focus e disabled."}),`
`,e.jsx(i.p,{children:"Usali quando devi implementare componenti custom che devono comportarsi in modo coerente con gli stati interattivi dei componenti MUI."}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Action",subtitle:"Colori generici per stati di interazione: hover, selected, disabled e focus.",colors:{active:n.palette.action.active,hover:n.palette.action.hover,selected:n.palette.action.selected,disabled:n.palette.action.disabled,disabledBackground:n.palette.action.disabledBackground,focus:n.palette.action.focus}}),e.jsx(o,{title:"Primary Action",subtitle:"Colori semantici custom per stati interattivi primari.",colors:{hover:n.palette.primaryAction.hover,selected:n.palette.primaryAction.selected}})]}),`
`,e.jsx(i.h2,{id:"colori-semantici-di-stato",children:"Colori semantici di stato"}),`
`,e.jsx(i.p,{children:"I colori semantici di stato sono i ruoli MUI generici:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"info"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"success"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"warning"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"error"})}),`
`]}),`
`,e.jsx(i.p,{children:"Usali quando il componente esprime uno stato semantico."}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Alert severity="success">
  Operazione completata
</Alert>

<Chip color="error" label="Errore" />
`})}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"Info",subtitle:"Colore semantico info usato dai componenti MUI e dagli stati informativi generici.",colors:{main:n.palette.info.main,light:n.palette.info.light,dark:n.palette.info.dark,extraLight:n.palette.info.extraLight,contrastText:n.palette.info.contrastText,100:n.palette.info[100],850:n.palette.info[850]}})," ",e.jsx(o,{title:"Success",subtitle:"Colore semantico success usato dai componenti MUI e dagli stati positivi generici.",colors:{main:n.palette.success.main,light:n.palette.success.light,dark:n.palette.success.dark,extraLight:n.palette.success.extraLight,contrastText:n.palette.success.contrastText,100:n.palette.success[100],850:n.palette.success[850]}})," ",e.jsx(o,{title:"Warning",subtitle:"Colore semantico warning usato dai componenti MUI e dagli stati di attenzione generici.",colors:{main:n.palette.warning.main,light:n.palette.warning.light,dark:n.palette.warning.dark,extraLight:n.palette.warning.extraLight,contrastText:n.palette.warning.contrastText,100:n.palette.warning[100],850:n.palette.warning[850]}}),e.jsx(o,{title:"Error",subtitle:"Colore semantico error usato dai componenti MUI e dagli stati di errore generici.",colors:{main:n.palette.error.main,light:n.palette.error.light,dark:n.palette.error.dark,extraLight:n.palette.error.extraLight,contrastText:n.palette.error.contrastText,100:n.palette.error[100],850:n.palette.error[850]}})]}),`
`,e.jsx(i.h2,{id:"colori-semantici-custom",children:"Colori semantici custom"}),`
`,e.jsx(i.p,{children:"I colori seguenti sono colori semantici custom aggiunti alla palette MUI."}),`
`,e.jsx(i.p,{children:"Sono mantenuti per l’uso nei prodotti e per garantire retrocompatibilità."}),`
`,e.jsx(i.p,{children:"Non devono essere sostituiti con colori primitivi se il valore risultante cambia o se cambia l’API pubblica."}),`
`,e.jsxs(l,{children:[e.jsx(o,{title:"pagoPA",subtitle:"Colore semantico custom legato al brand pagoPA.",colors:{main:n.palette.pagoPA.main,contrastText:n.palette.pagoPA.contrastText}})," ",e.jsx(o,{title:"checkIban",subtitle:"Colore semantico custom di prodotto.",colors:{main:n.palette.checkIban.main,contrastText:n.palette.checkIban.contrastText}})," ",e.jsx(o,{title:"European Union",subtitle:"Colore semantico custom di tipo istituzionale.",colors:{main:n.palette.europeanUnion.main,contrastText:n.palette.europeanUnion.contrastText}})," ",e.jsx(o,{title:"Indigo",subtitle:"Colore semantico custom basato sulla palette indigo di MUI.",colors:{main:n.palette.indigo.main,contrastText:n.palette.indigo.contrastText}}),e.jsx(o,{title:"Negative",subtitle:"Colore semantico custom usato per azioni negative o invertite.",colors:{main:n.palette.negative.main,contrastText:n.palette.negative.contrastText}})]}),`
`,e.jsx(i.h2,{id:"differenza-tra-colori-primitivi-e-colori-semantici",children:"Differenza tra colori primitivi e colori semantici"}),`
`,e.jsx(i.p,{children:"La differenza principale è questa:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["un ",e.jsx(i.strong,{children:"colore primitivo"})," identifica una tonalità;"]}),`
`,e.jsxs(i.li,{children:["un ",e.jsx(i.strong,{children:"colore semantico"})," identifica un ruolo nell’interfaccia."]}),`
`]}),`
`,e.jsx(i.h3,{id:"colori-primitivi-1",children:"Colori primitivi"}),`
`,e.jsx(i.p,{children:"Un colore primitivo identifica una specifica tonalità."}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.colors.blue[500]"})," indica una precisa tonalità di blu;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.colors.neutral.grey[700]"})," indica una precisa tonalità di grigio."]}),`
`]}),`
`,e.jsx(i.p,{children:"Usali quando serve una shade precisa per un componente custom o quando il design richiede direttamente quella tonalità."}),`
`,e.jsx(i.h3,{id:"colori-semantici-1",children:"Colori semantici"}),`
`,e.jsx(i.p,{children:"Un colore semantico identifica un ruolo nell’interfaccia."}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.palette.primary.main"})," indica il colore principale dell’interfaccia;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.palette.error.main"})," indica il colore associato a uno stato di errore;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.palette.text.primary"})," indica il colore del testo principale;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"theme.palette.background.paper"})," indica il colore di una superficie."]}),`
`]}),`
`,e.jsx(i.p,{children:"Usali quando il colore rappresenta un significato funzionale o visivo dell’interfaccia."}),`
`,e.jsx(i.p,{children:"Un colore semantico può essere costruito usando un colore primitivo, ma non è obbligatorio."}),`
`,e.jsx(i.p,{children:"Per esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`theme.palette.success.main;
`})}),`
`,e.jsx(i.p,{children:"potrebbe avere lo stesso valore di:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`theme.colors.success[500];
`})}),`
`,e.jsx(i.p,{children:"ma i due concetti restano diversi."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"theme.colors.success[500]"})," dice:"]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“usa questa tonalità della scala success”"}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"theme.palette.success.main"})," dice:"]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"“usa il colore principale previsto per uno stato di successo”"}),`
`]}),`
`,e.jsx(i.p,{children:"Questa differenza è importante perché nel tempo il design system potrebbe decidere di cambiare la tonalità associata a un ruolo semantico senza cambiare il nome del ruolo."}),`
`,e.jsx(i.p,{children:"Per esempio, se un domani il colore primario dell’interfaccia cambiasse, i componenti che usano:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`theme.palette.primary.main;
`})}),`
`,e.jsx(i.p,{children:"si aggiornerebbero automaticamente."}),`
`,e.jsx(i.p,{children:"I componenti che usano direttamente:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-ts",children:`theme.colors.blue[500];
`})}),`
`,e.jsx(i.p,{children:"continuerebbero invece a usare quella specifica tonalità di blu."}),`
`,e.jsxs(i.p,{children:["Per questo motivo, quando il colore ha un significato nell’interfaccia, è preferibile usare ",e.jsx(i.code,{children:"theme.palette"}),"."]}),`
`,e.jsxs(i.p,{children:["Quando invece serve una tonalità specifica per un componente custom, è corretto usare ",e.jsx(i.code,{children:"theme.colors"}),"."]}),`
`,e.jsx(i.h2,{id:"theme-next-e-colori",children:"Theme Next e colori"}),`
`,e.jsxs(i.p,{children:["Storybook permette di visualizzare i componenti anche con ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsxs(i.p,{children:["È importante distinguere cosa cambia e cosa non cambia quando si passa dal tema corrente a ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsx(i.p,{children:"La regola generale è:"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"theme.colors"})," resta stabile tra i temi. ",e.jsx(i.code,{children:"theme.palette"})," è il livello semantico che può cambiare con ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"cosa-non-cambia-con-theme-next",children:"Cosa non cambia con Theme Next"}),`
`,e.jsxs(i.p,{children:["I colori primitivi esposti tramite ",e.jsx(i.code,{children:"theme.colors"})," non cambiano passando dal tema corrente a ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsx(i.p,{children:"Entrambi i temi usano la stessa sorgente di colori primitivi. Di conseguenza, token come questi mantengono lo stesso valore:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`theme.colors.blue[500];
theme.colors.neutral.grey[100];
theme.colors.error[500];
theme.colors.success[500];
`})}),`
`,e.jsx(i.p,{children:"Questo significa che le scale primitive restano stabili:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"blue"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"turquoise"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"blueitalia"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"purple"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"neutral"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"info"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"success"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"warning"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"error"})}),`
`]}),`
`,e.jsxs(i.p,{children:["Se un componente usa direttamente un token primitivo, il colore risultante resta lo stesso anche selezionando ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsx(i.h3,{id:"cosa-cambia-con-theme-next",children:"Cosa cambia con Theme Next"}),`
`,e.jsxs(i.p,{children:["Quello che può cambiare tra tema corrente e ",e.jsx(i.code,{children:"themeNext"})," sono i ",e.jsx(i.strong,{children:"colori semantici"}),", cioè i colori esposti tramite ",e.jsx(i.code,{children:"theme.palette"}),"."]}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`theme.palette.primary.main;
theme.palette.error.main;
theme.palette.success.main;
theme.palette.warning.main;
theme.palette.info.main;
theme.palette.text.primary;
theme.palette.divider;
`})}),`
`,e.jsx(i.p,{children:"I colori semantici descrivono un ruolo dell’interfaccia, non una tonalità specifica."}),`
`,e.jsxs(i.p,{children:["Per questo motivo ",e.jsx(i.code,{children:"themeNext"})," può cambiare il modo in cui un ruolo viene risolto, senza modificare la scala primitiva sottostante."]}),`
`,e.jsx(i.p,{children:"Per esempio, il ruolo:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`theme.palette.primary.main;
`})}),`
`,e.jsxs(i.p,{children:["può essere risolto dal tema corrente in un modo e da ",e.jsx(i.code,{children:"themeNext"})," in un altro."]}),`
`,e.jsx(i.p,{children:"Il nome resta lo stesso, ma il valore finale può essere diverso perché il ruolo semantico appartiene al tema attivo."}),`
`,e.jsx(i.h3,{id:"impatto-sui-componenti-mi",children:"Impatto sui componenti MI"}),`
`,e.jsxs(i.p,{children:["I nuovi componenti del Design System con prefisso ",e.jsx(i.code,{children:"MI"})," usano colori definiti dal Design System."]}),`
`,e.jsxs(i.p,{children:["Quando un componente MI usa direttamente i colori primitivi tramite ",e.jsx(i.code,{children:"theme.colors"}),", il suo colore resta stabile tra tema corrente e ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsx(i.p,{children:"Per esempio:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`color: theme.colors.blue[500];
borderColor: theme.colors.neutral.grey[100];
backgroundColor: theme.colors.blue[50];
`})}),`
`,e.jsxs(i.p,{children:["Questi valori non cambiano con ",e.jsx(i.code,{children:"themeNext"}),"."]}),`
`,e.jsx(i.p,{children:"Questo significa che il cambio tema non modifica automaticamente:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"i colori primitivi esposti dal Design System;"}),`
`,e.jsxs(i.li,{children:["i colori dei componenti MI che usano direttamente ",e.jsx(i.code,{children:"theme.colors"}),";"]}),`
`,e.jsx(i.li,{children:"le scale cromatiche base usate per costruire componenti custom."}),`
`]}),`
`,e.jsx(i.p,{children:"Cambiano invece i colori risolti tramite la palette semantica:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`color: theme.palette.primary.main;
color: theme.palette.error.main;
borderColor: theme.palette.divider;
backgroundColor: theme.palette.background.paper;
`})}),`
`,e.jsx(i.p,{children:"Quindi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["usa ",e.jsx(i.code,{children:"theme.colors"})," quando vuoi una tonalità stabile del Design System;"]}),`
`,e.jsxs(i.li,{children:["usa ",e.jsx(i.code,{children:"theme.palette"})," quando vuoi che il colore segua il ruolo semantico del tema attivo;"]}),`
`,e.jsxs(i.li,{children:["non aspettarti che ",e.jsx(i.code,{children:"themeNext"})," cambi i colori primitivi;"]}),`
`,e.jsx(i.li,{children:"aspettati invece differenze sui colori semantici."}),`
`]}),`
`,e.jsx(i.h2,{id:"linee-guida-di-utilizzo",children:"Linee guida di utilizzo"}),`
`,e.jsxs(i.h3,{id:"usa-themepalette-quando-il-colore-ha-un-significato-semantico",children:["Usa ",e.jsx(i.code,{children:"theme.palette"})," quando il colore ha un significato semantico"]}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:"theme.palette"})," quando il colore rappresenta un ruolo dell’interfaccia."]}),`
`,e.jsx(i.p,{children:"Esempi:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"testo primario"}),`
`,e.jsx(i.li,{children:"background"}),`
`,e.jsx(i.li,{children:"azione primaria"}),`
`,e.jsx(i.li,{children:"stato di successo"}),`
`,e.jsx(i.li,{children:"stato di errore"}),`
`,e.jsx(i.li,{children:"separatore"}),`
`,e.jsx(i.li,{children:"stato disabilitato"}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Box
  sx={(theme) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
  })}
/>
`})}),`
`,e.jsxs(i.h3,{id:"usa-themecolors-quando-ti-serve-una-tonalità-primitiva-specifica",children:["Usa ",e.jsx(i.code,{children:"theme.colors"})," quando ti serve una tonalità primitiva specifica"]}),`
`,e.jsxs(i.p,{children:["Usa ",e.jsx(i.code,{children:"theme.colors"})," quando un componente custom ha bisogno di una specifica tonalità definita dal design system."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<Box
  sx={(theme) => ({
    backgroundColor: theme.colors.blue[50],
    color: theme.colors.blue[850],
    border: \`1px solid \${theme.colors.blue[200]}\`,
  })}
/>
`})}),`
`,e.jsx(i.h3,{id:"evita-colori-hardcoded",children:"Evita colori hardcoded"}),`
`,e.jsx(i.p,{children:"Evita di usare valori esadecimali direttamente dentro i componenti."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`// Da evitare
<Box sx={{ color: '#0B3EE3' }} />

// Preferibile
<Box sx={(theme) => ({ color: theme.colors.blue[500] })} />
`})}),`
`,e.jsx(i.h3,{id:"non-importare-direttamente-i-colori",children:"Non importare direttamente i colori"}),`
`,e.jsx(i.p,{children:"I componenti non dovrebbero importare i token colore direttamente dai file interni."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`// Da evitare
import { colors } from 'theme/foundations/colors';

// Preferibile
<Box sx={(theme) => ({ color: theme.colors.blue[500] })} />;
`})}),`
`,e.jsx(i.p,{children:"Questo mantiene l’uso dei colori collegato al tema MUI attivo ed evita dipendenze dirette dai dettagli interni della libreria."})]})}function u(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
