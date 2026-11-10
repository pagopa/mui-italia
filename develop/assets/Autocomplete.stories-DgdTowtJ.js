import{j as o,t as y,B as C}from"./iframe-DqKsui2S.js";import{A as v}from"./Autocomplete-YKdkK_DX.js";import{c as E}from"./createSvgIcon-bbdnzGJh.js";import{S as k}from"./Stack-BNTagQR0.js";import{W as O}from"./Warning-V-cWCwvE.js";import{T as z}from"./Typography-DaPIykBW.js";import{B as T}from"./Button-BmaoHrVN.js";import{S as I}from"./Skeleton-DdjaWehV.js";import"./preload-helper-PPVm8Dsz.js";import"./MIChip-BJGu-AOa.js";import"./useTheme-D3Y4xEPH.js";import"./styled-Df695Bk_.js";import"./CloseRounded-C2vPQ9Tx.js";import"./Chip-Cm6usiCt.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./useForkRef-CLmtxq_Y.js";import"./ButtonBase-BDS4PFr6.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./MITextField-BZf8--Y2.js";import"./SwitchBase-B-I-cS-f.js";import"./useFormControl-CP0Cwkvd.js";import"./useControlled-D38WY-ee.js";import"./MIIconButton-Bmcj_7bH.js";import"./IconButton-UIUEOpXy.js";import"./TextField--tooa2xv.js";import"./Select-jTOn1qMO.js";import"./Menu-CFYCK8DL.js";import"./useSlotProps-D5tRl93H.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-C1twuA-f.js";import"./Grow-DmB0QswF.js";import"./utils-CWuA1miZ.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./getReactElementRef-D1eMIxFv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-DTq_ULZW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D_iRFePj.js";import"./Backdrop-BctZ34jH.js";import"./List-Ce3OYsrG.js";import"./Input-B4eCjRaN.js";import"./InputLabel-DuTsqXsh.js";import"./FormLabel-DmA4mSrN.js";import"./FormHelperText-BCRjBEbB.js";import"./FormControl-C_ACAn6y.js";import"./isMuiElement-BRsrh61f.js";import"./InputAdornment-DhEK64CY.js";import"./Close-DcdvIBM-.js";import"./ReportRounded-D1KaQaKz.js";import"./CheckCircleRounded-C1HdPW6D.js";import"./ListItem-B9Ix7YtY.js";import"./listItemButtonClasses-jq2IFFVM.js";import"./ListItemButton-J4C0E2sX.js";import"./ListItemText-DTczOWTP.js";import"./listItemTextClasses-Bzrbunrh.js";import"./Popper-B9n-3G_q.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowDown-DMA5jUwQ.js";import"./SvgIcon-DZqMrxle.js";import"./createStack-CqPDIsXo.js";import"./useThemeProps-BkF6htZ6.js";const f=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),j=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),De={title:"Components/Autocomplete",component:v,parameters:{layout:"centered",docs:{description:{component:"A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features."}}},args:{onInputChange:()=>{},onChange:()=>{}},decorators:[e=>o.jsx(C,{sx:{width:{lg:400,xs:300}},children:o.jsx(e,{})})]},t=[{id:1,label:"Milano"},{id:2,label:"Verona"},{id:3,label:"Roma"},{id:4,label:"Firenze"},{id:5,label:"Venezia"},{id:6,label:"Torino"},{id:7,label:"Bologna"},{id:8,label:"Genova"},{id:9,label:"Napoli"},{id:10,label:"Palermo"}],W=()=>o.jsx(C,{sx:{p:2},children:[1,2,3].map(e=>o.jsx(I,{height:40,sx:{mb:1}},e))}),r={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città..."}},n={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città...",slots:{startIcon:f}}},i={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},l={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id,slots:{startIcon:f}}},s={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,showSelectionCountOnly:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},c={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",slotProps:{toggleButton:{hidden:!0}}}},p={args:{options:t,label:"Seleziona una città",placeholder:"Campo disabilitato",disabled:!0}},m={args:{options:t,label:"Seleziona una città",placeholder:"Campo obbligatorio",required:!0}},u={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0}},d={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0,slots:{loadingSkeleton:W}}},g={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato"}},S={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",renderOption:e=>o.jsxs(C,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(j,{fontSize:"small",color:"action"}),o.jsx(z,{variant:"body1",children:e.label})]})}},h={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",error:!0,helperText:"Campo obbligatorio"}},x={args:{options:[{key:1,value:"Italia"},{key:2,value:"Francia"},{key:3,value:"UK"},{key:4,value:"Germania"}],label:"Seleziona una nazione",placeholder:"Cerca...",multiple:!0,getOptionLabel:e=>e.value,isOptionEqualToValue:(e,a)=>e.key===a.key}},b={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato",slots:{emptyState:()=>o.jsxs(k,{spacing:1,alignItems:"center",textAlign:"center",sx:{backgroundColor:y.palette.background.default,py:3},children:[o.jsx(O,{sx:{color:y.palette.decorativeIcon}}),o.jsx(z,{fontWeight:600,fontSize:"1.125rem",color:"textSecondary",children:"Il caricamento delle città è fallito"}),o.jsx(z,{color:"textSecondary",variant:"body1",fontSize:"16px",fontWeight:400,children:o.jsx(T,{onClick:e=>e.stopPropagation(),children:"Prova di nuovo"})})]})}}},Ge=["Default","WithStartIcon","MultiSelect","MultiSelectWithIcon","MultiSelectCountChip","NoArrow","Disabled","Required","Loading","CustomLoading","CustomNoResults","CustomRenderOption","WithError","WithCustomOptions","CustomEmptyState"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
    slots: {
      startIcon: LocationOn
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    isOptionEqualToValue: (option, value) => option.id === value.id
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    isOptionEqualToValue: (option, value) => option.id === value.id,
    slots: {
      startIcon: LocationOn
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    showSelectionCountOnly: true,
    isOptionEqualToValue: (option, value) => option.id === value.id
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    slotProps: {
      toggleButton: {
        hidden: true
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo disabilitato',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo obbligatorio',
    required: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Caricamento...',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Caricamento...',
    loading: true,
    slots: {
      loadingSkeleton: CustomLoadingSkeleton
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    noResultsText: 'Esempio di testo personalizzato per nessun risultato'
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    renderOption: (option: City) => <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }}>
        <Place fontSize="small" color="action" />
        <Typography variant="body1">{option.label}</Typography>
      </Box>
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    error: true,
    helperText: 'Campo obbligatorio'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      key: 1,
      value: 'Italia'
    }, {
      key: 2,
      value: 'Francia'
    }, {
      key: 3,
      value: 'UK'
    }, {
      key: 4,
      value: 'Germania'
    }],
    label: 'Seleziona una nazione',
    placeholder: 'Cerca...',
    multiple: true,
    getOptionLabel: option => option.value,
    isOptionEqualToValue: (option, value) => option.key === value.key
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    label: 'Seleziona una città',
    placeholder: 'Cerca...',
    noResultsText: 'Esempio di testo personalizzato per nessun risultato',
    slots: {
      emptyState: () => <Stack spacing={1} alignItems="center" textAlign="center" sx={{
        backgroundColor: theme.palette.background.default,
        py: 3
      }}>
          <Warning sx={{
          color: theme.palette.decorativeIcon
        }} />
          <Typography fontWeight={600} fontSize="1.125rem" color="textSecondary">
            Il caricamento delle città è fallito
          </Typography>
          <Typography color="textSecondary" variant="body1" fontSize="16px" fontWeight={400}>
            <Button onClick={e => e.stopPropagation()}>Prova di nuovo</Button>
          </Typography>
        </Stack>
    }
  }
}`,...b.parameters?.docs?.source}}};export{b as CustomEmptyState,d as CustomLoading,g as CustomNoResults,S as CustomRenderOption,r as Default,p as Disabled,u as Loading,i as MultiSelect,s as MultiSelectCountChip,l as MultiSelectWithIcon,c as NoArrow,m as Required,x as WithCustomOptions,h as WithError,n as WithStartIcon,Ge as __namedExportsOrder,De as default};
