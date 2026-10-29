import{r as k,j as t,b as v}from"./iframe-5Wy2T5h3.js";import{M as b}from"./MIMenu-CrxwZDDU.js";import{B as w}from"./Button-CkvxX6Vq.js";import{A as S}from"./AddCircleRounded-loAdbibT.js";import{L as M}from"./LogoutRounded-BWCj2mTX.js";const x=400,A=(o,e)=>o==="withIcons"?[{id:"new-action",label:"Nuova azione",startIcon:t.jsx(S,{fontSize:"small"}),onClick:e},{id:"logout",label:"Esci",startIcon:t.jsx(M,{fontSize:"small"}),onClick:e}]:o==="withDisabledItem"?[{id:"profile",label:"Profilo",onClick:e},{id:"admin-area",label:"Area amministrazione",disabled:!0,onClick:e},{id:"logout",label:"Esci",onClick:e}]:o==="withLongLabels"?[{id:"notifications-preferences",label:"Gestione preferenze di notifica e comunicazioni di servizio",onClick:e},{id:"activity-report",label:"Scarica report attivita e cronologia operazioni effettuate",onClick:e},{id:"logout",label:"Esci",onClick:e}]:[{id:"profile",label:"Profilo",onClick:e},{id:"settings",label:"Impostazioni",onClick:e},{id:"logout",label:"Esci",onClick:e}],D={title:"Components/MIMenu",component:b,tags:["!dev"],parameters:{controls:{include:["triggerLabel","scenario","keepMounted","disablePortal","disableAutoFocusItem"]},chromatic:{viewports:v.filter(o=>o<=x)}},args:{triggerLabel:"Apri menu account",scenario:"basic",anchorEl:null,open:!1,onClose:()=>{},items:[],keepMounted:!1,disablePortal:!1,disableAutoFocusItem:!1,id:"mi-menu-account"},argTypes:{triggerLabel:{control:{type:"text"},description:"Testo visualizzato nel pulsante che apre il menu.",table:{category:"Storybook controls",type:{summary:"string"}}},scenario:{options:["basic","withIcons","withDisabledItem","withLongLabels"],control:{type:"radio"},description:"Controllo Storybook: seleziona una configurazione di items predefinita.",table:{category:"Storybook controls",type:{summary:"'basic' | 'withIcons' | 'withDisabledItem' | 'withLongLabels'"}}},keepMounted:{control:"boolean",description:"Mantiene il menu montato nel DOM anche quando e chiuso.",table:{category:"MIMenu",type:{summary:"boolean"}}},disablePortal:{control:"boolean",description:"Disattiva il portal del menu.",table:{category:"MIMenu",type:{summary:"boolean"}}},disableAutoFocusItem:{control:"boolean",description:"Disattiva il focus automatico sul primo elemento all’apertura.",table:{category:"Accessibilita",type:{summary:"boolean"}}},items:{control:!1,table:{disable:!0}},anchorEl:{control:!1,table:{disable:!0}},open:{control:!1,table:{disable:!0}},onClose:{control:!1,table:{disable:!0}},onClick:{control:!1,table:{disable:!0}}},render:function({triggerLabel:e,scenario:g,keepMounted:f,disablePortal:h,disableAutoFocusItem:y,id:l,className:I}){const[d,u]=k.useState(null),c=!!d,m=`${l??"mi-menu"}-trigger`,L=z=>{u(z.currentTarget)},p=()=>{u(null)},C=A(g,p);return t.jsxs(t.Fragment,{children:[t.jsx(w,{id:m,variant:"contained","aria-controls":c?l:void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:L,children:e}),t.jsx(b,{id:l,className:I,open:c,anchorEl:d,onClose:p,onClick:()=>{},disableAutoFocusItem:y,items:C,keepMounted:f,disablePortal:h,MenuListProps:{"aria-labelledby":m}})]})}},a={},n={args:{triggerLabel:"Azioni profilo",scenario:"basic"},parameters:{controls:{disable:!0},docs:{description:{story:"Configurazione base del menu con tre azioni testuali."}}}},r={args:{triggerLabel:"Azioni rapide",scenario:"withIcons"},parameters:{controls:{disable:!0},docs:{description:{story:"Esempio con icone iniziali sugli elementi del menu."}}}},i={args:{triggerLabel:"Gestione account",scenario:"withDisabledItem"},parameters:{controls:{disable:!0},docs:{description:{story:"Stato con una voce disabilitata all’interno del menu."}}}},s={args:{triggerLabel:"Menu completo",scenario:"withLongLabels"},parameters:{controls:{disable:!0},docs:{description:{story:"Caso limite con etichette lunghe per verificare la resa del contenuto."}}}},E=["Playground","Default","WithIcons","WithDisabledItem","WithLongLabels"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    triggerLabel: 'Azioni profilo',
    scenario: 'basic'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Configurazione base del menu con tre azioni testuali.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    triggerLabel: 'Azioni rapide',
    scenario: 'withIcons'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Esempio con icone iniziali sugli elementi del menu.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    triggerLabel: 'Gestione account',
    scenario: 'withDisabledItem'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Stato con una voce disabilitata all’interno del menu.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    triggerLabel: 'Menu completo',
    scenario: 'withLongLabels'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Caso limite con etichette lunghe per verificare la resa del contenuto.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const F=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Playground:a,WithDisabledItem:i,WithIcons:r,WithLongLabels:s,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{n as D,F as M,r as W,i as a,s as b};
