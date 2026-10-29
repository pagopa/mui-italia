import{j as e,r as p,B as l}from"./iframe-5Wy2T5h3.js";import{F as i}from"./FormControl-C4xhnjd8.js";import{I as o}from"./InputLabel-Yo8AKxKP.js";import{S as n}from"./Select-hgRKqZUk.js";import{M as t}from"./MenuItem--zvOf3lN.js";import{L as h}from"./ListItemIcon-CGPxbZBt.js";import{c as I}from"./createSvgIcon-DmL99QgT.js";import{L as b}from"./ListItemText-fGFWKYxH.js";import{F as x}from"./FormHelperText-CVRz98Ek.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./styled-CRUdqmCq.js";import"./Input-B8OLUM49.js";import"./useFormControl-B8Afh-Qf.js";import"./useForkRef-DuMiwuLC.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-BhLlvn4o.js";import"./FormLabel-DOa0nZ2W.js";import"./Menu-BxNCXn7u.js";import"./useSlotProps-CsI9Chwd.js";import"./resolveComponentProps-B7ZPKosw.js";import"./Paper-CjnJvMOl.js";import"./Grow-DTVxn6k3.js";import"./useTheme-BId1B-vw.js";import"./utils-CKabMFkr.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./Modal-CesdzBj9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CR8ib3oi.js";import"./Backdrop-2_UANPKd.js";import"./List-DGqJeVTW.js";import"./useControlled-DH6ZUxJF.js";import"./ButtonBase-BhLrVkcf.js";import"./listItemIconClasses-Q0c5fy6w.js";import"./listItemTextClasses-DP3dbmbR.js";import"./dividerClasses-D4WBs5nz.js";import"./SvgIcon-DdZ_-XQg.js";import"./Typography-D0v0-SYT.js";const f=I(e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 12h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 6H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"}),"SubtitlesRounded"),ne={title:"MUI Components/Inputs/Select",component:i,args:{size:"medium",fullWidth:!1,disabled:!1},argTypes:{size:{options:["small","medium"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}},parameters:{layout:"padded"}},r=s=>{const[m,d]=p.useState(""),c=u=>{d(u.target.value)};return e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"search-by-label",children:"Cerca per:"}),e.jsxs(n,{labelId:"search-by-label",id:"search-by",value:m,label:"Cerca per:",onChange:c,children:[e.jsx(t,{selected:!0,value:"it-health-code",children:"Tessera Sanitaria"}),e.jsxs(t,{selected:!0,value:"it-fiscal-code",children:[e.jsx(h,{children:e.jsx(f,{fontSize:"inherit"})}),e.jsx(b,{children:"Codice fiscale"})]}),e.jsx(t,{value:"IUN",children:"Codice IUN"}),e.jsx(t,{disabled:!0,value:"Deprecated Code",children:"Disabled field"})]})]})})};r.args={size:"medium",fullWidth:!0,disabled:!1};r.argTypes={fullWidth:{table:{disable:!0}}};const a=s=>e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"state-label",children:"Stato:"}),e.jsxs(n,{labelId:"state-label",id:"state",label:"Stato:",children:[e.jsx(t,{value:"all",children:"Tutti gli stati"}),e.jsx(t,{value:"delivered",children:"Consegnata"}),e.jsx(t,{value:"deposited",children:"Depositata"}),e.jsx(t,{value:"forwarding",children:"In inoltro"})]}),e.jsx(x,{children:"Stato selezionato inesistente"})]})});a.args={size:"medium",error:!0,fullWidth:!0,disabled:!1};a.argTypes={error:{table:{disable:!0}},fullWidth:{table:{disable:!0}}};const me=["Default","Error"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
  </Box>`,...a.parameters?.docs?.source}}};export{r as Default,a as Error,me as __namedExportsOrder,ne as default};
