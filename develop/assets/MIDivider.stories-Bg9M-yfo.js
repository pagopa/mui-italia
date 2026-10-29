import{j as e,B as o,b as g}from"./iframe-EJCMhezF.js";import{M as r}from"./MIDivider-CKTr2BSM.js";const y=400,n={controls:{hideNoControlsWarning:!0}},v={title:"Components/MIDivider",component:r,tags:["!dev"],parameters:{layout:"centered",controls:{include:["htmlElement","showLabel","label"]},chromatic:{viewports:g.filter(p=>p<=y)}},args:{htmlElement:"hr",variant:"fullWidth",light:!1,showLabel:!1,label:"Dettagli"},argTypes:{htmlElement:{options:["hr","li","div"],control:{type:"radio"},description:"Controllo Storybook: seleziona l'elemento HTML usato per la prop component del divider.",table:{category:"Storybook controls",type:{summary:"'hr' | 'li' | 'div'"},defaultValue:{summary:"hr"}}},showLabel:{control:{type:"boolean"},description:"Controllo Storybook: mostra o nasconde il contenuto testuale del divider.",table:{category:"Storybook controls",type:{summary:"boolean"}}},label:{control:{type:"text"},description:"Controllo Storybook: testo mostrato nel divider quando showLabel è attivo.",if:{arg:"showLabel",eq:!0},table:{category:"Storybook controls",type:{summary:"string"}}},sx:{control:!1,table:{disable:!0}}},render:({htmlElement:p,showLabel:h,label:m})=>{const x=h&&!!m,u=x&&p==="hr"?"div":p;return e.jsx(o,{sx:{width:360,maxWidth:"100%"},children:e.jsx(r,{component:u,text:x?m:void 0})})}},t={},s={parameters:{...n,docs:{description:{story:"Configurazione base del divider con componente hr"}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%"},children:e.jsx(r,{component:"hr"})})},a={parameters:{...n,docs:{description:{story:"Divider con contenuto testuale, utile per separare sezioni correlate."}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%"},children:e.jsx(r,{text:"Dettagli aggiuntivi"})})},i={parameters:{...n,docs:{description:{story:"Divider con padding verticale di 4px."}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%",py:.5},children:e.jsx(r,{})})},d={parameters:{...n,docs:{description:{story:"Divider con padding verticale di 8px."}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%",py:1},children:e.jsx(r,{})})},c={parameters:{...n,docs:{description:{story:"Divider con padding verticale di 16px."}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%",py:2},children:e.jsx(r,{})})},l={parameters:{...n,docs:{description:{story:"Divider con padding verticale di 32px."}}},render:()=>e.jsx(o,{sx:{width:360,maxWidth:"100%",py:4},children:e.jsx(r,{})})},b=["Playground","Default","WithContent","Padding4","Padding8","Padding16","Padding32"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Configurazione base del divider con componente hr'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%'
  }}>
      <MIDivider component="hr" />
    </Box>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con contenuto testuale, utile per separare sezioni correlate.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%'
  }}>
      <MIDivider text="Dettagli aggiuntivi" />
    </Box>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 4px.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%',
    py: 0.5
  }}>
      <MIDivider />
    </Box>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 8px.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%',
    py: 1
  }}>
      <MIDivider />
    </Box>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 16px.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%',
    py: 2
  }}>
      <MIDivider />
    </Box>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...noControlsParameters,
    docs: {
      description: {
        story: 'Divider con padding verticale di 32px.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360,
    maxWidth: '100%',
    py: 4
  }}>
      <MIDivider />
    </Box>
}`,...l.parameters?.docs?.source}}};const P=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Padding16:c,Padding32:l,Padding4:i,Padding8:d,Playground:t,WithContent:a,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,P as M,i as P,a as W,d as a,c as b,l as c};
