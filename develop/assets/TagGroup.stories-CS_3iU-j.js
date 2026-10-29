import{j as o,B as l}from"./iframe-5Wy2T5h3.js";import{T as n}from"./Tag-CsRiPBHj.js";import{T as i}from"./TagGroup-CUKmWn2t.js";import{T as m}from"./Typography-D0v0-SYT.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-Dz7z1UTW.js";import"./ClickAwayListener-CiX2F41V.js";import"./useForkRef-DuMiwuLC.js";import"./utils-CKabMFkr.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B6IXuIKB.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./Grow-DTVxn6k3.js";import"./useTheme-BId1B-vw.js";import"./styled-CRUdqmCq.js";import"./useControlled-DH6ZUxJF.js";import"./resolveComponentProps-B7ZPKosw.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-C4ztzk0k.js";import"./Portal-CR8ib3oi.js";import"./useSlotProps-CsI9Chwd.js";import"./InfoRounded-Bykyasb5.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";import"./ReportRounded-DeVs6IWo.js";import"./CheckCircleRounded-CLOSyeD0.js";import"./Stack-Dp12Lk8P.js";import"./createStack-C9bYgYmk.js";import"./useThemeProps-emZ_TIsH.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],q={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),H=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
  </Box>`,...p.parameters?.docs?.source}}};export{s as Default,t as TruncateValueTag,p as WrapValueTag,H as __namedExportsOrder,q as default};
