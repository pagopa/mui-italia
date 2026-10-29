import{j as e}from"./iframe-rw-T87Ps.js";import{u as a,M as s,T as c,P as p,b as d,S as r}from"./blocks-BCoOsg7x.js";import{O as m}from"./Overview-BhSzF-Fz.js";import{S as o,a as n}from"./SubSection-C6OUYVrI.js";import{M as u,S as x,W as h,R as j,a as b,b as g}from"./MISelect.stories-p6991KVx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./Box-DnbZxXxU.js";import"./Typography-DIxyHfgM.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./styled-BbRqDVtB.js";import"./MIChip-Ca9xJI5E.js";import"./useTheme-xu0WuyZg.js";import"./CloseRounded-CT80vTkK.js";import"./createSvgIcon-BLI2zqKg.js";import"./SvgIcon-BqyspOV3.js";import"./Chip-DG7bXvP3.js";import"./useForkRef-D1JMp28z.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./MISelect-Clfw5wiK.js";import"./KeyboardArrowDown-DdHcvxAd.js";import"./Select-WbVM1ffa.js";import"./Menu-DZdFlM9J.js";import"./useSlotProps-BJPoFs7q.js";import"./resolveComponentProps-D4UfrecV.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-6XyShZCf.js";import"./Grow-DhIkgxjk.js";import"./utils-z-7-CUm-.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-AHzXhWNy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cl8VqIp1.js";import"./Backdrop-DnG8wF6D.js";import"./List-DZ2vjiji.js";import"./Input-CEWQeC3A.js";import"./useFormControl-BGFJEerR.js";import"./useControlled-Bvt6qr0H.js";import"./MIFormHelperText-CUR0eGSB.js";import"./FormControl-OseXVL7b.js";import"./isMuiElement-l98Asye0.js";import"./FormHelperText-mNKgTmOq.js";import"./MenuItem-0tj72G9H.js";import"./listItemIconClasses-Bd-0zwWc.js";import"./listItemTextClasses-DOtnDyuQ.js";import"./dividerClasses-DeGQ0NEE.js";import"./InputLabel-H26RyKpP.js";import"./FormLabel-CsDAbzr7.js";import"./InputAdornment-Cuyj-fve.js";import"./AccountBalance-C1zHMgGS.js";import"./Stack-DK8xaQOE.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";import"./ReportRounded-Bjw5Cl-M.js";function l(t){const i={code:"code",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:u}),`
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
