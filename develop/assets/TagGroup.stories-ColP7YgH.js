import{j as o,B as l}from"./iframe-DqKsui2S.js";import{T as n}from"./Tag-CyM-D6sf.js";import{T as i}from"./TagGroup-BVE2AJi8.js";import{T as m}from"./Typography-DaPIykBW.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-D9TPv0-f.js";import"./ClickAwayListener-ZJq2kqt7.js";import"./useForkRef-CLmtxq_Y.js";import"./getReactElementRef-D1eMIxFv.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CK5bd1Eb.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./Grow-DmB0QswF.js";import"./useTheme-D3Y4xEPH.js";import"./styled-Df695Bk_.js";import"./utils-CWuA1miZ.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./useControlled-D38WY-ee.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B9n-3G_q.js";import"./Portal-D_iRFePj.js";import"./useSlotProps-D5tRl93H.js";import"./InfoRounded-CIMm_6LL.js";import"./createSvgIcon-bbdnzGJh.js";import"./SvgIcon-DZqMrxle.js";import"./ReportRounded-D1KaQaKz.js";import"./CheckCircleRounded-C1HdPW6D.js";import"./Stack-BNTagQR0.js";import"./createStack-CqPDIsXo.js";import"./useThemeProps-BkF6htZ6.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
