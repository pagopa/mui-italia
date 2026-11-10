import{j as e}from"./iframe-DqKsui2S.js";import{u as t,M as c,T as d,P as p,b as h,S as l}from"./blocks-IPrb--cp.js";import{O as x}from"./Overview-2Zrl4w5b.js";import{S as s,a as n}from"./SubSection-CyXZZNRq.js";import{M as m,S as u,I as j,D as g,L as v,G as b,a as f}from"./MIAccordion.stories-Dk6ah9-V.js";import{T as a}from"./Typography-DaPIykBW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./Box-0w2jz2YQ.js";import"./MIAccordion-DW0ISxce.js";import"./MIChip-BJGu-AOa.js";import"./useTheme-D3Y4xEPH.js";import"./styled-Df695Bk_.js";import"./CloseRounded-C2vPQ9Tx.js";import"./createSvgIcon-bbdnzGJh.js";import"./SvgIcon-DZqMrxle.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./Chip-Cm6usiCt.js";import"./useForkRef-CLmtxq_Y.js";import"./ButtonBase-BDS4PFr6.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./AccordionSummary-a_kwYQTc.js";import"./useSlot-DVeJmqma.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-D38WY-ee.js";import"./Collapse-W1Wji2Qd.js";import"./utils-CWuA1miZ.js";import"./Paper-C1twuA-f.js";import"./Stack-BNTagQR0.js";import"./createStack-CqPDIsXo.js";import"./useThemeProps-BkF6htZ6.js";import"./Skeleton-DdjaWehV.js";import"./Divider-Cc4-fGd7.js";import"./dividerClasses-C6rQjQLF.js";import"./KeyboardArrowDown-DMA5jUwQ.js";import"./Avatar-C_syDAjx.js";import"./CheckCircle-CImwMqKi.js";function r(o){const i={code:"code",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:m}),`
`,e.jsx(d,{}),`
`,e.jsx(x,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MIAccordion"}),` è un item espandibile che mostra un header sempre visibile e un
contenuto che si apre e si chiude al click. È basato sull'Accordion di MUI. L'header contiene il
titolo e, opzionali e indipendenti tra loro, un'icona, un badge e una descrizione; il componente
supporta gli stati disabilitato e di caricamento.`]})}),`
`,e.jsx(s,{title:"Riferimenti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=759-6399&m=dev",children:e.jsx(i.p,{children:"🎨 Figma"})})}),e.jsx("li",{children:e.jsx("a",{href:"https://github.com/pagopa/mui-italia/blob/develop/src/components/MIAccordion/MIAccordion.tsx",children:e.jsx(i.p,{children:"Codice sorgente"})})})]})}),`
`,e.jsxs(s,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente. Il controllo expanded apre e chiude l'item e si aggiorna anche cliccando sull'header.",children:[e.jsx(p,{}),e.jsx(h,{})]}),`
`,e.jsxs(s,{title:"Varianti e stati",description:"Configurazioni statiche utili per confrontare l'aspetto e gli stati del componente.",children:[e.jsxs(n,{title:"Combinazioni",children:[e.jsx(i.p,{children:`Titolo, chevron e contenuto sono sempre presenti; icona, badge e descrizione sono opzionali e
indipendenti. La story mostra le 8 combinazioni, chiuse e aperte: titolo e chevron non cambiano
mai posizione.`}),e.jsx(l,{of:u})]}),e.jsxs(n,{title:"Icona",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"icon"}),` accetta icone semplici, icone di stato colorate o avatar. MIAccordion
non ne modifica colore né dimensione.`]}),e.jsx(l,{of:j})]}),e.jsxs(n,{title:"Disabled",children:[e.jsx(i.p,{children:`Un item disabilitato non si apre né si chiude ed esce dall'ordine di tabulazione. Ha sfondo
grigio, icona, titolo e badge attenuati, e il badge diventa outlined mantenendo il suo colore.
Il componente non mostra il motivo del blocco: quando serve, spiegalo nella pagina, per esempio
con un testo sopra il primo accordion.`}),e.jsx(l,{of:g})]}),e.jsxs(n,{title:"Loading",children:[e.jsxs(i.p,{children:["Con ",e.jsx("code",{children:"loading"}),` il contenuto e la descrizione sono sostituiti da uno skeleton, mentre
l'header resta visibile e interattivo. Il componente non annuncia il caricamento agli screen
reader: se ne occupa la pagina, con la sua live region (vedi "Accessibilità").`]}),e.jsx(l,{of:v})]}),e.jsxs(n,{title:"Gruppo",children:[e.jsxs(i.p,{children:["Più item impilati con 16px di spazio. Il gruppo lo gestisce la pagina: in questo esempio, con"," ",`
`,e.jsx("code",{children:"expanded"})," e ",e.jsx("code",{children:"onChange"}),", si apre un item alla volta."]}),e.jsx(l,{of:b})]}),e.jsxs(n,{title:"Stress test",children:[e.jsx(i.p,{children:"Titolo, badge e descrizione lunghi su più righe, con due gruppi di dati nel contenuto."}),e.jsx(l,{of:f})]})]}),`
`,e.jsxs(s,{title:"Note per gli sviluppatori",description:"Indicazioni tecniche per integrare correttamente il componente.",children:[e.jsxs(n,{title:"Uso consigliato",children:[e.jsxs(i.p,{children:["Passa il titolo come ",e.jsx("strong",{children:"testo"})," (",e.jsx("code",{children:"title"})," di tipo ",e.jsx("code",{children:"string"}),`) e,
se serve indicare uno stato, usa le props `,e.jsx("code",{children:"badge"})," e ",e.jsx("code",{children:"badgeProps"}),`: il
componente rende il badge come `,e.jsx("code",{children:"MIChip"}),` sotto il titolo e lo mostra outlined quando
l'item è disabilitato, come previsto dal Figma.`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MIAccordion
  title="Configurazione del servizio"
  badge="Attivo"
  badgeProps={{ color: 'success' }}
  description="Verifica i dati prima di proseguire."
