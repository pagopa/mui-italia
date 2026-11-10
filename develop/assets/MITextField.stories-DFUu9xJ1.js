import{j as e,B as u}from"./iframe-DqKsui2S.js";import{C as g}from"./CopyToClipboardButton-CcFFqaNp.js";import"./HeaderAccount-CwiPdo1I.js";import"./Autocomplete-YKdkK_DX.js";import"./Banner-D9OIPbl9.js";import"./ButtonNaked-CMFD36EP.js";import"./CodeInput-BmIsIEqf.js";import"./EnvironmentBanner-Bc2ZFY3w.js";import"./FooterCheckout-DcziwGD3.js";import"./HeaderProduct-d_8fKga5.js";import"./Hero-Bp0sG3_s.js";import"./HorizontalNav-BoAjGzf-.js";import"./Illustration-B9seh3KU.js";import"./Infoblock-B65TO09O.js";import"./MIAccordion-DW0ISxce.js";import"./MIAlert-9Tp5_68U.js";import"./MIBoxedModuleTitle-0u-wNi0Z.js";import"./MIBreadcrumbs-C699nPTB.js";import"./MIButton-Bnm2maxB.js";import"./MIChip-BJGu-AOa.js";import"./MIDialog-Di6eIvSZ.js";import"./MIIconButton-Bmcj_7bH.js";import"./MIMenu-CQ_TX73J.js";import"./MIPaper-BDbPI6Sp.js";import"./MISnackbar-CztX6En9.js";import"./MISpidSelectOIDialog-WPMfrbjd.js";import"./MISpinner-D8qtLqGJ.js";import"./MIStepper-CymP1GY8.js";import"./MITableList-DFhrKw-4.js";import"./MITimeline-Cjf_txx4.js";import"./MITooltip-D9TPv0-f.js";import"./MIWizard-Bav8XGbg.js";import"./PartyAccountItem-BV32O6N4.js";import"./PartyAccountItemButton-B1iFVUR8.js";import"./PartyAvatar-BmI6iJ2-.js";import"./ProductAvatar-BJFTchtL.js";import"./ProfileItem-DyIe7eki.js";import"./Showcase-DlRkbYzM.js";import"./SingleFileInput-GvmCq_Sz.js";import"./Tag-CyM-D6sf.js";import"./TagGroup-BVE2AJi8.js";import"./TimelineNotificationDot-Dk6h7M4f.js";import"./TOSAgreement-DAqF_RGi.js";import"./Walkthrough-BePPS8fU.js";import"./MIPagination-DwcNHFvr.js";import"./MISelect-BHt9A-gY.js";import"./MIFormHelperText-ByqSdtFo.js";import{M as o}from"./MITextField-BZf8--Y2.js";import"./MISwitch-DqgV7AAx.js";import"./MIDivider-XpMoy4St.js";import{S as x}from"./Stack-BNTagQR0.js";import{I as m}from"./InputAdornment-DhEK64CY.js";import{c as E}from"./createSvgIcon-bbdnzGJh.js";const p=E(e.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"}),"EmailOutlined"),t={width:{xs:"calc(100vw - 48px)",sm:420,lg:892},maxWidth:"100%"},D={label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",error:!1,success:!1,required:!1,disabled:!1,fullWidth:!0,multiline:!1,minRows:3,startAdornmentMode:"none",endAdornmentMode:"none",copyValue:"nome.cognome@example.it"},d={controls:{hideNoControlsWarning:!0}},V={title:"Components/MITextField",component:o,tags:["!dev"],parameters:{layout:"centered",controls:{include:["label","placeholder","helperText","error","success","required","disabled","fullWidth","multiline","minRows","startAdornmentMode","endAdornmentMode","copyValue"]}},args:D,argTypes:{label:{control:{type:"text"},description:"Etichetta visualizzata sopra al campo."},placeholder:{control:{type:"text"},description:"Placeholder del campo input."},helperText:{control:{type:"text"},description:"Messaggio di supporto mostrato sotto il campo."},error:{control:{type:"boolean"},description:"Attiva lo stato di errore."},success:{control:{type:"boolean"},description:"Attiva lo stato di successo."},required:{control:{type:"boolean"},description:"Mostra l’asterisco e segnala il campo come obbligatorio."},disabled:{control:{type:"boolean"},description:"Disabilita il campo input."},fullWidth:{control:{type:"boolean"},description:"Estende il campo alla larghezza disponibile."},multiline:{control:{type:"boolean"},description:"Abilita il comportamento multilinea."},minRows:{control:{type:"number"},description:"Numero minimo di righe visibili in modalità multilinea.",if:{arg:"multiline",eq:!0}},startAdornmentMode:{options:["none","email"],control:{type:"radio"},description:"Controllo Storybook: imposta InputProps.startAdornment.",table:{category:"Storybook controls"}},endAdornmentMode:{options:["none","clear","copy"],control:{type:"radio"},description:"Controllo Storybook: none mostra eventuale icona di validazione, clear abilita onDelete, copy usa endAdornment custom.",table:{category:"Storybook controls"}},copyValue:{control:{type:"text"},description:"Controllo Storybook: valore usato dal pulsante di copia.",if:{arg:"endAdornmentMode",eq:"copy"},table:{category:"Storybook controls"}},InputProps:{control:!1},onDelete:{control:!1,table:{type:{summary:"() => void"}}}},render:({label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:j,startAdornmentMode:C,endAdornmentMode:c,copyValue:z})=>{const M=C==="email"?e.jsx(m,{position:"start",children:e.jsx(p,{})}):void 0,W=c==="copy"?e.jsx(g,{value:z,disabled:h}):void 0,P=c==="clear"?()=>alert("Azione di pulizia (demo Storybook)"):void 0;return e.jsx(u,{sx:t,children:e.jsx(o,{label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:b?j:void 0,defaultValue:c==="copy"?z:void 0,onDelete:P,InputProps:{startAdornment:M,endAdornment:W}})})}},i={},n={parameters:{...d,docs:{description:{story:"Esempio con startAdornment configurato con l'icona email."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",fullWidth:!0,InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})})},r={parameters:{...d,docs:{description:{story:"Esempi dei principali stati del componente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",value:"nome.cognome@example.it",fullWidth:!0,success:!0,helperText:"Indirizzo email valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}}),e.jsx(o,{label:"Indirizzo email",error:!0,fullWidth:!0,helperText:"Formato email non valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})]})},a={parameters:{...d,docs:{description:{story:"Il campo disabilitato mantiene lo stile disabled anche sull’azione di pulizia, quando presente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato"}),e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato con azione di pulizia disabilitata",onDelete:()=>alert("Non raggiungibile perché il pulsante è disabilitato")})]})},l={parameters:{...d,docs:{description:{story:"Ordine di precedenza di endAdornment: custom InputProps.endAdornment > onDelete > icona di validazione."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Solo validazione",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con success=true è mostrata l’icona di validazione."}),e.jsx(o,{label:"Azione clear",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con onDelete è mostrata l’icona di pulizia.",onDelete:()=>alert("Azione di pulizia (demo Storybook)")}),e.jsx(o,{label:"Azione copy custom",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con endAdornment custom vengono sostituiti clear e validazione.",onDelete:()=>alert("Non visibile: sovrascritto da endAdornment custom"),InputProps:{endAdornment:e.jsx(g,{value:"nome.cognome@example.it"})}})]})},s={parameters:{...d,docs:{description:{story:"Configurazione multilinea per testi più lunghi."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Descrizione",placeholder:"Inserisci una descrizione",helperText:"Massimo 500 caratteri",fullWidth:!0,multiline:!0,minRows:4})})},k=["Playground","WithStartAdornment","ValidationStates","Disabled","EndAdornmentPriority","Multiline"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ke=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,EndAdornmentPriority:l,Multiline:s,Playground:i,ValidationStates:r,WithStartAdornment:n,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,l as E,ke as M,r as V,n as W,s as a};
