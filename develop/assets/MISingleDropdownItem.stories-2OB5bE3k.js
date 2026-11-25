import{j as e,B as r,h as z}from"./iframe-6MQXqINC.js";import{M as i}from"./MIChip-7x9u9-Rn.js";import{M as n}from"./MISingleDropdownItem-CYnWeoVO.js";import{c as I}from"./createSvgIcon-DyGXVuQl.js";import{T as l}from"./Typography-C7bhwkwa.js";import{L as b}from"./LocationOn-DXVSAAiO.js";import{S as f}from"./Stack-B-_7KXm6.js";import{A as T}from"./AccountBalance-BoiK_rG2.js";const M=I(e.jsx("path",{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"MyLocation"),R=400,y=(o,t,S)=>e.jsxs(e.Fragment,{children:[o,S&&t.length>0&&e.jsx(l,{component:"span",sx:a=>({color:a.palette.text.secondary,fontSize:a.typography.pxToRem(14),fontWeight:a.typography.fontWeightRegular,lineHeight:a.typography.pxToRem(20),overflowWrap:"anywhere"}),children:t})]}),h=o=>{if(o==="location")return e.jsx(b,{sx:t=>({color:t.colors.neutral.grey[300],fontSize:16})});if(o==="institution")return e.jsx(r,{component:"span",sx:t=>({alignItems:"center",backgroundColor:t.colors.neutral.grey[50],borderRadius:1,color:t.colors.neutral.grey[300],display:"inline-flex",height:32,justifyContent:"center",width:32}),children:e.jsx(T,{fontSize:"small"})})},D={title:"Components/MISingleDropdownItem",component:n,tags:["!dev"],args:{value:"roma",label:"Comune di Roma",description:"Amministrazione comunale",leftContent:"location",showDescription:!0,showChip:!0,selected:!1,disabled:!1},argTypes:{value:{control:"text",description:"Valore associato all’opzione di MISelect."},label:{control:"text",description:"Testo principale mostrato nello slot centrale."},description:{control:"text",description:"Descrizione secondaria mostrata nello slot centrale."},leftContent:{options:["location","institution","none"],control:"radio",description:"Contenuto visuale mostrato a sinistra."},showDescription:{control:"boolean",description:"Controllo Storybook: mostra o nasconde la descrizione."},showChip:{control:"boolean",description:"Controllo Storybook: mostra o nasconde il chip di stato."},selected:{control:"boolean",description:"Applica lo stato selezionato supportato dal componente."},disabled:{control:"boolean",description:"Disabilita l’opzione."},centralSlot:{control:!1,table:{disable:!0}},leftSlot:{control:!1,table:{disable:!0}},rightSlot:{control:!1,table:{disable:!0}},sx:{control:!1,table:{disable:!0}}},parameters:{controls:{include:["label","value","description","leftContent","showDescription","showChip","selected","disabled"]},chromatic:{viewports:z.filter(o=>o<=R)}},render:({value:o,label:t,description:S,leftContent:a,showDescription:w,showChip:j,selected:v,disabled:C})=>e.jsx(r,{sx:{width:272},children:e.jsx(n,{value:o,centralSlot:y(t,S,w),leftSlot:h(a),rightSlot:j?e.jsx(i,{label:"Warning",color:"warning"}):void 0,selected:v,disabled:C})})},s={},c={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{width:"17rem"},children:e.jsx(n,{value:"roma",centralSlot:e.jsxs(f,{flexDirection:"column",children:[e.jsx(l,{component:"span",variant:"subtitle1",children:"Comune di Roma"}),e.jsx(l,{component:"span",sx:o=>({color:o.palette.text.secondary,fontSize:o.typography.pxToRem(14),lineHeight:o.typography.pxToRem(20)}),children:"Amministrazione comunale"})]}),leftSlot:e.jsx(b,{sx:o=>({alignSelf:"flex-start",color:o.colors.neutral.grey[300],fontSize:16})}),rightSlot:e.jsx(i,{label:"Warning",color:"warning"})})})},p={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{width:272},children:e.jsx(n,{value:"pagopa",centralSlot:y("PagoPA","Servizi di pagamento",!0),leftSlot:h("institution"),rightSlot:e.jsx(i,{label:"Warning",color:"warning"})})})},m={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{width:272},children:e.jsx(n,{value:"location",centralSlot:e.jsx(l,{component:"span",sx:o=>({color:o.colors.blue[500],fontSize:o.typography.pxToRem(16),fontWeight:o.typography.fontWeightMedium,lineHeight:o.typography.pxToRem(22)}),children:"Vai alla posizione"}),rightSlot:e.jsx(M,{sx:o=>({color:o.colors.blue[500],fontSize:24})})})})},d={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{component:"ul",role:"listbox","aria-label":"Enti disponibili","aria-multiselectable":"true",sx:{listStyle:"none",m:0,p:0,width:272},children:e.jsx(n,{value:"roma",role:"option","aria-selected":"true",centralSlot:e.jsxs(f,{children:["Comune di Roma",e.jsx(l,{component:"span",sx:o=>({color:o.palette.text.secondary,fontSize:o.typography.pxToRem(14),lineHeight:o.typography.pxToRem(20)}),children:"Amministrazione comunale"}),e.jsx(i,{label:"Warning",color:"warning"})]}),leftSlot:h("location"),selected:!0,sx:{alignItems:"flex-start"}})})},u={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{component:"ul",role:"listbox","aria-label":"Enti disponibili","aria-multiselectable":"true",sx:{listStyle:"none",m:0,p:0,width:272},children:e.jsx(n,{value:"services",role:"option","aria-selected":"true",centralSlot:e.jsxs(e.Fragment,{children:["Servizi digitali",e.jsx(l,{component:"span",sx:o=>({color:o.palette.text.secondary,fontSize:o.typography.pxToRem(14),lineHeight:o.typography.pxToRem(20)}),children:"Servizi per il cittadino"}),e.jsx(i,{label:"Warning",color:"warning"})]}),selected:!0,sx:{alignItems:"flex-start",paddingLeft:6}})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{width:272},children:e.jsx(n,{value:"roma",centralSlot:"Comune di Roma"})})},g={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{sx:{width:272},children:e.jsx(n,{value:"roma",centralSlot:y("Comune di Roma","Amministrazione comunale",!0),leftSlot:h("location"),rightSlot:e.jsx(i,{label:"Warning",color:"warning"}),disabled:!0})})},W=["Playground","Default","Product","CallToActionAppearance","Selected","SecondLevel","Minimal","Disabled"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    width: '17rem'
  }}>
      <MISingleDropdownItem value="roma" centralSlot={<Stack flexDirection="column">
            <Typography component="span" variant="subtitle1">
              Comune di Roma
            </Typography>
            <Typography component="span" sx={theme => ({
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(20)
      })}>
              Amministrazione comunale
            </Typography>
          </Stack>} leftSlot={<LocationOnIcon sx={theme => ({
      alignSelf: 'flex-start',
      color: theme.colors.neutral.grey[300],
      fontSize: 16
    })} />} rightSlot={<MIChip label="Warning" color="warning" />} />
    </Box>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    width: 272
  }}>
      <MISingleDropdownItem value="pagopa" centralSlot={createCentralContent('PagoPA', 'Servizi di pagamento', true)} leftSlot={createLeftContent('institution')} rightSlot={<MIChip label="Warning" color="warning" />} />
    </Box>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    width: 272
  }}>
      <MISingleDropdownItem value="location" centralSlot={<Typography component="span" sx={theme => ({
      color: theme.colors.blue[500],
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: theme.typography.pxToRem(22)
    })}>
            Vai alla posizione
          </Typography>} rightSlot={<MyLocationIcon sx={theme => ({
      color: theme.colors.blue[500],
      fontSize: 24
    })} />} />
    </Box>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box component="ul" role="listbox" aria-label="Enti disponibili" aria-multiselectable="true" sx={{
    listStyle: 'none',
    m: 0,
    p: 0,
    width: 272
  }}>
      <MISingleDropdownItem value="roma" role="option" aria-selected="true" centralSlot={<Stack>
            Comune di Roma
            <Typography component="span" sx={theme => ({
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(20)
      })}>
              Amministrazione comunale
            </Typography>
            <MIChip label="Warning" color="warning" />
          </Stack>} leftSlot={createLeftContent('location')} selected sx={{
      alignItems: 'flex-start'
    }} />
    </Box>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box component="ul" role="listbox" aria-label="Enti disponibili" aria-multiselectable="true" sx={{
    listStyle: 'none',
    m: 0,
    p: 0,
    width: 272
  }}>
      <MISingleDropdownItem value="services" role="option" aria-selected="true" centralSlot={<>
            Servizi digitali
            <Typography component="span" sx={theme => ({
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(20)
      })}>
              Servizi per il cittadino
            </Typography>
            <MIChip label="Warning" color="warning" />
          </>} selected sx={{
      alignItems: 'flex-start',
      paddingLeft: 6
    }} />
    </Box>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    width: 272
  }}>
      <MISingleDropdownItem value="roma" centralSlot="Comune di Roma" />
    </Box>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Box sx={{
    width: 272
  }}>
      <MISingleDropdownItem value="roma" centralSlot={createCentralContent('Comune di Roma', 'Amministrazione comunale', true)} leftSlot={createLeftContent('location')} rightSlot={<MIChip label="Warning" color="warning" />} disabled />
    </Box>
}`,...g.parameters?.docs?.source}}};const _=Object.freeze(Object.defineProperty({__proto__:null,CallToActionAppearance:m,Default:c,Disabled:g,Minimal:x,Playground:s,Product:p,SecondLevel:u,Selected:d,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{m as C,c as D,_ as M,p as P,d as S,x as a,u as b,g as c};
