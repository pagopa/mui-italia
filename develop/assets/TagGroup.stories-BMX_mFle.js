import{j as o,B as l}from"./iframe-CL-nofVy.js";import{T as n}from"./Tag-BJwwPrMi.js";import{T as i}from"./TagGroup-C2IjqPxF.js";import{T as m}from"./Typography-Cz4LsPd3.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-5baXcRXZ.js";import"./ClickAwayListener-Ca09-y5_.js";import"./useForkRef-FJdE9ynN.js";import"./getReactElementRef-BJzfQJXO.js";import"./TransitionGroupContext-C7nOtKIy.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AB-GOltl.js";import"./DefaultPropsProvider-CUarE2Ck.js";import"./Grow-BtfEH-Ui.js";import"./useTheme-D4iwhroH.js";import"./styled-ovOPsWgk.js";import"./utils-DWjdt6ri.js";import"./index-B36LPZwX.js";import"./index-BAHv-n70.js";import"./useControlled-Cm-FkzkU.js";import"./resolveComponentProps-BZFCHnpD.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BRl-nXrE.js";import"./Portal-CW1uKa3W.js";import"./useSlotProps-7FeIQ9Eg.js";import"./InfoRounded-okZ87nxe.js";import"./createSvgIcon-CZbxXrtE.js";import"./SvgIcon-DBqYGDsd.js";import"./ReportRounded-DG2lI4Se.js";import"./CheckCircleRounded-DHUoq9Up.js";import"./Stack-BGzxD5bO.js";import"./createStack-LmgpXbRG.js";import"./useThemeProps-DdJlTd84.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
  border: \`1px solid blue\`,
  borderRadius: '5px'
}}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => <Tag key={\`\${i}-\${item}\`} value={item} />)}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="truncate" />
      </>
    </TagGroup>
  </Box>`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
  border: \`1px solid blue\`,
  borderRadius: '5px'
}}>
    <Typography variant="body1">Tags must be in this Box</Typography>
    <hr />
    <TagGroup {...args}>
      <>
        {groupLabels.map((item: string, i: number) => <Tag key={\`\${i}-\${item}\`} value={item} />)}
        <Tag value="It'saverylonglonglonglonglonglonglonglonglonglonglongvalue" mode="wrap" />
      </>
    </TagGroup>
  </Box>`,...p.parameters?.docs?.source}}};export{s as Default,t as TruncateValueTag,p as WrapValueTag,J as __namedExportsOrder,H as default};
