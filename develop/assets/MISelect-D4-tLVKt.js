import{j as e}from"./iframe-DLqg6HX8.js";import{u as a,M as s,T as c,P as p,b as m,S as r}from"./blocks-DKLkZ-Va.js";import{O as d}from"./Overview-L4fYm0bl.js";import{S as o,a as n}from"./SubSection-BB7eD7qa.js";import{M as u,S as x,W as h,R as j,a as b,b as g}from"./MISelect.stories-KzC7J8b3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./Box-nEvwrt3A.js";import"./Typography-B2s-Ogo4.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./styled-BxDKlw5F.js";import"./MIChip-DdC79h3q.js";import"./useTheme-B4I3gTml.js";import"./CloseRounded-rgp4WH5j.js";import"./createSvgIcon-ByJkEFeY.js";import"./SvgIcon-CvcryhUT.js";import"./Chip-BYOh5I77.js";import"./useForkRef-QQIssf4j.js";import"./ButtonBase-ChpoghoR.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./MISelect-CUm_KXzj.js";import"./KeyboardArrowDown-BjMrA6CL.js";import"./Select-CUgGrTWv.js";import"./Menu-BPwQNkMP.js";import"./useSlotProps-qdPkKgV-.js";import"./resolveComponentProps-DL8-z4ZK.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-j_zfQP1o.js";import"./Grow-CMZG1PpA.js";import"./utils-BL_otCjh.js";import"./getReactElementRef-B76VvR63.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BLDyGXR8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-qD7zO2ig.js";import"./Backdrop-BPTkEcRC.js";import"./List-DsQxTWek.js";import"./Input-wtZaqd55.js";import"./useFormControl-Cw-ljw42.js";import"./useControlled-DsPdphLt.js";import"./MIFormHelperText-3rkof0QV.js";import"./FormControl-BSbuIIbt.js";import"./isMuiElement-DeBicXFn.js";import"./FormHelperText-DZcbtuK_.js";import"./MenuItem-BchdGVOu.js";import"./listItemIconClasses-Cb35rUR2.js";import"./listItemTextClasses-DbWviVHK.js";import"./dividerClasses-gDvId7dV.js";import"./InputLabel-GHd_e8v_.js";import"./FormLabel-CAYJn07X.js";import"./InputAdornment-Bup65MJm.js";import"./AccountBalance-BLCRVEgC.js";import"./Stack-HIKfxa6A.js";import"./createStack-BfPdT95z.js";import"./useThemeProps-DzmpdBgt.js";import"./ReportRounded-CydRpYo4.js";function l(t){const i={code:"code",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:u}),`
`,e.jsx(c,{}),`
`,e.jsxs(d,{children:[e.jsxs(i.p,{children:[e.jsx("strong",{children:"MISelect"}),` e il wrapper del componente Select di MUI usato nel design system MUI
Italia. Mantiene il comportamento funzionale del Select MUI e applica personalizzazioni visive su
bordo e icona, con gestione dedicata degli stati focus ed errore.`]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i.p,{children:["Riferimento Figma:"," "]}),e.jsx("a",{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=602-7181&p=f&m=dev",target:"_blank",rel:"noreferrer",children:e.jsx(i.p,{children:"MUI Italia Next - Design System / MISelect"})}),e.jsx(i.p,{children:"."})]}),`
`,e.jsxs(o,{title:"Playground",description:"Usa i controlli per modificare i parametri principali del componente e verificare il risultato live.",children:[e.jsx(p,{}),e.jsx(m,{})]}),`
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
`})})})]})]})}function ze(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(l,{...t})}):l(t)}export{ze as default};
