import{j as e,n as I,B as b}from"./iframe-UeoK4583.js";import{M as o,a as n,S as y}from"./MITimeline-CpfJF2p7.js";import{T as S}from"./Tag-DT-Usnhn.js";import{c as l}from"./createSvgIcon-BDmnSp2b.js";import{C as d}from"./CheckCircle-BWJKBcg5.js";import{T as c}from"./Typography-YbG83az4.js";import{A as C,b as z,a as V}from"./AccordionSummary-AB86xsiJ.js";import{M as k}from"./MailOutline-DPE8uxKD.js";import{W as u}from"./Warning-BzF2xI9H.js";import{E as h}from"./Error-6GTvk9NH.js";import{S as x}from"./Search-CswvDK7t.js";const E=l(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),W=l(e.jsx("path",{d:"m5.2494 8.0688 2.83-2.8269 14.1343 14.15-2.83 2.8269zm4.2363-4.2415 2.828-2.8289 5.6577 5.656-2.828 2.8289zM.9989 12.3147l2.8284-2.8285 5.6569 5.6569-2.8285 2.8284zM1 21h12v2H1z"}),"Gavel"),s=l(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info"),T=l(e.jsx("path",{d:"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"}),"MobileFriendly"),v=l([e.jsx("path",{d:"m22 20.59-4.69-4.69C18.37 14.55 19 12.85 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22z"},"0"),e.jsx("path",{d:"M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"},"1")],"Troubleshoot"),w=600,p={gavel:W,info:s,success:d,warning:u,error:h,mobile:T,search:x,troubleshoot:v},A={title:"Components/MITimeline",component:o,parameters:{controls:{include:["itemVariant","itemIcon","itemTitle","itemContent"]}},args:{itemVariant:"info",itemIcon:"gavel",itemTitle:"La notifica ha assunto valore di legge",itemContent:"Né Mario Rossi né un suo delegato hanno effettuato un accesso entro i termini, ma la notifica SEND si è comunque perfezionata."},argTypes:{itemVariant:{options:["normal","info","success","warning","error"],control:{type:"select"},description:"Controllo Storybook: variante visuale applicata al primo MITimelineItem.",table:{category:"Storybook controls"}},itemIcon:{options:Object.keys(p),control:{type:"select"},description:"Controllo Storybook: icona mostrata nel primo MITimelineItem.",table:{category:"Storybook controls"}},itemTitle:{control:{type:"text"},description:"Controllo Storybook: testo usato come title del primo MITimelineItem.",table:{category:"Storybook controls"}},itemContent:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del primo MITimelineItem.",table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}}},decorators:[m=>e.jsx(b,{sx:{p:2,boxSizing:"border-box",maxWidth:w,mx:"auto"},children:e.jsx(m,{})})],render:({itemVariant:m,itemIcon:M,itemTitle:g,itemContent:f})=>{const j=p[M];return e.jsxs(o,{children:[e.jsxs(n,{variant:m,icon:j,title:g,children:[e.jsx(c,{color:"inherit",fontSize:"14px",children:f}),e.jsx(c,{component:"span",fontSize:"12px",children:"19 Lug, 15:00"})]}),e.jsx(n,{variant:"normal",icon:T,title:"Invio della notifica in corso",children:"Stiamo verificando i dati del destinatario."}),e.jsx(n,{variant:"normal",icon:x,title:"Notifica pronta per l’invio",children:"La notifica digitale ha superato i test di validazione. È possibile effettuare il download dell’attestazione."}),e.jsx(n,{variant:"normal",icon:v,title:"Notifica in validazione",children:"La notifica SEND è in attesa di validazione."})]})}},i={},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(n,{variant:"normal",icon:s,title:"Normal",children:"Variante neutra"})}),e.jsx(o,{children:e.jsx(n,{variant:"info",icon:s,title:"Info",children:"Variante informativa"})}),e.jsx(o,{children:e.jsx(n,{variant:"success",icon:d,title:"Success",children:"Variante di successo"})}),e.jsx(o,{children:e.jsx(n,{variant:"warning",icon:u,title:"Warning",children:"Variante di avviso"})}),e.jsx(o,{children:e.jsx(n,{variant:"error",icon:h,title:"Error",children:"Variante di errore"})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs(o,{children:[e.jsx(n,{variant:"success",icon:d,title:"Ultimo step",children:"Flusso completato"}),e.jsxs(n,{variant:"normal",icon:s,title:"Dettaglio con contenuto strutturato",children:[e.jsx(c,{variant:"body2",gutterBottom:!0,children:"Il body di ogni item accetta qualsiasi ReactNode."}),e.jsxs(C,{elevation:0,disableGutters:!0,children:[e.jsxs(z,{expandIcon:e.jsx(E,{}),children:[e.jsx(k,{fontSize:"small",sx:{mr:1}}),e.jsxs(c,{variant:"body2",fontWeight:600,color:I.neutral.black,children:["Prima Raccomandata · ",111111111]})]}),e.jsx(V,{children:e.jsx("ol",{children:e.jsx("li",{children:"Processo di invio raccomandata cominciato "})})})]})]})]})},D=()=>e.jsxs(y,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(c,{component:"span",fontWeight:600,sx:{color:I.warning[850]},children:"Operazione in corso"}),e.jsx(S,{variant:"warning",value:"Evento non valido"})]}),a={parameters:{controls:{disable:!0}},render:()=>e.jsx(o,{children:e.jsx(n,{variant:"warning",icon:s,title:e.jsx(D,{}),children:"Esempio di MITimelineItem con title custom"})})},N=["Default","Variants","RichContent","CustomTitle"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <MITimeline>
        <MITimelineItem variant="normal" icon={InfoIcon} title="Normal">
          Variante neutra
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="info" icon={InfoIcon} title="Info">
          Variante informativa
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="success" icon={CheckCircleIcon} title="Success">
          Variante di successo
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="warning" icon={WarningIcon} title="Warning">
          Variante di avviso
        </MITimelineItem>
      </MITimeline>
      <MITimeline>
        <MITimelineItem variant="error" icon={ErrorIcon} title="Error">
          Variante di errore
        </MITimelineItem>
      </MITimeline>
    </>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITimeline>
      <MITimelineItem variant="success" icon={CheckCircleIcon} title="Ultimo step">
        Flusso completato
      </MITimelineItem>
      <MITimelineItem variant="normal" icon={InfoIcon} title="Dettaglio con contenuto strutturato">
        <Typography variant="body2" gutterBottom>
          Il body di ogni item accetta qualsiasi ReactNode.
        </Typography>
        <Accordion elevation={0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <MailOutline fontSize="small" sx={{
            mr: 1
          }} />
            <Typography variant="body2" fontWeight={600} color={colors.neutral.black}>
              Prima Raccomandata · {111111111}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>Processo di invio raccomandata cominciato </li>
            </ol>
          </AccordionDetails>
        </Accordion>
      </MITimelineItem>
    </MITimeline>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITimeline>
      <MITimelineItem variant="warning" icon={InfoIcon} title={<TitleWithTag />}>
        Esempio di MITimelineItem con title custom
      </MITimelineItem>
    </MITimeline>
}`,...a.parameters?.docs?.source}}};const J=Object.freeze(Object.defineProperty({__proto__:null,CustomTitle:a,Default:i,RichContent:r,Variants:t,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{a as C,J as M,r as R,t as V};
