import{j as e,B as u}from"./iframe-BFNOB_y6.js";import{C as g}from"./CopyToClipboardButton-BQFRRyVw.js";import"./HeaderAccount-A2d12S56.js";import"./Autocomplete-DW8YK42w.js";import"./Banner-w8jmfN8M.js";import"./ButtonNaked-CGI0ajV2.js";import"./CodeInput-DsLXhFD1.js";import"./EnvironmentBanner-ES7ecg6W.js";import"./FooterCheckout-DASmmTUI.js";import"./HeaderProduct-DPj8PtHj.js";import"./Hero-B0CKPG2N.js";import"./HorizontalNav-CONSx4Xq.js";import"./Illustration-Dv-tf_QV.js";import"./Infoblock-BENJATzF.js";import"./MIAccordion-D12cJ-gJ.js";import"./MIAlert-BOQx452l.js";import"./MIBoxedModuleTitle-BB_c_4N5.js";import"./MIBreadcrumbs-CD-6S4Ho.js";import"./MIButton-4cbe_krJ.js";import"./MIChip-1mo--K_e.js";import"./MIDialog-DAKl67bu.js";import"./MIIconButton-B7Z8v6ak.js";import"./MIMenu-Do42k9pV.js";import"./MIPaper-Dap4VHE4.js";import"./MISnackbar-IKU4EIYl.js";import"./MISpidSelectOIDialog-CAV6uVnE.js";import"./MISpinner-CiswHT3C.js";import"./MIStepper-B6ZPDUBP.js";import"./MITableList-HGyKo5dt.js";import"./MITable-CKSFS0k0.js";import"./MITimeline-hk62yEuQ.js";import"./MITooltip-DNt0BunJ.js";import"./MIWizard-Cocv_Y9p.js";import"./PartyAccountItem-BjZ5m3vs.js";import"./PartyAccountItemButton-HHlUe8kl.js";import"./PartyAvatar-Bg0dvtjo.js";import"./ProductAvatar-LA0TaCV4.js";import"./ProfileItem-BdrHiHlV.js";import"./Showcase-DHSNifAt.js";import"./SingleFileInput-kDW_u7uW.js";import"./Tag-C7o726K5.js";import"./TagGroup-CrJZkGlN.js";import"./TimelineNotificationDot-CcKTa84d.js";import"./TOSAgreement-Bwc-m3zk.js";import"./Walkthrough-D_39LR_L.js";import"./MIPagination-BwrCJYKb.js";import"./MISelect-y2A_oT4B.js";import"./MIFormHelperText-S8KvD9Wp.js";import{M as o}from"./MITextField-CNt2vYlT.js";import"./MISwitch-oA3S6gOK.js";import"./MIDivider-bK1Uvsjj.js";import"./MIProgressKpiCard-B-W91Ue_.js";import{S as x}from"./Stack-CehYqifs.js";import{I as m}from"./InputAdornment-CJgefCQD.js";import{c as E}from"./createSvgIcon-Dxz1zQvO.js";const p=E(e.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"}),"EmailOutlined"),t={width:{xs:"calc(100vw - 48px)",sm:420,lg:892},maxWidth:"100%"},D={label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",error:!1,success:!1,required:!1,disabled:!1,fullWidth:!0,multiline:!1,minRows:3,startAdornmentMode:"none",endAdornmentMode:"none",copyValue:"nome.cognome@example.it"},d={controls:{hideNoControlsWarning:!0}},V={title:"Components/MITextField",component:o,tags:["!dev"],parameters:{layout:"centered",controls:{include:["label","placeholder","helperText","error","success","required","disabled","fullWidth","multiline","minRows","startAdornmentMode","endAdornmentMode","copyValue"]}},args:D,argTypes:{label:{control:{type:"text"},description:"Etichetta visualizzata sopra al campo."},placeholder:{control:{type:"text"},description:"Placeholder del campo input."},helperText:{control:{type:"text"},description:"Messaggio di supporto mostrato sotto il campo."},error:{control:{type:"boolean"},description:"Attiva lo stato di errore."},success:{control:{type:"boolean"},description:"Attiva lo stato di successo."},required:{control:{type:"boolean"},description:"Mostra l’asterisco e segnala il campo come obbligatorio."},disabled:{control:{type:"boolean"},description:"Disabilita il campo input."},fullWidth:{control:{type:"boolean"},description:"Estende il campo alla larghezza disponibile."},multiline:{control:{type:"boolean"},description:"Abilita il comportamento multilinea."},minRows:{control:{type:"number"},description:"Numero minimo di righe visibili in modalità multilinea.",if:{arg:"multiline",eq:!0}},startAdornmentMode:{options:["none","email"],control:{type:"radio"},description:"Controllo Storybook: imposta InputProps.startAdornment.",table:{category:"Storybook controls"}},endAdornmentMode:{options:["none","clear","copy"],control:{type:"radio"},description:"Controllo Storybook: none mostra eventuale icona di validazione, clear abilita onDelete, copy usa endAdornment custom.",table:{category:"Storybook controls"}},copyValue:{control:{type:"text"},description:"Controllo Storybook: valore usato dal pulsante di copia.",if:{arg:"endAdornmentMode",eq:"copy"},table:{category:"Storybook controls"}},InputProps:{control:!1},onDelete:{control:!1,table:{type:{summary:"() => void"}}}},render:({label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:j,startAdornmentMode:C,endAdornmentMode:c,copyValue:z})=>{const M=C==="email"?e.jsx(m,{position:"start",children:e.jsx(p,{})}):void 0,W=c==="copy"?e.jsx(g,{value:z,disabled:h}):void 0,P=c==="clear"?()=>alert("Azione di pulizia (demo Storybook)"):void 0;return e.jsx(u,{sx:t,children:e.jsx(o,{label:f,placeholder:I,helperText:y,error:A,success:v,required:S,disabled:h,fullWidth:T,multiline:b,minRows:b?j:void 0,defaultValue:c==="copy"?z:void 0,onDelete:P,InputProps:{startAdornment:M,endAdornment:W}})})}},i={},n={parameters:{...d,docs:{description:{story:"Esempio con startAdornment configurato con l'icona email."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Indirizzo email",placeholder:"nome.cognome@example.it",helperText:"Inserisci un indirizzo email valido",fullWidth:!0,InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})})},r={parameters:{...d,docs:{description:{story:"Esempi dei principali stati del componente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",value:"nome.cognome@example.it",fullWidth:!0,success:!0,helperText:"Indirizzo email valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}}),e.jsx(o,{label:"Indirizzo email",error:!0,fullWidth:!0,helperText:"Formato email non valido",placeholder:"nome.cognome@example.it",InputProps:{startAdornment:e.jsx(m,{position:"start",children:e.jsx(p,{})})}})]})},a={parameters:{...d,docs:{description:{story:"Il campo disabilitato mantiene lo stile disabled anche sull’azione di pulizia, quando presente."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato"}),e.jsx(o,{label:"Indirizzo email",fullWidth:!0,disabled:!0,defaultValue:"nome.cognome@example.it",helperText:"Campo disabilitato con azione di pulizia disabilitata",onDelete:()=>alert("Non raggiungibile perché il pulsante è disabilitato")})]})},l={parameters:{...d,docs:{description:{story:"Ordine di precedenza di endAdornment: custom InputProps.endAdornment > onDelete > icona di validazione."}}},render:()=>e.jsxs(x,{spacing:2,sx:t,children:[e.jsx(o,{label:"Solo validazione",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con success=true è mostrata l’icona di validazione."}),e.jsx(o,{label:"Azione clear",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con onDelete è mostrata l’icona di pulizia.",onDelete:()=>alert("Azione di pulizia (demo Storybook)")}),e.jsx(o,{label:"Azione copy custom",fullWidth:!0,success:!0,defaultValue:"nome.cognome@example.it",helperText:"Con endAdornment custom vengono sostituiti clear e validazione.",onDelete:()=>alert("Non visibile: sovrascritto da endAdornment custom"),InputProps:{endAdornment:e.jsx(g,{value:"nome.cognome@example.it"})}})]})},s={parameters:{...d,docs:{description:{story:"Configurazione multilinea per testi più lunghi."}}},render:()=>e.jsx(u,{sx:t,children:e.jsx(o,{label:"Descrizione",placeholder:"Inserisci una descrizione",helperText:"Massimo 500 caratteri",fullWidth:!0,multiline:!0,minRows:4})})},k=["Playground","WithStartAdornment","ValidationStates","Disabled","EndAdornmentPriority","Multiline"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,EndAdornmentPriority:l,Multiline:s,Playground:i,ValidationStates:r,WithStartAdornment:n,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,l as E,Oe as M,r as V,n as W,s as a};
