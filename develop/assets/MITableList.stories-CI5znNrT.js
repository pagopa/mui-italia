import{j as e}from"./iframe-rw-T87Ps.js";import{a as x}from"./MIButton-C2bAjGPO.js";import{M as i,a,b as l}from"./MITableList-Dh4hAg2m.js";import{M as o}from"./MailOutline-BdsGaJXE.js";import{A as g}from"./ArrowForward-OiwshP1T.js";const j={uniform:void 0,custom:[2,1,1.3]},t=({onClick:b,"aria-label":I,children:u})=>e.jsx(x,{variant:"text",endIcon:e.jsx(g,{}),onClick:b,"aria-label":I,children:u}),p=()=>[e.jsxs(a,{action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"22/11/2025",children:"Titolo campagna molto lungo che potrebbe andare su più righe"}),e.jsx(l,{label:"Codice ID",children:"0000000000"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"10"})]},"campaign-1"),e.jsxs(a,{action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"23/11/2025",children:"Seconda campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000001"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"20"})]},"campaign-2"),e.jsxs(a,{action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"24/11/2025",children:"Terza campagna con contenuto differente"}),e.jsx(l,{label:"Codice ID",children:"0000000002"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"30"})]},"campaign-3")],h={title:"Components/MITableList",component:i,parameters:{layout:"padded",theme:"next",controls:{include:["loading","columnLayout","rows","cols","skeletonAction","loadingLabel"]}},args:{loading:!1,columnLayout:"custom",rows:4,cols:3,skeletonAction:!1,loadingLabel:"Caricamento in corso..."},argTypes:{loading:{control:{type:"boolean"},description:"Attiva lo stato di caricamento.",table:{category:"MITableList",type:{summary:"boolean"},defaultValue:{summary:"false"}}},columnLayout:{options:["uniform","custom"],control:{type:"radio"},description:"Preset Storybook per la distribuzione dei campi.",table:{category:"Storybook controls"}},rows:{control:{type:"number",min:1},description:"Righe dello skeleton.",table:{category:"Storybook controls"}},cols:{control:{type:"number",min:1},description:"Colonne dello skeleton.",table:{category:"Storybook controls"}},skeletonAction:{control:{type:"boolean"},description:"Mostra il placeholder dell'action.",table:{category:"Storybook controls"}},loadingLabel:{control:{type:"text"},description:"Testo accessibile del loading.",table:{category:"Storybook controls"}},columns:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},slots:{control:!1,table:{disable:!0}},slotProps:{control:!1,table:{disable:!0}},localeText:{control:!1,table:{disable:!0}},sx:{control:!1,table:{disable:!0}}},render:({loading:b,columnLayout:I="custom",rows:u,cols:T,skeletonAction:M,loadingLabel:L})=>e.jsx(i,{loading:b,columns:j[I],slotProps:{skeleton:{rows:u,cols:T,action:M}},localeText:{loadingLabel:L},children:p()})},n={},s={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{children:p()})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{columns:[2,1,1],children:[e.jsxs(a,{action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"22/11/2025",children:"Titolo campagna molto lungo che potrebbe andare su più righe"}),e.jsx(l,{label:"Codice ID",children:"0000000000"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"10"})]}),e.jsxs(a,{columns:[1,2,1],action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"23/11/2025",children:"Seconda campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000001"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"20"})]}),e.jsxs(a,{action:e.jsx(t,{children:"Apri"}),children:[e.jsx(l,{label:"24/11/2025",children:"Terza campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000002"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"30"})]})]})},c={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e.jsxs(i,{columns:[2,1,1],children:[e.jsxs(a,{children:[e.jsx(l,{label:"22/11/2025",children:"Titolo campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000000"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"10"})]}),e.jsxs(a,{children:[e.jsx(l,{label:"23/11/2025",children:"Seconda campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000001"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"20"})]})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{columns:[2,1,1],children:e.jsxs(a,{action:e.jsx(t,{"aria-label":"Visualizza dettaglio campagna",children:"Visualizza dettaglio"}),children:[e.jsx(l,{label:"22/11/2025",children:"Titolo campagna"}),e.jsx(l,{label:"Codice ID",children:"0000000000"}),e.jsx(l,{label:"Comunicazioni",icon:e.jsx(o,{fontSize:"small"}),children:"10"})]})})},m={parameters:{controls:{disable:!0}},render:()=>e.jsx(i,{loading:!0,columns:[2,1,1],slotProps:{skeleton:{rows:4,cols:3,action:!0}},localeText:{loadingLabel:"Caricamento lista in corso"}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITableList>{renderItems()}</MITableList>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITableList columns={[2, 1, 1]}>
      <MITableListItem action={<ArrowButton>Apri</ArrowButton>}>
        <MITableListItemField label="22/11/2025">
          Titolo campagna molto lungo che potrebbe andare su più righe
        </MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem columns={[1, 2, 1]} action={<ArrowButton>Apri</ArrowButton>}>
        <MITableListItemField label="23/11/2025">Seconda campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000001</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          20
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem action={<ArrowButton>Apri</ArrowButton>}>
        <MITableListItemField label="24/11/2025">Terza campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000002</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          30
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITableList columns={[2, 1, 1]}>
      <MITableListItem>
        <MITableListItemField label="22/11/2025">Titolo campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>

      <MITableListItem>
        <MITableListItemField label="23/11/2025">Seconda campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000001</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          20
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITableList columns={[2, 1, 1]}>
      <MITableListItem action={<ArrowButton aria-label="Visualizza dettaglio campagna">Visualizza dettaglio</ArrowButton>}>
        <MITableListItemField label="22/11/2025">Titolo campagna</MITableListItemField>

        <MITableListItemField label="Codice ID">0000000000</MITableListItemField>

        <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon fontSize="small" />}>
          10
        </MITableListItemField>
      </MITableListItem>
    </MITableList>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITableList loading columns={[2, 1, 1]} slotProps={{
    skeleton: {
      rows: 4,
      cols: 3,
      action: true
    }
  }} localeText={{
    loadingLabel: 'Caricamento lista in corso'
  }} />
}`,...m.parameters?.docs?.source}}};const z=["Playground","Default","CustomColumns","WithoutAction","CustomAction","Loading"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomAction:d,CustomColumns:r,Default:s,Loading:m,Playground:n,WithoutAction:c,__namedExportsOrder:z,default:h},Symbol.toStringTag,{value:"Module"}));export{r as C,s as D,m as L,A as M,c as W,d as a};
