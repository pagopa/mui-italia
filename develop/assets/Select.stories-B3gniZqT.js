import{j as e,r as p,B as o}from"./iframe-UeoK4583.js";import{F as i}from"./FormControl-B5VxrqDK.js";import{I as l}from"./InputLabel-BxOiFRzG.js";import{S as n}from"./Select-BqYsNTV4.js";import{M as t}from"./MenuItem-aD9rZ--u.js";import{L as h}from"./ListItemIcon-DiIcFWWy.js";import{c as I}from"./createSvgIcon-BDmnSp2b.js";import{L as b}from"./ListItemText-DR25ukrS.js";import{F as x}from"./FormHelperText-g-lONFYs.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./styled-CvWxMvRN.js";import"./Input-CkFx1qf7.js";import"./useFormControl-BJZ2WbIo.js";import"./useForkRef-BhHiLiTZ.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-CoRd3jIJ.js";import"./FormLabel-BmcqU_Z8.js";import"./Menu-Dprvt6bz.js";import"./useSlotProps-BZSRsv06.js";import"./resolveComponentProps-Wl6qOvm4.js";import"./Paper-BDZ3FE86.js";import"./Grow-BkOU8FEv.js";import"./useTheme-Co2ufE29.js";import"./utils-C24Gt4bt.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./getReactElementRef-CUTSO03e.js";import"./Modal-BNfV-xR1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CV74gxTU.js";import"./Backdrop-DO2_7rty.js";import"./List-DygjksvE.js";import"./useControlled-BCpt8X85.js";import"./ButtonBase-DADYQYz3.js";import"./listItemIconClasses-D5IsuB18.js";import"./listItemTextClasses-Duzsm0Dz.js";import"./dividerClasses-sDueouI1.js";import"./SvgIcon-CnC7-k0D.js";import"./Typography-YbG83az4.js";const f=I(e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 12h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 6H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"}),"SubtitlesRounded"),me={title:"MUI Components/Inputs/Select",component:i,args:{size:"medium",fullWidth:!1,disabled:!1},argTypes:{size:{options:["small","medium"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}},parameters:{layout:"padded"}},r=s=>{const[m,d]=p.useState(""),c=u=>{d(u.target.value)};return e.jsx(o,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(l,{id:"search-by-label",children:"Cerca per:"}),e.jsxs(n,{labelId:"search-by-label",id:"search-by",value:m,label:"Cerca per:",onChange:c,children:[e.jsx(t,{selected:!0,value:"it-health-code",children:"Tessera Sanitaria"}),e.jsxs(t,{selected:!0,value:"it-fiscal-code",children:[e.jsx(h,{children:e.jsx(f,{fontSize:"inherit"})}),e.jsx(b,{children:"Codice fiscale"})]}),e.jsx(t,{value:"IUN",children:"Codice IUN"}),e.jsx(t,{disabled:!0,value:"Deprecated Code",children:"Disabled field"})]})]})})};r.args={size:"medium",fullWidth:!0,disabled:!1};r.argTypes={fullWidth:{table:{disable:!0}}};const a=s=>e.jsx(o,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(l,{id:"state-label",children:"Stato:"}),e.jsxs(n,{labelId:"state-label",id:"state",label:"Stato:",children:[e.jsx(t,{value:"all",children:"Tutti gli stati"}),e.jsx(t,{value:"delivered",children:"Consegnata"}),e.jsx(t,{value:"deposited",children:"Depositata"}),e.jsx(t,{value:"forwarding",children:"In inoltro"})]}),e.jsx(x,{children:"Stato selezionato inesistente"})]})});a.args={size:"medium",error:!0,fullWidth:!0,disabled:!1};a.argTypes={error:{table:{disable:!0}},fullWidth:{table:{disable:!0}}};const de=["Default","Error"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [state, setState] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };
  return <Box sx={{
    width: 200
  }}>
      <FormControl {...args}>
        <InputLabel id="search-by-label">Cerca per:</InputLabel>
        <Select labelId="search-by-label" id="search-by" value={state} label="Cerca per:" onChange={handleChange}>
          <MenuItem selected value={'it-health-code'}>
            Tessera Sanitaria
          </MenuItem>
          <MenuItem selected value={'it-fiscal-code'}>
            <ListItemIcon>
              <SubtitlesRoundedIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText>Codice fiscale</ListItemText>
          </MenuItem>
          <MenuItem value={'IUN'}>Codice IUN</MenuItem>
          <MenuItem disabled value={'Deprecated Code'}>
            Disabled field
          </MenuItem>
        </Select>
      </FormControl>
    </Box>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Box sx={{
  width: 200
}}>
    <FormControl {...args}>
      <InputLabel id="state-label">Stato:</InputLabel>
      <Select labelId="state-label" id="state" label="Stato:">
        <MenuItem value={'all'}>Tutti gli stati</MenuItem>
        <MenuItem value={'delivered'}>Consegnata</MenuItem>
        <MenuItem value={'deposited'}>Depositata</MenuItem>
        <MenuItem value={'forwarding'}>In inoltro</MenuItem>
      </Select>
      <FormHelperText>Stato selezionato inesistente</FormHelperText>
    </FormControl>
  </Box>`,...a.parameters?.docs?.source}}};export{r as Default,a as Error,de as __namedExportsOrder,me as default};
