import{r as d,j as t,B as r}from"./iframe-UeoK4583.js";import{M as i}from"./MITooltip-CIBWHr5e.js";import{B as m}from"./Button-D0Khv6Ir.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-CjqP5S75.js";import"./useForkRef-BhHiLiTZ.js";import"./getReactElementRef-CUTSO03e.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BoonbA0I.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./Grow-BkOU8FEv.js";import"./useTheme-Co2ufE29.js";import"./styled-CvWxMvRN.js";import"./utils-C24Gt4bt.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./useControlled-BCpt8X85.js";import"./resolveComponentProps-Wl6qOvm4.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-DbFwpgr2.js";import"./Portal-CV74gxTU.js";import"./useSlotProps-BZSRsv06.js";import"./ButtonBase-DADYQYz3.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
