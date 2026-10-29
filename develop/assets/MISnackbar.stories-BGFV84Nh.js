import{b as C,j as e,B as h,r as w}from"./iframe-EJCMhezF.js";import{M as g}from"./MISnackbar-CgKn-Fjm.js";import{r as E}from"./index-CD7GOfqp.js";import{B as k}from"./Button-DLK5id5n.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,t=o=>{const[r,v]=w.useState(o.viewMode==="story"),[n,i]=w.useState(o.viewMode==="story"),{viewMode:y,...b}=o;return e.jsxs(e.Fragment,{children:[y==="docs"&&!n&&e.jsx(k,{variant:"contained",onClick:()=>{v(!0),i(!0)},children:"Mostra notifica"}),r&&e.jsx(g,{...b,open:n,onClose:()=>i(!1)})]})},_={component:g,title:"Components/MISnackbar",tags:["!dev"],parameters:{layout:"fullscreen",controls:{include:["severity","title","description","errorCode","errorCodeAriaLabel","horizontal","vertical"]},docs:{story:{inline:!1,height:"360px"}},chromatic:{viewports:C}},decorators:[(o,r)=>typeof document>"u"?e.jsx(e.Fragment,{}):r.viewMode==="docs"?e.jsx(h,{sx:{minHeight:"20rem",p:3},children:e.jsx(o,{})}):E.createPortal(e.jsx(h,{sx:{minHeight:"20rem",p:3},children:e.jsx(o,{})}),document.body)],args:{open:!1,severity:"success",title:"Modifiche salvate",description:"Le informazioni del profilo sono state aggiornate.",horizontal:"left",vertical:"bottom"},argTypes:{open:{control:!1,table:{disable:!0}},severity:{control:"radio",options:["success","info","warning","error"],description:"Severità del messaggio: determina colore e icona."},title:{control:"text",description:"Titolo opzionale del messaggio."},description:{control:"text",description:"Descrizione obbligatoria del messaggio."},errorCode:{control:"text",if:{arg:"severity",eq:"error"},description:'Codice copiabile, disponibile solo con severity="error".'},errorCodeAriaLabel:{control:"text",if:{arg:"severity",eq:"error"},description:"Nome accessibile del campo codice errore. Disponibile solo per gli errori."},horizontal:{control:"inline-radio",options:["left","center","right"],description:"Controllo Storybook: posizione orizzontale di anchorOrigin.",table:{category:"Controlli Storybook"}},vertical:{control:"inline-radio",options:["top","bottom"],description:"Controllo Storybook: posizione verticale di anchorOrigin.",table:{category:"Controlli Storybook"}},anchorOrigin:{control:!1,table:{disable:!0}},onClose:{control:!1,table:{disable:!0}}},render:function({open:r,severity:v,title:n,description:i,errorCode:y,errorCodeAriaLabel:b,horizontal:M,vertical:S}){const[,x]=I(),f=()=>x({open:!1});return e.jsxs(e.Fragment,{children:[e.jsx(k,{variant:"contained",onClick:()=>x({open:!0}),children:"Mostra notifica"}),v==="error"?e.jsx(g,{open:r,severity:"error",title:n,description:i,errorCode:y,errorCodeAriaLabel:b,anchorOrigin:{horizontal:M,vertical:S},onClose:f}):e.jsx(g,{open:r,severity:v,title:n,description:i,anchorOrigin:{horizontal:M,vertical:S},onClose:f})]})}},a={parameters:{docs:{story:{inline:!0}}}},s={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"success",title:"Modifiche salvate",description:"Le informazioni del profilo sono state aggiornate."})},c={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"info",title:"Richiesta ricevuta",description:"Riceverai una comunicazione al termine della verifica."})},d={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"warning",title:"Sessione in scadenza",description:"Salva le modifiche prima di continuare."})},l={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"error",title:"Salvataggio non riuscito",description:"Le modifiche non sono state salvate. Riprova."})},p={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"success",description:"Il documento è stato caricato."})},m={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"error",title:"Operazione non completata",description:"Contatta l'assistenza e comunica il codice errore.",errorCode:"ERR-PROFILE-403",errorCodeAriaLabel:"Codice errore: ERR-PROFILE-403",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},u={parameters:{controls:{disable:!0},docs:{story:{inline:!0}}},render:(o,r)=>e.jsx(t,{viewMode:r.viewMode,severity:"warning",title:"Non tutte le modifiche sono state salvate",description:"La connessione è stata interrotta durante il salvataggio delle informazioni del profilo. Verifica la connessione e riprova prima di chiudere questa pagina, per non perdere i dati inseriti."})},z=["Playground","Default","Info","Warning","Error","SnackbarWithoutTitle","SnackbarWithErrorCode","LongContent"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: true
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="success" title="Modifiche salvate" description="Le informazioni del profilo sono state aggiornate." />
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="info" title="Richiesta ricevuta" description="Riceverai una comunicazione al termine della verifica." />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="warning" title="Sessione in scadenza" description="Salva le modifiche prima di continuare." />
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="error" title="Salvataggio non riuscito" description="Le modifiche non sono state salvate. Riprova." />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="success" description="Il documento è stato caricato." />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="error" title="Operazione non completata" description="Contatta l'assistenza e comunica il codice errore." errorCode="ERR-PROFILE-403" errorCodeAriaLabel="Codice errore: ERR-PROFILE-403" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right'
  }} />
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: (_args: MISnackbarStoryArgs, context: {
    viewMode: 'docs' | 'story';
  }) => <MISnackbarStoryExample viewMode={context.viewMode} severity="warning" title="Non tutte le modifiche sono state salvate" description="La connessione è stata interrotta durante il salvataggio delle informazioni del profilo. Verifica la connessione e riprova prima di chiudere questa pagina, per non perdere i dati inseriti." />
}`,...u.parameters?.docs?.source}}};const A=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Error:l,Info:c,LongContent:u,Playground:a,SnackbarWithErrorCode:m,SnackbarWithoutTitle:p,Warning:d,__namedExportsOrder:z,default:_},Symbol.toStringTag,{value:"Module"}));export{s as D,l as E,c as I,u as L,A as M,p as S,d as W,m as a};
