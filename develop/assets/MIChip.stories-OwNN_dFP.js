import{j as a}from"./iframe-QS4E-7kp.js";import{M as s}from"./MIChip-BpRNg-TA.js";import{S as g}from"./Stack-COT3Y9GX.js";const f=["default","warning","error","success","highlight","neutral","info"],y=()=>{console.info("You clicked the delete icon.")},v={title:"Components/MIChip",component:s,parameters:{layout:"centered",controls:{include:["label","color","variant","aria-label","deleteIconAriaLabel","deletable"]}},args:{label:"Consegnata",color:"default",variant:"filled","aria-label":"Clicca per cancellare",deletable:!1},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}},description:"Testo visualizzato all’interno del chip."},color:{options:["default","warning","error","success","highlight","neutral","info"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"default"}},description:"Colore semantico del chip. Il valore neutral è l’unico disponibile per la variante deletable."},variant:{options:["filled","outlined"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"filled"}},description:"Variante visiva del chip."},"aria-label":{control:{type:"text"},table:{type:{summary:"string"}},description:"Aria label dell'icona di delete",if:{arg:"enableOnDelete",eq:!0}},deletable:{description:"Attiva/Disattiva il passaggio della funzione onDelete al componente",control:"boolean",if:{arg:"color",eq:"neutral"},table:{category:"Controlli Storybook"}}},render:n=>{const{deletable:e,color:c,variant:u,label:d,"aria-label":m,deleteIconAriaLabel:b}=n;return c==="neutral"&&e?a.jsx(s,{label:d,color:"neutral",variant:"filled",onDelete:()=>alert("Cliccato!"),"aria-label":m,deleteIconAriaLabel:b}):a.jsx(s,{label:d,color:c,variant:u})}},p=({variant:n})=>a.jsx(g,{direction:"row",spacing:1,useFlexGap:!0,flexWrap:"wrap",children:f.map(e=>a.jsx(s,{label:e.charAt(0).toUpperCase()+e.slice(1),color:e,variant:n},`${n}-${e}`))}),r={args:{label:"Consegnata",color:"default",variant:"filled"}},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili nella variante filled."}}},render:()=>a.jsx(p,{variant:"filled"})},o={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili nella variante outlined."}}},render:()=>a.jsx(p,{variant:"outlined"})},l={args:{label:"Filtro attivo",color:"neutral",deletable:!0},parameters:{docs:{description:{story:"Variante deletable utile per filtri, selezioni o elementi rimovibili. In questo caso è consigliato curare l’aria-label dell’azione di rimozione."}}}},t={args:{label:"Stato pratica: Consegnata",color:"neutral",onDelete:y,"aria-label":"Rimuovi filtro Stato pratica: Consegnata"},parameters:{docs:{description:{story:"Esempio con labeling accessibile esplicito per la funzione di rimozione del chip."}}}},h=["Playground","FilledVariants","OutlinedVariants","Deletable","Accessibility"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Consegnata',
    color: 'default',
    variant: 'filled'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:t,Deletable:l,FilledVariants:i,OutlinedVariants:o,Playground:r,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{l as D,i as F,z as M,o as O};
