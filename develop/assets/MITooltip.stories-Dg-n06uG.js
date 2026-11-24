import{r as d,j as t,B as r}from"./iframe-BZIr8g2c.js";import{M as i}from"./MITooltip-CIvNb5Gv.js";import{B as m}from"./Button-CqYutGHV.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-Dh0UJLR3.js";import"./useForkRef-DwqDbAPd.js";import"./getReactElementRef-BF20Trkt.js";import"./TransitionGroupContext-DcnNMgGE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-MYdIKGtS.js";import"./DefaultPropsProvider-26RYHGpy.js";import"./Grow-B_rkVyMY.js";import"./useTheme-Bb7eOhg8.js";import"./styled-C74EMrKI.js";import"./utils-GyIikVxa.js";import"./index-BfggY3cO.js";import"./index-BtLnuvOH.js";import"./useControlled-Bjia_CyW.js";import"./resolveComponentProps-DG62WAbE.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B-FdMq7D.js";import"./Portal-DliXxA7l.js";import"./useSlotProps-C-ZiyOKo.js";import"./ButtonBase-o94ykCQy.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
