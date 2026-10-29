import{r as a,j as c,b as M}from"./iframe-EJCMhezF.js";import{M as g}from"./MIPagination-OFShl4aq.js";import{S as I}from"./Stack-CNPuMEtv.js";import{T as _}from"./Typography-DLgU8XWP.js";const z=1280,j={default:[10,24,36],compact:[5,10,20]},S=o=>Number(o),L=(o,s)=>Math.max(1,Math.ceil(o/s)),w={title:"Components/MIPagination",component:g,tags:["!dev"],parameters:{controls:{include:["count","page","showItemsPerPage","itemsPerPagePreset","itemsPerPageLimit"]},chromatic:{viewports:M.filter(o=>o<=z)}},args:{count:110,page:1,showItemsPerPage:!1,itemsPerPagePreset:"default",itemsPerPageLimit:10},argTypes:{count:{control:{type:"number",min:1},description:"Numero totale di pagine.",table:{category:"MIPagination"}},page:{control:{type:"number",min:1},description:"Pagina corrente in modalita controllata.",table:{category:"MIPagination"}},showItemsPerPage:{control:{type:"boolean"},description:"Controllo Storybook: mostra o nasconde il selettore righe per pagina.",table:{category:"Storybook controls"}},itemsPerPagePreset:{options:["default","compact"],control:{type:"radio"},description:"Controllo Storybook: preset opzioni per il selettore righe per pagina.",table:{category:"Storybook controls"}},itemsPerPageLimit:{control:{type:"number",min:1},description:"Controllo Storybook: valore selezionato nel selettore righe per pagina.",table:{category:"Storybook controls"}},onChange:{control:!1,table:{disable:!0}},itemsPerPageOptions:{control:!1,table:{disable:!0}}},render:function({count:s,page:e=1,onChange:i,showItemsPerPage:n,itemsPerPagePreset:l,itemsPerPageLimit:t}){const r=j[l],[p,x]=a.useState(e),[f,b]=a.useState(t);a.useEffect(()=>{x(e)},[e]),a.useEffect(()=>{b(t)},[t]),a.useEffect(()=>{r.includes(f)||b(r[0])},[r,f]);const v=(y,C)=>{x(C),i?.(y,C)};return c.jsx(I,{spacing:2,sx:{width:"100%",maxWidth:720},children:c.jsx(g,{count:s,page:p,onChange:v,itemsPerPageOptions:n?{options:r,limit:f,onLimitChange:y=>b(S(y)),inputProps:{"aria-label":"Seleziona numero di righe per pagina"}}:void 0})})}},m={},u={parameters:{controls:{disable:!0}},render:function(){const[s,e]=a.useState(1);return c.jsx(g,{count:110,page:s,onChange:(i,n)=>e(n)})}},P={parameters:{controls:{disable:!0}},render:function(){const[e,i]=a.useState(2),[n,l]=a.useState(24),t=L(240,n);return a.useEffect(()=>{e>t&&i(t)},[e,t]),c.jsx(g,{count:t,page:e,onChange:(r,p)=>i(p),itemsPerPageOptions:{limit:n,onLimitChange:r=>l(S(r))}})}},d={parameters:{controls:{disable:!0}},render:function(){const[e,i]=a.useState(4),[n,l]=a.useState(10),t=L(95,n);return a.useEffect(()=>{e>t&&i(t)},[e,t]),c.jsx(g,{count:t,page:e,onChange:(r,p)=>i(p),itemsPerPageOptions:{options:[5,10,20],limit:n,onLimitChange:r=>l(S(r)),inputProps:{"aria-label":"Seleziona numero di righe per pagina"}}})}},h={parameters:{controls:{disable:!0},docs:{description:{story:"Su viewport piccoli il componente mostra solo pagina selezionata e pulsanti di navigazione precedente/successiva."}}},render:function(){const[s,e]=a.useState(5);return c.jsxs(I,{spacing:1.5,sx:{width:"100%",maxWidth:400},children:[c.jsx(_,{variant:"body2",color:"text.secondary",children:"Verifica questa story anche su viewport mobile in Chromatic."}),c.jsx(g,{count:10,page:s,onChange:(i,n)=>e(n)})]})}},k=["Playground","Default","WithItemsPerPage","CompactItemsPerPage","MobileBehavior"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderDefault() {
    const [page, setPage] = useState(1);
    return <MIPagination count={110} page={page} onChange={(_, nextPage) => setPage(nextPage)} />;
  }
}`,...u.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderWithItemsPerPage() {
    const totalItems = 240;
    const [page, setPage] = useState(2);
    const [limit, setLimit] = useState(24);
    const totalPages = getTotalPages(totalItems, limit);
    useEffect(() => {
      if (page > totalPages) {
        setPage(totalPages);
      }
    }, [page, totalPages]);
    return <MIPagination count={totalPages} page={page} onChange={(_, nextPage) => setPage(nextPage)} itemsPerPageOptions={{
      limit,
      onLimitChange: nextLimit => setLimit(normalizeLimit(nextLimit))
    }} />;
  }
}`,...P.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderCompactItemsPerPage() {
    const totalItems = 95;
    const [page, setPage] = useState(4);
    const [limit, setLimit] = useState(10);
    const totalPages = getTotalPages(totalItems, limit);
    useEffect(() => {
      if (page > totalPages) {
        setPage(totalPages);
      }
    }, [page, totalPages]);
    return <MIPagination count={totalPages} page={page} onChange={(_, nextPage) => setPage(nextPage)} itemsPerPageOptions={{
      options: [5, 10, 20],
      limit,
      onLimitChange: nextLimit => setLimit(normalizeLimit(nextLimit)),
      inputProps: {
        'aria-label': 'Seleziona numero di righe per pagina'
      }
    }} />;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Su viewport piccoli il componente mostra solo pagina selezionata e pulsanti di navigazione precedente/successiva.'
      }
    }
  },
  render: function RenderMobileBehavior() {
    const [page, setPage] = useState(5);
    return <Stack spacing={1.5} sx={{
      width: '100%',
      maxWidth: 400
    }}>
        <Typography variant="body2" color="text.secondary">
          Verifica questa story anche su viewport mobile in Chromatic.
        </Typography>

        <MIPagination count={10} page={page} onChange={(_, nextPage) => setPage(nextPage)} />
      </Stack>;
  }
}`,...h.parameters?.docs?.source}}};const W=Object.freeze(Object.defineProperty({__proto__:null,CompactItemsPerPage:d,Default:u,MobileBehavior:h,Playground:m,WithItemsPerPage:P,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{d as C,u as D,W as M,P as W,h as a};
