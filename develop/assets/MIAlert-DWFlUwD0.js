import{j as e}from"./iframe-5Wy2T5h3.js";import{u as a,M as s,T as c,P as d,b as p,S as r}from"./blocks-DevmtdjR.js";import{O as m}from"./Overview-BVM03cpr.js";import{S as n,a as t}from"./SubSection-doAwewNd.js";import{M as h,S as x,V as j,C as u,a as g,b as v,c as f}from"./MIAlert.stories-BHiYCwi_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./Box-BG9fLXS7.js";import"./Typography-D0v0-SYT.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./styled-CRUdqmCq.js";import"./MIAlert-YDOxMj48.js";import"./ButtonNaked-CI3prxu3.js";import"./Button-CkvxX6Vq.js";import"./ButtonBase-BhLrVkcf.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./useForkRef-DuMiwuLC.js";import"./utils-uj8SQNNW.js";import"./Alert-DsLhjCUk.js";import"./useSlot-D4ce67Ds.js";import"./resolveComponentProps-B7ZPKosw.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";import"./IconButton-COA3ND6T.js";import"./Paper-CjnJvMOl.js";import"./CheckCircleRounded-CLOSyeD0.js";import"./ReportRounded-DeVs6IWo.js";import"./InfoRounded-Bykyasb5.js";import"./useTheme-BId1B-vw.js";import"./Stack-Dp12Lk8P.js";import"./createStack-C9bYgYmk.js";import"./useThemeProps-emZ_TIsH.js";function l(o){const i={code:"code",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(m,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIAlert"})," è un componente basato su ",e.jsx("strong",{children:"Alert"}),` di MUI e serve a
mostrare messaggi di stato o segnalazioni contestuali. Supporta severità semantiche, icone
dedicate, una variante compatta `,e.jsx("code",{children:"header"}),`, un titolo opzionale e una CTA opzionale nella
variante `,e.jsx("code",{children:"default"}),"."]})}),`
`,e.jsxs(n,{title:"Playground",description:"Usa i controlli per modificare le principali configurazioni del componente e verificarne il comportamento live.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsx(n,{title:"Severità",description:"La prop severity determina colore e icona dell’alert. Se non viene indicata, il componente usa la severità success.",children:e.jsx(r,{of:x})}),`
`,e.jsx(n,{title:"Varianti",description:"MIAlert espone due varianti: default e header. La variante default supporta titolo e CTA; la variante header non accetta né titolo né azione.",children:e.jsx(t,{title:"Default e header",children:e.jsx(r,{of:j})})}),`
`,e.jsx(n,{title:"Call to action",description:"Nella variante default è possibile aggiungere una CTA tramite la prop action. La CTA viene trattata come link quando riceve href, oppure come bottone quando riceve onClick.",children:e.jsx(r,{of:u})}),`
`,e.jsx(n,{title:"Layout responsive",description:"MIAlert può adattare la posizione della CTA alla larghezza disponibile. La prop ctaWrapSize controlla la soglia con cui contenuto e CTA vanno a capo.",children:e.jsxs(t,{title:"Soglie CTA",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"ctaWrapSize"})," accetta tre valori:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"tight"}),`: usa una soglia più piccola e mantiene più facilmente la CTA sulla
stessa riga del contenuto.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"normal"}),": valore di default."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"wide"}),`: usa una soglia più ampia e porta più facilmente la CTA sotto il
contenuto.`]})})]}),e.jsx(r,{of:g})]})}),`
`,e.jsxs(n,{title:"Contenuto personalizzato",description:"Il contenuto principale viene passato tramite children e può essere una stringa o un ReactNode.",children:[e.jsx(t,{title:"ReactNode come children",children:e.jsx(r,{of:v})}),e.jsx(t,{title:"Esempio",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIAlert severity="error" title="Titolo dell'Alert">
  <span>
    Controlla i seguenti elementi:
    <ul>
      <li>Verifica i dati anagrafici inseriti</li>
      <li>Controlla l'indirizzo email</li>
      <li>
        Consulta la <a href="https://test.com">guida online</a> per maggiori dettagli
      </li>
    </ul>
  </span>
</MIAlert>
`})})})]}),`
`,e.jsxs(n,{title:"Accessibilità",description:"MIAlert eredita il comportamento accessibile del componente Alert di MUI. L’accessibilità finale dipende anche dai contenuti passati al componente e dalla configurazione della CTA.",children:[e.jsx(t,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"children"}),`: contiene il messaggio dell’alert. Deve descrivere in modo chiaro
lo stato o la segnalazione comunicata.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"title"}),": può aggiungere un’intestazione testuale nella variante"," ",`
`,e.jsx("code",{children:"default"}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"action.label"}),`: è l’etichetta visibile della CTA. Deve descrivere l’azione
associata al link o al bottone.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"action.href"}),": quando presente, la CTA viene renderizzata come link."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"action.onClick"}),": quando presente senza ",e.jsx("code",{children:"href"}),`, la CTA viene
renderizzata come bottone.`]})})]})})," ",e.jsx(t,{title:"Link in nuova scheda",children:e.jsxs(i.p,{children:["Quando la CTA è un link con ",e.jsx("code",{children:'target="_blank"'}),", il componente imposta"," ",`
`,e.jsx("code",{children:'rel="noopener noreferrer"'})," se non viene fornito un valore diverso tramite la prop"," ",`
`,e.jsx("code",{children:"rel"}),"."]})})," ",e.jsx(t,{title:"Varianti e props non disponibili",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:["Nella variante ",e.jsx("code",{children:"header"})," le props ",e.jsx("code",{children:"title"})," e ",e.jsx("code",{children:"action"}),` non sono
disponibili.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:["Il componente espone solo ",e.jsx("code",{children:"severity"})," e ",e.jsx("code",{children:"id"}),` tra le props di MUI Alert
tipizzate direttamente nelle props pubbliche.`]})})]})}),e.jsx(t,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIAlert
  severity="warning"
  title="Dati non completi"
  action={{
    label: 'Completa i dati',
    href: '/profilo/dati',
  }}
>
  Alcune informazioni obbligatorie non sono ancora state inserite.
</MIAlert>
`})})})]}),`
`,e.jsx(n,{title:"Stress test",description:"Esempio utile per verificare il comportamento del layout con testi molto lunghi o parole non spezzabili.",children:e.jsx(r,{of:f})})]})}function ee(o={}){const{wrapper:i}={...a(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(l,{...o})}):l(o)}export{ee as default};
