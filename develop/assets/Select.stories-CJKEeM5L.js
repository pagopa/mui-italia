import{j as e,r as p,B as l}from"./iframe-2X3ZxJBB.js";import{F as i}from"./FormControl-IIFpe4k9.js";import{I as o,S as n}from"./Select-G1bl72FW.js";import{M as t}from"./MenuItem-Ct8xFbQ7.js";import{L as h}from"./ListItemIcon-8AgyupnB.js";import{c as I}from"./createSvgIcon-C6YSOS6Z.js";import{L as b}from"./ListItemText-CiLUoFcT.js";import{F as x}from"./FormHelperText-DJQclYT4.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./styled-CSThg6ob.js";import"./useFormControl-DO1qolWe.js";import"./isMuiElement-ChQHbYBN.js";import"./FormLabel-CMvR64BL.js";import"./Menu-Cyha9DVS.js";import"./useSlotProps-BelVuA1F.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-vrRRETjr.js";import"./Paper-DaiBjWjc.js";import"./Grow-DZErd4bm.js";import"./useTheme-TBw-fLAI.js";import"./utils-B9Xpknxo.js";import"./TransitionGroupContext-ConkyLn2.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./getReactElementRef-DjnmNWy7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CZ0ZrDHY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CvLWWrVj.js";import"./Backdrop-CvgmQxSL.js";import"./List-CYwNHAQZ.js";import"./ListContext-DcRMFQ6t.js";import"./useControlled-DW2ZXwWK.js";import"./Input-DdvRIc7U.js";import"./ButtonBase-DaB6vsJo.js";import"./listItemIconClasses-a3ro4LW1.js";import"./listItemTextClasses-CMLDIYs0.js";import"./dividerClasses-Bp6JYho7.js";import"./SvgIcon-Dw8LRDkt.js";import"./Typography-BsD0WLvF.js";const f=I(e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 12h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 6H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"}),"SubtitlesRounded"),me={title:"MUI Components/Inputs/Select",component:i,args:{size:"medium",fullWidth:!1,disabled:!1},argTypes:{size:{options:["small","medium"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}},parameters:{layout:"padded"}},r=s=>{const[m,d]=p.useState(""),c=u=>{d(u.target.value)};return e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"search-by-label",children:"Cerca per:"}),e.jsxs(n,{labelId:"search-by-label",id:"search-by",value:m,label:"Cerca per:",onChange:c,children:[e.jsx(t,{selected:!0,value:"it-health-code",children:"Tessera Sanitaria"}),e.jsxs(t,{selected:!0,value:"it-fiscal-code",children:[e.jsx(h,{children:e.jsx(f,{fontSize:"inherit"})}),e.jsx(b,{children:"Codice fiscale"})]}),e.jsx(t,{value:"IUN",children:"Codice IUN"}),e.jsx(t,{disabled:!0,value:"Deprecated Code",children:"Disabled field"})]})]})})};r.args={size:"medium",fullWidth:!0,disabled:!1};r.argTypes={fullWidth:{table:{disable:!0}}};const a=s=>e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"state-label",children:"Stato:"}),e.jsxs(n,{labelId:"state-label",id:"state",label:"Stato:",children:[e.jsx(t,{value:"all",children:"Tutti gli stati"}),e.jsx(t,{value:"delivered",children:"Consegnata"}),e.jsx(t,{value:"deposited",children:"Depositata"}),e.jsx(t,{value:"forwarding",children:"In inoltro"})]}),e.jsx(x,{children:"Stato selezionato inesistente"})]})});a.args={size:"medium",error:!0,fullWidth:!0,disabled:!1};a.argTypes={error:{table:{disable:!0}},fullWidth:{table:{disable:!0}}};const de=["Default","Error"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
