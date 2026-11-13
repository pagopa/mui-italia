import{r as d,j as t,B as r}from"./iframe-DLqg6HX8.js";import{M as i}from"./MITooltip-DgwiZwGz.js";import{B as m}from"./Button-BALsOiSe.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-DM8TkaKY.js";import"./useForkRef-QQIssf4j.js";import"./getReactElementRef-B76VvR63.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cb79e5j6.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./Grow-CMZG1PpA.js";import"./useTheme-B4I3gTml.js";import"./styled-BxDKlw5F.js";import"./utils-BL_otCjh.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./useControlled-DsPdphLt.js";import"./resolveComponentProps-DL8-z4ZK.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BCZh1Fjo.js";import"./Portal-qD7zO2ig.js";import"./useSlotProps-qdPkKgV-.js";import"./ButtonBase-ChpoghoR.js";const O={title:"Components/MITooltip",component:i,args:{title:"This is a test",children:t.jsx(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:"Hover on this text to see the tooltip appears"})},argTypes:{title:{control:"text"},children:{table:{disable:!0}}}},x=s=>t.jsx(i,{...s}),o=x.bind({}),e={render:function(a){const[p,l]=d.useState(!1);return t.jsxs(r,{p:"8px",border:"1px solid blue",borderRadius:"4px",width:"300px",children:[t.jsx(i,{...a,disabled:p,children:t.jsx(r,{children:"Hover on this text to see the tooltip appears."})}),t.jsx(m,{sx:{mt:"10px"},variant:"contained",onClick:()=>l(n=>!n),size:"small",children:p?"Enable tooltip":"Disable tooltip"})]})}},q=["DefaultTooltip","DisableTooltp"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <MITooltip {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
