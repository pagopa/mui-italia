import{e as ne,f as ae,r as c,_ as ie,J as se,j as e,a as le,b as q,B as F}from"./iframe-ByoTlC9Q.js";import{M as ce}from"./MIAlert-BH6yzTQ7.js";import{a as h}from"./MIButton-CttAo4IM.js";import{M as m}from"./MIDrawer-BjpA0NNa.js";import{M as de}from"./MIFormHelperText-Cabo8dNE.js";import{M as pe}from"./MISelect-6MRcf_gB.js";import{M as k,C as me}from"./MITextField-BzBYPCkx.js";import{I as G}from"./MIFlag-D1VOIVeY.js";import{S as z}from"./Stack-BUBEZOaa.js";import{I as X}from"./InputAdornment-Bnas618r.js";import{S as Z}from"./Search-CAxIq-qW.js";import{I as ue}from"./InputLabel-Dk1lE2SM.js";import{M as P}from"./MenuItem-ijjRCDmu.js";import{T as d}from"./Typography-BUFn3w4e.js";import{L as he}from"./Link-40CjieaN.js";import{c as ge,a as xe}from"./DefaultPropsProvider-DGsnD8AD.js";import{R as fe,a as be}from"./Radio-CTJbTcF7.js";import{u as je}from"./useControlled-BB-IPjV-.js";import{u as Ce}from"./useForkRef-DBOtKc3X.js";import{F as De}from"./FormGroup-BTtaas_b.js";import{F as J}from"./FormControlLabel-C3qvJ8-b.js";function Se(r){return ne("MuiRadioGroup",r)}ae("MuiRadioGroup",["root","row","error"]);const ve=["actions","children","className","defaultValue","name","onChange","value"],Ae=r=>{const{classes:t,row:n,error:a}=r;return xe({root:["root",n&&"row",a&&"error"]},Se,t)},ye=c.forwardRef(function(t,n){const{actions:a,children:o,className:s,defaultValue:E,name:Y,onChange:T,value:$}=t,ee=ie(t,ve),W=c.useRef(null),re=Ae(t),[N,B]=je({controlled:$,default:E,name:"RadioGroup"});c.useImperativeHandle(a,()=>({focus:()=>{let l=W.current.querySelector("input:not(:disabled):checked");l||(l=W.current.querySelector("input:not(:disabled)")),l&&l.focus()}}),[]);const oe=Ce(n,W),H=se(Y),te=c.useMemo(()=>({name:H,onChange(l){B(l.target.value),T&&T(l,l.target.value)},value:N}),[H,T,B,N]);return e.jsx(fe.Provider,{value:te,children:e.jsx(De,le({role:"radiogroup",ref:oe,className:ge(re.root,s)},ee,{children:o}))})}),i=()=>{},R=()=>e.jsxs(z,{spacing:2,children:[e.jsx(d,{color:"text.secondary",children:"Per inviare una notifica digitale devi prima indicare il domicilio digitale del destinatario. Se non lo conosci, la piattaforma lo cerca nei registri pubblici."}),e.jsx(d,{color:"text.secondary",children:"Puoi modificare il domicilio fino all'invio della notifica: dopo l'invio le modifiche non sono più possibili."}),e.jsx(d,{children:e.jsx(he,{href:"#manuale",fontWeight:600,children:"Dubbi? Vai al manuale"})})]}),_=({title:r,rows:t})=>e.jsxs(F,{children:[e.jsx(d,{component:"h3",sx:{m:0,mb:1,color:"text.secondary",fontSize:"0.875rem",fontWeight:600},children:r}),e.jsx(F,{component:"dl",sx:{m:0,"& > div + div":{borderTop:"1px solid",borderColor:"divider"}},children:t.map(({label:n,value:a})=>e.jsxs(F,{sx:{py:1.5},children:[e.jsx(d,{component:"dt",sx:{color:"text.secondary",fontSize:"0.875rem"},children:n}),e.jsx(d,{component:"dd",sx:{m:0,fontWeight:600},children:a})]},n))})]}),K=()=>e.jsxs(z,{spacing:4,children:[e.jsx(ce,{severity:"info",title:"Servizio in aggiornamento",children:"Alcuni dati potrebbero non essere aggiornati fino a domani."}),e.jsx(_,{title:"Dati del servizio",rows:[{label:"Nome del servizio",value:"Pagamento della TARI"},{label:"Codice",value:"TARI-2026"},{label:"Stato",value:"Attivo"},{label:"Data di attivazione",value:"12/03/2026"}]}),e.jsx(_,{title:"Ente erogatore",rows:[{label:"Denominazione",value:"Comune di Milano"},{label:"Codice fiscale",value:"01199250158"},{label:"Indirizzo PEC",value:"protocollo@pec.comune.milano.it"}]}),e.jsx(_,{title:"Referente",rows:[{label:"Nome e cognome",value:"Mario Rossi"},{label:"Email",value:"mario.rossi@comune.milano.it"},{label:"Telefono",value:"02 1234 5678"}]})]}),V=[{name:"Comune di Milano",fiscalCode:"01199250158"},{name:"Comune di Roma",fiscalCode:"02438750586"},{name:"Comune di Napoli",fiscalCode:"80014890638"},{name:"Comune di Torino",fiscalCode:"00514490010"},{name:"Comune di Bologna",fiscalCode:"01232710374"}],Ie=()=>{const[r,t]=c.useState([]),n=r.length===V.length,a=o=>t(s=>s.includes(o)?s.filter(E=>E!==o):[...s,o]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{spacing:2,alignItems:"flex-start",children:[e.jsx(k,{label:"Cerca ente",fullWidth:!0,InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(Z,{})})}}),e.jsx(h,{variant:"text",size:"small",onClick:()=>t(n?[]:V.map(({name:o})=>o)),children:n?"Deseleziona tutto":"Seleziona tutto"})]}),e.jsx(F,{component:"ul","aria-label":"Enti trovati",sx:{mt:2,mb:0,mx:-3,p:0,listStyle:"none"},children:V.map(({name:o,fiscalCode:s})=>e.jsx(F,{component:"li",sx:{px:3,py:1,borderBottom:"1px solid",borderColor:"divider"},children:e.jsx(J,{sx:{m:0,width:"100%",justifyContent:"space-between"},labelPlacement:"start",control:e.jsx(me,{checked:r.includes(o),onChange:()=>a(o)}),label:e.jsxs("span",{children:[e.jsx(d,{component:"span",display:"block",fontWeight:600,children:o}),e.jsx(d,{component:"span",display:"block",variant:"body2",color:"text.secondary",children:s})]})})},o))})]})},O=()=>{const r=c.useId(),[t,n]=c.useState("all");return e.jsxs(z,{spacing:3,children:[e.jsx(k,{label:"Cerca codice fiscale",fullWidth:!0,InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(Z,{})})}}),e.jsx(k,{label:"Dal",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0}}),e.jsx(k,{label:"Al",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0}}),e.jsxs(de,{fullWidth:!0,children:[e.jsx(ue,{id:r,children:"Stato"}),e.jsxs(pe,{labelId:r,label:"Stato",value:t,onChange:a=>n(a.target.value),children:[e.jsx(P,{value:"all",children:"Tutti gli stati"}),e.jsx(P,{value:"delivered",children:"Consegnata"}),e.jsx(P,{value:"read",children:"Letta"}),e.jsx(P,{value:"cancelled",children:"Annullata"})]})]})]})},U=["Data crescente","Data decrescente","Richiedente (A-Z)","Richiedente (Z-A)","Stato"],Q=()=>e.jsx(ye,{"aria-label":"Criterio di ordinamento",defaultValue:U[1],children:U.map(r=>e.jsx(J,{value:r,control:e.jsx(be,{}),label:r},r))}),p=({openLabel:r="Apri il drawer",renderActions:t,...n})=>{const[a,o]=c.useState(!1),s=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx(h,{onClick:()=>o(!0),children:r}),e.jsx(m,{...n,open:a,onClose:s,actions:t?.(s)})]})},u=r=>function(n){return e.jsx(h,{onClick:n,children:r})},L=r=>e.jsxs(e.Fragment,{children:[e.jsx(h,{onClick:r,children:"Filtra"}),e.jsx(h,{variant:"text",onClick:r,children:"Annulla filtri"})]}),we={none:void 0,primary:u("Conferma"),primaryAndSecondary:r=>e.jsxs(e.Fragment,{children:[e.jsx(h,{onClick:r,children:"Conferma"}),e.jsx(h,{variant:"text",onClick:r,children:"Annulla"})]})},Me={title:"Components/MIDrawer",component:m,tags:["!dev"],parameters:{layout:"padded",theme:"next",chromatic:{disableSnapshot:!0},controls:{include:["title","description","anchor","actionsOption","withPictogram"]}},args:{title:"Titolo del drawer",description:"Testo di supporto breve, letto dagli screen reader all’apertura.",anchor:"right",actionsOption:"primaryAndSecondary",withPictogram:!1},argTypes:{open:{control:!1},onClose:{control:!1},children:{control:!1},title:{control:{type:"text"},description:"Titolo del drawer (h2), sempre visibile. È il nome accessibile del dialog.",table:{category:"MIDrawer",type:{summary:"ReactNode"}}},description:{control:{type:"text"},description:"Testo breve sotto il titolo, letto dagli screen reader all’apertura. Solo testo: un testo con link va nel contenuto.",table:{category:"MIDrawer",type:{summary:"string"}}},anchor:{options:["right","left"],control:{type:"radio"},description:"Lato del pannello da 640px in su; usa left solo per necessità specifiche. Sotto 640px il drawer è sempre un pannello dal basso.",table:{category:"MIDrawer",defaultValue:{summary:"right"}}},actionsOption:{options:["none","primary","primaryAndSecondary"],control:{type:"radio"},description:"Preset Storybook per la prop actions.",table:{category:"Storybook controls"}},withPictogram:{control:{type:"boolean"},description:"Preset Storybook per la prop pictogram (IllusMIFlag).",table:{category:"Storybook controls"}}},render:({title:r,description:t,anchor:n,actionsOption:a="none",withPictogram:o})=>e.jsx(p,{title:r,description:t,anchor:n,pictogram:o?e.jsx(G,{}):void 0,renderActions:we[a],children:e.jsx(R,{})})},x={},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{openLabel:"Apri Editorial",title:"Domicilio digitale",pictogram:e.jsx(G,{}),renderActions:u("Ho capito"),children:e.jsx(R,{})})},b={parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{openLabel:"Apri Service detail",title:"Dettaglio del servizio",description:"Dati del servizio e dell’ente che lo eroga.",renderActions:u("Modifica"),children:e.jsx(K,{})})},j={parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{openLabel:"Apri Search",title:"Aggiungi enti",description:"Cerca gli enti da aggiungere al gruppo e selezionali.",renderActions:u("Aggiungi"),children:e.jsx(Ie,{})})},C={parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{openLabel:"Apri Filters",title:"Filtra",renderActions:L,children:e.jsx(O,{})})},D={parameters:{controls:{disable:!0}},render:()=>e.jsx(p,{openLabel:"Apri Sort",title:"Ordina",renderActions:u("Ordina"),children:e.jsx(Q,{})})},S={parameters:{controls:{disable:!0}},render:()=>e.jsxs(z,{direction:"row",spacing:2,children:[e.jsx(p,{openLabel:"Da destra (default)",title:"Filtra",renderActions:L,children:e.jsx(O,{})}),e.jsx(p,{openLabel:"Da sinistra",title:"Filtra",anchor:"left",renderActions:L,children:e.jsx(O,{})})]})},g=(r=q)=>({controls:{disable:!0},chromatic:{disableSnapshot:!1,viewports:r}}),v={name:"Open: Filters (breakpoint)",parameters:g(),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Filtra",actions:L(i),children:e.jsx(O,{})})},A={name:"Open: contenuto lungo",parameters:g(),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Dettaglio del servizio",description:"Dati del servizio e dell’ente che lo eroga.",actions:u("Modifica")(i),children:e.jsx(K,{})})},y={name:"Open: contenuto corto",parameters:g(),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Ordina",actions:u("Ordina")(i),children:e.jsx(Q,{})})},I={name:"Open: Editorial (pittogramma)",parameters:g(),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Domicilio digitale",pictogram:e.jsx(G,{}),actions:u("Ho capito")(i),children:e.jsx(R,{})})},w={name:"Open: da sinistra",parameters:g(q.filter(r=>r>=640)),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Filtra",anchor:"left",actions:L(i),children:e.jsx(O,{})})},M={name:"Open: titolo lungo, senza bottoni",parameters:g([375,1200]),render:()=>e.jsx(m,{open:!0,onClose:i,title:"Informazioni sul trattamento dei dati personali per il servizio di notifiche digitali",description:"Il titolo va a capo e la X resta in alto a destra.",children:e.jsx(R,{})})},Fe=["Playground","Editorial","ServiceDetail","Search","Filters","Sort","Anchors","OpenFilters","OpenLongContent","OpenShortContent","OpenEditorial","OpenLeft","OpenLongTitleWithoutActions"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Editorial" title="Domicilio digitale" pictogram={<IllusMIFlag />} renderActions={primaryAction('Ho capito')}>
      <EditorialContent />
    </DrawerDemo>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Service detail" title="Dettaglio del servizio" description="Dati del servizio e dell’ente che lo eroga." renderActions={primaryAction('Modifica')}>
      <ServiceDetailContent />
    </DrawerDemo>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Search" title="Aggiungi enti" description="Cerca gli enti da aggiungere al gruppo e selezionali." renderActions={primaryAction('Aggiungi')}>
      <SearchContent />
    </DrawerDemo>
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Filters" title="Filtra" renderActions={filtersActions}>
      <FiltersContent />
    </DrawerDemo>
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Sort" title="Ordina" renderActions={primaryAction('Ordina')}>
      <SortContent />
    </DrawerDemo>
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Stack direction="row" spacing={2}>
      <DrawerDemo openLabel="Da destra (default)" title="Filtra" renderActions={filtersActions}>
        <FiltersContent />
      </DrawerDemo>
      <DrawerDemo openLabel="Da sinistra" title="Filtra" anchor="left" renderActions={filtersActions}>
        <FiltersContent />
      </DrawerDemo>
    </Stack>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Open: Filters (breakpoint)',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Filtra" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Open: contenuto lungo',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Dettaglio del servizio" description="Dati del servizio e dell’ente che lo eroga." actions={primaryAction('Modifica')(noop)}>
      <ServiceDetailContent />
    </MIDrawer>
}`,...A.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Open: contenuto corto',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Ordina" actions={primaryAction('Ordina')(noop)}>
      <SortContent />
    </MIDrawer>
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Open: Editorial (pittogramma)',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Domicilio digitale" pictogram={<IllusMIFlag />} actions={primaryAction('Ho capito')(noop)}>
      <EditorialContent />
    </MIDrawer>
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Open: da sinistra',
  parameters: snapshotParameters(breakpointsChromaticValues.filter(width => width >= 640)),
  render: () => <MIDrawer open onClose={noop} title="Filtra" anchor="left" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Open: titolo lungo, senza bottoni',
  parameters: snapshotParameters([375, 1200]),
  render: () => <MIDrawer open onClose={noop} title="Informazioni sul trattamento dei dati personali per il servizio di notifiche digitali" description="Il titolo va a capo e la X resta in alto a destra.">
      <EditorialContent />
    </MIDrawer>
}`,...M.parameters?.docs?.source}}};const Qe=Object.freeze(Object.defineProperty({__proto__:null,Anchors:S,Editorial:f,Filters:C,OpenEditorial:I,OpenFilters:v,OpenLeft:w,OpenLongContent:A,OpenLongTitleWithoutActions:M,OpenShortContent:y,Playground:x,Search:j,ServiceDetail:b,Sort:D,__namedExportsOrder:Fe,default:Me},Symbol.toStringTag,{value:"Module"}));export{S as A,f as E,C as F,Qe as M,b as S,j as a,D as b};
