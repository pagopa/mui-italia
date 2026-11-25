import{j as e,B as u}from"./iframe-2X3ZxJBB.js";import{C as g}from"./CopyToClipboardButton-CVuzihec.js";import"./HeaderAccount-BtLTZX1K.js";import"./Autocomplete-DIBaU71E.js";import"./Banner-BY9XdPe3.js";import"./ButtonNaked-D9L_Jvkh.js";import"./CodeInput-DVhqXfk5.js";import"./EnvironmentBanner-Bc71M1zd.js";import"./FooterCheckout-CtKOm6L7.js";import"./HeaderProduct-eW9ezkz9.js";import"./Hero-nEyUQIip.js";import"./HorizontalNav-BUx7p_am.js";import"./Illustration-d0PbBHiA.js";import"./Infoblock-rLvivC7k.js";import"./MIAccordion-2QBo81Fy.js";import"./MIAlert-CqoynBVZ.js";import"./MIBoxedModuleTitle-rQDfzwGt.js";import"./MIBreadcrumbs-DfHngNin.js";import"./MIButton-wpGHPRSR.js";import"./MIChip-DziE6FFm.js";import"./MICheckbox-C_DBdRR2.js";import"./MIDialog-C3VFcAnz.js";import"./MIIconButton-BeNtwVyf.js";import"./MISelect-DYQEq86N.js";import"./MIMenu-NIgOwfLK.js";import"./MIPaper-Bp_yLs37.js";import"./MISnackbar-CLV9ELYl.js";import"./MISpidSelectOIDialog-7LtePOjq.js";import"./MISpinner-DiRVcUVt.js";import"./MIStepper-C29P1PBY.js";import"./MITableList-DKnCf3wS.js";import"./MITable-C2mrUVRq.js";import"./MITimeline-D_bV1ALJ.js";import"./MITooltip-ByHMPaXO.js";import"./MIWizard-la3rOI9x.js";import"./PartyAccountItem-D-hkfoX4.js";import"./PartyAccountItemButton-CCuz48LY.js";import"./PartyAvatar-BOue7h-c.js";import"./ProductAvatar-DPNgZjnR.js";import"./ProfileItem-CNzug26Q.js";import"./Showcase-xSjGTHU6.js";import"./SingleFileInput-DS-R70Po.js";import"./Tag-BxE8YtSC.js";import"./TagGroup-BIwe-yfC.js";import"./TimelineNotificationDot-rn8o83xP.js";import"./TOSAgreement-BQ-GJ8rJ.js";import"./Walkthrough-C4luwV5W.js";import"./MIPagination-C8zPf7hq.js";import{M as o}from"./MITextField-BEoVHW61.js";import"./MISwitch-Cmy0WqqR.js";import"./MIDivider-D6uqdSLv.js";import"./MIRadio-0l7WONKJ.js";import"./MIDrawer-_dygLZVn.js";import"./MIProgressKpiCard-C8m_UUPg.js";import{S as x}from"./Stack-DTXm74ga.js";import{I as m}from"./InputAdornment-CsSkV3Bx.js";import{c as E}from"./createSvgIcon-C6YSOS6Z.js";const p=E(e.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"}),"EmailOutlined"),t={width:{xs:"calc(100vw - 48px)",sm:420,lg:892},maxWidth:"100%"},D={label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",error:!1,success:!1,required:!1,disabled:!1,fullWidth:!0,multiline:!1,minRows:3,startAdornmentMode:"none",endAdornmentMode:"none",copyValue:"nome.cognome@example.it"},d={controls:{hideNoControlsWarning:!0}},V={title:"Components/MITextField",component:o,tags:["!dev"],parameters:{layout:"centered",controls:{include:["label","placeholder","helperText","error","success","required","disabled","fullWidth","multiline","minRows","startAdornmentMode","endAdornmentMode","copyValue"]}},args:D,argTypes:{label:{control:{type:"text"},description:"Etichetta visualizzata sopra al campo."},placeholder:{control:{type:"text"},description:"Placeholder del campo input."},helperText:{control:{type:"text"},description:"Messaggio di supporto mostrato sotto il campo."},error:{control:{type:"boolean"},description:"Attiva lo stato di errore."},success:{control:{type:"boolean"},description:"Attiva lo stato di successo."},required:{control:{type:"boolean"},description:"Mostra l’asterisco e segnala il campo come obbligatorio."},disabled:{control:{type:"boolean"},description:"Disabilita il campo input."},fullWidth:{control:{type:"boolean"},description:"Estende il campo alla larghezza disponibile."},multiline:{control:{type:"boolean"},description:"Abilita il comportamento multilinea."},minRows:{control:{type:"number"},description:"Numero minimo di righe visibili in modalità multilinea.",if:{arg:"multiline",eq:!0}},startAdornmentMode:{options:["none","email"],control:{type:"radio"},description:"Controllo Storybook: imposta InputProps.startAdornment.",table:{category:"Storybook controls"}},endAdornmentMode:{options:["none","clear","copy"],control:{type:"radio"},description:"Controllo Storybook: none mostra eventuale icona di validazione, clear abilita onDelete, copy usa endAdornment custom.",table:{category:"Storybook controls"}},copyValue:{control:{type:"text"},description:"Controllo Storybook: valore usato dal pulsante di copia.",if:{arg:"endAdornmentMode",eq:"copy"},table:{category:"Storybook controls"}},InputProps:{control:!1},onDelete:{control:!1,table:{type:{summary:"() => void"}}}},render:({label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:j,startAdornmentMode:C,endAdornmentMode:c,copyValue:z})=>{const M=C==="email"?e.jsx(m,{position:"start",children:e.jsx(p,{})}):void 0,W=c==="copy"?e.jsx(g,{value:z,disabled:h}):void 0,P=c==="clear"?()=>alert("Azione di pulizia (demo Storybook)"):void 0;return e.jsx(u,{sx:t,children:e.jsx(o,{label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:b?j:void 0,defaultValue:c==="copy"?z:void 0,onDelete:P,InputProps:{startAdornment:M,endAdornment:W}})})}},i={},n={parameters:{...d,docs:{description:{story:"Esempio con startAdornment configurato con l'icona email."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",fullWidth:!0,InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})})},r={parameters:{...d,docs:{description:{story:"Esempi dei principali stati del componente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",value:"nome.cognome@example.it",fullWidth:!0,success:!0,helperText:"Indirizzo email valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}}),e.jsx(o,{label:"Indirizzo email",error:!0,fullWidth:!0,helperText:"Formato email non valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})]})},a={parameters:{...d,docs:{description:{story:"Il campo disabilitato mantiene lo stile disabled anche sull’azione di pulizia, quando presente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato"}),e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato con azione di pulizia disabilitata",onDelete:()=>alert("Non raggiungibile perché il pulsante è disabilitato")})]})},l={parameters:{...d,docs:{description:{story:"Ordine di precedenza di endAdornment: custom InputProps.endAdornment > onDelete > icona di validazione."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Solo validazione",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con success=true è mostrata l’icona di validazione."}),e.jsx(o,{label:"Azione clear",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con onDelete è mostrata l’icona di pulizia.",onDelete:()=>alert("Azione di pulizia (demo Storybook)")}),e.jsx(o,{label:"Azione copy custom",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con endAdornment custom vengono sostituiti clear e validazione.",onDelete:()=>alert("Non visibile: sovrascritto da endAdornment custom"),InputProps:{endAdornment:e.jsx(g,{value:"nome.cognome@example.it"})}})]})},s={parameters:{...d,docs:{description:{story:"Configurazione multilinea per testi più lunghi."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Descrizione",placeholder:"Inserisci una descrizione",helperText:"Massimo 500 caratteri",fullWidth:!0,multiline:!0,minRows:4})})},k=["Playground","WithStartAdornment","ValidationStates","Disabled","EndAdornmentPriority","Multiline"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: "Esempio con startAdornment configurato con l'icona email."
      }
    }
  },
  render: () => <Box sx={fieldSx}>
      <MITextField label="Indirizzo email" placeholder="nome.cognome@example.it" helperText="Inserisci un indirizzo email valido" fullWidth InputProps={{
      startAdornment: <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
    }} />
    </Box>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Esempi dei principali stati del componente.'
      }
    }
  },
  render: () => <Stack spacing={2} sx={fieldSx}>
      <MITextField label="Indirizzo email" value="nome.cognome@example.it" fullWidth success helperText="Indirizzo email valido" placeholder="nome.cognome@example.it" InputProps={{
      startAdornment: <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
    }} />
      <MITextField label="Indirizzo email" error fullWidth helperText="Formato email non valido" placeholder="nome.cognome@example.it" InputProps={{
      startAdornment: <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
    }} />
    </Stack>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Il campo disabilitato mantiene lo stile disabled anche sull’azione di pulizia, quando presente.'
      }
    }
  },
  render: () => <Stack spacing={2} sx={fieldSx}>
      <MITextField label="Indirizzo email" fullWidth disabled defaultValue="nome.cognome@example.it" helperText="Campo disabilitato" />
      <MITextField label="Indirizzo email" fullWidth disabled defaultValue="nome.cognome@example.it" helperText="Campo disabilitato con azione di pulizia disabilitata" onDelete={() => alert('Non raggiungibile perché il pulsante è disabilitato')} />
    </Stack>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Ordine di precedenza di endAdornment: custom InputProps.endAdornment > onDelete > icona di validazione.'
      }
    }
  },
  render: () => <Stack spacing={2} sx={fieldSx}>
      <MITextField label="Solo validazione" fullWidth success defaultValue="nome.cognome@example.it" helperText="Con success=true è mostrata l’icona di validazione." />
      <MITextField label="Azione clear" fullWidth success defaultValue="nome.cognome@example.it" helperText="Con onDelete è mostrata l’icona di pulizia." onDelete={() => alert('Azione di pulizia (demo Storybook)')} />
      <MITextField label="Azione copy custom" fullWidth success defaultValue="nome.cognome@example.it" helperText="Con endAdornment custom vengono sostituiti clear e validazione." onDelete={() => alert('Non visibile: sovrascritto da endAdornment custom')} InputProps={{
      endAdornment: <CopyToClipboardButton value="nome.cognome@example.it" />
    }} />
    </Stack>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Configurazione multilinea per testi più lunghi.'
      }
    }
  },
  render: () => <Box sx={fieldSx}>
      <MITextField label="Descrizione" placeholder="Inserisci una descrizione" helperText="Massimo 500 caratteri" fullWidth multiline minRows={4} />
    </Box>
}`,...s.parameters?.docs?.source}}};const Be=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,EndAdornmentPriority:l,Multiline:s,Playground:i,ValidationStates:r,WithStartAdornment:n,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,l as E,Be as M,r as V,n as W,s as a};
