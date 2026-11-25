import{j as o,t as y,B as C}from"./iframe-6MQXqINC.js";import{A as f}from"./Autocomplete-DgbkOf_U.js";import{L as E}from"./LocationOn-DXVSAAiO.js";import{S as v}from"./Stack-pgcfqz6O.js";import{W as k}from"./Warning-BawN8Ph9.js";import{T as z}from"./Typography-C7bhwkwa.js";import{B as T}from"./Button-dlB2ry0u.js";import{S as O}from"./Skeleton-Dli97edl.js";import{c as I}from"./createSvgIcon-DyGXVuQl.js";import"./preload-helper-PPVm8Dsz.js";import"./MIChip-7x9u9-Rn.js";import"./useTheme-CT6pqya3.js";import"./styled-CKtE3LBS.js";import"./CloseRounded-GL_zD5Am.js";import"./Chip-BR9y8VzM.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./useForkRef-yWUxwg9H.js";import"./ButtonBase-BspQdHa2.js";import"./TransitionGroupContext-ChxoeE96.js";import"./MITextField-M5WFglQV.js";import"./MIIconButton-A9kUI2Mi.js";import"./IconButton-Bp83w7Vl.js";import"./TextField-5oA2ZHyT.js";import"./Select-zw3pOinR.js";import"./useFormControl-BqsLhE_K.js";import"./FormLabel-DQUl9tFQ.js";import"./Menu-DgrH3aSW.js";import"./useSlotProps-Pf3Any7V.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-Cz0z0t-m.js";import"./Grow-dpu60i7m.js";import"./utils-BEe1xe9s.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./getReactElementRef-CqbYMo6Z.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal--lygC2oe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BBKilzSC.js";import"./Backdrop-CS-DBVpF.js";import"./List-Ca5ihrnF.js";import"./ListContext-Pcr2Hw3F.js";import"./FormControl-kWoj5W_b.js";import"./isMuiElement-DP4_cKxi.js";import"./useControlled-D936bGT3.js";import"./Input-Bq1_T5sI.js";import"./FormHelperText-CKAbLsC3.js";import"./InputAdornment-CFx-VP39.js";import"./Close-p1A99Pv4.js";import"./ReportRounded-CqAg8072.js";import"./CheckCircleRounded-BTz-lAva.js";import"./ListItem-gWB2Xz06.js";import"./listItemButtonClasses-Cv9Ximjb.js";import"./ListItemButton-D-ukNa5A.js";import"./ListItemText-BUqPodMa.js";import"./listItemTextClasses-htoWa2RV.js";import"./Checkbox-DqjQocEw.js";import"./SwitchBase-BrOeuN6E.js";import"./Popper-XDIFCNJR.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowDown-DfBx9JJw.js";import"./createStack-DCKb-Y1i.js";import"./useThemeProps-DOMPMilT.js";import"./SvgIcon-CMBky-ty.js";const j=I(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),Ke={title:"Components/Autocomplete",component:f,parameters:{layout:"centered",docs:{description:{component:"A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features."}}},args:{onInputChange:()=>{},onChange:()=>{}},decorators:[e=>o.jsx(C,{sx:{width:{lg:400,xs:300}},children:o.jsx(e,{})})]},t=[{id:1,label:"Milano"},{id:2,label:"Verona"},{id:3,label:"Roma"},{id:4,label:"Firenze"},{id:5,label:"Venezia"},{id:6,label:"Torino"},{id:7,label:"Bologna"},{id:8,label:"Genova"},{id:9,label:"Napoli"},{id:10,label:"Palermo"}],W=()=>o.jsx(C,{sx:{p:2},children:[1,2,3].map(e=>o.jsx(O,{height:40,sx:{mb:1}},e))}),r={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città..."}},n={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città...",slots:{startIcon:E}}},i={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},l={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id,slots:{startIcon:E}}},s={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,showSelectionCountOnly:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},p={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",slotProps:{toggleButton:{hidden:!0}}}},c={args:{options:t,label:"Seleziona una città",placeholder:"Campo disabilitato",disabled:!0}},m={args:{options:t,label:"Seleziona una città",placeholder:"Campo obbligatorio",required:!0}},u={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0}},d={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0,slots:{loadingSkeleton:W}}},g={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato"}},S={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",renderOption:e=>o.jsxs(C,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(j,{fontSize:"small",color:"action"}),o.jsx(z,{variant:"body1",children:e.label})]})}},h={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",error:!0,helperText:"Campo obbligatorio"}},x={args:{options:[{key:1,value:"Italia"},{key:2,value:"Francia"},{key:3,value:"UK"},{key:4,value:"Germania"}],label:"Seleziona una nazione",placeholder:"Cerca...",multiple:!0,getOptionLabel:e=>e.value,isOptionEqualToValue:(e,a)=>e.key===a.key}},b={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato",slots:{emptyState:()=>o.jsxs(v,{spacing:1,alignItems:"center",textAlign:"center",sx:{backgroundColor:y.palette.background.default,py:3},children:[o.jsx(k,{sx:{color:y.palette.decorativeIcon}}),o.jsx(z,{fontWeight:600,fontSize:"1.125rem",color:"textSecondary",children:"Il caricamento delle città è fallito"}),o.jsx(z,{color:"textSecondary",variant:"body1",fontSize:"16px",fontWeight:400,children:o.jsx(T,{onClick:e=>e.stopPropagation(),children:"Prova di nuovo"})})]})}}},Ue=["Default","WithStartIcon","MultiSelect","MultiSelectWithIcon","MultiSelectCountChip","NoArrow","Disabled","Required","Loading","CustomLoading","CustomNoResults","CustomRenderOption","WithError","WithCustomOptions","CustomEmptyState"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Campo disabilitato',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};export{b as CustomEmptyState,d as CustomLoading,g as CustomNoResults,S as CustomRenderOption,r as Default,c as Disabled,u as Loading,i as MultiSelect,s as MultiSelectCountChip,l as MultiSelectWithIcon,p as NoArrow,m as Required,x as WithCustomOptions,h as WithError,n as WithStartIcon,Ue as __namedExportsOrder,Ke as default};
