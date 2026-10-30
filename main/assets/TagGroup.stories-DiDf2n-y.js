import{j as o,B as l}from"./iframe-CDfDAPFk.js";import{T as n}from"./Tag-Q15I5ASA.js";import{T as i}from"./TagGroup-DFtnddUq.js";import{T as m}from"./Typography-9AQN7ayB.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-CqVKdkh-.js";import"./ClickAwayListener-CoPYCc8n.js";import"./useForkRef-CNIqWbEd.js";import"./utils-DcX_SmDN.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./index-Bnc84QHD.js";import"./index-D3KWgPQG.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Da7l2JCj.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./Grow-DkYaE8Oe.js";import"./useTheme-DDUJVjwp.js";import"./styled-tN4ayshy.js";import"./useControlled-ZAw3sqd0.js";import"./resolveComponentProps-DNhtxahT.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-BIyMpkmr.js";import"./Portal-al-BQE5u.js";import"./useSlotProps-DkUD6T-O.js";import"./InfoRounded-DdMNIXko.js";import"./createSvgIcon-BbEuUIJp.js";import"./SvgIcon-C-yBIyJ3.js";import"./ReportRounded-mACyuGCy.js";import"./CheckCircleRounded-C2a5K20z.js";import"./Stack-CQ_WFl_6.js";import"./createStack-D3UHGSp-.js";import"./useThemeProps-DVJ-9e3j.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],q={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),H=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
