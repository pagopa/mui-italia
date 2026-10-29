import{j as i}from"./iframe-EJCMhezF.js";import{u as a,M as r,T as c,P as d,b as p,S as s}from"./blocks-CpOztE3I.js";import{O as m}from"./Overview-FeAbG9ka.js";import{S as o,a as n}from"./SubSection-FpDUCMQu.js";import{M as u,D as x,C as h,W as j,a as b,L as I}from"./MITableList.stories-zhtyaw2X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./Box-D3NVs_hu.js";import"./Typography-DLgU8XWP.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./styled-DRDTacfX.js";import"./MIButton-1e_OMaX4.js";import"./MISpinner-CSPVCzOM.js";import"./CircularProgress-cGqak5kY.js";import"./Skeleton-B-y3oQSR.js";import"./useTheme-C9TzCYyI.js";import"./Button-DLK5id5n.js";import"./ButtonBase-BYlwM-_S.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./useForkRef-CLOggWa6.js";import"./MITableList-BTYz2_bu.js";import"./children.utility-DoOv6aqI.js";import"./MIPaper-Dejil_Kv.js";import"./Paper-dYyLIbKF.js";import"./ListItemIcon-qTf_nwzI.js";import"./listItemIconClasses-BuqAPFSv.js";import"./List-iCGbns_O.js";import"./ListItemText-DQA_k7dB.js";import"./listItemTextClasses-CpVyitVI.js";import"./ListItem-H1lztdIB.js";import"./isMuiElement-ZhlRfe_a.js";import"./isHostComponent-DVu5iVWx.js";import"./listItemButtonClasses-DP4NYtFI.js";import"./Stack-CNPuMEtv.js";import"./createStack-CnssCp4U.js";import"./useThemeProps-D0yria0o.js";import"./visuallyHidden-Dan1xhjv.js";import"./MailOutline-B6G1iYi4.js";import"./createSvgIcon-BPgnJqPn.js";import"./SvgIcon-BAFrDdJe.js";import"./ArrowForward-BpcXZHAT.js";function l(t){const e={code:"code",p:"p",pre:"pre",...a(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:u}),`
`,i.jsx(c,{}),`
`,i.jsx(m,{children:i.jsxs(e.p,{children:[i.jsx("strong",{children:"MITableList"}),` rappresenta una lista attraverso elementi boxed, adatta a contenuti
informativi flessibili.`]})}),`
`,i.jsxs(o,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[i.jsx(d,{}),i.jsx(p,{})]}),`
`,i.jsxs(o,{title:"Utilizzo",description:"MITableList è pensata per liste di entità organizzate visivamente in modo simile alle righe di una tabella.",children:[i.jsxs(n,{title:"Quando usarla",children:[i.jsxs(e.p,{children:["È indicata per liste a ",i.jsx("strong",{children:"bassa densità informativa"}),`, nelle quali i dati possono
avere lunghezze variabili o occupare più righe.`]}),i.jsxs("ul",{children:[i.jsx("li",{children:"i contenuti dei campi possono avere lunghezze variabili;"}),i.jsx("li",{children:"è utile lasciare maggiore spazio visivo tra un elemento e l'altro."})]})]}),i.jsxs(n,{title:"Quando preferire una Table",children:[i.jsxs(e.p,{children:["Una ",i.jsx("code",{children:"Table"})," è preferibile quando:"]}),i.jsxs("ul",{children:[i.jsx("li",{children:"è importante confrontare rapidamente i valori tra le diverse righe per colonna;"}),i.jsx("li",{children:"la pagina presenta un'elevata densità di dati;"}),i.jsx("li",{children:i.jsx(e.p,{children:`sono necessarie funzionalità avanzate di griglia, come ordinamento, filtri per colonna o
ridimensionamento delle colonne.`})})]})]})]}),`
`,i.jsxs(o,{title:"Struttura e layout",description:"MITableList contiene una serie di MITableListItem, composti a loro volta da MITableListItemField.",children:[i.jsxs(n,{title:"Anatomia",children:[i.jsxs(e.p,{children:[i.jsx("code",{children:"MITableList"})," accetta come figli diretti solo componenti"," ",`
`,i.jsx("code",{children:"MITableListItem"}),". Ogni item accetta a sua volta solo componenti"," ",`
`,i.jsx("code",{children:"MITableListItemField"}),"."]}),i.jsxs(e.p,{children:["Ogni ",i.jsx("code",{children:"MITableListItem"}),` gestisce una propria griglia indipendente. Su desktop i campi
vengono distribuiti orizzontalmente all'interno dell'item, mentre su viewport più piccoli il
contenuto viene disposto verticalmente.`]}),i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<MITableList columns={[2, 1, 1]}>
  <MITableListItem action={{ content: 'Apri', onClick: handleOpen }}>
    <MITableListItemField label="22/11/2025">
      Titolo campagna
    </MITableListItemField>

    <MITableListItemField label="Codice ID">
      0000000000
    </MITableListItemField>

    <MITableListItemField label="Comunicazioni" icon={<MailOutlineIcon />}>
      10
    </MITableListItemField>
  </MITableListItem>
</MITableList>
`})})]}),i.jsxs(n,{title:"Campi con peso uniforme",children:[i.jsxs(e.p,{children:["Se la prop ",i.jsx("code",{children:"columns"}),` non viene specificata, i campi di ciascun item vengono
distribuiti con lo stesso peso nello spazio disponibile.`]}),i.jsx(s,{of:x})]}),i.jsxs(n,{title:"Proporzioni personalizzate",children:[i.jsxs(e.p,{children:["La prop opzionale ",i.jsx("code",{children:"columns"}),` permette di definire il peso relativo dei campi. I valori
non rappresentano larghezze fisse, ma proporzioni dello spazio disponibile all'interno del
singolo item.`]}),i.jsxs(e.p,{children:["Quando ",i.jsx("code",{children:"columns"})," viene specificata su ",i.jsx("code",{children:"MITableList"}),`, la configurazione
viene utilizzata dagli item della lista. Un `,i.jsx("code",{children:"MITableListItem"}),` può specificare una
propria `,i.jsx("code",{children:"columns"}),", sovrascrivendo quella ricevuta dalla lista."]}),i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`<MITableList columns={[2, 1, 1]}>
  <MITableListItem>
    ...
  </MITableListItem>

  <MITableListItem columns={[1, 2, 1]}>
    ...
  </MITableListItem>
</MITableList>
`})}),i.jsx(s,{of:h})]})]}),`
`,i.jsxs(o,{title:"Action",description:"L'action di MITableListItem è separata dai campi informativi e può essere configurata o personalizzata.",children:[i.jsxs(n,{title:"Item senza action",children:[i.jsx(e.p,{children:`L'action non è obbligatoria: il componente può essere utilizzato anche come semplice lista
informativa.`}),i.jsx(s,{of:j})]}),i.jsxs(n,{title:"Action predefinita",children:[i.jsxs(e.p,{children:["Quando viene fornita la prop ",i.jsx("code",{children:"action"}),", il componente utilizza di default"," ",`
`,i.jsx("code",{children:"ButtonNaked"})," e mostra un'icona di navigazione."]}),i.jsxs(e.p,{children:["Il contenuto e il comportamento al click vengono definiti tramite ",i.jsx("code",{children:"action.content"})," e"," ",`
`,i.jsx("code",{children:"action.onClick"}),". È possibile sostituire l'icona tramite ",i.jsx("code",{children:"action.icon"}),`,
oppure rimuoverla passando `,i.jsx("code",{children:"null"}),"."]})]}),i.jsxs(n,{title:"Personalizzazione dell'action",children:[i.jsxs(e.p,{children:[i.jsx("code",{children:"slots.actionButton"}),` permette di sostituire il componente button utilizzato per
l'action con uno compatibile con l'API prevista, mentre `,i.jsx("code",{children:"slotProps.actionButton"}),`
consente di configurarne le props aggiuntive.`]}),i.jsx(e.p,{children:"L'action occupa lo spazio necessario al proprio contenuto all'interno del singolo item."}),i.jsx(s,{of:b})]})]}),`
`,i.jsxs(o,{title:"Stato di caricamento",description:"Quando loading è attivo, la lista sostituisce temporaneamente il contenuto con uno skeleton.",children:[i.jsxs(n,{title:"Skeleton",children:[i.jsxs(e.p,{children:[`Il numero di righe, il numero di colonne e la presenza del placeholder dell'action possono
essere configurati tramite `,i.jsx("code",{children:"slotProps.skeleton"}),"."]}),i.jsx(s,{of:I})]}),i.jsxs(n,{title:"Personalizzazione",children:[i.jsxs(e.p,{children:["Lo skeleton predefinito può essere sostituito tramite ",i.jsx("code",{children:"slots.skeleton"}),"."]}),i.jsxs(e.p,{children:["Il testo annunciato durante il caricamento può essere personalizzato tramite"," ",`
`,i.jsx("code",{children:"localeText.loadingLabel"}),"."]})]})]}),`
`,i.jsxs(o,{title:"Accessibilità",description:"Considerazioni per l'utilizzo del componente con tecnologie assistive.",children:[i.jsx(n,{title:"Stato di caricamento",children:i.jsxs(e.p,{children:["Durante il caricamento la lista espone ",i.jsx("code",{children:'aria-busy="true"'}),`. Una live region
visivamente nascosta annuncia il cambio di stato alle tecnologie assistive.`]})}),i.jsx(n,{title:"Action",children:i.jsxs(e.p,{children:[`Quando il testo visibile dell'action non è sufficientemente specifico nel contesto della lista,
usa `,i.jsx("code",{children:"action.ariaLabel"})," per fornire un'etichetta accessibile più descrittiva."]})})]})]})}function ai(t={}){const{wrapper:e}={...a(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(l,{...t})}):l(t)}export{ai as default};
