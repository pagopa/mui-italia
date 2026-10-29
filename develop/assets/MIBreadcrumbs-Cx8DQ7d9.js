import{j as e}from"./iframe-EJCMhezF.js";import{u as l,M as c,T as s,P as d,b as m,S as t}from"./blocks-CpOztE3I.js";import{O as p}from"./Overview-FeAbG9ka.js";import{S as r,a as n}from"./SubSection-FpDUCMQu.js";import{M as u,L as h,A as x,E as j,C as g,V as b}from"./MIBreadcrumbs.stories-nyzzOULB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./Box-D3NVs_hu.js";import"./Typography-DLgU8XWP.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./styled-DRDTacfX.js";import"./MIBreadcrumbs-DVJf7yWu.js";import"./Link-zo7H1YB0.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./useForkRef-CLOggWa6.js";import"./Button-DLK5id5n.js";import"./ButtonBase-BYlwM-_S.js";import"./ArrowBackRounded-BOr84oh4.js";import"./createSvgIcon-BPgnJqPn.js";import"./SvgIcon-BAFrDdJe.js";import"./Breadcrumbs-D62Y-xg3.js";import"./useSlotProps-BQCHbPnp.js";import"./resolveComponentProps-FNbyDh7J.js";import"./isHostComponent-DVu5iVWx.js";import"./Stack-CNPuMEtv.js";import"./createStack-CnssCp4U.js";import"./useThemeProps-D0yria0o.js";function o(a){const i={code:"code",p:"p",pre:"pre",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:u}),`
`,e.jsx(s,{}),`
`,e.jsx(p,{githubRelativePath:"MIBreadcrumbs/MIBreadcrumbs.tsx",figmaNodeId:"1-21",muiRelativePath:"react-breadcrumbs",children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIBreadcrumbs"}),` è un componente di navigazione basato su Breadcrumbs di MUI. Mostra
una sequenza ordinata di `,e.jsx("code",{children:"MIBreadcrumbItem"}),` per rappresentare la gerarchia delle pagine
e identifica la pagina corrente. Gli elementi precedenti possono essere configurati come link
oppure come azioni. Il componente può mostrare la gerarchia completa o un singolo pulsante
Indietro e adatta automaticamente la presentazione alle risoluzioni mobile.`]})}),`
`,e.jsxs(r,{title:"Playground",description:"Usa i controlli per scegliere la modalità di navigazione, modificare le etichette e confrontare le varianti del componente.",children:[e.jsx(d,{}),e.jsx(m,{})]}),`
`,e.jsxs(r,{title:"Navigazione",description:"Gli elementi precedenti alla pagina corrente possono essere configurati come link tramite href oppure come azioni tramite onClick.",children:[e.jsxs(n,{title:"Link",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"href"}),` configura l'elemento come collegamento. Le props pubbliche
dell'elemento link espongono anche `,e.jsx("code",{children:"target"})," e ",e.jsx("code",{children:"rel"}),"."]}),e.jsx(t,{of:h}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIBreadcrumbs aria-label="Percorso di navigazione">
  <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
  <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
  <MIBreadcrumbItem label="Dettaglio ricevuta" current />
</MIBreadcrumbs>
`})})]})," ",e.jsxs(n,{title:"Azione",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"onClick"}),` permette di delegare la navigazione a una funzione, ad esempio
quando l'applicazione usa un sistema di routing client-side. L'elemento viene renderizzato
come controllo interattivo di tipo button.`]}),e.jsx(t,{of:x}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIBreadcrumbs aria-label="Percorso di navigazione">
  <MIBreadcrumbItem
    label="Dashboard"
    onClick={() => navigate('/dashboard')}
  />
  <MIBreadcrumbItem
    label="Elenco ricevute"
    onClick={() => navigate('/ricevute')}
  />
  <MIBreadcrumbItem label="Dettaglio ricevuta" current />
</MIBreadcrumbs>
`})})]})," ",e.jsx(n,{title:"Configurazioni alternative",children:e.jsxs(i.p,{children:["Le configurazioni ",e.jsx("code",{children:"href"}),", ",e.jsx("code",{children:"onClick"})," e ",e.jsx("code",{children:"current"}),` sono
alternative tra loro. In base alle props pubbliche, un `,e.jsx("code",{children:"MIBreadcrumbItem"}),` non può
rappresentare contemporaneamente un link, un'azione e la pagina corrente.`]})})]}),`
`,e.jsxs(r,{title:"Varianti",description:"MIBreadcrumbs espone le varianti extended e compact, che determinano se mostrare la gerarchia completa oppure il pulsante Indietro.",children:[e.jsxs(n,{title:"Extended",children:[e.jsxs(i.p,{children:["La variante ",e.jsx("code",{children:"extended"})," mostra gli elementi ricevuti tramite ",e.jsx("code",{children:"children"}),`.
Alle risoluzioni mobile sostituisce automaticamente la gerarchia con il pulsante Indietro.`]}),e.jsx(t,{of:j})]})," ",e.jsxs(n,{title:"Compact",children:[e.jsxs(i.p,{children:["La variante ",e.jsx("code",{children:"compact"}),` mostra sempre il pulsante Indietro e non renderizza gli
elementi ricevuti tramite `,e.jsx("code",{children:"children"}),"."]}),e.jsx(t,{of:g})]})," ",e.jsxs(n,{title:"Confronto",children:[e.jsx(i.p,{children:`La story seguente permette di confrontare le due varianti senza modificare manualmente
i Controls.`}),e.jsx(t,{of:b})]})]}),`
`,e.jsxs(r,{title:"Composizione",description:"La gerarchia viene costruita tramite una sequenza ordinata di MIBreadcrumbItem.",children:[e.jsxs(n,{title:"Ordine degli elementi",children:[e.jsxs(i.p,{children:[`L'ordine degli elementi deve rispecchiare la gerarchia di navigazione. Gli elementi
precedenti rappresentano destinazioni o azioni disponibili, mentre l'ultimo elemento
può identificare la pagina corrente tramite `,e.jsx("code",{children:"current"}),"."]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIBreadcrumbs aria-label="Percorso di navigazione">
  <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
  <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
  <MIBreadcrumbItem label="Dettaglio ricevuta" current />
</MIBreadcrumbs>
`})})]})," ",e.jsxs(n,{title:"Navigazione indietro",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"backButtonAction"}),` definisce l'azione eseguita dal pulsante Indietro.
Se non viene fornita, il componente usa `,e.jsx("code",{children:"window.history.back()"}),`. La relativa
etichetta può essere personalizzata tramite `,e.jsx("code",{children:"backButtonLabel"}),"."]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIBreadcrumbs
  variant="compact"
  backButtonLabel="Elenco ricevute"
  backButtonAction={() => navigate('/ricevute')}
  aria-label="Navigazione alla pagina precedente"
/>
`})})]})]}),`
`,e.jsxs(r,{title:"Comportamento responsive",description:"La presentazione dipende dalla variante selezionata e dalla larghezza del viewport.",children:[e.jsx(n,{title:"Risoluzioni mobile",children:e.jsxs(i.p,{children:["Con la variante ",e.jsx("code",{children:"extended"}),`, alle risoluzioni inferiori o uguali al breakpoint
`,e.jsx("code",{children:"sm"})," del tema, la gerarchia viene sostituita dal pulsante Indietro."]})})," ",e.jsx(n,{title:"Variante compact",children:e.jsxs(i.p,{children:["Con ",e.jsx("code",{children:'variant="compact"'}),` il pulsante Indietro viene mostrato a tutte le
risoluzioni, indipendentemente dal numero di elementi passati come `,e.jsx("code",{children:"children"}),"."]})})]}),`
`,e.jsxs(r,{title:"Accessibilità",description:"MIBreadcrumbs usa un elemento di navigazione e identifica semanticamente la pagina corrente. L’accessibilità finale dipende da etichette significative e dalla corretta composizione degli elementi.",children:[e.jsx(n,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"aria-label"}),`: descrive la navigazione che contiene le breadcrumb. Il
componente usa `,e.jsx("code",{children:"breadcrumbs"}),` come valore predefinito e consente di
sovrascriverlo tramite le props del contenitore.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"label"}),`: fornisce il testo visibile di ogni elemento e deve descrivere
chiaramente la relativa destinazione o pagina.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"current"}),`: identifica la pagina attuale. L'elemento corrispondente viene
renderizzato con `,e.jsx("code",{children:'aria-current="page"'}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"backButtonLabel"}),`: costituisce il testo visibile del pulsante Indietro.
Deve descrivere in modo significativo la navigazione eseguita.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"target"})," e ",e.jsx("strong",{children:"rel"}),`: sono disponibili sugli elementi
configurati tramite `,e.jsx("code",{children:"href"}),` e devono essere valorizzati coerentemente con il
comportamento del collegamento.`]})})]})})," "," ",e.jsx(n,{title:"Pagina corrente",children:e.jsxs(i.p,{children:["L'elemento con ",e.jsx("code",{children:"current"}),` viene renderizzato come testo non interattivo e riceve
automaticamente `,e.jsx("code",{children:'aria-current="page"'}),`. Nella composizione della gerarchia deve
rappresentare la pagina attualmente visualizzata.`]})})," "," ",e.jsx(n,{title:"Navigazione da tastiera",children:e.jsxs(i.p,{children:["Gli elementi configurati tramite ",e.jsx("code",{children:"href"}),` sono collegamenti, mentre quelli configurati
tramite `,e.jsx("code",{children:"onClick"}),` vengono renderizzati come pulsanti. Entrambi sono raggiungibili
tramite tastiera. L'elemento con `,e.jsx("code",{children:"current"})," è invece informativo e non interattivo."]})})," "," ",e.jsx(n,{title:"Pulsante Indietro",children:e.jsxs(i.p,{children:["Nelle visualizzazioni mobile e nella variante ",e.jsx("code",{children:"compact"}),`, la gerarchia viene sostituita
dal pulsante Indietro. Evita una `,e.jsx("code",{children:"backButtonLabel"}),` vuota finché il componente non
espone un'etichetta accessibile separata per la configurazione con la sola icona.`]})})," ",e.jsx(n,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIBreadcrumbs
  aria-label="Percorso di navigazione"
  backButtonLabel="Torna all'elenco ricevute"
  backButtonAction={() => navigate('/ricevute')}
>
  <MIBreadcrumbItem label="Dashboard" href="/dashboard" />
  <MIBreadcrumbItem label="Elenco ricevute" href="/ricevute" />
  <MIBreadcrumbItem label="Dettaglio ricevuta" current />
</MIBreadcrumbs>
`})})})]})]})}function J(a={}){const{wrapper:i}={...l(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(o,{...a})}):o(a)}export{J as default};
