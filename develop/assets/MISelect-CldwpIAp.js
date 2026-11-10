import{j as e}from"./iframe-Do2iWwl6.js";import{u as a,M as s,T as c,P as p,b as d,S as r}from"./blocks-eMmzhpSY.js";import{O as m}from"./Overview-BBMYt_e3.js";import{S as o,a as n}from"./SubSection-CGJfwE5k.js";import{M as u,S as x,W as h,R as j,a as b,b as g}from"./MISelect.stories-CKmHKXEF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-NHoFLGkq.js";import"./index-CmeO_OfC.js";import"./Box-B0ffVq30.js";import"./Typography-CiPK09A-.js";import"./DefaultPropsProvider-Bbc_N8dw.js";import"./styled-DraHPSrp.js";import"./MIChip-Cg7PHBu8.js";import"./useTheme-D6XEe0y0.js";import"./CloseRounded-CYqvzr4d.js";import"./createSvgIcon-Ds57flxF.js";import"./SvgIcon-X6H-8jcg.js";import"./Chip-D-RNqnzs.js";import"./useForkRef-CTzFoPWU.js";import"./ButtonBase-BzG1LjfL.js";import"./TransitionGroupContext-dRzt1ax4.js";import"./MISelect-CDlL7AFp.js";import"./KeyboardArrowDown-BiuJEvlf.js";import"./Select-DlViq4ks.js";import"./Menu-BUmYGL1N.js";import"./useSlotProps-DXm84P3q.js";import"./resolveComponentProps-lqsoT0q7.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BC51vmns.js";import"./Grow-B9IQJKeu.js";import"./utils-D8T4Hx0W.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-rw7nwyL6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CHXDxYw6.js";import"./Backdrop-CxkwvrRg.js";import"./List-Dr3UVcUt.js";import"./Input-BuCdsE3u.js";import"./useFormControl-CEKNL213.js";import"./useControlled-BYPQNnls.js";import"./MIFormHelperText-CxI5n-M-.js";import"./FormControl-B0x00eN1.js";import"./isMuiElement-D9bzNPZZ.js";import"./FormHelperText-CmwurfC0.js";import"./MenuItem-b8cxDTnS.js";import"./listItemIconClasses-DoawQ5PD.js";import"./listItemTextClasses-BIlacF7u.js";import"./dividerClasses-DjWnIthi.js";import"./InputLabel-BYaApdWx.js";import"./FormLabel-DlkDr3fX.js";import"./InputAdornment-DusHENJR.js";import"./AccountBalance-B0RTKN6A.js";import"./Stack-DlN3oqzw.js";import"./createStack-Ju2NrDF9.js";import"./useThemeProps-tiOK56Gm.js";import"./ReportRounded-mRxmjfQz.js";function l(t){const i={code:"code",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:u}),`
`,e.jsx(c,{}),`
`,e.jsxs(m,{children:[e.jsxs(i.p,{children:[e.jsx("strong",{children:"MISelect"}),` e il wrapper del componente Select di MUI usato nel design system MUI
Italia. Mantiene il comportamento funzionale del Select MUI e applica personalizzazioni visive su
bordo e icona, con gestione dedicata degli stati focus ed errore.`]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i.p,{children:["Riferimento Figma:"," "]}),e.jsx("a",{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=602-7181&p=f&m=dev",target:"_blank",rel:"noreferrer",children:e.jsx(i.p,{children:"MUI Italia Next - Design System / MISelect"})}),e.jsx(i.p,{children:"."})]}),`
`,e.jsxs(o,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[e.jsx(p,{}),e.jsx(d,{})]}),`
`,e.jsx(o,{title:"Stati",description:"Panoramica degli stati piu comuni del componente: default, errore, disabilitato e sola lettura.",children:e.jsx(r,{of:x})}),`
`,e.jsx(o,{title:"Icona contestuale",description:"Icona decorativa a sinistra tramite la prop startAdornment di MUI Select, negli stati default ed errore.",children:e.jsx(r,{of:h})}),`
`,e.jsx(o,{title:"Campo obbligatorio",description:"Casi di campo obbligatorio: vuoto, valorizzato, in errore e disabilitato. Impostare required sia su MIFormControl (asterisco sulla label) sia su MISelect (validazione dell input nativo).",children:e.jsx(r,{of:j})}),`
`,e.jsx(o,{title:"Modalita di selezione",description:"MISelect supporta sia selezione singola sia selezione multipla tramite la prop multiple.",children:e.jsx(r,{of:b})}),`
`,e.jsx(o,{title:"Selezione multipla con chip rimovibili",description:"Icona contestuale, campo obbligatorio e valori selezionati come MIChip rimovibili, composti nella story tramite la prop renderValue di MISelect. Il click sul pulsante di rimozione aggiorna la selezione senza aprire il menu.",children:e.jsx(r,{of:g})}),`
`,e.jsxs(o,{title:"Accessibilita",description:"MISelect eredita la semantica combobox/listbox da MUI Select. L accessibilita finale dipende dalla corretta configurazione delle props testuali e del contesto FormControl.",children:[e.jsx(n,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"labelId"})," e ",e.jsx("strong",{children:"label"}),`: permettono l associazione con InputLabel
e contribuiscono al nome accessibile del campo.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"name"})," e ",e.jsx("strong",{children:"required"}),`: vengono inoltrate all input nativo
interno e supportano integrazione con form e validazione.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"error"}),": abilita lo stato di errore e imposta aria-invalid sull input nativo."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"readOnly"})," e ",e.jsx("strong",{children:"disabled"}),`: impediscono apertura/interazione del
menu secondo il comportamento verificato dai test.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"renderValue"}),`: inoltrata direttamente a MUI Select. MISelect non impone
alcuna visualizzazione predefinita per la modalita multipla: per mostrare i valori
selezionati come `,e.jsx("strong",{children:"MIChip"}),` rimovibili, componi tu stesso la funzione da
passare a renderValue (vedi la story `,e.jsx("em",{children:"Selezione multipla con chip rimovibili"}),")."]})})]})}),e.jsx(n,{title:"Prop non disponibili",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"native"}),`: non e esposta. MISelect resta su implementazione non nativa con menu
MUI.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MenuProps"}),": non e esposta nelle props pubbliche del wrapper."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"variant"})," e ",e.jsx("strong",{children:"size"}),`: non sono configurabili via API pubblica del
componente.`]})})]})}),e.jsx(n,{title:"Focus da tastiera",children:e.jsx(i.p,{children:`Lo stato di focus e visibile: il bordo e l icona passano a una colorazione dedicata quando il
componente riceve focus. Dai test risulta inoltre che il menu puo essere aperto da tastiera con
ArrowDown, ArrowUp, Enter e Space.`})}),e.jsx(n,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<FormControl fullWidth required error={hasError}>
  <InputLabel id="city-select-label">Citta</InputLabel>
  <MISelect
    labelId="city-select-label"
    label="Citta"
    name="city"
    value={city}
    onChange={handleCityChange}
    aria-describedby="city-select-helper"
  >
    <MenuItem value="rome">Roma</MenuItem>
    <MenuItem value="milan">Milano</MenuItem>
  </MISelect>
  <FormHelperText id="city-select-helper">
    {hasError ? 'Seleziona una citta valida' : 'Campo obbligatorio'}
  </FormHelperText>
</FormControl>
`})})})]})]})}function Se(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(l,{...t})}):l(t)}export{Se as default};
