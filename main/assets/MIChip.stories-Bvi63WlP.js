import{j as a}from"./iframe-CDfDAPFk.js";import{M as s}from"./MIChip-Bt7UmFNO.js";import{S as f}from"./Stack-CQ_WFl_6.js";const y=["default","warning","error","success","highlight","info"],v=()=>{console.info("You clicked the delete icon.")},h={title:"Components/MIChip",component:s,parameters:{layout:"centered",controls:{include:["label","color","variant","aria-label","deleteIconAriaLabel","deletable"]}},args:{label:"Consegnata",color:"default",variant:"filled","aria-label":"Clicca per cancellare",deletable:!1},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}},description:"Testo visualizzato all’interno del chip."},color:{options:["default","warning","error","success","highlight","neutral","info"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"default"}},description:"Colore semantico del chip. Il valore neutral è pensato soprattutto per la variante deletable."},variant:{options:["filled","outlined"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"filled"}},description:"Variante visiva del chip."},"aria-label":{control:{type:"text"},table:{type:{summary:"string"}},description:"Aria label dell'icona di delete",if:{arg:"enableOnDelete",eq:!0}},deletable:{description:"Attiva/Disattiva il passaggio della funzione onDelete al componente",control:"boolean",if:{arg:"color",eq:"neutral"},table:{category:"Controlli Storybook"}}},render:n=>{const{deletable:e,color:c,variant:u,label:d,"aria-label":m,deleteIconAriaLabel:b}=n,g=e?()=>alert("Cliccato!"):void 0;return c==="neutral"?a.jsx(s,{label:d,color:"neutral",variant:"filled",onDelete:g,"aria-label":m,deleteIconAriaLabel:b}):a.jsx(s,{label:d,color:c,variant:u})}},p=({variant:n})=>a.jsx(f,{direction:"row",spacing:1,useFlexGap:!0,flexWrap:"wrap",children:y.map(e=>a.jsx(s,{label:e.charAt(0).toUpperCase()+e.slice(1),color:e,variant:n},`${n}-${e}`))}),r={args:{label:"Consegnata",color:"default",variant:"filled"}},o={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili nella variante filled."}}},render:()=>a.jsx(p,{variant:"filled"})},t={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili nella variante outlined."}}},render:()=>a.jsx(p,{variant:"outlined"})},i={args:{label:"Filtro attivo",color:"neutral",deletable:!0},parameters:{docs:{description:{story:"Variante deletable utile per filtri, selezioni o elementi rimovibili. In questo caso è consigliato curare l’aria-label dell’azione di rimozione."}}}},l={args:{label:"Stato pratica: Consegnata",color:"neutral",onDelete:v,"aria-label":"Rimuovi filtro Stato pratica: Consegnata"},parameters:{docs:{description:{story:"Esempio con labeling accessibile esplicito per la funzione di rimozione del chip."}}}},C=["Playground","FilledVariants","OutlinedVariants","Deletable","Accessibility"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili nella variante filled.'
      }
    }
  },
  render: () => <ChipGrid variant="filled" />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili nella variante outlined.'
      }
    }
  },
  render: () => <ChipGrid variant="outlined" />
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Filtro attivo',
    color: 'neutral',
    deletable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante deletable utile per filtri, selezioni o elementi rimovibili. In questo caso è consigliato curare l’aria-label dell’azione di rimozione.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stato pratica: Consegnata',
    color: 'neutral',
    onDelete: handleDelete,
    'aria-label': 'Rimuovi filtro Stato pratica: Consegnata'
  },
  parameters: {
    docs: {
      description: {
        story: 'Esempio con labeling accessibile esplicito per la funzione di rimozione del chip.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const D=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:l,Deletable:i,FilledVariants:o,OutlinedVariants:t,Playground:r,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{i as D,o as F,D as M,t as O};
