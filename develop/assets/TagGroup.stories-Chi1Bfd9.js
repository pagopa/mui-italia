import{j as o,B as l}from"./iframe-Do2iWwl6.js";import{T as n}from"./Tag-BeNfzoow.js";import{T as i}from"./TagGroup-uOOaJ1QW.js";import{T as m}from"./Typography-CiPK09A-.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-DRZ003Ib.js";import"./ClickAwayListener-DaP_vx8K.js";import"./useForkRef-CTzFoPWU.js";import"./utils-D8T4Hx0W.js";import"./TransitionGroupContext-dRzt1ax4.js";import"./index-NHoFLGkq.js";import"./index-CmeO_OfC.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cxp_pYZ7.js";import"./DefaultPropsProvider-Bbc_N8dw.js";import"./Grow-B9IQJKeu.js";import"./useTheme-D6XEe0y0.js";import"./styled-DraHPSrp.js";import"./useControlled-BYPQNnls.js";import"./resolveComponentProps-lqsoT0q7.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B_GgxjJJ.js";import"./Portal-CHXDxYw6.js";import"./useSlotProps-DXm84P3q.js";import"./InfoRounded-CeZMJa7h.js";import"./createSvgIcon-Ds57flxF.js";import"./SvgIcon-X6H-8jcg.js";import"./ReportRounded-mRxmjfQz.js";import"./CheckCircleRounded-Bd4Ivf9R.js";import"./Stack-DlN3oqzw.js";import"./createStack-Ju2NrDF9.js";import"./useThemeProps-tiOK56Gm.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],q={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),H=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
