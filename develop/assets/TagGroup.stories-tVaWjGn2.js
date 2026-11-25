import{j as o,B as l}from"./iframe-2X3ZxJBB.js";import{T as n}from"./Tag-BxE8YtSC.js";import{T as i}from"./TagGroup-BIwe-yfC.js";import{T as m}from"./Typography-BsD0WLvF.js";import"./preload-helper-PPVm8Dsz.js";import"./MITooltip-ByHMPaXO.js";import"./ClickAwayListener-BS-7LfGQ.js";import"./useForkRef-vrRRETjr.js";import"./getReactElementRef-DjnmNWy7.js";import"./TransitionGroupContext-ConkyLn2.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-EErz-2xG.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./Grow-DZErd4bm.js";import"./useTheme-TBw-fLAI.js";import"./styled-CSThg6ob.js";import"./utils-B9Xpknxo.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./useControlled-DW2ZXwWK.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-CVHqR-IG.js";import"./Portal-CvLWWrVj.js";import"./useSlotProps-BelVuA1F.js";import"./InfoRounded-CdEiYG28.js";import"./createSvgIcon-C6YSOS6Z.js";import"./SvgIcon-Dw8LRDkt.js";import"./ReportRounded-D0wU4IF0.js";import"./CheckCircleRounded-DPmnP6hp.js";import"./Stack-DTXm74ga.js";import"./createStack-DnFOZl0w.js";import"./useThemeProps-LHtsqqCJ.js";const g=["Pagamenti","Udienze","Riscossione","Anagrafe","Lorem Ipsum","Dolor","Sit amet","Consectetur"],H={title:"Components/Tag Group",component:i,args:{visibleItems:4}},s=a=>o.jsx(i,{...a,children:g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`))}),t=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"truncate"})]})})]}),p=a=>o.jsxs(l,{width:"400px",p:"10px",sx:{border:"1px solid blue",borderRadius:"5px"},children:[o.jsx(m,{variant:"body1",children:"Tags must be in this Box"}),o.jsx("hr",{}),o.jsx(i,{...a,children:o.jsxs(o.Fragment,{children:[g.map((r,e)=>o.jsx(n,{value:r},`${e}-${r}`)),o.jsx(n,{value:"It'saverylonglonglonglonglonglonglonglonglonglonglongvalue",mode:"wrap"})]})})]}),J=["Default","TruncateValueTag","WrapValueTag"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <TagGroup {...args}>\n    {groupLabels.map((item: string, i: number) => <Tag key={`${i}-${item}`} value={item} />)}\n  </TagGroup>",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Box width="400px" p="10px" sx={{
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
