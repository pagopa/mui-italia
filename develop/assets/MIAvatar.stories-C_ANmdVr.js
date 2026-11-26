import{j as a,i as u}from"./iframe-D2suRgZv.js";import{M as r}from"./MIAvatar-CUAzE02-.js";import{S as d}from"./Stack-DtDOdr4h.js";const c=""+new URL("logo-cgn-BhOGiZBo.png",import.meta.url).href,b=400,z={title:"Components/MIAvatar",component:r,tags:["!dev"],parameters:{controls:{include:["variant","size","src","alt","initials","isLoading"]},chromatic:{viewports:u.filter(n=>n<=b)}},args:{variant:"standard",size:"small",src:"",alt:"Logo del servizio",initials:"MR",isLoading:!1},argTypes:{variant:{options:["standard","gravatar"],control:"radio",description:"Variante con logo oppure iniziali."},size:{options:["small","big"],control:"radio",description:"Dimensione della variante standard.",if:{arg:"variant",eq:"standard"}},src:{control:"text",description:"URL dell’immagine della variante standard.",if:{arg:"variant",eq:"standard"}},alt:{control:"text",description:"Testo alternativo obbligatorio; usa una stringa vuota per immagini decorative.",if:{arg:"variant",eq:"standard"}},initials:{control:"text",description:"Controllo Storybook per la label della variante gravatar.",if:{arg:"variant",eq:"gravatar"},table:{category:"Controlli Storybook"}},isLoading:{control:"boolean",description:"Mostra uno skeleton durante il caricamento."}},render:({variant:n,size:g,src:m,alt:p,initials:v,isLoading:l})=>n==="gravatar"?a.jsx(r,{variant:"gravatar",label:v,isLoading:l}):a.jsx(r,{size:g,src:m||void 0,alt:p,isLoading:l})},e={},o={parameters:{controls:{disable:!0}},render:()=>a.jsx(r,{alt:"Logo del servizio"})},t={parameters:{controls:{disable:!0}},render:()=>a.jsxs(d,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(r,{src:c,alt:"Carta Giovani Nazionale",size:"small"}),a.jsx(r,{src:c,alt:"Carta Giovani Nazionale",size:"big"})]})},i={parameters:{controls:{disable:!0}},render:()=>a.jsx(r,{variant:"gravatar",label:"MR",role:"img","aria-label":"Mario Rossi"})},s={parameters:{controls:{disable:!0}},render:()=>a.jsxs(d,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(r,{isLoading:!0,size:"small",alt:"Logo del servizio",role:"img","aria-label":"Caricamento logo"}),a.jsx(r,{isLoading:!0,size:"big",alt:"Logo del servizio",role:"img","aria-label":"Caricamento logo"}),a.jsx(r,{variant:"gravatar",label:"MR",isLoading:!0,role:"img","aria-label":"Caricamento avatar"})]})},M=["Playground","Default","Sizes","Gravatar","Loading"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIAvatar alt="Logo del servizio" />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIAvatar src={logoCgn} alt="Carta Giovani Nazionale" size="small" />
      <MIAvatar src={logoCgn} alt="Carta Giovani Nazionale" size="big" />
    </Stack>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIAvatar variant="gravatar" label="MR" role="img" aria-label="Mario Rossi" />
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIAvatar isLoading size="small" alt="Logo del servizio" role="img" aria-label="Caricamento logo" />
      <MIAvatar isLoading size="big" alt="Logo del servizio" role="img" aria-label="Caricamento logo" />
      <MIAvatar variant="gravatar" label="MR" isLoading role="img" aria-label="Caricamento avatar" />
    </Stack>
}`,...s.parameters?.docs?.source}}};const C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Gravatar:i,Loading:s,Playground:e,Sizes:t,__namedExportsOrder:M,default:z},Symbol.toStringTag,{value:"Module"}));export{o as D,i as G,s as L,C as M,t as S};
