import{j as e,b as T,r as w,B as y}from"./iframe-DqKsui2S.js";import{a as x}from"./MIButton-Bnm2maxB.js";import{M as z}from"./MIDialog-Di6eIvSZ.js";import{C as _,M as P}from"./MITextField-BZf8--Y2.js";import{C as R}from"./CopyToClipboardButton-CcFFqaNp.js";import{T as V}from"./Typography-DaPIykBW.js";import{F as I}from"./FormControlLabel-DOqRb0aH.js";import{S as F}from"./Stack-BNTagQR0.js";const H="data:image/svg+xml,%3csvg%20preserveAspectRatio='none'%20overflow='visible'%20style='display:%20block;'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Completed'%3e%3cg%20id='compass'%3e%3cpath%20id='Vector'%20d='M32%2058.6667C46.7276%2058.6667%2058.6667%2046.7276%2058.6667%2032C58.6667%2017.2724%2046.7276%205.33333%2032%205.33333C17.2724%205.33333%205.33333%2017.2724%205.33333%2032C5.33333%2046.7276%2017.2724%2058.6667%2032%2058.6667Z'%20fill='%23CED8F9'/%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M29.1768%2039.1754C28.9137%2039.1761%2028.6531%2039.1246%2028.41%2039.0239C28.167%2038.9232%2027.9463%2038.7753%2027.7608%2038.5888L22.4274%2033.2554C22.0633%2032.878%2021.862%2032.3727%2021.8668%2031.8484C21.8716%2031.324%2022.0821%2030.8224%2022.4531%2030.4518C22.8241%2030.0811%2023.3258%2029.871%2023.8502%2029.8667C24.3746%2029.8624%2024.8797%2030.0643%2025.2568%2030.4288L29.1768%2034.3461L38.4274%2025.0954C38.8045%2024.7309%2039.3096%2024.5291%2039.834%2024.5334C40.3584%2024.5377%2040.8601%2024.7478%2041.2311%2025.1185C41.6021%2025.4891%2041.8127%2025.9906%2041.8175%2026.515C41.8223%2027.0394%2041.6209%2027.5447%2041.2568%2027.9221L30.5901%2038.5888C30.4051%2038.7752%2030.1849%2038.9231%2029.9423%2039.0238C29.6997%2039.1245%2029.4395%2039.1761%2029.1768%2039.1754Z'%20fill='%230B3EE3'/%3e%3c/g%3e%3c/svg%3e",{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,U=800;function B({closeButtonAriaLabel:r="Chiudi finestra",open:a,onOpen:t,onRequestClose:o,maxWidth:k,fullWidth:v,scroll:W,title:A,description:S,content:n="text",footerMode:l="actions",primaryActionColor:D="primary",secondaryActionColor:j="primary",showSecondaryAction:b=!0,showTitle:C=!0}){const O=l==="custom"?e.jsxs(F,{direction:{xs:"column",md:"row"},spacing:2.5,sx:E=>({padding:E.spacing(2,3),"& > *":{[E.breakpoints.down("md")]:{width:"100%"}}}),children:[e.jsx(x,{variant:"text",onClick:o,children:"Torna alla richiesta"}),e.jsx(x,{onClick:o,children:"Conferma e invia"})]}):l==="hidden"?null:void 0,M=l!=="hidden",L=n==="checkbox"?e.jsx(I,{control:e.jsx(_,{}),label:"Ricevi aggiornamenti sulla richiesta"}):n==="error"?e.jsx(P,{label:"",fullWidth:!0,success:!0,disabled:!0,defaultValue:"[Codice errore]",onDelete:()=>alert("Non visibile: sovrascritto da endAdornment custom"),InputProps:{endAdornment:e.jsx(R,{value:"nome.cognome@example.it"})}}):n==="accessible-name"?e.jsx("span",{id:"dialog-content-label",children:"Dettagli della richiesta"}):void 0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:t,children:"Apri finestra"}),e.jsx(z,{open:a,onClose:()=>o(),onCloseButtonClick:()=>o(),maxWidth:k,fullWidth:v,scroll:W,title:C?A:void 0,"aria-labelledby":C?void 0:"dialog-content-label",description:S,closeButtonAriaLabel:r,secondaryAction:M&&b?{label:"Annulla",onClick:o,color:j}:void 0,primaryAction:M?{label:"Conferma",onClick:o,color:D}:void 0,renderFooter:O,children:L})]})}function i({initialOpen:r=!1,...a}){const[t,o]=w.useState(r);return e.jsx(B,{...a,open:t,onOpen:()=>o(!0),onRequestClose:()=>o(!1)})}function Z(){const[r,a]=w.useState(!1),t=()=>a(!1);return e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>a(!0),children:"Apri finestra"}),e.jsx(z,{open:r,onClose:t,onCloseButtonClick:t,maxWidth:"sm",fullWidth:!0,scroll:"body",closeButtonAriaLabel:"Chiudi finestra","aria-labelledby":"delegation-revoked-dialog-title","aria-describedby":"delegation-revoked-dialog-description",renderFooter:e.jsx(y,{sx:{display:"flex",justifyContent:"center",px:3,pb:3},children:e.jsx(x,{onClick:t,children:"Ok, ho capito"})}),children:e.jsxs(y,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textAlign:"center"},children:[e.jsx(y,{component:"img",src:H,alt:"",sx:{width:64,height:64,flexShrink:0}}),e.jsxs(y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e.jsx(V,{id:"delegation-revoked-dialog-title",component:"h2",sx:o=>({color:o.colors.neutral.black,fontSize:"1.5rem",fontWeight:600,lineHeight:"2rem"}),children:"Operazione conclusa con successo"}),e.jsx(V,{id:"delegation-revoked-dialog-description",variant:"body2",color:"text.secondary",children:"La delega è stata revocata"})]})]})})]})}const q={title:"Components/MIDialog",component:z,tags:["!dev"],parameters:{controls:{include:["title","description","contentMode","maxWidth","fullWidth","scroll","closeButtonAriaLabel","showTitle","footerMode","primaryActionColor","secondaryActionColor"]},chromatic:{viewports:T.filter(r=>r<=U)},docs:{description:{component:"Dialog basato su MUI, con props per titolo, descrizione e azioni principali, oltre a componenti dedicati per i contenuti personalizzati."},story:{inline:!1,iframeHeight:600}}},args:{onClose:()=>{},onCloseButtonClick:()=>{},open:!1,title:"Conferma la richiesta",description:"Vuoi procedere con l’invio della richiesta?",contentMode:"checkbox",showTitle:!0,footerMode:"actions",primaryActionColor:"primary",secondaryActionColor:"primary",maxWidth:"sm",fullWidth:!0,scroll:"paper",closeButtonAriaLabel:"Chiudi finestra"},argTypes:{onCloseButtonClick:{control:!1,table:{disable:!0}},onClose:{control:!1,table:{disable:!0}},title:{control:"text",description:"Testo del titolo; può essere omesso con “Mostra titolo” disattivato.",table:{category:"Controlli Storybook",defaultValue:{summary:"Conferma la richiesta"}}},description:{control:"text",description:"Controllo Storybook: testo descrittivo mostrato nel contenuto.",table:{category:"Controlli Storybook",defaultValue:{summary:"Vuoi procedere con l’invio della richiesta?"}},contentMode:{control:"select",options:["text","checkbox","error","accessible-name"],description:"Controllo Storybook: seleziona il contenuto aggiuntivo mostrato nel dialog.",table:{category:"Controlli Storybook",defaultValue:{summary:"checkbox"}}}},showTitle:{control:"boolean",description:"Controllo Storybook: mostra o omette il titolo, mantenendo un nome accessibile quando è omesso.",table:{category:"Controlli Storybook",defaultValue:{summary:"true"}}},footerMode:{control:"radio",options:["actions","custom","hidden"],description:"Controllo Storybook: mostra le azioni configurate, un footer personalizzato o nessun footer.",table:{category:"Controlli Storybook",defaultValue:{summary:"actions"}}},primaryActionColor:{control:"radio",options:["primary","error","contrasted"],description:"Colore del pulsante dell’azione primaria.",table:{category:"Controlli Storybook",defaultValue:{summary:"primary"}}},secondaryActionColor:{control:"radio",options:["primary","error","contrasted"],description:"Colore del pulsante dell’azione secondaria.",table:{category:"Controlli Storybook",defaultValue:{summary:"primary"}}},maxWidth:{control:"select",options:[!1,"xs","sm","md","lg","xl"],description:"Larghezza massima del dialog.",table:{defaultValue:{summary:"'sm'"}}},fullWidth:{control:"boolean",description:"Estende il dialog fino alla larghezza massima disponibile.",table:{defaultValue:{summary:"true"}}},scroll:{control:"radio",options:["paper","body"],description:"Definisce l’area in cui scorre il contenuto.",table:{defaultValue:{summary:"'paper'"}}},closeButtonAriaLabel:{control:"text",description:"Testo accessibile del pulsante di chiusura, configurabile per la localizzazione.",table:{defaultValue:{summary:"Chiudi finestra"}}}}},s={parameters:{docs:{story:{inline:!0}}},render:function({title:a,description:t,contentMode:o,open:k,closeButtonAriaLabel:v,maxWidth:W,fullWidth:A,scroll:S,showTitle:n,footerMode:l,primaryActionColor:D,secondaryActionColor:j}){const[,b]=N(),C=()=>b({open:!1});return e.jsx(B,{open:k,onOpen:()=>b({open:!0}),onRequestClose:C,closeButtonAriaLabel:v,title:a,description:t,content:o,maxWidth:W,fullWidth:A,scroll:S,showTitle:n,footerMode:l,primaryActionColor:D,secondaryActionColor:j})}},c={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Conferma la richiesta",description:"Vuoi procedere con l’invio della richiesta?",content:"checkbox",maxWidth:"sm",fullWidth:!0,scroll:"paper"})},d={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Salvare le modifiche",description:"Vuoi salvare le modifiche apportate?",maxWidth:"sm",fullWidth:!0,scroll:"paper",showSecondaryAction:!1})},p={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Annullare l’operazione",description:"L’operazione non può essere ripristinata.",maxWidth:"sm",fullWidth:!0,scroll:"paper",primaryActionColor:"error"})},u={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Conferma la richiesta",description:"Vuoi procedere con l’invio della richiesta?",maxWidth:"sm",fullWidth:!0,scroll:"paper",footerMode:"custom"})},m={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Dettagli della richiesta",description:"Consulta le informazioni prima di proseguire.",maxWidth:"sm",fullWidth:!0,scroll:"paper",footerMode:"hidden"})},h={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Preferenze di notifica",description:"Scegli se ricevere aggiornamenti su questa richiesta.",maxWidth:"sm",fullWidth:!0,scroll:"paper",content:"checkbox"})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{title:"Operazione non riuscita",description:"Non è stato possibile completare l’operazione.",maxWidth:"sm",fullWidth:!0,scroll:"paper",content:"error"})},g={parameters:{controls:{disable:!0}},render:function(){return e.jsx(Z,{})}},K=["Playground","Default","PrimaryActionOnly","ColoredActions","CustomFooter","HiddenActions","DialogWithCheckbox","DialogWithError","DelegationRevoked"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: true
      }
    }
  },
  render: function RenderPlayground({
    title,
    description,
    contentMode,
    open,
    closeButtonAriaLabel,
    maxWidth,
    fullWidth,
    scroll,
    showTitle,
    footerMode,
    primaryActionColor,
    secondaryActionColor
  }) {
    const [, updateArgs] = useArgs<MIDialogStoryArgs>();
    const handleClose = () => updateArgs({
      open: false
    });
    return <DialogExample open={open} onOpen={() => updateArgs({
      open: true
    })} onRequestClose={handleClose} closeButtonAriaLabel={closeButtonAriaLabel} title={title} description={description} content={contentMode} maxWidth={maxWidth} fullWidth={fullWidth} scroll={scroll} showTitle={showTitle} footerMode={footerMode} primaryActionColor={primaryActionColor} secondaryActionColor={secondaryActionColor} />;
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Conferma la richiesta" description="Vuoi procedere con l’invio della richiesta?" content="checkbox" maxWidth="sm" fullWidth scroll="paper" />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Salvare le modifiche" description="Vuoi salvare le modifiche apportate?" maxWidth="sm" fullWidth scroll="paper" showSecondaryAction={false} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Annullare l’operazione" description="L’operazione non può essere ripristinata." maxWidth="sm" fullWidth scroll="paper" primaryActionColor="error" />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Conferma la richiesta" description="Vuoi procedere con l’invio della richiesta?" maxWidth="sm" fullWidth scroll="paper" footerMode="custom" />
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Dettagli della richiesta" description="Consulta le informazioni prima di proseguire." maxWidth="sm" fullWidth scroll="paper" footerMode="hidden" />
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Preferenze di notifica" description="Scegli se ricevere aggiornamenti su questa richiesta." maxWidth="sm" fullWidth scroll="paper" content="checkbox" />
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StatefulDialogExample title="Operazione non riuscita" description="Non è stato possibile completare l’operazione." maxWidth="sm" fullWidth scroll="paper" content="error" />
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderDelegationRevoked() {
    return <DelegationRevokedSuccessExample />;
  }
}`,...g.parameters?.docs?.source}}};const re=Object.freeze(Object.defineProperty({__proto__:null,ColoredActions:p,CustomFooter:u,Default:c,DelegationRevoked:g,DialogWithCheckbox:h,DialogWithError:f,HiddenActions:m,Playground:s,PrimaryActionOnly:d,__namedExportsOrder:K,default:q},Symbol.toStringTag,{value:"Module"}));export{p as C,c as D,m as H,re as M,d as P,h as a,u as b,f as c,g as d};
