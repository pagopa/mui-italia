import{j as n,r as u,b as L}from"./iframe-DLqg6HX8.js";import{a as f}from"./MIButton-DRsiTiYR.js";import{M as s}from"./MITable-DW_3cPw1.js";import{M as I}from"./MIChip-DdC79h3q.js";import{T}from"./Typography-B2s-Ogo4.js";import{I as M}from"./IconButton-7hX9twsg.js";import{c as S}from"./createSvgIcon-ByJkEFeY.js";const j=S(n.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),d=Array.from({length:10},(e,c)=>({id:`01234${56+c}`,category:"Label",date:"31/12/2028",name:"Name",value:"Cell",status:"Default"})),l=[{id:"id",header:"ID",sortable:!0,sortDirection:"asc",renderCell:e=>n.jsx(T,{variant:"monospaced",component:"span",children:e.id})},{id:"category",header:"Category",renderCell:e=>e.category},{id:"date",header:"Date",renderCell:e=>e.date},{id:"name",header:"Name",renderCell:e=>e.name},{id:"value",header:"Value",renderCell:e=>e.value},{id:"status",header:"Status",renderCell:e=>n.jsx(I,{label:e.status})}],m=[{id:"action",header:"",isAction:!0,renderCell:()=>n.jsx(f,{variant:"text",children:"Action"})},{id:"context-action",header:"",isAction:!0,renderCell:()=>n.jsx(M,{"aria-label":"Open row actions",children:n.jsx(j,{})})}],v=1280,A={title:"Components/MITable",component:s,tags:["!dev"],parameters:{layout:"padded",theme:"next",chromatic:{viewports:L.filter(e=>e<=v)}},argTypes:{isLoading:{control:{type:"boolean"},description:"Sostituisce i dati e le azioni con 10 righe skeleton.",table:{category:"Component props",defaultValue:{summary:"false"}}},showPagination:{control:{type:"boolean"},description:"Abilita la paginazione.",table:{category:"Storybook controls"}}}},o={args:{showPagination:!0,isLoading:!1},parameters:{controls:{include:["showPagination","isLoading"]}},render:function({showPagination:c,isLoading:p}){const[g,b]=u.useState(1),[h,w]=u.useState(10),C=m,P=[...l,...C],x=c?{page:g,count:101,onChange:(i,y)=>b(y),itemsPerPageOptions:{options:[10,24,36],limit:h,onLimitChange:i=>w(i)}}:void 0;return n.jsx(s,{columns:P,rows:d,isLoading:p,getRowId:i=>i.id,pagination:x})}},a={parameters:{controls:{disable:!0}},render:()=>n.jsx(s,{columns:[...l,...m],rows:[],isLoading:!0,desktopTableProps:{"aria-label":"Transactions"},mobileTableProps:{"aria-label":"Transactions"}})},t={parameters:{controls:{disable:!0}},render:()=>n.jsx(s,{columns:l,rows:d,getRowId:e=>e.id})},r={parameters:{controls:{disable:!0}},render:()=>n.jsx(s,{columns:[...l,...m],rows:d,getRowId:e=>e.id})},R=["Playground","Loading","WithoutActions","WithoutPagination"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showPagination: true,
    isLoading: false
  },
  parameters: {
    controls: {
      include: ['showPagination', 'isLoading']
    }
  },
  render: function RenderPlayground({
    showPagination,
    isLoading
  }) {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const selectedActionColumns = actionColumns;
    const tableColumns = [...columns, ...selectedActionColumns];
    const pagination = showPagination ? {
      page,
      count: 101,
      onChange: (_: ChangeEvent<unknown>, nextPage: number) => setPage(nextPage),
      itemsPerPageOptions: {
        options: [10, 24, 36],
        limit,
        onLimitChange: (nextLimit: number) => setLimit(nextLimit)
      }
    } : undefined;
    return <MITable columns={tableColumns} rows={rows} isLoading={isLoading} getRowId={row => row.id} pagination={pagination} />;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITable columns={[...columns, ...actionColumns]} rows={[]} isLoading desktopTableProps={{
    'aria-label': 'Transactions'
  }} mobileTableProps={{
    'aria-label': 'Transactions'
  }} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITable columns={columns} rows={rows} getRowId={row => row.id} />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <MITable columns={[...columns, ...actionColumns]} rows={rows} getRowId={row => row.id} />
}`,...r.parameters?.docs?.source}}};const z=Object.freeze(Object.defineProperty({__proto__:null,Loading:a,Playground:o,WithoutActions:t,WithoutPagination:r,__namedExportsOrder:R,default:A},Symbol.toStringTag,{value:"Module"}));export{a as L,z as M,t as W,r as a};
