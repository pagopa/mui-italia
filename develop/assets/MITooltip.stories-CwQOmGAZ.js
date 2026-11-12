import{r as d,j as t,B as r}from"./iframe-QS4E-7kp.js";import{M as i}from"./MITooltip-D_jSBUbp.js";import{B as m}from"./Button-BhwEEpAB.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-aTY6qQ9c.js";import"./useForkRef-CBZLFoQR.js";import"./getReactElementRef-Bpxh3ycP.js";import"./TransitionGroupContext-UHTf2kEp.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B66adYVs.js";import"./DefaultPropsProvider-DskoNSvz.js";import"./Grow-BzuYhFp6.js";import"./useTheme-DtdRabi7.js";import"./styled-Cp8mViLI.js";import"./utils-9SvnuSH6.js";import"./index-CIqeYx7Z.js";import"./index-Dh03kj_h.js";import"./useControlled-DdoGzNa_.js";import"./resolveComponentProps-DqWDWvXv.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CgA0NDhL.js";import"./Portal-CPSPYf0G.js";import"./useSlotProps-BWyCKIRo.js";import"./ButtonBase-C5zr_SjN.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
