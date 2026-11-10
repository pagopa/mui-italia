import{j as e,B as v}from"./iframe-UeoK4583.js";import{M as r,a as n}from"./MIButton-DaTzsiVi.js";import{S as o}from"./Stack-BTEqUilJ.js";import{A as f}from"./ArrowBackRounded-ChueRPad.js";import{A as b,D as N}from"./DeleteOutlineRounded-DKjPfIUj.js";const L=t=>t==="start"?{startIcon:e.jsx(f,{})}:t==="end"?{endIcon:e.jsx(b,{})}:{},k={title:"Components/MIButton",component:n,tags:["!dev"],parameters:{layout:"centered",controls:{include:["label","variant","color","size","fullWidth","isLoading","loaderType","loadingAriaLabel","iconPosition","linkHref"]}},args:{label:"Press me",variant:"contained",color:"primary",size:"medium",fullWidth:!1,isLoading:!1,loaderType:r.SPINNER,loadingAriaLabel:"Caricamento in corso",iconPosition:"none"},argTypes:{label:{control:{type:"text"},description:"Testo visualizzato all’interno del pulsante.",table:{category:"MIButton",type:{summary:"string"}}},variant:{options:["contained","outlined","text"],control:{type:"radio"},description:"Variante visiva del pulsante.",table:{category:"MIButton",type:{summary:"'contained' | 'outlined' | 'text'"},defaultValue:{summary:"contained"}}},color:{options:["primary","error","contrasted"],control:{type:"radio"},description:"Colore del pulsante.",table:{category:"MIButton",type:{summary:"'primary' | 'error' | 'contrasted'"},defaultValue:{summary:"primary"}}},size:{options:["small","medium","large"],control:{type:"radio"},description:"Dimensione del pulsante.",table:{category:"MIButton",type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"medium"}}},fullWidth:{control:{type:"boolean"},description:"Estende il pulsante alla larghezza disponibile.",table:{category:"MIButton",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},description:"Mostra lo stato di caricamento e impedisce l’esecuzione del click.",table:{category:"MIButton",type:{summary:"boolean"},defaultValue:{summary:"false"}}},loaderType:{options:[r.SPINNER,r.SKELETON],control:{type:"radio"},description:"Tipo di loader mostrato durante lo stato di caricamento.",if:{arg:"isLoading",eq:!0},table:{category:"MIButton",type:{summary:"'spinner' | 'skeleton'"},defaultValue:{summary:r.SPINNER}}},loadingAriaLabel:{control:{type:"text"},description:"Etichetta accessibile passata allo spinner durante lo stato di caricamento.",if:{arg:"isLoading",eq:!0},table:{category:"Accessibilità",type:{summary:"string"},defaultValue:{summary:"Caricamento in corso"}}},iconPosition:{options:["none","start","end"],control:{type:"radio"},description:"Controllo Storybook: aggiunge un’icona a inizio o fine pulsante.",table:{category:"Storybook controls"}},linkHref:{control:{type:"text"},description:"URL usato per la navigazione come link.",table:{category:"Storybook controls"}}},render:({label:t,variant:m,color:g,size:I,fullWidth:y,isLoading:h,loaderType:x,loadingAriaLabel:B,iconPosition:j,linkHref:M})=>{const S=L(j);return M?e.jsx(n,{variant:m,href:M,color:g,size:I,fullWidth:y,isLoading:h,loaderType:x,loadingAriaLabel:B,...S,children:t}):e.jsx(n,{variant:m,color:g,size:I,fullWidth:y,isLoading:h,loaderType:x,loadingAriaLabel:B,...S,children:t})}},a={},i={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica delle varianti visive disponibili."}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"contained",children:"Contained"}),e.jsx(n,{variant:"outlined",children:"Outlined"}),e.jsx(n,{variant:"text",children:"Text"})]})},s={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica dei colori disponibili."}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{color:"primary",children:"Primary"}),e.jsx(n,{color:"error",children:"Error"}),e.jsx(n,{color:"contrasted",children:"Contrasted"})]})},c={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Panoramica delle dimensioni disponibili."}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{size:"small",children:"Small"}),e.jsx(n,{size:"medium",children:"Medium"}),e.jsx(n,{size:"large",children:"Large"})]})},l={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi con icona iniziale e finale."}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{startIcon:e.jsx(f,{}),children:"Back"}),e.jsx(n,{endIcon:e.jsx(b,{}),children:"Next"}),e.jsx(n,{color:"error",startIcon:e.jsx(N,{}),children:"Delete"})]})},d={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"La prop href è ammessa su qualsiasi variante"}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{variant:"contained",href:"https://example.com",children:"Vai al sito"}),e.jsx(n,{variant:"outlined",href:"https://example.com",children:"Vai al sito"}),e.jsx(n,{variant:"text",href:"https://example.com",children:"Vai al sito"})]})},u={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempi degli stati di caricamento disponibili."}}},render:()=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{isLoading:!0,loaderType:r.SPINNER,loadingAriaLabel:"Salvataggio in corso",children:"Salva"}),e.jsx(n,{isLoading:!0,loaderType:r.SKELETON,children:"Salva"})]})},p={parameters:{controls:{hideNoControlsWarning:!0},docs:{description:{story:"Esempio di pulsante a larghezza piena."}}},render:()=>e.jsx(v,{sx:{width:360},children:e.jsx(n,{fullWidth:!0,children:"Full width"})})},C=["Playground","Variants","Colors","Sizes","Icons","Link","LoadingStates","FullWidth"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    docs: {
      description: {
        story: 'La prop href è ammessa su qualsiasi variante'
      }
    }
  },
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <MIButton variant="contained" href="https://example.com">
        Vai al sito
      </MIButton>
      <MIButton variant="outlined" href="https://example.com">
        Vai al sito
      </MIButton>
      <MIButton variant="text" href="https://example.com">
        Vai al sito
      </MIButton>
    </Stack>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const T=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,FullWidth:p,Icons:l,Link:d,LoadingStates:u,Playground:a,Sizes:c,Variants:i,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{s as C,p as F,l as I,d as L,T as M,c as S,i as V,u as a};
