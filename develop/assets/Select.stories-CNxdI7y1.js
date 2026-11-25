import{j as e,r as p,B as l}from"./iframe-6MQXqINC.js";import{F as i}from"./FormControl-kWoj5W_b.js";import{I as o,S as n}from"./Select-zw3pOinR.js";import{M as t}from"./MenuItem-B5uyZdG5.js";import{L as h}from"./ListItemIcon-BjcgRNy_.js";import{c as I}from"./createSvgIcon-DyGXVuQl.js";import{L as b}from"./ListItemText-BUqPodMa.js";import{F as x}from"./FormHelperText-CKAbLsC3.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./styled-CKtE3LBS.js";import"./useFormControl-BqsLhE_K.js";import"./isMuiElement-DP4_cKxi.js";import"./FormLabel-DQUl9tFQ.js";import"./Menu-DgrH3aSW.js";import"./useSlotProps-Pf3Any7V.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-yWUxwg9H.js";import"./Paper-Cz0z0t-m.js";import"./Grow-dpu60i7m.js";import"./useTheme-CT6pqya3.js";import"./utils-BEe1xe9s.js";import"./TransitionGroupContext-ChxoeE96.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./getReactElementRef-CqbYMo6Z.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal--lygC2oe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BBKilzSC.js";import"./Backdrop-CS-DBVpF.js";import"./List-Ca5ihrnF.js";import"./ListContext-Pcr2Hw3F.js";import"./useControlled-D936bGT3.js";import"./Input-Bq1_T5sI.js";import"./ButtonBase-BspQdHa2.js";import"./listItemIconClasses-B9nyDx1m.js";import"./listItemTextClasses-htoWa2RV.js";import"./dividerClasses-CgxMar12.js";import"./SvgIcon-CMBky-ty.js";import"./Typography-C7bhwkwa.js";const f=I(e.jsx("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 12h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 6H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"}),"SubtitlesRounded"),me={title:"MUI Components/Inputs/Select",component:i,args:{size:"medium",fullWidth:!1,disabled:!1},argTypes:{size:{options:["small","medium"],control:{type:"radio"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}}}},parameters:{layout:"padded"}},r=s=>{const[m,d]=p.useState(""),c=u=>{d(u.target.value)};return e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"search-by-label",children:"Cerca per:"}),e.jsxs(n,{labelId:"search-by-label",id:"search-by",value:m,label:"Cerca per:",onChange:c,children:[e.jsx(t,{selected:!0,value:"it-health-code",children:"Tessera Sanitaria"}),e.jsxs(t,{selected:!0,value:"it-fiscal-code",children:[e.jsx(h,{children:e.jsx(f,{fontSize:"inherit"})}),e.jsx(b,{children:"Codice fiscale"})]}),e.jsx(t,{value:"IUN",children:"Codice IUN"}),e.jsx(t,{disabled:!0,value:"Deprecated Code",children:"Disabled field"})]})]})})};r.args={size:"medium",fullWidth:!0,disabled:!1};r.argTypes={fullWidth:{table:{disable:!0}}};const a=s=>e.jsx(l,{sx:{width:200},children:e.jsxs(i,{...s,children:[e.jsx(o,{id:"state-label",children:"Stato:"}),e.jsxs(n,{labelId:"state-label",id:"state",label:"Stato:",children:[e.jsx(t,{value:"all",children:"Tutti gli stati"}),e.jsx(t,{value:"delivered",children:"Consegnata"}),e.jsx(t,{value:"deposited",children:"Depositata"}),e.jsx(t,{value:"forwarding",children:"In inoltro"})]}),e.jsx(x,{children:"Stato selezionato inesistente"})]})});a.args={size:"medium",error:!0,fullWidth:!0,disabled:!1};a.argTypes={error:{table:{disable:!0}},fullWidth:{table:{disable:!0}}};const de=["Default","Error"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
