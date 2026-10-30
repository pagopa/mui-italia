import{j as e}from"./iframe-CDfDAPFk.js";import{M as n}from"./MIIconButton-DMY-qyHU.js";import{S as s}from"./Stack-CQ_WFl_6.js";import{C as l}from"./CloseRounded-DOrT6e2I.js";import{c as m}from"./createSvgIcon-BbEuUIJp.js";import{D as c}from"./DownloadRounded-C_xtyVYn.js";const o=m(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"}),"DeleteRounded"),u=m(e.jsx("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"EditRounded"),M={delete:e.jsx(o,{}),download:e.jsx(c,{}),close:e.jsx(l,{}),edit:e.jsx(u,{})},x={title:"Components/MIIconButton",component:n,parameters:{layout:"centered",controls:{include:["aria-label","icon","size","edge","disabled"]}},args:{"aria-label":"Elimina",icon:"delete",size:"medium",edge:!1,disabled:!1},argTypes:{"aria-label":{control:{type:"text"},description:"Etichetta accessibile del pulsante. È necessaria perché il componente mostra solo un’icona.",table:{category:"Accessibilità",type:{summary:"string"}}},icon:{options:["delete","download","close","edit"],control:{type:"radio"},description:"Controllo Storybook: seleziona l’icona mostrata nel pulsante.",table:{category:"Storybook controls"}},size:{options:["small","medium","large"],control:{type:"radio"},description:"Dimensione del pulsante.",table:{category:"MIIconButton",type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}},edge:{options:["false","start","end"],control:{type:"radio"},description:"Compensa la spaziatura quando il pulsante è il primo o l’ultimo elemento di un contenitore.",table:{category:"MIIconButton",type:{summary:"'start' | 'end' | false"}}},disabled:{control:{type:"boolean"},description:"Disabilita il pulsante e ne impedisce l'interazione.",table:{category:"MIIconButton",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},render:({"aria-label":p,icon:I,size:g,edge:d,disabled:b})=>e.jsx(n,{"aria-label":p,size:g,edge:d===!1?void 0:d,disabled:b,onClick:()=>{},children:M[I]})},a={},t={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica delle dimensioni disponibili per MIIconButton."}}},render:()=>e.jsxs(s,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{size:"small","aria-label":"Elimina elemento",children:e.jsx(o,{fontSize:"small"})}),e.jsx(n,{size:"medium","aria-label":"Elimina elemento",children:e.jsx(o,{})}),e.jsx(n,{size:"large","aria-label":"Elimina elemento",children:e.jsx(o,{fontSize:"large"})})]})},r={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi di azioni rappresentate tramite icone diverse."}}},render:()=>e.jsxs(s,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{"aria-label":"Elimina elemento",children:e.jsx(o,{})}),e.jsx(n,{"aria-label":"Scarica documento",children:e.jsx(c,{})}),e.jsx(n,{"aria-label":"Chiudi",children:e.jsx(l,{})}),e.jsx(n,{"aria-label":"Modifica elemento",children:e.jsx(u,{})})]})},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi della prop edge, utile per compensare la spaziatura quando il pulsante è a inizio o fine contenitore."}}},render:()=>e.jsxs(s,{direction:"row",spacing:3,alignItems:"center",children:[e.jsx(n,{edge:"start","aria-label":"Indietro",children:e.jsx(l,{})}),e.jsx(n,{"aria-label":"Elimina elemento",children:e.jsx(o,{})}),e.jsx(n,{edge:"end","aria-label":"Scarica documento",children:e.jsx(c,{})})]})},j=["Playground","Sizes","Icons","Edge"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica delle dimensioni disponibili per MIIconButton.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIIconButton size="small" aria-label="Elimina elemento">
        <DeleteRoundedIcon fontSize="small" />
      </MIIconButton>

      <MIIconButton size="medium" aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton size="large" aria-label="Elimina elemento">
        <DeleteRoundedIcon fontSize="large" />
      </MIIconButton>
    </Stack>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempi di azioni rappresentate tramite icone diverse.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIIconButton aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Scarica documento">
        <DownloadRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Chiudi">
        <CloseRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Modifica elemento">
        <EditRoundedIcon />
      </MIIconButton>
    </Stack>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempi della prop edge, utile per compensare la spaziatura quando il pulsante è a inizio o fine contenitore.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={3} alignItems="center">
      <MIIconButton edge="start" aria-label="Indietro">
        <CloseRoundedIcon />
      </MIIconButton>

      <MIIconButton aria-label="Elimina elemento">
        <DeleteRoundedIcon />
      </MIIconButton>

      <MIIconButton edge="end" aria-label="Scarica documento">
        <DownloadRoundedIcon />
      </MIIconButton>
    </Stack>
}`,...i.parameters?.docs?.source}}};const E=Object.freeze(Object.defineProperty({__proto__:null,Edge:i,Icons:r,Playground:a,Sizes:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{i as E,r as I,E as M,t as S};
