import{j as o}from"./iframe-5Wy2T5h3.js";import{M as s}from"./MISwitch-D3tYpz7A.js";import{S as n}from"./Stack-Dp12Lk8P.js";const c={title:"components/MISwitch",component:s,tags:["!dev"],parameters:{controls:{include:["checked","defaultChecked","disabled","disableRipple","disableFocusRipple","edge","readOnly","required","name","label","description","error"]}},argTypes:{checked:{description:"Stato controllato dello switch (acceso/spento). Richiede 'onChange'."},defaultChecked:{description:"Stato iniziale non controllato."},disabled:{description:"Disabilita lo switch impedendone l’interazione."},disableRipple:{description:"Disabilita l’effetto ripple al click/focus."},disableFocusRipple:{description:"Disabilita il ripple sul solo focus da tastiera."},edge:{description:"Margine negativo per allineare lo switch a inizio/fine riga."},readOnly:{description:"Rende lo switch non modificabile, mantenendo lo stato visibile."},required:{description:"Contrassegna l’input sottostante come obbligatorio in un form."},name:{description:"Nome dell’input, utile per la gestione del form."},label:{control:"text",description:"Testo principale associato allo switch."},description:{control:"text",description:"Testo descrittivo facoltativo associato allo switch."},error:{control:"text",description:"Messaggio di errore facoltativo associato allo switch."}}},e={args:{defaultChecked:!1,label:"Notifiche",description:"Ricevi aggiornamenti sulle attività del tuo account."}},i={parameters:{controls:{include:[]}},args:{checked:!0}},t={parameters:{controls:{include:[]}},render:()=>o.jsxs(n,{direction:"row",alignItems:"center",gap:4,children:[o.jsx(s,{label:"Notifiche attive",checked:!0,disabled:!0}),o.jsx(s,{label:"Notifiche disattive",disabled:!0})]})},r={parameters:{controls:{include:[]}},args:{label:"Notifiche",description:"Ricevi aggiornamenti sulle attività del tuo account."}},a={parameters:{controls:{include:[]}},args:{label:"Notifiche",description:"Ricevi aggiornamenti sulle attività del tuo account.",error:"Seleziona se desideri ricevere notifiche."}},l=["Playground","PrimaryChecked","PrimaryDisabled","WithLabel","WithError"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.'
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  args: {
    checked: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => <Stack direction="row" alignItems="center" gap={4}>
      <MISwitch label="Notifiche attive" checked disabled />
      <MISwitch label="Notifiche disattive" disabled />
    </Stack>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  args: {
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    }
  },
  args: {
    label: 'Notifiche',
    description: 'Ricevi aggiornamenti sulle attività del tuo account.',
    error: 'Seleziona se desideri ricevere notifiche.'
  }
}`,...a.parameters?.docs?.source}}};const m=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,PrimaryChecked:i,PrimaryDisabled:t,WithError:a,WithLabel:r,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{m as M,i as P,r as W,t as a,a as b};
