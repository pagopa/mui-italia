import{r as d,j as t,B as r}from"./iframe-rw-T87Ps.js";import{M as s}from"./MITooltip-CRNiL6qy.js";import{B as m}from"./Button-DRjStLay.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-avjiHIXy.js";import"./useForkRef-D1JMp28z.js";import"./utils-z-7-CUm-.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmuD01on.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./Grow-DhIkgxjk.js";import"./useTheme-xu0WuyZg.js";import"./styled-BbRqDVtB.js";import"./useControlled-Bvt6qr0H.js";import"./resolveComponentProps-D4UfrecV.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CqMrtAXT.js";import"./Portal-Cl8VqIp1.js";import"./useSlotProps-BJPoFs7q.js";import"./ButtonBase-B-e_mOzE.js";const y={title:"Components/MITooltip",component:s,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=i=>t.jsx(s,{...i}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(s,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const O=["DefaultTooltip","DisableTooltp"];export{o as DefaultTooltip,e as DisableTooltp,O as __namedExportsOrder,y as default};
