import{j as e,h as x}from"./iframe-2X3ZxJBB.js";import{M as r}from"./MICheckbox-C_DBdRR2.js";import{S as d}from"./Stack-DTXm74ga.js";import{F as h}from"./FormControl-IIFpe4k9.js";import{F as k}from"./FormLabel-CMvR64BL.js";const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,C=400,z={title:"Components/MICheckbox",component:r,tags:["!dev"],parameters:{controls:{include:["checked","disabled","label","error"]},chromatic:{viewports:x.filter(c=>c<=C)}},args:{checked:!1,label:"Ricevi aggiornamenti sul servizio"},argTypes:{checked:{control:"boolean",description:"Stato controllato della checkbox."},defaultChecked:{control:!1,description:"Stato iniziale quando la checkbox non è controllata."},disabled:{control:"boolean",description:"Disabilita la checkbox."},label:{control:"text",description:"Testo visibile associato alla checkbox."},error:{control:"text",description:"Messaggio di errore associato alla checkbox."},inputProps:{control:!1,table:{disable:!0},description:"Props dell’input nativo, utili anche per configurare il nome o le descrizioni accessibili."},onChange:{control:!1,table:{disable:!0}}},render:function({disabled:m,label:u="Ricevi aggiornamenti sul servizio",error:p}){const[{checked:b=!1},g]=f();return e.jsx(r,{checked:b,onChange:v=>g({checked:v.target.checked}),disabled:m,label:u,error:p})}},a={},o={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{label:"Ricevi aggiornamenti sul servizio",defaultChecked:!0})},s={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{label:"Ricevi aggiornamenti sul servizio",defaultChecked:!0,disabled:!0})},i={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{label:"Ricevi aggiornamenti sul servizio",error:"La selezione non è valida."})},n={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{label:"Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio."})},t={parameters:{controls:{disable:!0}},render:()=>e.jsx(d,{spacing:2,children:e.jsx(r,{"aria-label":"Ricevi aggiornamenti sul servizio"})})},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs(h,{component:"fieldset",children:[e.jsx(k,{component:"legend",children:"Quali aggiornamenti desideri ricevere?"}),e.jsxs(d,{spacing:1,sx:{mt:3},children:[e.jsx(r,{label:"Novità e funzionalità"}),e.jsx(r,{label:"Avvisi di manutenzione"}),e.jsx(r,{label:"Aggiornamenti sul servizio"})]})]})},S=["Playground","Selected","Disabled","WithError","LongLabel","AccessibleName","CheckboxGroup"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MICheckbox label="Ricevi aggiornamenti sul servizio" defaultChecked />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MICheckbox label="Ricevi aggiornamenti sul servizio" defaultChecked disabled />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MICheckbox label="Ricevi aggiornamenti sul servizio" error="La selezione non è valida." />
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MICheckbox label="Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio." />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack spacing={2}>
      <MICheckbox aria-label="Ricevi aggiornamenti sul servizio" />
    </Stack>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FormControl component="fieldset">
      <FormLabel component="legend">Quali aggiornamenti desideri ricevere?</FormLabel>
      <Stack spacing={1} sx={{
      mt: 3
    }}>
        <MICheckbox label="Novità e funzionalità" />
        <MICheckbox label="Avvisi di manutenzione" />
        <MICheckbox label="Aggiornamenti sul servizio" />
      </Stack>
    </FormControl>
}`,...l.parameters?.docs?.source}}};const E=Object.freeze(Object.defineProperty({__proto__:null,AccessibleName:t,CheckboxGroup:l,Disabled:s,LongLabel:n,Playground:a,Selected:o,WithError:i,__namedExportsOrder:S,default:z},Symbol.toStringTag,{value:"Module"}));export{t as A,l as C,s as D,n as L,E as M,o as S,i as W};
