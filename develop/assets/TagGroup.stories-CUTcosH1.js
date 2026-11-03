import{j as o,B as l}from"./iframe--Veu_H0i.js";import{T as n}from"./Tag-BleE56RJ.js";import{T as i}from"./TagGroup-DPZNZYXb.js";import{T as m}from"./Typography-DTg26sul.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-Dq4V2VMz.js";import"./ClickAwayListener-Bt_endzG.js";import"./useForkRef-BylnVgws.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DT3BT9g5.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./Grow-BL3mP394.js";import"./useTheme-CfF9d9rw.js";import"./styled-CSprtNKk.js";import"./useControlled-NqxH3zvr.js";import"./resolveComponentProps-DBw8yxvm.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-Dh99vMcU.js";import"./Portal-DfWvea1R.js";import"./useSlotProps-C-enEAQe.js";import"./InfoRounded-C3GFEUp4.js";import"./createSvgIcon-CpLUNxU5.js";import"./SvgIcon-BVB0onhD.js";import"./ReportRounded-CKvFCXgg.js";import"./CheckCircleRounded-35t4fl-J.js";import"./Stack-2Zj6C8pl.js";import"./createStack-CtTbzIgR.js";import"./useThemeProps-Yc7VDqz2.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],q={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),H=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
