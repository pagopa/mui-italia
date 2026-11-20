import{j as e,b as B,r as k,B as w}from"./iframe-CL-nofVy.js";import{M as G}from"./MIAlert-cunRS7Pi.js";import{a as m}from"./MIButton-D31bpePk.js";import{M as d}from"./MIDrawer-BRRZEnm5.js";import{M as q}from"./MIFormHelperText-PMBnDvlV.js";import{M as J}from"./MISelect-CuI2nwPv.js";import{M as z}from"./MITextField-DZLC1JEF.js";import{I as R}from"./MIFlag-CPeD-xSV.js";import{S as F}from"./Stack-BGzxD5bO.js";import{I as _}from"./InputAdornment-BtrqNDun.js";import{S as V}from"./Search-DuVq0L3F.js";import{I as K}from"./InputLabel-Cm8w6xd8.js";import{M as L}from"./MenuItem-BfXC2JM-.js";import{T as l}from"./Typography-Cz4LsPd3.js";import{L as Q}from"./Link-BuOu9Kes.js";import{R as U}from"./RadioGroup-Cye5tvj1.js";import{F as H}from"./FormControlLabel-7nVK7Kwx.js";import{R as Y}from"./Radio-Dz6i1Z6Y.js";import{C as $}from"./Checkbox-CKP81cVA.js";const a=()=>{},P=()=>e.jsxs(F,{spacing:2,children:[e.jsx(l,{color:"text.secondary",children:"Per inviare una notifica digitale devi prima indicare il domicilio digitale del destinatario. Se non lo conosci, la piattaforma lo cerca nei registri pubblici."}),e.jsx(l,{color:"text.secondary",children:"Puoi modificare il domicilio fino all'invio della notifica: dopo l'invio le modifiche non sono più possibili."}),e.jsx(l,{children:e.jsx(Q,{href:"#manuale",fontWeight:600,children:"Dubbi? Vai al manuale"})})]}),E=({title:r,rows:n})=>e.jsxs(w,{children:[e.jsx(l,{component:"h3",sx:{m:0,mb:1,color:"text.secondary",fontSize:"0.875rem",fontWeight:600},children:r}),e.jsx(w,{component:"dl",sx:{m:0,"& > div + div":{borderTop:"1px solid",borderColor:"divider"}},children:n.map(({label:o,value:i})=>e.jsxs(w,{sx:{py:1.5},children:[e.jsx(l,{component:"dt",sx:{color:"text.secondary",fontSize:"0.875rem"},children:o}),e.jsx(l,{component:"dd",sx:{m:0,fontWeight:600},children:i})]},o))})]}),N=()=>e.jsxs(F,{spacing:4,children:[e.jsx(G,{severity:"info",title:"Servizio in aggiornamento",children:"Alcuni dati potrebbero non essere aggiornati fino a domani."}),e.jsx(E,{title:"Dati del servizio",rows:[{label:"Nome del servizio",value:"Pagamento della TARI"},{label:"Codice",value:"TARI-2026"},{label:"Stato",value:"Attivo"},{label:"Data di attivazione",value:"12/03/2026"}]}),e.jsx(E,{title:"Ente erogatore",rows:[{label:"Denominazione",value:"Comune di Milano"},{label:"Codice fiscale",value:"01199250158"},{label:"Indirizzo PEC",value:"protocollo@pec.comune.milano.it"}]}),e.jsx(E,{title:"Referente",rows:[{label:"Nome e cognome",value:"Mario Rossi"},{label:"Email",value:"mario.rossi@comune.milano.it"},{label:"Telefono",value:"02 1234 5678"}]})]}),T=[{name:"Comune di Milano",fiscalCode:"01199250158"},{name:"Comune di Roma",fiscalCode:"02438750586"},{name:"Comune di Napoli",fiscalCode:"80014890638"},{name:"Comune di Torino",fiscalCode:"00514490010"},{name:"Comune di Bologna",fiscalCode:"01232710374"}],ee=()=>{const[r,n]=k.useState([]),o=r.length===T.length,i=t=>n(s=>s.includes(t)?s.filter(Z=>Z!==t):[...s,t]);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{spacing:2,alignItems:"flex-start",children:[e.jsx(z,{label:"Cerca ente",fullWidth:!0,InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(V,{})})}}),e.jsx(m,{variant:"text",size:"small",onClick:()=>n(o?[]:T.map(({name:t})=>t)),children:o?"Deseleziona tutto":"Seleziona tutto"})]}),e.jsx(w,{component:"ul","aria-label":"Enti trovati",sx:{mt:2,mb:0,mx:-3,p:0,listStyle:"none"},children:T.map(({name:t,fiscalCode:s})=>e.jsx(w,{component:"li",sx:{px:3,py:1,borderBottom:"1px solid",borderColor:"divider"},children:e.jsx(H,{sx:{m:0,width:"100%",justifyContent:"space-between"},labelPlacement:"start",control:e.jsx($,{checked:r.includes(t),onChange:()=>i(t)}),label:e.jsxs("span",{children:[e.jsx(l,{component:"span",display:"block",fontWeight:600,children:t}),e.jsx(l,{component:"span",display:"block",variant:"body2",color:"text.secondary",children:s})]})})},t))})]})},M=()=>{const r=k.useId(),[n,o]=k.useState("all");return e.jsxs(F,{spacing:3,children:[e.jsx(z,{label:"Cerca codice fiscale",fullWidth:!0,InputProps:{startAdornment:e.jsx(_,{position:"start",children:e.jsx(V,{})})}}),e.jsx(z,{label:"Dal",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0}}),e.jsx(z,{label:"Al",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0}}),e.jsxs(q,{fullWidth:!0,children:[e.jsx(K,{id:r,children:"Stato"}),e.jsxs(J,{labelId:r,label:"Stato",value:n,onChange:i=>o(i.target.value),children:[e.jsx(L,{value:"all",children:"Tutti gli stati"}),e.jsx(L,{value:"delivered",children:"Consegnata"}),e.jsx(L,{value:"read",children:"Letta"}),e.jsx(L,{value:"cancelled",children:"Annullata"})]})]})]})},W=["Data crescente","Data decrescente","Richiedente (A-Z)","Richiedente (Z-A)","Stato"],X=()=>e.jsx(U,{"aria-label":"Criterio di ordinamento",defaultValue:W[1],children:W.map(r=>e.jsx(H,{value:r,control:e.jsx(Y,{}),label:r},r))}),c=({openLabel:r="Apri il drawer",renderActions:n,...o})=>{const[i,t]=k.useState(!1),s=()=>t(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>t(!0),children:r}),e.jsx(d,{...o,open:i,onClose:s,actions:n?.(s)})]})},p=r=>function(o){return e.jsx(m,{onClick:o,children:r})},O=r=>e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:r,children:"Filtra"}),e.jsx(m,{variant:"text",onClick:r,children:"Annulla filtri"})]}),re={none:void 0,primary:p("Conferma"),primaryAndSecondary:r=>e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:r,children:"Conferma"}),e.jsx(m,{variant:"text",onClick:r,children:"Annulla"})]})},te={title:"Components/MIDrawer",component:d,tags:["!dev"],parameters:{layout:"padded",theme:"next",chromatic:{disableSnapshot:!0},controls:{include:["title","description","anchor","actionsOption","withPictogram"]}},args:{title:"Titolo del drawer",description:"Testo di supporto breve, letto dagli screen reader all’apertura.",anchor:"right",actionsOption:"primaryAndSecondary",withPictogram:!1},argTypes:{open:{control:!1},onClose:{control:!1},children:{control:!1},title:{control:{type:"text"},description:"Titolo del drawer (h2), sempre visibile. È il nome accessibile del dialog.",table:{category:"MIDrawer",type:{summary:"ReactNode"}}},description:{control:{type:"text"},description:"Testo breve sotto il titolo, letto dagli screen reader all’apertura. Solo testo: un testo con link va nel contenuto.",table:{category:"MIDrawer",type:{summary:"string"}}},anchor:{options:["right","left"],control:{type:"radio"},description:"Lato del pannello da 640px in su; usa left solo per necessità specifiche. Sotto 640px il drawer è sempre un pannello dal basso.",table:{category:"MIDrawer",defaultValue:{summary:"right"}}},actionsOption:{options:["none","primary","primaryAndSecondary"],control:{type:"radio"},description:"Preset Storybook per la prop actions.",table:{category:"Storybook controls"}},withPictogram:{control:{type:"boolean"},description:"Preset Storybook per la prop pictogram (IllusMIFlag).",table:{category:"Storybook controls"}}},render:({title:r,description:n,anchor:o,actionsOption:i="none",withPictogram:t})=>e.jsx(c,{title:r,description:n,anchor:o,pictogram:t?e.jsx(R,{}):void 0,renderActions:re[i],children:e.jsx(P,{})})},h={},g={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{openLabel:"Apri Editorial",title:"Domicilio digitale",pictogram:e.jsx(R,{}),renderActions:p("Ho capito"),children:e.jsx(P,{})})},x={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{openLabel:"Apri Service detail",title:"Dettaglio del servizio",description:"Dati del servizio e dell’ente che lo eroga.",renderActions:p("Modifica"),children:e.jsx(N,{})})},b={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{openLabel:"Apri Search",title:"Aggiungi enti",description:"Cerca gli enti da aggiungere al gruppo e selezionali.",renderActions:p("Aggiungi"),children:e.jsx(ee,{})})},f={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{openLabel:"Apri Filters",title:"Filtra",renderActions:O,children:e.jsx(M,{})})},j={parameters:{controls:{disable:!0}},render:()=>e.jsx(c,{openLabel:"Apri Sort",title:"Ordina",renderActions:p("Ordina"),children:e.jsx(X,{})})},D={parameters:{controls:{disable:!0}},render:()=>e.jsxs(F,{direction:"row",spacing:2,children:[e.jsx(c,{openLabel:"Da destra (default)",title:"Filtra",renderActions:O,children:e.jsx(M,{})}),e.jsx(c,{openLabel:"Da sinistra",title:"Filtra",anchor:"left",renderActions:O,children:e.jsx(M,{})})]})},u=(r=B)=>({controls:{disable:!0},chromatic:{disableSnapshot:!1,viewports:r}}),C={name:"Open: Filters (breakpoint)",parameters:u(),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Filtra",actions:O(a),children:e.jsx(M,{})})},S={name:"Open: contenuto lungo",parameters:u(),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Dettaglio del servizio",description:"Dati del servizio e dell’ente che lo eroga.",actions:p("Modifica")(a),children:e.jsx(N,{})})},A={name:"Open: contenuto corto",parameters:u(),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Ordina",actions:p("Ordina")(a),children:e.jsx(X,{})})},v={name:"Open: Editorial (pittogramma)",parameters:u(),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Domicilio digitale",pictogram:e.jsx(R,{}),actions:p("Ho capito")(a),children:e.jsx(P,{})})},y={name:"Open: da sinistra",parameters:u(B.filter(r=>r>=640)),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Filtra",anchor:"left",actions:O(a),children:e.jsx(M,{})})},I={name:"Open: titolo lungo, senza bottoni",parameters:u([375,1200]),render:()=>e.jsx(d,{open:!0,onClose:a,title:"Informazioni sul trattamento dei dati personali per il servizio di notifiche digitali",description:"Il titolo va a capo e la X resta in alto a destra.",children:e.jsx(P,{})})},oe=["Playground","Editorial","ServiceDetail","Search","Filters","Sort","Anchors","OpenFilters","OpenLongContent","OpenShortContent","OpenEditorial","OpenLeft","OpenLongTitleWithoutActions"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Editorial" title="Domicilio digitale" pictogram={<IllusMIFlag />} renderActions={primaryAction('Ho capito')}>
      <EditorialContent />
    </DrawerDemo>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Service detail" title="Dettaglio del servizio" description="Dati del servizio e dell’ente che lo eroga." renderActions={primaryAction('Modifica')}>
      <ServiceDetailContent />
    </DrawerDemo>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Search" title="Aggiungi enti" description="Cerca gli enti da aggiungere al gruppo e selezionali." renderActions={primaryAction('Aggiungi')}>
      <SearchContent />
    </DrawerDemo>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Filters" title="Filtra" renderActions={filtersActions}>
      <FiltersContent />
    </DrawerDemo>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DrawerDemo openLabel="Apri Sort" title="Ordina" renderActions={primaryAction('Ordina')}>
      <SortContent />
    </DrawerDemo>
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Open: Filters (breakpoint)',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Filtra" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Open: contenuto lungo',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Dettaglio del servizio" description="Dati del servizio e dell’ente che lo eroga." actions={primaryAction('Modifica')(noop)}>
      <ServiceDetailContent />
    </MIDrawer>
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Open: contenuto corto',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Ordina" actions={primaryAction('Ordina')(noop)}>
      <SortContent />
    </MIDrawer>
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Open: Editorial (pittogramma)',
  parameters: snapshotParameters(),
  render: () => <MIDrawer open onClose={noop} title="Domicilio digitale" pictogram={<IllusMIFlag />} actions={primaryAction('Ho capito')(noop)}>
      <EditorialContent />
    </MIDrawer>
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Open: da sinistra',
  parameters: snapshotParameters(breakpointsChromaticValues.filter(width => width >= 640)),
  render: () => <MIDrawer open onClose={noop} title="Filtra" anchor="left" actions={filtersActions(noop)}>
      <FiltersContent />
    </MIDrawer>
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Open: titolo lungo, senza bottoni',
  parameters: snapshotParameters([375, 1200]),
  render: () => <MIDrawer open onClose={noop} title="Informazioni sul trattamento dei dati personali per il servizio di notifiche digitali" description="Il titolo va a capo e la X resta in alto a destra.">
      <EditorialContent />
    </MIDrawer>
}`,...I.parameters?.docs?.source}}};const Ae=Object.freeze(Object.defineProperty({__proto__:null,Anchors:D,Editorial:g,Filters:f,OpenEditorial:v,OpenFilters:C,OpenLeft:y,OpenLongContent:S,OpenLongTitleWithoutActions:I,OpenShortContent:A,Playground:h,Search:b,ServiceDetail:x,Sort:j,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{D as A,g as E,f as F,Ae as M,x as S,b as a,j as b};
