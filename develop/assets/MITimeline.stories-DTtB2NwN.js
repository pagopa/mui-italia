import{r as p,f as W,h as D,_ as G,d as m,j as e,n as q,B as ao}from"./iframe-rw-T87Ps.js";import{M as c,a,S as so}from"./MITimeline-CSLr3wO7.js";import{T as co}from"./Tag-mVUTLFWS.js";import{c as h}from"./createSvgIcon-BLI2zqKg.js";import{T as C}from"./Typography-DIxyHfgM.js";import{u as $,c as N,a as B}from"./DefaultPropsProvider-DKSDSOOZ.js";import{u as lo}from"./useSlot-DN_OfLlx.js";import{u as mo}from"./useControlled-Bvt6qr0H.js";import{C as po}from"./Collapse-C1M_IDAv.js";import{s as S}from"./styled-BbRqDVtB.js";import{P as uo}from"./Paper-6XyShZCf.js";import{B as xo}from"./ButtonBase-B-e_mOzE.js";import{M as fo}from"./MailOutline-BdsGaJXE.js";import{W as F}from"./Warning-DVgV_dJv.js";import{E as J}from"./Error-D7nPt4z-.js";import{S as K}from"./Search-lhermCWk.js";const Q=p.createContext({});function Io(o){return W("MuiAccordion",o)}const k=D("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),go=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],bo=o=>{const{classes:n,square:t,expanded:r,disabled:i,disableGutters:l}=o;return B({root:["root",!t&&"rounded",r&&"expanded",i&&"disabled",!l&&"gutters"],region:["region"]},Io,n)},ho=S(uo,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[{[`& .${k.region}`]:n.region},n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})(({theme:o})=>{const n={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${k.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${k.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:n=>!n.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:n=>!n.disableGutters,style:{[`&.${k.expanded}`]:{margin:"16px 0"}}}]})),vo=p.forwardRef(function(n,t){const r=$({props:n,name:"MuiAccordion"}),{children:i,className:l,defaultExpanded:d=!1,disabled:u=!1,disableGutters:x=!1,expanded:z,onChange:f,square:R=!1,slots:A={},slotProps:V={},TransitionComponent:P,TransitionProps:I}=r,g=G(r,go),[s,_]=mo({controlled:z,default:d,name:"Accordion",state:"expanded"}),U=p.useCallback(io=>{_(!s),f&&f(io,!s)},[s,f,_]),[w,...Z]=p.Children.toArray(i),oo=p.useMemo(()=>({expanded:s,disabled:u,disableGutters:x,toggle:U}),[s,u,x,U]),E=m({},r,{square:R,disabled:u,disableGutters:x,expanded:s}),H=bo(E),eo=m({transition:P},A),no=m({transition:I},V),[to,ro]=lo("transition",{elementType:po,externalForwardedProps:{slots:eo,slotProps:no},ownerState:E});return e.jsxs(ho,m({className:N(H.root,l),ref:t,ownerState:E,square:R},g,{children:[e.jsx(Q.Provider,{value:oo,children:w}),e.jsx(to,m({in:s,timeout:"auto"},ro,{children:e.jsx("div",{"aria-labelledby":w.props.id,id:w.props["aria-controls"],role:"region",className:H.region,children:Z})}))]}))});function yo(o){return W("MuiAccordionDetails",o)}D("MuiAccordionDetails",["root"]);const Mo=["className"],To=o=>{const{classes:n}=o;return B({root:["root"]},yo,n)},Co=S("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,n)=>n.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),jo=p.forwardRef(function(n,t){const r=$({props:n,name:"MuiAccordionDetails"}),{className:i}=r,l=G(r,Mo),d=r,u=To(d);return e.jsx(Co,m({className:N(u.root,i),ref:t,ownerState:d},l))});function So(o){return W("MuiAccordionSummary",o)}const b=D("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Ro=["children","className","expandIcon","focusVisibleClassName","onClick"],Ao=o=>{const{classes:n,expanded:t,disabled:r,disableGutters:i}=o;return B({root:["root",t&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},So,n)},Vo=S(xo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,n)=>n.root})(({theme:o})=>{const n={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],n),[`&.${b.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${b.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${b.disabled})`]:{cursor:"pointer"},variants:[{props:t=>!t.disableGutters,style:{[`&.${b.expanded}`]:{minHeight:64}}}]}}),ko=S("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,n)=>n.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:n=>!n.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{margin:"20px 0"}}}]})),No=S("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,n)=>n.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{transform:"rotate(180deg)"}})),zo=p.forwardRef(function(n,t){const r=$({props:n,name:"MuiAccordionSummary"}),{children:i,className:l,expandIcon:d,focusVisibleClassName:u,onClick:x}=r,z=G(r,Ro),{disabled:f=!1,disableGutters:R,expanded:A,toggle:V}=p.useContext(Q),P=s=>{V&&V(s),x&&x(s)},I=m({},r,{expanded:A,disabled:f,disableGutters:R}),g=Ao(I);return e.jsxs(Vo,m({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":A,className:N(g.root,l),focusVisibleClassName:N(g.focusVisible,u),onClick:P,ref:t,ownerState:I},z,{children:[e.jsx(ko,{className:g.content,ownerState:I,children:i}),d&&e.jsx(No,{className:g.expandIconWrapper,ownerState:I,children:d})]}))}),L=h(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),Po=h(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),wo=h(e.jsx("path",{d:"m5.2494 8.0688 2.83-2.8269 14.1343 14.15-2.83 2.8269zm4.2363-4.2415 2.828-2.8289 5.6577 5.656-2.828 2.8289zM.9989 12.3147l2.8284-2.8285 5.6569 5.6569-2.8285 2.8284zM1 21h12v2H1z"}),"Gavel"),j=h(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info"),X=h(e.jsx("path",{d:"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"}),"MobileFriendly"),Y=h([e.jsx("path",{d:"m22 20.59-4.69-4.69C18.37 14.55 19 12.85 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22z"},"0"),e.jsx("path",{d:"M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"},"1")],"Troubleshoot"),Eo=600,O={gavel:wo,info:j,success:L,warning:F,error:J,mobile:X,search:K,troubleshoot:Y},Wo={title:"Components/MITimeline",component:c,parameters:{controls:{include:["itemVariant","itemIcon","itemTitle","itemContent"]}},args:{itemVariant:"info",itemIcon:"gavel",itemTitle:"La notifica ha assunto valore di legge",itemContent:"Né Mario Rossi né un suo delegato hanno effettuato un accesso entro i termini, ma la notifica SEND si è comunque perfezionata."},argTypes:{itemVariant:{options:["normal","info","success","warning","error"],control:{type:"select"},description:"Controllo Storybook: variante visuale applicata al primo MITimelineItem.",table:{category:"Storybook controls"}},itemIcon:{options:Object.keys(O),control:{type:"select"},description:"Controllo Storybook: icona mostrata nel primo MITimelineItem.",table:{category:"Storybook controls"}},itemTitle:{control:{type:"text"},description:"Controllo Storybook: testo usato come title del primo MITimelineItem.",table:{category:"Storybook controls"}},itemContent:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del primo MITimelineItem.",table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}}},decorators:[o=>e.jsx(ao,{sx:{p:2,boxSizing:"border-box",maxWidth:Eo,mx:"auto"},children:e.jsx(o,{})})],render:({itemVariant:o,itemIcon:n,itemTitle:t,itemContent:r})=>{const i=O[n];return e.jsxs(c,{children:[e.jsxs(a,{variant:o,icon:i,title:t,children:[e.jsx(C,{color:"inherit",fontSize:"14px",children:r}),e.jsx(C,{component:"span",fontSize:"12px",children:"19 Lug, 15:00"})]}),e.jsx(a,{variant:"normal",icon:X,title:"Invio della notifica in corso",children:"Stiamo verificando i dati del destinatario."}),e.jsx(a,{variant:"normal",icon:K,title:"Notifica pronta per l’invio",children:"La notifica digitale ha superato i test di validazione. È possibile effettuare il download dell’attestazione."}),e.jsx(a,{variant:"normal",icon:Y,title:"Notifica in validazione",children:"La notifica SEND è in attesa di validazione."})]})}},v={},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(a,{variant:"normal",icon:j,title:"Normal",children:"Variante neutra"})}),e.jsx(c,{children:e.jsx(a,{variant:"info",icon:j,title:"Info",children:"Variante informativa"})}),e.jsx(c,{children:e.jsx(a,{variant:"success",icon:L,title:"Success",children:"Variante di successo"})}),e.jsx(c,{children:e.jsx(a,{variant:"warning",icon:F,title:"Warning",children:"Variante di avviso"})}),e.jsx(c,{children:e.jsx(a,{variant:"error",icon:J,title:"Error",children:"Variante di errore"})})]})},M={parameters:{controls:{disable:!0}},render:()=>e.jsxs(c,{children:[e.jsx(a,{variant:"success",icon:L,title:"Ultimo step",children:"Flusso completato"}),e.jsxs(a,{variant:"normal",icon:j,title:"Dettaglio con contenuto strutturato",children:[e.jsx(C,{variant:"body2",gutterBottom:!0,children:"Il body di ogni item accetta qualsiasi ReactNode."}),e.jsxs(vo,{elevation:0,disableGutters:!0,children:[e.jsxs(zo,{expandIcon:e.jsx(Po,{}),children:[e.jsx(fo,{fontSize:"small",sx:{mr:1}}),e.jsxs(C,{variant:"body2",fontWeight:600,color:q.neutral.black,children:["Prima Raccomandata · ",111111111]})]}),e.jsx(jo,{children:e.jsx("ol",{children:e.jsx("li",{children:"Processo di invio raccomandata cominciato "})})})]})]})]})},Do=()=>e.jsxs(so,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(C,{component:"span",fontWeight:600,sx:{color:q.warning[850]},children:"Operazione in corso"}),e.jsx(co,{variant:"warning",value:"Evento non valido"})]}),T={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{children:e.jsx(a,{variant:"warning",icon:j,title:e.jsx(Do,{}),children:"Esempio di MITimelineItem con title custom"})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const Go=["Default","Variants","RichContent","CustomTitle"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomTitle:T,Default:v,RichContent:M,Variants:y,__namedExportsOrder:Go,default:Wo},Symbol.toStringTag,{value:"Module"}));export{T as C,ee as M,M as R,y as V};
