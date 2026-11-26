import{r as d,j as t,B as r}from"./iframe-D2suRgZv.js";import{M as i}from"./MITooltip-C54T0IgN.js";import{B as m}from"./Button-2-Dq0vFn.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-CZAltqB4.js";import"./useForkRef-qR2CMe6R.js";import"./getReactElementRef-CIHR9XSW.js";import"./TransitionGroupContext-CriRyQ-M.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-uFVXYQtE.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./Grow-pOX774nb.js";import"./useTheme-Bi1oBoTE.js";import"./styled-Dg4SAjqP.js";import"./utils-Lq2e-y9I.js";import"./index-DLZ6Eal3.js";import"./index-pAvcHujp.js";import"./useControlled-D3dyN2al.js";import"./resolveComponentProps-AZibFEcc.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-DniiYakM.js";import"./Portal-BeL3h0Wm.js";import"./useSlotProps-BbqPJ-Qx.js";import"./ButtonBase-c57h5RGA.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
