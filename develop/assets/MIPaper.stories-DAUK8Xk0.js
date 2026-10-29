import{j as t,B as y}from"./iframe-rw-T87Ps.js";import{M as e}from"./MIPaper-BgUoYzI2.js";import{S as p}from"./Stack-DK8xaQOE.js";import{T as r}from"./Typography-DIxyHfgM.js";const c=[8,16,24],l=[16,24],h={title:"Components/MIPaper",component:e,parameters:{layout:"centered",controls:{include:["variant","borderRadius","padding","content"]}},args:{variant:"flat",borderRadius:8,padding:16,content:"Contenuto del paper"},argTypes:{variant:{options:["flat","outlined"],control:{type:"radio"},description:"Variante visiva del paper.",table:{category:"MIPaper",type:{summary:"'flat' | 'outlined'"},defaultValue:{summary:"flat"}}},borderRadius:{options:c,control:{type:"radio"},description:"Radius applicato al contenitore tramite i token del tema.",table:{category:"MIPaper",type:{summary:"RadiusVariant"},defaultValue:{summary:"8"}}},padding:{options:l,control:{type:"radio"},description:"Padding interno del paper espresso in pixel.",table:{category:"MIPaper",type:{summary:"16 | 24"},defaultValue:{summary:"16"}}},content:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del componente.",table:{category:"Storybook controls"}}},render:({content:a,children:u,sx:m,...g})=>t.jsx(e,{...g,sx:{width:320,...m},children:t.jsx(r,{variant:"body1",children:a??u})})},o={},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra le varianti flat e outlined."}}},render:()=>t.jsxs(p,{direction:{xs:"column",sm:"row"},spacing:3,children:[t.jsxs(e,{variant:"flat",borderRadius:8,padding:16,sx:{width:280},children:[t.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Flat"}),t.jsx(r,{variant:"body2",children:"Variante senza bordo, con ombra disabilitata e padding interno."})]}),t.jsxs(e,{variant:"outlined",borderRadius:8,padding:16,sx:{width:280},children:[t.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Outlined"}),t.jsx(r,{variant:"body2",children:"Variante con bordo neutro e ombra disabilitata."})]})]})},n={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei radius disponibili."}}},render:()=>t.jsx(p,{direction:{xs:"column",sm:"row"},spacing:3,children:c.map(a=>t.jsxs(e,{variant:"outlined",borderRadius:a,padding:16,sx:{width:220},children:[t.jsxs(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:["Radius ",a]}),t.jsx(r,{variant:"body2",children:"Angoli arrotondati tramite token del tema."})]},a))})},s={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Confronto tra i padding disponibili."}}},render:()=>t.jsx(p,{direction:{xs:"column",sm:"row"},spacing:3,alignItems:"flex-start",children:l.map(a=>t.jsxs(e,{variant:"outlined",borderRadius:8,padding:a,sx:{width:260},children:[t.jsxs(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:["Padding ",a]}),t.jsx(r,{variant:"body2",children:a===16?"Spaziatura interna compatta per contenuti brevi.":"Spaziatura interna più ampia per contenuti più strutturati."})]},a))})},d={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempio di contenuto composto all’interno di MIPaper."}}},render:()=>t.jsx(e,{component:"section","aria-labelledby":"paper-example-title",variant:"outlined",borderRadius:16,padding:24,sx:{width:360},children:t.jsxs(p,{spacing:1.5,children:[t.jsx(r,{id:"paper-example-title",variant:"h3",fontSize:20,fontWeight:600,children:"Titolo sezione"}),t.jsx(r,{variant:"body2",color:"text.secondary",children:"MIPaper può contenere testo, layout e altri componenti React."}),t.jsx(y,{children:t.jsx(r,{variant:"caption",color:"text.secondary",children:"Variante outlined, radius 16, padding 24."})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const b=["Playground","Variants","BorderRadius","Padding","ContentExample"],T=Object.freeze(Object.defineProperty({__proto__:null,BorderRadius:n,ContentExample:d,Padding:s,Playground:o,Variants:i,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{n as B,d as C,T as M,s as P,i as V};
