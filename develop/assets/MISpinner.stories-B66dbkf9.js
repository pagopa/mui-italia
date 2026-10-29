import{j as r,B as l}from"./iframe-rw-T87Ps.js";import{M as e}from"./MISpinner-CsA1xAlP.js";import{S as i}from"./Stack-DK8xaQOE.js";import{T as t}from"./Typography-DIxyHfgM.js";const m={title:"Components/MISpinner",component:e,parameters:{layout:"centered",controls:{include:["color","size","aria-label"]}},args:{color:"primary",size:24,"aria-label":"Caricamento in corso"},argTypes:{color:{description:"Colore dello spinner.",options:["primary","secondary","error"],control:{type:"radio"},table:{type:{summary:"'primary' | 'secondary' | 'error'"},defaultValue:{summary:"primary"}}},size:{description:"Dimensione dello spinner in pixel.",control:{type:"number"},table:{type:{summary:"number | string"},defaultValue:{summary:"24"}}},"aria-label":{description:"Etichetta accessibile che descrive lo stato di caricamento.",control:{type:"text"},table:{type:{summary:"string"}}}},render:({color:a,size:c,"aria-label":p})=>a==="secondary"?r.jsx(l,{sx:{backgroundColor:"primary.main",color:"common.white",p:3,borderRadius:1},children:r.jsx(e,{color:"secondary","aria-label":"Caricamento secondary"})}):r.jsx(e,{color:a,size:c,"aria-label":p})},n={},o={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili per MISpinner."}}},render:()=>r.jsxs(i,{direction:"row",spacing:4,alignItems:"center",children:[r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(e,{color:"primary","aria-label":"Caricamento primary"}),r.jsx(t,{variant:"caption",children:"primary"})]}),r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(e,{color:"secondary","aria-label":"Caricamento secondary"}),r.jsx(t,{variant:"caption",children:"secondary"})]}),r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(e,{color:"error","aria-label":"Caricamento error"}),r.jsx(t,{variant:"caption",children:"error"})]})]})},s={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi di dimensioni disponibili tramite la prop size."}}},render:()=>r.jsx(i,{direction:"row",spacing:4,alignItems:"center",children:[16,24,32,40].map(a=>r.jsxs(i,{spacing:1,alignItems:"center",children:[r.jsx(e,{size:a,"aria-label":`Caricamento size ${a}`}),r.jsxs(t,{variant:"caption",children:[a,"px"]})]},a))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili per MISpinner.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={4} alignItems="center">
      <Stack spacing={1} alignItems="center">
        <MISpinner color="primary" aria-label="Caricamento primary" />
        <Typography variant="caption">primary</Typography>
      </Stack>

      <Stack spacing={1} alignItems="center">
        <MISpinner color="secondary" aria-label="Caricamento secondary" />
        <Typography variant="caption">secondary</Typography>
      </Stack>

      <Stack spacing={1} alignItems="center">
        <MISpinner color="error" aria-label="Caricamento error" />
        <Typography variant="caption">error</Typography>
      </Stack>
    </Stack>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempi di dimensioni disponibili tramite la prop size.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={4} alignItems="center">
      {[16, 24, 32, 40].map(size => <Stack key={size} spacing={1} alignItems="center">
          <MISpinner size={size} aria-label={\`Caricamento size \${size}\`} />
          <Typography variant="caption">{size}px</Typography>
        </Stack>)}
    </Stack>
}`,...s.parameters?.docs?.source}}};const d=["Playground","ColorVariants","SizeVariants"],b=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:o,Playground:n,SizeVariants:s,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{o as C,b as M,s as S};
