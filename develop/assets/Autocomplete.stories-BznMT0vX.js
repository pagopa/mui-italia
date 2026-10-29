import{j as o,t as y,B as x}from"./iframe-rw-T87Ps.js";import{A as k}from"./Autocomplete-DyRkVWrC.js";import{c as f}from"./createSvgIcon-BLI2zqKg.js";import{S as O}from"./Stack-DK8xaQOE.js";import{W as T}from"./Warning-DVgV_dJv.js";import{T as C}from"./Typography-DIxyHfgM.js";import{B as I}from"./Button-DRjStLay.js";import{S as E}from"./Skeleton-Cc0haIos.js";import"./preload-helper-PPVm8Dsz.js";import"./MIChip-Ca9xJI5E.js";import"./useTheme-xu0WuyZg.js";import"./styled-BbRqDVtB.js";import"./CloseRounded-CT80vTkK.js";import"./Chip-DG7bXvP3.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./useForkRef-D1JMp28z.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./MIIconButton-BpqZz1We.js";import"./IconButton-DPI2uUBc.js";import"./TextField-DdD1rVzJ.js";import"./Select-WbVM1ffa.js";import"./Menu-DZdFlM9J.js";import"./useSlotProps-BJPoFs7q.js";import"./resolveComponentProps-D4UfrecV.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-6XyShZCf.js";import"./Grow-DhIkgxjk.js";import"./utils-z-7-CUm-.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-AHzXhWNy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cl8VqIp1.js";import"./Backdrop-DnG8wF6D.js";import"./List-DZ2vjiji.js";import"./Input-CEWQeC3A.js";import"./useFormControl-BGFJEerR.js";import"./useControlled-Bvt6qr0H.js";import"./InputLabel-H26RyKpP.js";import"./FormLabel-CsDAbzr7.js";import"./FormHelperText-mNKgTmOq.js";import"./FormControl-OseXVL7b.js";import"./isMuiElement-l98Asye0.js";import"./InputAdornment-Cuyj-fve.js";import"./Close-Bz3kceLW.js";import"./ReportRounded-Bjw5Cl-M.js";import"./CheckCircleRounded-DWq6RoZC.js";import"./ListItem-98hg8NZz.js";import"./listItemButtonClasses-uyHWJMkj.js";import"./ListItemButton-BF2ILwJQ.js";import"./ListItemText-CBkDu_h0.js";import"./listItemTextClasses-DOtnDyuQ.js";import"./SwitchBase-DWOufolV.js";import"./Popper-CqMrtAXT.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowDown-DdHcvxAd.js";import"./SvgIcon-BqyspOV3.js";import"./createStack-NLAxrvfx.js";import"./useThemeProps-uclZDVSV.js";const v=f(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),j=f(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),Ne={title:"Components/Autocomplete",component:k,parameters:{layout:"centered",docs:{description:{component:"A flexible autocomplete component with support for single and multi-select modes, custom styling, and accessibility features."}}},args:{onInputChange:()=>{},onChange:()=>{}},decorators:[e=>o.jsx(x,{sx:{width:{lg:400,xs:300}},children:o.jsx(e,{})})]},t=[{id:1,label:"Milano"},{id:2,label:"Verona"},{id:3,label:"Roma"},{id:4,label:"Firenze"},{id:5,label:"Venezia"},{id:6,label:"Torino"},{id:7,label:"Bologna"},{id:8,label:"Genova"},{id:9,label:"Napoli"},{id:10,label:"Palermo"}],W=()=>o.jsx(x,{sx:{p:2},children:[1,2,3].map(e=>o.jsx(E,{height:40,sx:{mb:1}},e))}),r={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città..."}},i={args:{options:t,label:"Seleziona una città",placeholder:"Cerca città...",slots:{startIcon:v}}},n={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},l={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,isOptionEqualToValue:(e,a)=>e.id===a.id,slots:{startIcon:v}}},s={args:{options:t,label:"Seleziona le città",placeholder:"Seleziona più città...",multiple:!0,showSelectionCountOnly:!0,isOptionEqualToValue:(e,a)=>e.id===a.id}},c={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",slotProps:{toggleButton:{hidden:!0}}}},p={args:{options:t,label:"Seleziona una città",placeholder:"Campo disabilitato",disabled:!0}},m={args:{options:t,label:"Seleziona una città",placeholder:"Campo obbligatorio",required:!0}},u={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0}},d={args:{options:t,label:"Seleziona una città",placeholder:"Caricamento...",loading:!0,slots:{loadingSkeleton:W}}},g={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato"}},S={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",renderOption:e=>o.jsxs(x,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsx(j,{fontSize:"small",color:"action"}),o.jsx(C,{variant:"body1",children:e.label})]})}},h={args:{options:t,label:"Seleziona una città",placeholder:"Cerca...",error:!0,helperText:"Campo obbligatorio"}},b={args:{options:[{key:1,value:"Italia"},{key:2,value:"Francia"},{key:3,value:"UK"},{key:4,value:"Germania"}],label:"Seleziona una nazione",placeholder:"Cerca...",multiple:!0,getOptionLabel:e=>e.value,isOptionEqualToValue:(e,a)=>e.key===a.key}},z={args:{options:[],label:"Seleziona una città",placeholder:"Cerca...",noResultsText:"Esempio di testo personalizzato per nessun risultato",slots:{emptyState:()=>o.jsxs(O,{spacing:1,alignItems:"center",textAlign:"center",sx:{backgroundColor:y.palette.background.default,py:3},children:[o.jsx(T,{sx:{color:y.palette.decorativeIcon}}),o.jsx(C,{fontWeight:600,fontSize:"1.125rem",color:"textSecondary",children:"Il caricamento delle città è fallito"}),o.jsx(C,{color:"textSecondary",variant:"body1",fontSize:"16px",fontWeight:400,children:o.jsx(I,{onClick:e=>e.stopPropagation(),children:"Prova di nuovo"})})]})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona una città',
    placeholder: 'Cerca città...',
    slots: {
      startIcon: LocationOn
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: cities,
    label: 'Seleziona le città',
    placeholder: 'Seleziona più città...',
    multiple: true,
    isOptionEqualToValue: (option, value) => option.id === value.id
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const De=["Default","WithStartIcon","MultiSelect","MultiSelectWithIcon","MultiSelectCountChip","NoArrow","Disabled","Required","Loading","CustomLoading","CustomNoResults","CustomRenderOption","WithError","WithCustomOptions","CustomEmptyState"];export{z as CustomEmptyState,d as CustomLoading,g as CustomNoResults,S as CustomRenderOption,r as Default,p as Disabled,u as Loading,n as MultiSelect,s as MultiSelectCountChip,l as MultiSelectWithIcon,c as NoArrow,m as Required,b as WithCustomOptions,h as WithError,i as WithStartIcon,De as __namedExportsOrder,Ne as default};
