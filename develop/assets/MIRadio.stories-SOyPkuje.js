import{j as e,h as b,r as R}from"./iframe-6MQXqINC.js";import{M as a}from"./MIRadio-BQQo9a2N.js";import{F as x}from"./FormControl-kWoj5W_b.js";import{F as S}from"./FormLabel-DQUl9tFQ.js";import{R as f}from"./RadioGroup-CPd_q92t.js";const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,j=400,r=({children:d,...c})=>{const u=R.useId(),m=`${u}-label`;return e.jsxs(x,{children:[e.jsx(S,{id:m,children:"Come desideri ricevere gli aggiornamenti?"}),e.jsx(f,{...c,"aria-labelledby":m,name:u,children:d})]})},z={title:"Components/MIRadio",component:a,tags:["!dev"],parameters:{controls:{include:["value","disabled","label","error"]},chromatic:{viewports:b.filter(d=>d<=j)}},args:{value:"email",label:"Ricevi aggiornamenti sul servizio"},argTypes:{value:{control:"select",options:["email","sms"],description:"Valore selezionato per il gruppo; cambia la selezione del radio."},disabled:{control:"boolean",description:"Disabilita il radio."},label:{control:"text",description:"Testo visibile del primo radio nel gruppo."},error:{control:"text",description:"Messaggio di errore del primo radio nel gruppo."},inputProps:{control:!1,table:{disable:!0},description:"Props dell’input nativo, utili anche per configurare il nome o le descrizioni accessibili."},onChange:{control:!1,table:{disable:!0}}},render:function({disabled:c,label:u,error:m}){const[{value:p="email"},v]=M();return e.jsxs(r,{value:p,onChange:g=>v({value:g.target.value}),children:[e.jsx(a,{value:"email",label:u??"Ricevi aggiornamenti sul servizio",error:m,disabled:c}),e.jsx(a,{value:"sms",label:"Ricevi aggiornamenti via SMS",disabled:c})]})}},i={},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{defaultValue:"email",children:[e.jsx(a,{value:"email",label:"Ricevi aggiornamenti sul servizio"}),e.jsx(a,{value:"sms",label:"Ricevi aggiornamenti via SMS"})]})},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{defaultValue:"email",children:[e.jsx(a,{value:"email",label:"Ricevi aggiornamenti sul servizio",disabled:!0}),e.jsx(a,{value:"sms",label:"Ricevi aggiornamenti via SMS",disabled:!0})]})},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{defaultValue:"",children:[e.jsx(a,{value:"email",label:"Ricevi aggiornamenti sul servizio",error:"La selezione non è valida."}),e.jsx(a,{value:"sms",label:"Ricevi aggiornamenti via SMS"})]})},n={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{defaultValue:"email",children:e.jsx(a,{value:"email",label:"Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio."})})},t={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{defaultValue:"email",children:e.jsx(a,{value:"email","aria-label":"Ricevi aggiornamenti via email"})})},h=["Playground","Selected","Disabled","WithError","LongLabel","AccessibleName"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </UpdatesRadioGroup>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" disabled />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" disabled />
    </UpdatesRadioGroup>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UpdatesRadioGroup defaultValue="">
      <MIRadio value="email" label="Ricevi aggiornamenti sul servizio" error="La selezione non è valida." />
      <MIRadio value="sms" label="Ricevi aggiornamenti via SMS" />
    </UpdatesRadioGroup>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" label="Desidero ricevere aggiornamenti via email sulle novità, le funzionalità e gli eventi del servizio." />
    </UpdatesRadioGroup>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UpdatesRadioGroup defaultValue="email">
      <MIRadio value="email" aria-label="Ricevi aggiornamenti via email" />
    </UpdatesRadioGroup>
}`,...t.parameters?.docs?.source}}};const E=Object.freeze(Object.defineProperty({__proto__:null,AccessibleName:t,Disabled:l,LongLabel:n,Playground:i,Selected:o,WithError:s,__namedExportsOrder:h,default:z},Symbol.toStringTag,{value:"Module"}));export{t as A,l as D,n as L,E as M,o as S,s as W};
