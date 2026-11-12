import{j as o,B as l}from"./iframe-QS4E-7kp.js";import{T as n}from"./Tag-DOM-e2MZ.js";import{T as i}from"./TagGroup-D0vBoXiS.js";import{T as m}from"./Typography-BhBBVfSC.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-D_jSBUbp.js";import"./ClickAwayListener-aTY6qQ9c.js";import"./useForkRef-CBZLFoQR.js";import"./getReactElementRef-Bpxh3ycP.js";import"./TransitionGroupContext-UHTf2kEp.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B66adYVs.js";import"./DefaultPropsProvider-DskoNSvz.js";import"./Grow-BzuYhFp6.js";import"./useTheme-DtdRabi7.js";import"./styled-Cp8mViLI.js";import"./utils-9SvnuSH6.js";import"./index-CIqeYx7Z.js";import"./index-Dh03kj_h.js";import"./useControlled-DdoGzNa_.js";import"./resolveComponentProps-DqWDWvXv.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CgA0NDhL.js";import"./Portal-CPSPYf0G.js";import"./useSlotProps-BWyCKIRo.js";import"./InfoRounded-CJmrtzWP.js";import"./createSvgIcon-DZMTz-8P.js";import"./SvgIcon-DPFPFDDJ.js";import"./ReportRounded-CE3xypMC.js";import"./CheckCircleRounded-BbSJcDOV.js";import"./Stack-COT3Y9GX.js";import"./createStack-BvVMW1Js.js";import"./useThemeProps-BMid6KCD.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
