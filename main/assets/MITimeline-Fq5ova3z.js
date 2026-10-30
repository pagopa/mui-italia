import{j as e}from"./iframe-CDfDAPFk.js";import{u as l,M as a,T as c,P as d,b as m,S as r}from"./blocks-CH-tGoxG.js";import{O as p}from"./Overview-C8KrGHHE.js";import{S as t,a as n}from"./SubSection-DRhaXsC5.js";import{M as h,V as x,R as j,C as u}from"./MITimeline.stories-AeXvNulK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bnc84QHD.js";import"./index-D3KWgPQG.js";import"./Box-BfdFYhQk.js";import"./Typography-9AQN7ayB.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./styled-tN4ayshy.js";import"./MITimeline-gIIa3nll.js";import"./children.utility-Dxwf4V5i.js";import"./MIPaper-CnDpsgSw.js";import"./Paper-BtnOIDKN.js";import"./TimelineSeparator-CQ6vnwiv.js";import"./useThemeProps-ByWTvVcx.js";import"./useThemeProps-DVJ-9e3j.js";import"./isMuiElement-BK0PQ6RV.js";import"./useTheme-DDUJVjwp.js";import"./createStack-D3UHGSp-.js";import"./Tag-Q15I5ASA.js";import"./MITooltip-CqVKdkh-.js";import"./ClickAwayListener-CoPYCc8n.js";import"./useForkRef-CNIqWbEd.js";import"./utils-DcX_SmDN.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Da7l2JCj.js";import"./Grow-DkYaE8Oe.js";import"./useControlled-ZAw3sqd0.js";import"./resolveComponentProps-DNhtxahT.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BIyMpkmr.js";import"./Portal-al-BQE5u.js";import"./useSlotProps-DkUD6T-O.js";import"./InfoRounded-DdMNIXko.js";import"./createSvgIcon-BbEuUIJp.js";import"./SvgIcon-C-yBIyJ3.js";import"./ReportRounded-mACyuGCy.js";import"./CheckCircleRounded-C2a5K20z.js";import"./useSlot-CEODD6Zf.js";import"./Collapse-DKyODpPX.js";import"./ButtonBase-WCmC4j5j.js";import"./MailOutline-DddRfyLZ.js";import"./Warning-DZLym8qO.js";import"./Error-log9EUDj.js";import"./Search-CzttMS1c.js";function s(o){const i={code:"code",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(p,{children:e.jsxs(i.p,{children:["Il componente ",e.jsx("strong",{children:"MITimeline"})," è la timeline del Design System basata sul componente"," ",`
`,e.jsx("a",{href:"https://mui.com/material-ui/react-timeline/",children:"Timeline"}),` di MUI Lab. Rappresenta una
sequenza verticale di step, ognuno reso da un `,e.jsx("strong",{children:"MITimelineItem"}),`, con dot, connettori
e card colorate previsti dal Design System.`]})}),`
`,e.jsxs(t,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[e.jsx(d,{}),e.jsx(m,{})]}),`
`,e.jsx(t,{title:"Anatomia",description:"MITimeline gestisce internamente la sequenza degli item e la posizione di primo e ultimo elemento.",children:e.jsxs(n,{title:"Struttura del componente",children:[e.jsxs(i.p,{children:[e.jsx("code",{children:"MITimeline"})," è un contenitore che accetta ",e.jsxs("strong",{children:["solo figli di tipo ",e.jsx("code",{children:"MITimelineItem"})]}),`:
la validazione dei children è automatica e segnala in console eventuali nodi non ammessi. La
posizione di ogni item, primo o ultimo, viene gestita internamente da `,e.jsx("code",{children:"MITimeline"}),`,
che mantiene trasparente il connettore sopra il primo item e sotto l'ultimo. Non è quindi
richiesta — né possibile — alcuna configurazione manuale da parte di chi utilizza il componente.`]}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MITimeline>
  <MITimelineItem variant="success" icon={CheckCircleIcon} title="Notifica inviata">
    <Typography variant="body2" color="text.secondary">
      La notifica è stata depositata e presa in carico dal sistema.
    </Typography>
  </MITimelineItem>

  <MITimelineItem variant="normal" icon={InfoIcon} title="In elaborazione">
    <Typography variant="body2" color="text.secondary">
      Stiamo verificando i dati del destinatario.
    </Typography>
  </MITimelineItem>
</MITimeline>
`})})]})}),`
`,e.jsx(t,{title:"Props di MITimelineItem",description:"Ogni MITimelineItem espone le prop necessarie a definire variante, icona, titolo e contenuto.",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"variant"})})," ",e.jsxs(i.p,{children:["obbligatoria — il colore/significato dell'item: ",e.jsx("code",{children:"normal"}),", ",e.jsx("code",{children:"info"}),","," ",`
`,e.jsx("code",{children:"success"}),", ",e.jsx("code",{children:"warning"}),", ",e.jsx("code",{children:"error"}),`. Determina i colori di bordo,
sfondo della card, testo e dot.`]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"icon"})})," ",e.jsxs(i.p,{children:["obbligatoria — il componente icona, ad esempio un'icona di ",e.jsx("code",{children:"@mui/icons-material"}),`,
mostrato all'interno della card.`]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"title"})})," ",e.jsxs(i.p,{children:["obbligatoria — il titolo dell'item; accetta qualsiasi ",e.jsx("code",{children:"ReactNode"}),"."]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"children"})})," ",e.jsxs(i.p,{children:["— il corpo dell'item; accetta qualsiasi ",e.jsx("code",{children:"ReactNode"}),"."]})]})]})}),`
`,e.jsxs(t,{title:"Varianti",description:"MITimelineItem supporta cinque varianti, che ne definiscono colore e semantica.",children:[e.jsxs(n,{title:"Panoramica delle varianti",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"normal"})}),` — variante neutra, per gli step standard del flusso
con sfondo bianco e bordo grigio.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"info"})}),` — variante informativa, per comunicazioni neutre da
evidenziare.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"success"})})," — per esiti positivi e operazioni completate."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"warning"})})," — per situazioni che richiedono attenzione."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:e.jsx("code",{children:"error"})})," — per esiti negativi e operazioni fallite."]})})]}),e.jsx(r,{of:x})]}),e.jsx(n,{title:"Dot in evidenza",children:e.jsxs(i.p,{children:["Quando il ",e.jsx("strong",{children:"primo"})," item ha una variante diversa da ",e.jsx("code",{children:"normal"}),`, cioè una
variante feedback, il suo dot viene reso più grande e con un alone, per dare risalto allo stato
corrente in cima alla timeline. Gli altri dot restano piccoli e neutri.`]})})]}),`
`,e.jsxs(t,{title:"Contenuto",description:"Title e children accettano ReactNode, permettendo contenuti testuali, componenti e strutture più articolate.",children:[e.jsxs(n,{title:"Contenuto strutturato",children:[e.jsxs(i.p,{children:["Sia ",e.jsx("code",{children:"title"})," che ",e.jsx("code",{children:"children"})," accettano qualsiasi ",e.jsx("code",{children:"ReactNode"}),`: è
quindi possibile inserire testo formattato, liste, link o altri componenti all'interno del corpo
di ogni item.`]}),e.jsx(r,{of:j})]}),e.jsxs(n,{title:"Titolo personalizzato",children:[e.jsxs(i.p,{children:["Anche ",e.jsx("code",{children:"title"})," accetta qualsiasi ",e.jsx("code",{children:"ReactNode"}),`: oltre al testo è possibile
comporre elementi più ricchi, ad esempio affiancando un`," ",`
`,e.jsx("a",{href:"?path=/docs/components-tag--docs",children:"Tag"})," al testo del titolo."]}),e.jsx(r,{of:u})]})]}),`
`,e.jsxs(t,{title:"Accessibilità",description:"L’accessibilità finale dipende dal contenuto testuale passato agli item e dal modo in cui la timeline viene usata nel contesto dell’interfaccia.",children:[e.jsx(n,{title:"Icone decorative",children:e.jsxs(i.p,{children:["Le icone degli item sono di supporto visivo: assicurati che il ",e.jsx("code",{children:"title"}),` e il contenuto
comunichino già l'informazione in forma testuale, senza affidarti al solo colore della variante.`]})})," ",e.jsx(n,{title:"Significato non solo cromatico",children:e.jsxs(i.p,{children:["Le varianti, ad esempio ",e.jsx("code",{children:"success"})," o ",e.jsx("code",{children:"error"}),`, usano il colore per comunicare
lo stato: accompagna sempre il colore con un titolo e un'icona coerenti, così l'informazione resta
percepibile anche in caso di daltonismo o bassa visione.`]})}),e.jsx(n,{title:"Struttura coerente",children:e.jsx(i.p,{children:`Mantieni l'ordine cronologico/logico degli item nel markup, così che l'ordine di lettura degli
screen reader rispecchi la sequenza della timeline.`})})]})]})}function pe(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{pe as default};
