import{r as d,j as t,B as r}from"./iframe-CL-nofVy.js";import{M as i}from"./MITooltip-5baXcRXZ.js";import{B as m}from"./Button-CuoZ7k1t.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-Ca09-y5_.js";import"./useForkRef-FJdE9ynN.js";import"./getReactElementRef-BJzfQJXO.js";import"./TransitionGroupContext-C7nOtKIy.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AB-GOltl.js";import"./DefaultPropsProvider-CUarE2Ck.js";import"./Grow-BtfEH-Ui.js";import"./useTheme-D4iwhroH.js";import"./styled-ovOPsWgk.js";import"./utils-DWjdt6ri.js";import"./index-B36LPZwX.js";import"./index-BAHv-n70.js";import"./useControlled-Cm-FkzkU.js";import"./resolveComponentProps-BZFCHnpD.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BRl-nXrE.js";import"./Portal-CW1uKa3W.js";import"./useSlotProps-7FeIQ9Eg.js";import"./ButtonBase-DHfqvIli.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
