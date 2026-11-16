import{j as e}from"./iframe-ByoTlC9Q.js";import{u as a,M as l,T as c,P as d,b as p,c as r}from"./blocks-DVXskUo_.js";import{O as m}from"./Overview-C2LHQgGY.js";import{S as t,a as n}from"./SubSection-Cq9esnce.js";import{M as h,W as x,L as j,a as u}from"./MITable.stories-BmrX8ez7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3HY6R9u.js";import"./index-C0xsyHpE.js";import"./Box-V9DN05zm.js";import"./Typography-BUFn3w4e.js";import"./DefaultPropsProvider-DGsnD8AD.js";import"./styled-1Q9tXkxe.js";import"./MIButton-CttAo4IM.js";import"./MISpinner-BybQ9Tuf.js";import"./CircularProgress-C6Z9k7it.js";import"./Skeleton-CaVhlPdy.js";import"./useTheme-ce18xD2I.js";import"./Button-DITFemx5.js";import"./ButtonBase-BEVN0AM_.js";import"./TransitionGroupContext-Ccv7Y6Ew.js";import"./useForkRef-DBOtKc3X.js";import"./MITable-CxVdj_hH.js";import"./MIDivider-DJOg-ckU.js";import"./Divider-DXDG9EUG.js";import"./dividerClasses-BOx9ErkM.js";import"./MIPagination-YIuUxsw6.js";import"./MISelect-6MRcf_gB.js";import"./KeyboardArrowDown-D_9At6LZ.js";import"./createSvgIcon-Ui3HqnD1.js";import"./SvgIcon-ZF511irs.js";import"./Select-DuryRfjp.js";import"./Menu-uGkA2taP.js";import"./useSlotProps-fCAmVprl.js";import"./resolveComponentProps-DFYKieea.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-VRsON9tn.js";import"./Grow-ZZgLPD9v.js";import"./utils-x3U2XCHh.js";import"./getReactElementRef-CP3g2otq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bvp72AYE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BC_yz0lI.js";import"./Backdrop-BHTk6LYe.js";import"./List-BFx_6zT2.js";import"./Input-B9z6BEeY.js";import"./useFormControl-BO0lhaAJ.js";import"./useControlled-BB-IPjV-.js";import"./Stack-BUBEZOaa.js";import"./createStack-DJUqnC-m.js";import"./useThemeProps-bqWK05tC.js";import"./MenuItem-ijjRCDmu.js";import"./listItemIconClasses-96msDJtp.js";import"./listItemTextClasses-putxnxWC.js";import"./Pagination-DNHuWHpM.js";import"./MIChip-grFjiEVg.js";import"./CloseRounded-rZMLMKba.js";import"./Chip-DuBNlujc.js";import"./IconButton-wVNElDEc.js";function s(o){const i={a:"a",code:"code",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(c,{}),`
`,e.jsx(m,{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"MITable"}),` visualizza dati strutturati in righe e colonne, adattando il layout al
breakpoint: su desktop usa una tabella, mentre su mobile presenta ogni riga come coppie
intestazione/valore. Le colonne possono includere intestazioni ordinabili, con la logica di
ordinamento gestita dal consumatore; sono inoltre disponibili azioni per riga e paginazione
opzionale.`]})}),`
`,e.jsx(t,{title:"Riferimenti",description:"Specifiche usate per l'implementazione del componente.",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[`🎨
`,e.jsx(i.a,{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=1344-42521&m=dev",rel:"nofollow",children:"Desktop"})]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[`🎨
`,e.jsx(i.a,{href:"https://www.figma.com/design/pvhsJpPGQbEwNLiyP7BOIw/MUI-Italia-Next---Design-System?node-id=1359-30426&m=dev",rel:"nofollow",children:"Mobile"})]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[`Source:
`,e.jsx(i.a,{href:"https://github.com/pagopa/mui-italia/blob/main/src/components/MITable/MITable.tsx",rel:"nofollow",children:"MITable.tsx"})]})})]})}),`
`,e.jsxs(t,{title:"Playground",description:"Usa i controlli per attivare il caricamento e mostrare o nascondere la paginazione.",children:[e.jsx(d,{}),e.jsx(p,{})]}),`
`,e.jsxs(t,{title:"Ordinamento e azioni",description:"Le colonne possono essere marcate come ordinabili e ogni riga può esporre azioni custom.",children:[e.jsxs(n,{title:"Intestazioni ordinabili",children:[e.jsxs(i.p,{children:[`Le colonne con sortable attivo mostrano il controllo di ordinamento. La logica di sorting
resta responsabilità del consumatore e può essere gestita tramite la prop `,e.jsx("code",{children:"onSort"}),`
delle colonne.`]}),e.jsxs(i.p,{children:["Se ",e.jsx("code",{children:"sortable"})," è ",e.jsx("code",{children:"true"}),`, l’icona di sorting è mostrata in stato attivo.
Per annunciare la direzione corrente ai lettori di schermo è necessario valorizzare
esplicitamente `,e.jsx("code",{children:"sortDirection"})," con ",e.jsx("code",{children:"asc"})," o ",e.jsx("code",{children:"desc"}),` sulla colonna
attualmente ordinata.`]})]}),e.jsxs(n,{title:"Righe senza azioni",children:[e.jsx(i.p,{children:"Le action di riga sono opzionali."}),e.jsx(r,{of:x})]})]}),`
`,e.jsxs(t,{title:"Caricamento",description:"Usa isLoading durante il caricamento iniziale o l'aggiornamento dei dati.",children:[e.jsxs(i.p,{children:["La prop ",e.jsx("code",{children:"isLoading"})," (predefinita a ",e.jsx("code",{children:"false"}),`) mostra 10 righe skeleton,
indipendentemente da `,e.jsx("code",{children:"rows"}),` e dalla paginazione, tramite il componente interno
`,e.jsx("code",{children:"MITableSkeleton"}),`. Il layout si adatta a desktop e mobile; intestazioni e
paginazione restano visibili. Durante il caricamento non vengono chiamati
`,e.jsx("code",{children:"renderCell"})," e ",e.jsx("code",{children:"getRowId"}),"."]}),e.jsxs(i.p,{children:["La tabella desktop e il contenitore mobile espongono ",e.jsx("code",{children:'aria-busy="true"'}),`,
mentre i placeholder sono nascosti alle tecnologie assistive.
Il nome accessibile resta configurabile tramite `,e.jsx("code",{children:"desktopTableProps"})," e ",e.jsx("code",{children:"mobileTableProps"}),", come nella story seguente."]}),e.jsx(r,{of:j}),e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<MITable
  columns={columns}
  rows={rows}
  isLoading={isLoading}
  desktopTableProps={{ 'aria-label': 'Transazioni' }}
  mobileTableProps={{ 'aria-label': 'Transazioni' }}
/>
`})})]}),`
`,e.jsxs(t,{title:"Paginazione",description:"La paginazione è opzionale e integra il componente MIPagination.",children:[e.jsx(n,{title:"Con paginazione",children:e.jsxs(i.p,{children:["Quando è presente la prop ",e.jsx("code",{children:"pagination"}),`, MITable mostra il pager in coda. Il selettore righe per
pagina è opzionale e può essere configurato tramite `,e.jsx("code",{children:"itemsPerPageOptions"}),"."]})}),e.jsxs(n,{title:"Senza paginazione",children:[e.jsxs(i.p,{children:["Se la prop ",e.jsx("code",{children:"pagination"})," non viene passata, la tabella mostra solo intestazioni e righe dati."]}),e.jsx(r,{of:u})]})]}),`
`,e.jsxs(t,{title:"Accessibilità",description:"L’accessibilità finale dipende dalla configurazione di label e azioni fornite dal consumatore.",children:[e.jsx(n,{title:"Props rilevanti",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"rows"}),": array dei dati da mostrare. Ogni elemento viene passato a"," ",`
`,e.jsx("code",{children:"renderCell"}),` delle colonne. Con un array vuoto vengono mostrate solo le
intestazioni, salvo quando `,e.jsx("code",{children:"isLoading"})," è attivo."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"isLoading"}),`: mostra 10 righe skeleton ed espone lo stato
`,e.jsx("code",{children:"aria-busy"})," sul layout attivo. I placeholder non vengono annunciati."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"getRowId"}),`: restituisce un identificativo stabile e univoco per riga, usato
come `,e.jsx("code",{children:"key"}),` React e per gli id delle label mobile. Se omessa si usa l’indice, che
è sconsigliato quando le righe possono essere riordinate o paginate.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"containerProps"}),`: permette di passare attributi HTML/ARIA al contenitore
esterno del componente (ad esempio `,e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"className"}),`,
`,e.jsx("code",{children:"aria-labelledby"}),")."]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"desktopTableProps"})," e ",e.jsx("strong",{children:"mobileTableProps"}),`: permettono di
assegnare attributi distinti all’elemento `,e.jsx("code",{children:"table"}),` desktop e all’equivalente
mobile, inclusi i riferimenti per il nome accessibile.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"isAction"}),` sulle colonne: i contenuti interattivi delle colonne azione devono
avere un nome accessibile appropriato, specialmente nei casi icon-only.`]})}),e.jsx("li",{children:e.jsxs(i.p,{children:[e.jsx("strong",{children:"renderCell"}),` su ciascuna colonna: in layout mobile il contenuto mostrato è
interamente responsabilità del consumatore, inclusi eventuali label testuali o icone
aggiuntive.`]})})]})}),e.jsx(n,{title:"Semantica",children:e.jsxs(i.p,{children:[`In desktop MITable usa elementi nativi table, thead, tbody, tr e td. In mobile il layout è a
blocchi, quindi la comprensione dipende dal contenuto reso in `,e.jsx("code",{children:"renderCell"}),"."]})}),e.jsx(n,{title:"Esempio accessibile",children:e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const rows = [{ id: '1', status: 'Completed' }];

<MITable
  columns={[
    {
      id: 'status',
      header: 'Status',
      renderCell: (row) => row.status,
    },
    {
      id: 'actions',
      header: '',
      isAction: true,
      renderCell: (row) => (
        <IconButton aria-label={\`Open row actions for \${row.id}\`}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ]}
  getRowId={(row) => row.id}
  rows={rows}
  pagination={{
    count: 10,
    page: 1,
    onChange: () => {},
    itemsPerPageOptions: {
      options: [10, 24, 36],
      limit: 10,
      onLimitChange: () => {},
    },
  }}
/>
`})})})]})]})}function Me(o={}){const{wrapper:i}={...a(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{Me as default};
