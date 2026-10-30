import{j as n,B as y}from"./iframe-CDfDAPFk.js";import{M as a}from"./MIPaper-CnDpsgSw.js";import{S as p}from"./Stack-CQ_WFl_6.js";import{T as t}from"./Typography-9AQN7ayB.js";const c=[8,16,24],l=[16,24],h={title:"Components/MIPaper",component:a,parameters:{layout:"centered",controls:{include:["variant","borderRadius","padding","content"]}},args:{variant:"flat",borderRadius:8,padding:16,content:"Contenuto del paper"},argTypes:{variant:{options:["flat","outlined"],control:{type:"radio"},description:"Variante visiva del paper.",table:{category:"MIPaper",type:{summary:"'flat' | 'outlined'"},defaultValue:{summary:"flat"}}},borderRadius:{options:c,control:{type:"radio"},description:"Radius applicato al contenitore tramite i token del tema.",table:{category:"MIPaper",type:{summary:"RadiusVariant"},defaultValue:{summary:"8"}}},padding:{options:l,control:{type:"radio"},description:"Padding interno del paper espresso in pixel.",table:{category:"MIPaper",type:{summary:"16 | 24"},defaultValue:{summary:"16"}}},content:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del componente.",table:{category:"Storybook controls"}}},render:({content:r,children:u,sx:m,...g})=>n.jsx(a,{...g,sx:{width:320,...m},children:n.jsx(t,{variant:"body1",children:r??u})})},e={},o={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra le varianti flat e outlined."}}},render:()=>n.jsxs(p,{direction:{xs:"column",sm:"row"},spacing:3,children:[n.jsxs(a,{variant:"flat",borderRadius:8,padding:16,sx:{width:280},children:[n.jsx(t,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Flat"}),n.jsx(t,{variant:"body2",children:"Variante senza bordo, con ombra disabilitata e padding interno."})]}),n.jsxs(a,{variant:"outlined",borderRadius:8,padding:16,sx:{width:280},children:[n.jsx(t,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Outlined"}),n.jsx(t,{variant:"body2",children:"Variante con bordo neutro e ombra disabilitata."})]})]})},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei radius disponibili."}}},render:()=>n.jsx(p,{direction:{xs:"column",sm:"row"},spacing:3,children:c.map(r=>n.jsxs(a,{variant:"outlined",borderRadius:r,padding:16,sx:{width:220},children:[n.jsxs(t,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:["Radius ",r]}),n.jsx(t,{variant:"body2",children:"Angoli arrotondati tramite token del tema."})]},r))})},s={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra i padding disponibili."}}},render:()=>n.jsx(p,{direction:{xs:"column",sm:"row"},spacing:3,alignItems:"flex-start",children:l.map(r=>n.jsxs(a,{variant:"outlined",borderRadius:8,padding:r,sx:{width:260},children:[n.jsxs(t,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:["Padding ",r]}),n.jsx(t,{variant:"body2",children:r===16?"Spaziatura interna compatta per contenuti brevi.":"Spaziatura interna più ampia per contenuti più strutturati."})]},r))})},d={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempio di contenuto composto all’interno di MIPaper."}}},render:()=>n.jsx(a,{component:"section","aria-labelledby":"paper-example-title",variant:"outlined",borderRadius:16,padding:24,sx:{width:360},children:n.jsxs(p,{spacing:1.5,children:[n.jsx(t,{id:"paper-example-title",variant:"h3",fontSize:20,fontWeight:600,children:"Titolo sezione"}),n.jsx(t,{variant:"body2",color:"text.secondary",children:"MIPaper può contenere testo, layout e altri componenti React."}),n.jsx(y,{children:n.jsx(t,{variant:"caption",color:"text.secondary",children:"Variante outlined, radius 16, padding 24."})})]})})},b=["Playground","Variants","BorderRadius","Padding","ContentExample"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Confronto tra le varianti flat e outlined.'
      }
    }
  },
  render: () => <Stack direction={{
    xs: 'column',
    sm: 'row'
  }} spacing={3}>
      <MIPaper variant="flat" borderRadius={8} padding={16} sx={{
      width: 280
    }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Flat
        </Typography>
        <Typography variant="body2">
          Variante senza bordo, con ombra disabilitata e padding interno.
        </Typography>
      </MIPaper>

      <MIPaper variant="outlined" borderRadius={8} padding={16} sx={{
      width: 280
    }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Outlined
        </Typography>
        <Typography variant="body2">Variante con bordo neutro e ombra disabilitata.</Typography>
      </MIPaper>
    </Stack>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica dei radius disponibili.'
      }
    }
  },
  render: () => <Stack direction={{
    xs: 'column',
    sm: 'row'
  }} spacing={3}>
      {borderRadiusOptions.map(borderRadius => <MIPaper key={borderRadius} variant="outlined" borderRadius={borderRadius} padding={16} sx={{
      width: 220
    }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Radius {borderRadius}
          </Typography>
          <Typography variant="body2">Angoli arrotondati tramite token del tema.</Typography>
        </MIPaper>)}
    </Stack>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Confronto tra i padding disponibili.'
      }
    }
  },
  render: () => <Stack direction={{
    xs: 'column',
    sm: 'row'
  }} spacing={3} alignItems="flex-start">
      {paddingOptions.map(padding => <MIPaper key={padding} variant="outlined" borderRadius={8} padding={padding} sx={{
      width: 260
    }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Padding {padding}
          </Typography>
          <Typography variant="body2">
            {padding === 16 ? 'Spaziatura interna compatta per contenuti brevi.' : 'Spaziatura interna più ampia per contenuti più strutturati.'}
          </Typography>
        </MIPaper>)}
    </Stack>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempio di contenuto composto all’interno di MIPaper.'
      }
    }
  },
  render: () => <MIPaper component="section" aria-labelledby="paper-example-title" variant="outlined" borderRadius={16} padding={24} sx={{
    width: 360
  }}>
      <Stack spacing={1.5}>
        <Typography id="paper-example-title" variant="h3" fontSize={20} fontWeight={600}>
          Titolo sezione
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MIPaper può contenere testo, layout e altri componenti React.
        </Typography>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Variante outlined, radius 16, padding 24.
          </Typography>
        </Box>
      </Stack>
    </MIPaper>
}`,...d.parameters?.docs?.source}}};const T=Object.freeze(Object.defineProperty({__proto__:null,BorderRadius:i,ContentExample:d,Padding:s,Playground:e,Variants:o,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{i as B,d as C,T as M,s as P,o as V};
