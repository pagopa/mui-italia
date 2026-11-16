import{r as d,j as t,B as r}from"./iframe-ByoTlC9Q.js";import{M as i}from"./MITooltip-CSU5TK8C.js";import{B as m}from"./Button-DITFemx5.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-DC7CSgf-.js";import"./useForkRef-DBOtKc3X.js";import"./getReactElementRef-CP3g2otq.js";import"./TransitionGroupContext-Ccv7Y6Ew.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JOW5Ji1A.js";import"./DefaultPropsProvider-DGsnD8AD.js";import"./Grow-ZZgLPD9v.js";import"./useTheme-ce18xD2I.js";import"./styled-1Q9tXkxe.js";import"./utils-x3U2XCHh.js";import"./index-C3HY6R9u.js";import"./index-C0xsyHpE.js";import"./useControlled-BB-IPjV-.js";import"./resolveComponentProps-DFYKieea.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-DpAw4oUU.js";import"./Portal-BC_yz0lI.js";import"./useSlotProps-fCAmVprl.js";import"./ButtonBase-BEVN0AM_.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