>
  ...
</MIAccordion>
`})})]}),e.jsxs(n,{title:"Titolo personalizzato",children:[e.jsxs(i.p,{children:[e.jsx("code",{children:"title"})," accetta anche un contenuto personalizzato (",e.jsx("code",{children:"ReactNode"}),`), per i
casi che il design standard non copre. In questo caso aderenza al Figma e accessibilità
dipendono da chi usa il componente. Il titolo sta dentro il pulsante dell'header, quindi:`]}),e.jsxs("ul",{children:[e.jsx("li",{children:"non inserire link, bottoni, campi o altri elementi interattivi;"}),e.jsx("li",{children:e.jsx(i.p,{children:`assicurati che il testo letto dagli screen reader resti un nome chiaro: icone informative
con testo alternativo, nessun contenuto vuoto o troppo lungo;`})}),e.jsx("li",{children:e.jsxs(i.p,{children:["se componi tu un badge, usa ",e.jsx("code",{children:"MIChip"}),` e rendilo outlined quando l'item è
disabilitato, così lo stato non si distingue solo per il colore;`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:["con i componenti di traduzione puoi passare la stringa già tradotta, per esempio"," ",`
`,e.jsx("code",{children:"t('...')"}),"."]})})]})]}),e.jsx(n,{title:"Contenuto",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"icon"}),`: icona semplice, icona di stato colorata o avatar. L'icona è
decorativa e nascosta agli screen reader: se comunica uno stato, riportalo anche nel titolo
o nel badge.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"badge"})," e ",e.jsx("strong",{children:"badgeProps"}),": il badge è un ",e.jsx("code",{children:"MIChip"}),`, di
default `,e.jsx("code",{children:"neutral"})," e ",e.jsx("code",{children:"filled"}),". Con ",e.jsx("code",{children:"badgeProps"}),` si scelgono
solo colore e variante (`,e.jsx("code",{children:"Pick<MIChipProps, 'color' | 'variant'>"}),`): il badge è
testo semplice dentro l'header, quindi niente stili, icone o azioni. Nel Playground si
prova con i controlli `,e.jsx("code",{children:"badgeColor"})," e ",e.jsx("code",{children:"badgeVariant"}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"description"}),": testo secondario (",e.jsx("code",{children:"string"}),`), visibile solo quando
l'item è aperto. Per un testo con link o formattazione usa l'inizio di`," ",`
`,e.jsx("code",{children:"children"}),"."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"children"}),`: contenuto dell'item, obbligatorio. Un elemento con solo il
titolo non è un accordion: in quel caso usa `,e.jsx("code",{children:"MIBoxedModule"}),"."]})})]})}),e.jsxs(n,{title:"Stato aperto e chiuso",children:[e.jsx(i.p,{children:"Il componente funziona in due modalità:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"non controllata"}),": ",e.jsx("code",{children:"defaultExpanded"}),` imposta solo lo stato
iniziale, poi l'item si apre e si chiude da solo. Cambiare `,e.jsx("code",{children:"defaultExpanded"})," ",`
dopo il primo render non ha effetto;`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"controllata"}),": ",e.jsx("code",{children:"expanded"})," decide lo stato e"," ",`
`,e.jsx("code",{children:"onChange(event, expanded)"}),` segnala le richieste di apertura e chiusura. Serve,
per esempio, per aprire un item alla volta in un gruppo.`]})})]}),e.jsxs(i.p,{children:[`Un item disabilitato ignora ogni richiesta di apertura o chiusura, in entrambe le modalità, e
non chiama `,e.jsx("code",{children:"onChange"}),"."]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const [expanded, setExpanded] = useState<string | false>(false);

<Stack spacing={2}>
  <MIAccordion
    title="Informazioni generali"
    expanded={expanded === 'dati'}
    onChange={(_, isExpanded) => setExpanded(isExpanded ? 'dati' : false)}
  >
    ...
  </MIAccordion>
</Stack>;
`})})]}),e.jsx(n,{title:"Caricamento",children:e.jsxs(i.p,{children:["Lo skeleton mostrato con ",e.jsx("code",{children:"loading"})," si sostituisce con"," ",`
`,e.jsx("code",{children:"slots.skeleton"})," (un componente che riceve ",e.jsx("code",{children:"MIAccordionSkeletonProps"}),`) e
si configura con `,e.jsx("code",{children:"slotProps.skeleton"}),", per esempio il numero di righe (default 6)."]})}),e.jsxs(n,{title:"Personalizzazione",children:[e.jsxs(i.p,{children:["Il componente non accetta ",e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"className"})," né ",e.jsx("code",{children:"classes"}),`.
La prop `,e.jsx("code",{children:"sx"}),` si applica al contenitore: usala per posizionare il componente nella
pagina (es. margini), non per cambiarne l'aspetto rispetto al design system.`]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("code",{children:"id"}),", gli attributi ",e.jsx("code",{children:"data-*"})," (es. ",e.jsx("code",{children:"data-testid"}),`) e le
altre props HTML vanno al contenitore.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:["gli attributi ",e.jsx("code",{children:"aria-*"}),` vanno al pulsante dell'header, l'elemento che riceve
il focus: per esempio `,e.jsx("code",{children:"aria-describedby"}),` collega all'header un testo di
istruzioni presente nella pagina.`]})})]})]})]}),`
`,e.jsx(s,{title:"Note per i designer",description:"Informazioni utili per la revisione visuale e il confronto con Figma.",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(i.p,{children:`Il design usa il font Titillio, non ancora disponibile nel tema: il titolo usa Titillium Web
con peso 600 al posto del 500. La resa sarà allineata quando Titillio entrerà nel tema.`})}),e.jsx("li",{children:e.jsx(i.p,{children:`Il componente non modifica colore né dimensione dell'icona: per le icone semplici la
dimensione consigliata è 24px.`})}),e.jsx("li",{children:e.jsxs(i.p,{children:["Il badge è un ",e.jsx("code",{children:"MIChip"}),", di default ",e.jsx("code",{children:"neutral"}),`; da disabilitato è sempre
outlined e mantiene il suo colore, così lo stato non si distingue solo per il colore.`]})}),e.jsx("li",{children:"In un gruppo gli item sono impilati con 16px di spazio, gestito dalla pagina."}),e.jsx("li",{children:e.jsxs(i.p,{children:["Gli snapshot Chromatic coprono i viewport fino a 900px (",e.jsx("code",{children:"componentMaxWidth"}),`): le
stories limitano la larghezza del componente a 900px, quindi oltre non cambia layout.`]})})]})}),`
`,e.jsxs(s,{title:"Accessibilità",description:"MIAccordion segue il pattern Accordion di WAI-ARIA APG.",children:[e.jsx(n,{title:"Props rilevanti",children:e.jsx("ul",{children:e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"headingLevel"}),": l'header è contenuto in un heading (default"," ",`
`,e.jsx("code",{children:"h3"}),"). Scegli il livello in base alla gerarchia della pagina."]})})})}),e.jsx(n,{title:"Comportamento",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(i.p,{children:`Solo l'header è raggiungibile con Tab; si apre e si chiude con Invio o Spazio. Link e campi
nel contenuto restano raggiungibili normalmente.`})}),e.jsx("li",{children:e.jsxs(i.p,{children:["Il pannello ha ",e.jsx("code",{children:'role="region"'})," ed è etichettato dal titolo."]})}),e.jsx("li",{children:"La navigazione tra header con le frecce, opzionale nel pattern, non è implementata."}),e.jsx("li",{children:"Con la riduzione del movimento attiva nel sistema, l'apertura non è animata."}),e.jsx("li",{children:e.jsx(i.p,{children:"Un item disabilitato non si apre né si chiude in nessun modo: mouse, tastiera o screen reader."})})]})}),e.jsxs(n,{title:"Best practices",description:"MIAccordion gestisce da solo heading, tastiera, stati ARIA e disabled. Restano a carico dello sviluppatore che lo usa gli annunci di caricamento e la struttura del contenuto del pannello.",children:[e.jsx(a,{component:"h4",fontSize:18,fontWeight:600,sx:{mt:2,mb:1},children:e.jsx(i.p,{children:"Live region"})}),e.jsxs(i.p,{children:[`MIAccordion non ha una live region propria: più live region che si attivano nello stesso momento
hanno un comportamento imprevedibile con gli screen reader. Durante il caricamento il contenuto è
marcato con `,e.jsx("code",{children:"aria-busy"}),", ma l'annuncio va fatto dalla pagina:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:["prevedi ",e.jsx("strong",{children:"una sola live region per pagina"}),`, condivisa da tutti gli aggiornamenti
dinamici (non una per componente);`]})}),e.jsx("li",{children:e.jsx(i.p,{children:`aggiornala all'inizio del caricamento ("Caricamento in corso") e alla fine ("Documenti
caricati");`})}),e.jsx("li",{children:"non aggiungere live region dentro l'accordion o nel suo contenuto."})]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`// Una sola volta nella pagina (visivamente nascosta)
<Typography role="status" aria-atomic="true" sx={visuallyHidden}>
  {announcement}
</Typography>;

// Dove parte e finisce il caricamento
setAnnouncement('Caricamento dei documenti in corso');
setAnnouncement('Documenti caricati');
`})}),e.jsx(a,{component:"h4",fontSize:18,fontWeight:600,sx:{mt:3,mb:1},children:e.jsx(i.p,{children:"Contenuto del pannello"})}),e.jsxs(i.p,{children:["Il contenuto (",e.jsx("code",{children:"children"}),`) lo scrive lo sviluppatore: queste indicazioni valgono per i
casi più comuni.`]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"Coppie etichetta/valore"}),' (es. "Denominazione – Comune di Milano"): usa una lista'," ",`
`,e.jsx("code",{children:"<dl>"})," con ",e.jsx("code",{children:"<dt>"})," e ",e.jsx("code",{children:"<dd>"}),`, così la relazione
tra etichetta e valore è esposta agli screen reader.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"Titoli dei gruppi"}),` (es. "Dati dell'ente"): con un solo gruppo nel pannello può
restare un paragrafo; con più gruppi usa un heading del livello successivo a`," ",`
`,e.jsx("code",{children:"headingLevel"})," (con il default ",e.jsx("code",{children:"h3"}),", un ",e.jsx("code",{children:"h4"}),")."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"Separatori decorativi"}),": preferisci un bordo CSS; se usi un"," ",`
`,e.jsx("code",{children:"<hr>"})," o un ",e.jsx("code",{children:"Divider"}),", nascondilo agli screen reader con"," ",`
`,e.jsx("code",{children:'role="presentation"'}),"."]})})]})]})]})]})}function ae(o={}){const{wrapper:i}={...t(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{ae as default};
