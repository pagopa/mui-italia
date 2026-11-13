import{r as d,j as t,B as r}from"./iframe-CIrS23cw.js";import{M as i}from"./MITooltip-B6wBMBOB.js";import{B as m}from"./Button-BnqwMWPM.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-DM0M8gbV.js";import"./useForkRef-CBQP0s6I.js";import"./getReactElementRef-x6XiUDE9.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BP0xFDve.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./Grow-DOpMj5Vc.js";import"./useTheme-DrsUlJ74.js";import"./styled-C6B4F5zM.js";import"./utils-DdJQOc7R.js";import"./index-Thcbd2iF.js";import"./index-Ck8gTmYH.js";import"./useControlled-g_lSaZ2g.js";import"./resolveComponentProps-BM5yZ89Q.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Y2KCO7Vt.js";import"./Portal-WI67lwan.js";import"./useSlotProps-IC8Zf0Uw.js";import"./ButtonBase-BfUaq9Uf.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
