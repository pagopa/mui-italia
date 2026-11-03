import{j as e}from"./iframe--Veu_H0i.js";import{u as l,M as a,T as c,P as d,b as m,S as r}from"./blocks-BxM2Zhts.js";import{O as p}from"./Overview-BFXH5XLz.js";import{S as t,a as n}from"./SubSection-B1-m50sR.js";import{M as h,V as x,R as j,C as u}from"./MITimeline.stories-3PeU9rFs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./Box-DntunhcH.js";import"./Typography-DTg26sul.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./styled-CSprtNKk.js";import"./MITimeline-Dap5QFTK.js";import"./children.utility-Blrif1qd.js";import"./MIPaper-CJEq-eXj.js";import"./Paper-DFJr4nZJ.js";import"./TimelineSeparator-pE5wb2Ud.js";import"./useThemeProps-DzaPqtFc.js";import"./useThemeProps-Yc7VDqz2.js";import"./isMuiElement-ottGROSV.js";import"./useTheme-CfF9d9rw.js";import"./createStack-CtTbzIgR.js";import"./Tag-BleE56RJ.js";import"./MITooltip-Dq4V2VMz.js";import"./ClickAwayListener-Bt_endzG.js";import"./useForkRef-BylnVgws.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DT3BT9g5.js";import"./Grow-BL3mP394.js";import"./useControlled-NqxH3zvr.js";import"./resolveComponentProps-DBw8yxvm.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Dh99vMcU.js";import"./Portal-DfWvea1R.js";import"./useSlotProps-C-enEAQe.js";import"./InfoRounded-C3GFEUp4.js";import"./createSvgIcon-CpLUNxU5.js";import"./SvgIcon-BVB0onhD.js";import"./ReportRounded-CKvFCXgg.js";import"./CheckCircleRounded-35t4fl-J.js";import"./useSlot-C5NXWzB0.js";import"./Collapse-DuhSI-90.js";import"./ButtonBase-B0hIrA6B.js";import"./MailOutline--RFbnbdP.js";import"./Warning-DEtNc-BO.js";import"./Error-CVsnk4sp.js";import"./Search-Cm8jP4HK.js";function s(o){const i={code:"code",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
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
