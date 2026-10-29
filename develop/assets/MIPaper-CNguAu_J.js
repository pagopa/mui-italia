import{j as e}from"./iframe-rw-T87Ps.js";import{u as s,M as l,T as c,P as d,b as p,S as r}from"./blocks-BCoOsg7x.js";import{O as u}from"./Overview-BhSzF-Fz.js";import{S as t,a as o}from"./SubSection-C6OUYVrI.js";import{M as m,V as x,B as h,P as j,C as g}from"./MIPaper.stories-DAUK8Xk0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./Box-DnbZxXxU.js";import"./Typography-DIxyHfgM.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./styled-BbRqDVtB.js";import"./MIPaper-BgUoYzI2.js";import"./Paper-6XyShZCf.js";import"./Stack-DK8xaQOE.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";function a(n){const i={code:"code",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:m}),`
`,e.jsx(c,{}),`
`,e.jsx(u,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIPaper"}),` è il contenitore basato sul componente Paper di MUI. Disabilita
l’elevation, applica padding e border radius controllati dai token del Design System e supporta
due varianti visive: flat e outlined.`]})}),`
`,e.jsxs(t,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsx(t,{title:"Varianti",description:"MIPaper supporta una variante senza bordo e una variante outlined con bordo neutro.",children:e.jsx(r,{of:x})}),`
`,e.jsx(t,{title:"Border radius",description:"Il border radius viene risolto tramite i token del tema e può essere configurato con i valori supportati dal componente.",children:e.jsx(r,{of:h})}),`
`,e.jsx(t,{title:"Padding",description:"Il padding interno può essere impostato a 16px o 24px.",children:e.jsx(r,{of:j})}),`
`,e.jsx(t,{title:"Contenuto",description:"MIPaper accetta children React e può essere usato come contenitore per testo, layout e altri componenti.",children:e.jsx(r,{of:g})}),`
`,e.jsxs(t,{title:"Accessibilità",description:"MIPaper è un contenitore visivo: non aggiunge automaticamente semantica al contenuto. L’accessibilità dipende dalla struttura e dalle props usate nel contesto.",children:[e.jsx(o,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"component"}),`: consente di cambiare l’elemento HTML renderizzato dal Paper, ad
esempio `,e.jsx("code",{children:"section"}),", quando il contenitore rappresenta una sezione della pagina."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"aria-labelledby"}),`: può collegare il contenitore a un titolo visibile quando si
usa una semantica di sezione.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"children"}),`: deve contenere una struttura testuale e semantica coerente, ad
esempio titoli, paragrafi o altri componenti accessibili.`]})})]})})," ",e.jsx(o,{title:"Prop non disponibili",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"elevation"}),`: non è esposta dalle props pubbliche di MIPaper. Il componente
imposta internamente `,e.jsxs("code",{children:["elevation=",0]})," e rimuove la shadow."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"square"}),`: non è esposta dalle props pubbliche. Il radius viene controllato
tramite la prop `,e.jsx("code",{children:"borderRadius"}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"variant"}),` di MUI Paper: non è esposta direttamente. MIPaper usa solo le
varianti
`,e.jsx("code",{children:"flat"})," e ",e.jsx("code",{children:"outlined"}),"."]})})]})})," ",e.jsx(o,{title:"Semantica del contenitore",children:e.jsxs(i.p,{children:[`Di default il componente si comporta come un contenitore visivo. Se il contenuto rappresenta una
sezione autonoma della pagina, usa una semantica esplicita tramite `,e.jsx("code",{children:"component"}),` e
collega il contenitore a un titolo visibile.`]})})," ",e.jsx(o,{title:"Contrasto",children:e.jsxs(i.p,{children:["La variante ",e.jsx("code",{children:"outlined"}),` usa un bordo neutro chiaro. Su sfondi molto chiari o su sfondi
personalizzati verifica che il bordo resti distinguibile e che il contenuto interno mantenga un
contrasto sufficiente.`]})}),e.jsx(o,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIPaper component="section" aria-labelledby="payment-summary-title" variant="outlined">
  <Typography id="payment-summary-title" variant="h2">
    Riepilogo pagamento
  </Typography>

  <Typography variant="body1">
    Contenuto della sezione.
  </Typography>
</MIPaper>
`})})})]})]})}function E(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{E as default};
