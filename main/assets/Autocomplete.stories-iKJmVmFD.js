import{j as o,t as y,B as C}from"./iframe-CDfDAPFk.js";import{A as v}from"./Autocomplete--FDieTFG.js";import{c as E}from"./createSvgIcon-BbEuUIJp.js";import{S as k}from"./Stack-CQ_WFl_6.js";import{W as O}from"./Warning-DZLym8qO.js";import{T as z}from"./Typography-9AQN7ayB.js";import{B as T}from"./Button-BiDoaYB9.js";import{S as I}from"./Skeleton-BfoFEhTd.js";import"./preload-helper-PPVm8Dsz.js";import"./MIChip-Bt7UmFNO.js";import"./useTheme-DDUJVjwp.js";import"./styled-tN4ayshy.js";import"./CloseRounded-DOrT6e2I.js";import"./Chip-9dZu1vg8.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./useForkRef-CNIqWbEd.js";import"./ButtonBase-WCmC4j5j.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./MIIconButton-DMY-qyHU.js";import"./IconButton-DOwcjJRH.js";import"./TextField-Czy0xFUT.js";import"./Select-CYIAKy0K.js";import"./Menu-DPvdoFAj.js";import"./useSlotProps-DkUD6T-O.js";import"./resolveComponentProps-DNhtxahT.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BtnOIDKN.js";import"./Grow-DkYaE8Oe.js";import"./utils-DcX_SmDN.js";import"./index-Bnc84QHD.js";import"./index-D3KWgPQG.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CJkEYfHL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-al-BQE5u.js";import"./Backdrop-UssTTFwn.js";import"./List-DxGWxlc4.js";import"./Input-CF-Ln0l0.js";import"./useFormControl-Ci-4e5y_.js";import"./useControlled-ZAw3sqd0.js";import"./InputLabel-jBzNxcnV.js";import"./FormLabel-DIGu85nT.js";import"./FormHelperText-CdXYq3-5.js";import"./FormControl-Cmls20Q5.js";import"./isMuiElement-BK0PQ6RV.js";import"./InputAdornment-Bx9agOcp.js";import"./Close-Cs4lez93.js";import"./ReportRounded-mACyuGCy.js";import"./CheckCircleRounded-C2a5K20z.js";import"./ListItem-B37JlzxU.js";import"./listItemButtonClasses-k3ZiLgfl.js";import"./ListItemButton-ivxZ09tC.js";import"./ListItemText-DJwzSzCS.js";import"./listItemTextClasses-BKzTzadW.js";import"./SwitchBase-DYcLFI22.js";import"./Popper-BIyMpkmr.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowDown-CC9M-l8K.js";import"./SvgIcon-C-yBIyJ3.js";import"./createStack-D3UHGSp-.js";import"./useThemeProps-DVJ-9e3j.js";const f=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),j=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),Fe={title:"Components/Autocomplete",component:v,parameters:{layout:"centered",docs:{description:{component:"A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features."}}},args:{onInputChange:()=>{},onChange:()=>{}},decorators:[e=>o.jsx(C,{sx:{width:{lg:400,xs:300}},children:o.jsx(e,{})})]},t=[{id:1,label:"Milano"},{id:2,label:"Verona"},{id:3,label:"Roma"},{id:4,label:"Firenze"},{id:5,label:"Venezia"},{id:6,label:"Torino"},{id:7,label:"Bologna"},{id:8,label:"Genova"},{id:9,label:"Napoli"},{id:10,label:"Palermo"}],W=()=>o.jsx(C,{sx:{p:2},children:[1,2,3].map(e=>o.jsx(I,{height:40,sx:{mb:1}},e))}),r={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città..."}},n={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città...",slots:{startIcon:f}}},i={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},l={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id,slots:{startIcon:f}}},s={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,showSelectionCountOnly:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},c={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",slotProps:{toggleButton:{hidden:!0}}}},p={args:{options:t,label:"Seleziona una città",placeholder:"Campo disabilitato",disabled:!0}},m={args:{options:t,label:"Seleziona una città",placeholder:"Campo obbligatorio",required:!0}},u={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0}},d={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0,slots:{loadingSkeleton:W}}},g={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato"}},S={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",renderOption:e=>o.jsxs(C,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(j,{fontSize:"small",color:"action"}),o.jsx(z,{variant:"body1",children:e.label})]})}},h={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",error:!0,helperText:"Campo obbligatorio"}},x={args:{options:[{key:1,value:"Italia"},{key:2,value:"Francia"},{key:3,value:"UK"},{key:4,value:"Germania"}],label:"Seleziona una nazione",placeholder:"Cerca...",multiple:!0,getOptionLabel:e=>e.value,isOptionEqualToValue:(e,a)=>e.key===a.key}},b={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato",slots:{emptyState:()=>o.jsxs(k,{spacing:1,alignItems:"center",textAlign:"center",sx:{backgroundColor:y.palette.background.default,py:3},children:[o.jsx(O,{sx:{color:y.palette.decorativeIcon}}),o.jsx(z,{fontWeight:600,fontSize:"1.125rem",color:"textSecondary",children:"Il caricamento delle città è fallito"}),o.jsx(z,{color:"textSecondary",variant:"body1",fontSize:"16px",fontWeight:400,children:o.jsx(T,{onClick:e=>e.stopPropagation(),children:"Prova di nuovo"})})]})}}},Ne=["Default","WithStartIcon","MultiSelect","MultiSelectWithIcon","MultiSelectCountChip","NoArrow","Disabled","Required","Loading","CustomLoading","CustomNoResults","CustomRenderOption","WithError","WithCustomOptions","CustomEmptyState"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};export{b as CustomEmptyState,d as CustomLoading,g as CustomNoResults,S as CustomRenderOption,r as Default,p as Disabled,u as Loading,i as MultiSelect,s as MultiSelectCountChip,l as MultiSelectWithIcon,c as NoArrow,m as Required,x as WithCustomOptions,h as WithError,n as WithStartIcon,Ne as __namedExportsOrder,Fe as default};
