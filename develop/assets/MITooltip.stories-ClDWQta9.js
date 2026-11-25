import{r as d,j as t,B as r}from"./iframe-6MQXqINC.js";import{M as i}from"./MITooltip-AuBMe-Ym.js";import{B as m}from"./Button-dlB2ry0u.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-DJl9XTe3.js";import"./useForkRef-yWUxwg9H.js";import"./getReactElementRef-CqbYMo6Z.js";import"./TransitionGroupContext-ChxoeE96.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-qSW196tL.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./Grow-dpu60i7m.js";import"./useTheme-CT6pqya3.js";import"./styled-CKtE3LBS.js";import"./utils-BEe1xe9s.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./useControlled-D936bGT3.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-XDIFCNJR.js";import"./Portal-BBKilzSC.js";import"./useSlotProps-Pf3Any7V.js";import"./ButtonBase-BspQdHa2.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function RenderWithState(args) {
    const [disabled, setDisable] = useState(false);
    return <Box p="8px" border="1px solid blue" borderRadius="4px" width="300px">
        <MITooltip {...args} disabled={disabled}>
          <Box>Hover on this text to see the tooltip appears.</Box>
        </MITooltip>
        <Button sx={{
        mt: '10px'
      }} variant="contained" onClick={() => setDisable(prev => !prev)} size="small">
          {disabled ? 'Enable tooltip' : 'Disable tooltip'}
        </Button>
      </Box>;
  }
}`,...e.parameters?.docs?.source}}};export{o as DefaultTooltip,e as DisableTooltp,q as __namedExportsOrder,O as default};
