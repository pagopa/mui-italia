import{j as o,t as y,B as C}from"./iframe-UeoK4583.js";import{A as v}from"./Autocomplete-BA4AvlHH.js";import{c as E}from"./createSvgIcon-BDmnSp2b.js";import{S as k}from"./Stack-BTEqUilJ.js";import{W as O}from"./Warning-BzF2xI9H.js";import{T as z}from"./Typography-YbG83az4.js";import{B as T}from"./Button-D0Khv6Ir.js";import{S as I}from"./Skeleton-Cm2_8HjL.js";import"./preload-helper-PPVm8Dsz.js";import"./MIChip-CazxKCk3.js";import"./useTheme-Co2ufE29.js";import"./styled-CvWxMvRN.js";import"./CloseRounded-CXgAMn9Q.js";import"./Chip-DSThNasN.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./useForkRef-BhHiLiTZ.js";import"./ButtonBase-DADYQYz3.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./MITextField-FHezK89R.js";import"./SwitchBase-BvSQfQuZ.js";import"./useFormControl-BJZ2WbIo.js";import"./useControlled-BCpt8X85.js";import"./MIIconButton-m0DJktCD.js";import"./IconButton-D4oACqWA.js";import"./TextField-Cq_EExY7.js";import"./Select-BqYsNTV4.js";import"./Menu-Dprvt6bz.js";import"./useSlotProps-BZSRsv06.js";import"./resolveComponentProps-Wl6qOvm4.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BDZ3FE86.js";import"./Grow-BkOU8FEv.js";import"./utils-C24Gt4bt.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./getReactElementRef-CUTSO03e.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BNfV-xR1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CV74gxTU.js";import"./Backdrop-DO2_7rty.js";import"./List-DygjksvE.js";import"./Input-CkFx1qf7.js";import"./InputLabel-BxOiFRzG.js";import"./FormLabel-BmcqU_Z8.js";import"./FormHelperText-g-lONFYs.js";import"./FormControl-B5VxrqDK.js";import"./isMuiElement-CoRd3jIJ.js";import"./InputAdornment-4cSMEEFO.js";import"./Close-aewMLM9M.js";import"./ReportRounded-B2ykWDSy.js";import"./CheckCircleRounded-HI8stX5i.js";import"./ListItem-B2ebdu-v.js";import"./listItemButtonClasses-CFjqD4lP.js";import"./ListItemButton-DECDyFtp.js";import"./ListItemText-DR25ukrS.js";import"./listItemTextClasses-Duzsm0Dz.js";import"./Popper-DbFwpgr2.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowDown-DZCYgTZ2.js";import"./SvgIcon-CnC7-k0D.js";import"./createStack-Bfosn5Ob.js";import"./useThemeProps-BqxHGDEW.js";const f=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),j=E(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),De={title:"Components/Autocomplete",component:v,parameters:{layout:"centered",docs:{description:{component:"A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features."}}},args:{onInputChange:()=>{},onChange:()=>{}},decorators:[e=>o.jsx(C,{sx:{width:{lg:400,xs:300}},children:o.jsx(e,{})})]},t=[{id:1,label:"Milano"},{id:2,label:"Verona"},{id:3,label:"Roma"},{id:4,label:"Firenze"},{id:5,label:"Venezia"},{id:6,label:"Torino"},{id:7,label:"Bologna"},{id:8,label:"Genova"},{id:9,label:"Napoli"},{id:10,label:"Palermo"}],W=()=>o.jsx(C,{sx:{p:2},children:[1,2,3].map(e=>o.jsx(I,{height:40,sx:{mb:1}},e))}),r={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città..."}},n={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città...",slots:{startIcon:f}}},i={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},l={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id,slots:{startIcon:f}}},s={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,showSelectionCountOnly:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},c={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",slotProps:{toggleButton:{hidden:!0}}}},p={args:{options:t,label:"Seleziona una città",placeholder:"Campo disabilitato",disabled:!0}},m={args:{options:t,label:"Seleziona una città",placeholder:"Campo obbligatorio",required:!0}},u={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0}},d={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0,slots:{loadingSkeleton:W}}},g={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato"}},S={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",renderOption:e=>o.jsxs(C,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(j,{fontSize:"small",color:"action"}),o.jsx(z,{variant:"body1",children:e.label})]})}},h={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",error:!0,helperText:"Campo obbligatorio"}},x={args:{options:[{key:1,value:"Italia"},{key:2,value:"Francia"},{key:3,value:"UK"},{key:4,value:"Germania"}],label:"Seleziona una nazione",placeholder:"Cerca...",multiple:!0,getOptionLabel:e=>e.value,isOptionEqualToValue:(e,a)=>e.key===a.key}},b={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato",slots:{emptyState:()=>o.jsxs(k,{spacing:1,alignItems:"center",textAlign:"center",sx:{backgroundColor:y.palette.background.default,py:3},children:[o.jsx(O,{sx:{color:y.palette.decorativeIcon}}),o.jsx(z,{fontWeight:600,fontSize:"1.125rem",color:"textSecondary",children:"Il caricamento delle città è fallito"}),o.jsx(z,{color:"textSecondary",variant:"body1",fontSize:"16px",fontWeight:400,children:o.jsx(T,{onClick:e=>e.stopPropagation(),children:"Prova di nuovo"})})]})}}},Ge=["Default","WithStartIcon","MultiSelect","MultiSelectWithIcon","MultiSelectCountChip","NoArrow","Disabled","Required","Loading","CustomLoading","CustomNoResults","CustomRenderOption","WithError","WithCustomOptions","CustomEmptyState"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
