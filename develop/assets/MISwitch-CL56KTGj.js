import{j as e}from"./iframe-5Wy2T5h3.js";import{u as l,M as a,T as c,P as d,b as p,c as r}from"./blocks-DevmtdjR.js";import{O as m}from"./Overview-BVM03cpr.js";import{S as o,a as n}from"./SubSection-doAwewNd.js";import{M as h,P as x,a as j,W as u,b}from"./MISwitch.stories-CwwY5nzd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./Box-BG9fLXS7.js";import"./Typography-D0v0-SYT.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./styled-CRUdqmCq.js";import"./MISwitch-D3tYpz7A.js";import"./FormControlLabel-DF9iFRoR.js";import"./useFormControl-B8Afh-Qf.js";import"./Stack-Dp12Lk8P.js";import"./createStack-C9bYgYmk.js";import"./useThemeProps-emZ_TIsH.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";import"./Switch-BUZxdUY8.js";import"./SwitchBase-D0mJtYXT.js";import"./useControlled-DH6ZUxJF.js";import"./ButtonBase-BhLrVkcf.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./useForkRef-DuMiwuLC.js";function t(s){const i={a:"a",code:"code",p:"p",pre:"pre",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsxs(m,{children:[e.jsxs(i.p,{children:[e.jsx("strong",{children:"MISwitch"})," è un wrapper del componente MUI ",e.jsx("code",{children:"Switch"}),`, pensato per
richiedere un input booleano all'interno di form. Applica la palette del design system MUI
Italia (grigio/blu) allo stato unchecked/checked e non espone le props di personalizzazione
visiva (`,e.jsx("code",{children:"color"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"sx"}),", ",e.jsx("code",{children:"className"}),","," ",`
`,e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"classes"}),", ",e.jsx("code",{children:"focusVisibleClassName"}),`) per mantenere
coerenza con lo stile del design system.`]}),e.jsx("br",{}),e.jsxs(i.p,{children:["Riferimento Figma: ",e.jsx(i.a,{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=295-1358&p=f&m=dev",rel:"nofollow",children:"MUI Italia Next - Design System"}),"."]})]}),`
`,e.jsxs(o,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsxs(o,{title:"Stati",description:"Panoramica degli stati principali dello switch.",children:[e.jsx(n,{title:"Checked",children:e.jsx(r,{of:x})}),e.jsx(n,{title:"Disabled",children:e.jsx(r,{of:j})})]}),`
`,e.jsx(o,{title:"Con label",description:"Esempio di MISwitch in un form con label.",children:e.jsx(r,{of:u})}),`
`,e.jsx(o,{title:"Con errore",description:"Esempio di MISwitch in un form con label e messaggio di errore, correttamente associato tramite aria-describedby.",children:e.jsx(r,{of:b})}),`
`,e.jsxs(o,{title:"Accessibilità",description:"L'accessibilità finale dipende dalla corretta valorizzazione delle props e dall'associazione tra switch, label e messaggi di errore.",children:[e.jsx(n,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"inputProps"}),`: unico modo per passare attributi ARIA (
`,e.jsx("code",{children:"aria-label"}),", ",e.jsx("code",{children:"aria-labelledby"}),", ",e.jsx("code",{children:"aria-describedby"}),") al"," ",`
`,e.jsx("code",{children:'<input type="checkbox">'}),` sottostante, che è l'elemento da cui gli screen
reader leggono il nome accessibile e lo stato.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"required"})," e ",e.jsx("strong",{children:"readOnly"}),`: espongono correttamente lo stato
richiesto/di sola lettura tramite gli attributi nativi dell'input.`]})})]})}),e.jsx(n,{title:"Prop non disponibili",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"color"}),", ",e.jsx("strong",{children:"size"}),`: non sono esposte. Lo switch usa sempre la
stessa palette (grigio/blu) e la stessa dimensione, indipendentemente dal contesto (es.
non è possibile ottenere una variante "error").`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"sx"}),", ",e.jsx("strong",{children:"className"}),", ",e.jsx("strong",{children:"style"}),`: non sono esposte,
quindi non è possibile personalizzare layout o spaziatura dell'istanza dall'esterno.`]})})]})}),e.jsx(n,{title:"Focus da tastiera",children:e.jsxs(i.p,{children:[`Il componente applica uno stile custom al colore del thumb quando riceve il focus da
tastiera (`,e.jsx("code",{children:"Mui-focusVisible"}),`), sia nello stato unchecked (grigio) sia checked
(blu). Non rimuovere questo stile: aiuta l'utente a individuare l'elemento attivo durante la
navigazione con Tab.`]})}),e.jsx(n,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MISwitch
  label="Notifiche"
  error="Campo obbligatorio"
/>
`})})})]})]})}function _(s={}){const{wrapper:i}={...l(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(t,{...s})}):t(s)}export{_ as default};
