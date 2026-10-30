import{j as e}from"./iframe-CDfDAPFk.js";import{M as r,a}from"./MIBreadcrumbs-C10PdCPu.js";import{S as s}from"./Stack-CQ_WFl_6.js";import{T as m}from"./Typography-9AQN7ayB.js";const x={title:"Components/MIBreadcrumbs",component:r,tags:["!dev"],parameters:{layout:"centered",controls:{include:["variant","navigationMode","backButtonLabel","aria-label","firstItemLabel","secondItemLabel","currentItemLabel"]}},args:{variant:"extended",navigationMode:"link",backButtonLabel:"Indietro","aria-label":"Percorso di navigazione",firstItemLabel:"Dashboard",secondItemLabel:"Elenco ricevute",currentItemLabel:"Dettaglio ricevuta"},argTypes:{variant:{options:["extended","compact"],control:{type:"radio"},description:"Determina se mostrare la gerarchia completa oppure il solo pulsante Indietro."},navigationMode:{options:["link","action"],control:{type:"radio"},description:"Controllo Storybook: configura gli elementi precedenti come link tramite href oppure come azioni tramite onClick.",table:{category:"Storybook controls"}},backButtonLabel:{control:{type:"text"},description:"Etichetta del pulsante mostrato nella variante compact e alle risoluzioni mobile."},"aria-label":{control:{type:"text"},description:"Etichetta accessibile dell’elemento di navigazione che contiene le breadcrumb."},firstItemLabel:{control:{type:"text"},description:"Controllo Storybook: etichetta del primo elemento della gerarchia.",table:{category:"Storybook controls"}},secondItemLabel:{control:{type:"text"},description:"Controllo Storybook: etichetta del secondo elemento della gerarchia.",table:{category:"Storybook controls"}},currentItemLabel:{control:{type:"text"},description:"Controllo Storybook: etichetta della pagina corrente.",table:{category:"Storybook controls"}},children:{control:!1,description:"Elenco ordinato di MIBreadcrumbItem che rappresenta la gerarchia di navigazione."},backButtonAction:{control:!1,description:"Callback eseguita quando viene attivato il pulsante Indietro."},sx:{control:!1}},render:({navigationMode:p,firstItemLabel:d,secondItemLabel:b,currentItemLabel:u,variant:v,backButtonLabel:g,"aria-label":h})=>{const I=p==="link"?[e.jsx(a,{label:d,href:"/dashboard"},"dashboard"),e.jsx(a,{label:b,href:"/ricevute"},"receipts"),e.jsx(a,{label:u,current:!0},"current")]:[e.jsx(a,{label:d,onClick:()=>console.info("Navigazione alla dashboard")},"dashboard"),e.jsx(a,{label:b,onClick:()=>console.info("Navigazione all’elenco ricevute")},"receipts"),e.jsx(a,{label:u,current:!0},"current")];return e.jsx(r,{variant:v,backButtonLabel:g,backButtonAction:()=>console.info("Navigazione indietro"),"aria-label":h,children:I})}},o={},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{"aria-label":"Percorso di navigazione",children:[e.jsx(a,{label:"Dashboard",href:"/dashboard"}),e.jsx(a,{label:"Elenco ricevute",href:"/ricevute"}),e.jsx(a,{label:"Dettaglio ricevuta",current:!0})]})},n={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{"aria-label":"Percorso di navigazione",children:[e.jsx(a,{label:"Dashboard",onClick:()=>console.info("Navigazione alla dashboard")}),e.jsx(a,{label:"Elenco ricevute",onClick:()=>console.info("Navigazione all’elenco ricevute")}),e.jsx(a,{label:"Dettaglio ricevuta",current:!0})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs(r,{variant:"extended","aria-label":"Percorso di navigazione",backButtonLabel:"Indietro",backButtonAction:()=>console.info("Navigazione indietro"),children:[e.jsx(a,{label:"Dashboard",href:"/dashboard"}),e.jsx(a,{label:"Elenco ricevute",href:"/ricevute"}),e.jsx(a,{label:"Dettaglio ricevuta",current:!0})]})},c={parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{variant:"compact","aria-label":"Navigazione alla pagina precedente",backButtonLabel:"Elenco ricevute",backButtonAction:()=>console.info("Navigazione all’elenco ricevute")})},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs(s,{direction:"column",spacing:4,alignItems:"flex-start",children:[e.jsxs(s,{spacing:1,children:[e.jsx(m,{variant:"caption",children:"Extended"}),e.jsxs(r,{variant:"extended","aria-label":"Percorso di navigazione",children:[e.jsx(a,{label:"Dashboard",href:"/dashboard"}),e.jsx(a,{label:"Elenco ricevute",href:"/ricevute"}),e.jsx(a,{label:"Dettaglio ricevuta",current:!0})]})]}),e.jsxs(s,{spacing:1,children:[e.jsx(m,{variant:"caption",children:"Compact"}),e.jsx(r,{variant:"compact","aria-label":"Navigazione alla pagina precedente",backButtonLabel:"Elenco ricevute",backButtonAction:()=>console.info("Navigazione all’elenco ricevute")})]})]})},k=["Playground","LinkNavigation","ActionNavigation","Extended","Compact","Variants"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIBreadcrumbs aria-label="Percorso di navigazione">
      <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
      <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIBreadcrumbs aria-label="Percorso di navigazione">
      <MIBreadcrumbItem label="Dashboard" onClick={() => console.info('Navigazione alla dashboard')} />
      <MIBreadcrumbItem label="Elenco ricevute" onClick={() => console.info('Navigazione all’elenco ricevute')} />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIBreadcrumbs variant="extended" aria-label="Percorso di navigazione" backButtonLabel="Indietro" backButtonAction={() => console.info('Navigazione indietro')}>
      <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
      <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
      <MIBreadcrumbItem label="Dettaglio ricevuta" current />
    </MIBreadcrumbs>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MIBreadcrumbs variant="compact" aria-label="Navigazione alla pagina precedente" backButtonLabel="Elenco ricevute" backButtonAction={() => console.info('Navigazione all’elenco ricevute')} />
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="column" spacing={4} alignItems="flex-start">
      <Stack spacing={1}>
        <Typography variant="caption">Extended</Typography>

        <MIBreadcrumbs variant="extended" aria-label="Percorso di navigazione">
          <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
          <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
          <MIBreadcrumbItem label="Dettaglio ricevuta" current />
        </MIBreadcrumbs>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="caption">Compact</Typography>

        <MIBreadcrumbs variant="compact" aria-label="Navigazione alla pagina precedente" backButtonLabel="Elenco ricevute" backButtonAction={() => console.info('Navigazione all’elenco ricevute')} />
      </Stack>
    </Stack>
}`,...l.parameters?.docs?.source}}};const M=Object.freeze(Object.defineProperty({__proto__:null,ActionNavigation:n,Compact:c,Extended:i,LinkNavigation:t,Playground:o,Variants:l,__namedExportsOrder:k,default:x},Symbol.toStringTag,{value:"Module"}));export{n as A,c as C,i as E,t as L,M,l as V};
