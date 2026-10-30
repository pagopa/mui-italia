import{j as e,B as N}from"./iframe-CDfDAPFk.js";import{M as o,a as r}from"./MIButton-Dvkhp4m4.js";import{S as p}from"./Stack-CQ_WFl_6.js";import{A as S}from"./ArrowBackRounded-ZuJQqqmX.js";import{A as b,D as L}from"./DeleteOutlineRounded-CXb3RXzo.js";const C=n=>n==="start"?{startIcon:e.jsx(S,{})}:n==="end"?{endIcon:e.jsx(b,{})}:{},k={title:"Components/MIButton",component:r,tags:["!dev"],parameters:{layout:"centered",controls:{include:["label","variant","color","size","fullWidth","isLoading","loaderType","loadingAriaLabel","iconPosition","enableHref","linkHref"]}},args:{label:"Press me",variant:"contained",color:"primary",size:"medium",fullWidth:!1,isLoading:!1,loaderType:o.SPINNER,loadingAriaLabel:"Caricamento in corso",iconPosition:"none",enableHref:!1},argTypes:{label:{control:{type:"text"},description:"Testo visualizzato all’interno del pulsante.",table:{category:"MIButton",type:{summary:"string"}}},variant:{options:["contained","outlined","text"],control:{type:"radio"},description:"Variante visiva del pulsante.",table:{category:"MIButton",type:{summary:"'contained' | 'outlined' | 'text'"},defaultValue:{summary:"contained"}}},color:{options:["primary","error","contrasted"],control:{type:"radio"},description:"Colore del pulsante.",table:{category:"MIButton",type:{summary:"'primary' | 'error' | 'contrasted'"},defaultValue:{summary:"primary"}}},size:{options:["small","medium","large"],control:{type:"radio"},description:"Dimensione del pulsante.",table:{category:"MIButton",type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}},fullWidth:{control:{type:"boolean"},description:"Estende il pulsante alla larghezza disponibile.",table:{category:"MIButton",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Mostra lo stato di caricamento e impedisce l’esecuzione del click.",table:{category:"MIButton",type:{summary:"boolean"},defaultValue:{summary:"false"}}},loaderType:{options:[o.SPINNER,o.SKELETON],control:{type:"radio"},description:"Tipo di loader mostrato durante lo stato di caricamento.",if:{arg:"isLoading",eq:!0},table:{category:"MIButton",type:{summary:"'spinner' | 'skeleton'"},defaultValue:{summary:o.SPINNER}}},loadingAriaLabel:{control:{type:"text"},description:"Etichetta accessibile passata allo spinner durante lo stato di caricamento.",if:{arg:"isLoading",eq:!0},table:{category:"Accessibilità",type:{summary:"string"},defaultValue:{summary:"Caricamento in corso"}}},iconPosition:{options:["none","start","end"],control:{type:"radio"},description:"Controllo Storybook: aggiunge un’icona a inizio o fine pulsante.",table:{category:"Storybook controls"}},enableHref:{control:{type:"boolean"},description:'Controllo Storybook: abilita href. Valido solo con variant="text".',if:{arg:"variant",eq:"text"},table:{category:"Storybook controls"}},linkHref:{control:{type:"text"},description:'URL usato quando enableHref è attivo e variant="text".',if:{arg:"enableHref",eq:!0},table:{category:"Storybook controls"}}},render:({label:n,variant:m,color:g,size:y,fullWidth:I,isLoading:x,loaderType:h,loadingAriaLabel:B,iconPosition:f,enableHref:v,linkHref:j})=>{const M=C(f);return m==="text"&&v?e.jsx(r,{variant:"text",href:j,color:g,size:y,fullWidth:I,isLoading:x,loaderType:h,loadingAriaLabel:B,...M,children:n}):e.jsx(r,{variant:m,color:g,size:y,fullWidth:I,isLoading:x,loaderType:h,loadingAriaLabel:B,...M,children:n})}},t={},a={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica delle varianti visive disponibili."}}},render:()=>e.jsxs(p,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"contained",children:"Contained"}),e.jsx(r,{variant:"outlined",children:"Outlined"}),e.jsx(r,{variant:"text",children:"Text"})]})},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili."}}},render:()=>e.jsxs(p,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"error",children:"Error"}),e.jsx(r,{color:"contrasted",children:"Contrasted"})]})},s={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica delle dimensioni disponibili."}}},render:()=>e.jsxs(p,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{size:"small",children:"Small"}),e.jsx(r,{size:"medium",children:"Medium"}),e.jsx(r,{size:"large",children:"Large"})]})},c={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi con icona iniziale e finale."}}},render:()=>e.jsxs(p,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{startIcon:e.jsx(S,{}),children:"Back"}),e.jsx(r,{endIcon:e.jsx(b,{}),children:"Next"}),e.jsx(r,{color:"error",startIcon:e.jsx(L,{}),children:"Delete"})]})},l={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"La prop href è ammessa solo sulla variante text."}}},render:()=>e.jsx(r,{variant:"text",href:"https://example.com",children:"Vai al sito"})},d={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi degli stati di caricamento disponibili."}}},render:()=>e.jsxs(p,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{isLoading:!0,loaderType:o.SPINNER,loadingAriaLabel:"Salvataggio in corso",children:"Salva"}),e.jsx(r,{isLoading:!0,loaderType:o.SKELETON,children:"Salva"})]})},u={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempio di pulsante a larghezza piena."}}},render:()=>e.jsx(N,{sx:{width:360},children:e.jsx(r,{fullWidth:!0,children:"Full width"})})},E=["Playground","Variants","Colors","Sizes","Icons","Link","LoadingStates","FullWidth"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica delle varianti visive disponibili.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton variant="contained">Contained</MIButton>
      <MIButton variant="outlined">Outlined</MIButton>
      <MIButton variant="text">Text</MIButton>
    </Stack>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica dei colori disponibili.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton color="primary">Primary</MIButton>
      <MIButton color="error">Error</MIButton>
      <MIButton color="contrasted">Contrasted</MIButton>
    </Stack>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Panoramica delle dimensioni disponibili.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton size="small">Small</MIButton>
      <MIButton size="medium">Medium</MIButton>
      <MIButton size="large">Large</MIButton>
    </Stack>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempi con icona iniziale e finale.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton startIcon={<ArrowBackRoundedIcon />}>Back</MIButton>
      <MIButton endIcon={<ArrowForwardRoundedIcon />}>Next</MIButton>
      <MIButton color="error" startIcon={<DeleteOutlineRoundedIcon />}>
        Delete
      </MIButton>
    </Stack>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'La prop href è ammessa solo sulla variante text.'
      }
    }
  },
  render: () => <MIButton variant="text" href="https://example.com">
      Vai al sito
    </MIButton>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempi degli stati di caricamento disponibili.'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton isLoading loaderType={MIButtonLoaderType.SPINNER} loadingAriaLabel="Salvataggio in corso">
        Salva
      </MIButton>

      <MIButton isLoading loaderType={MIButtonLoaderType.SKELETON}>
        Salva
      </MIButton>
    </Stack>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'Esempio di pulsante a larghezza piena.'
      }
    }
  },
  render: () => <Box sx={{
    width: 360
  }}>
      <MIButton fullWidth>Full width</MIButton>
    </Box>
}`,...u.parameters?.docs?.source}}};const V=Object.freeze(Object.defineProperty({__proto__:null,Colors:i,FullWidth:u,Icons:c,Link:l,LoadingStates:d,Playground:t,Sizes:s,Variants:a,__namedExportsOrder:E,default:k},Symbol.toStringTag,{value:"Module"}));export{i as C,u as F,c as I,l as L,V as M,s as S,a as V,d as a};
