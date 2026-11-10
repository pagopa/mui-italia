import{r as c,j as n}from"./iframe-DqKsui2S.js";import{M as a}from"./Menu-CFYCK8DL.js";import{B as p}from"./Button-BmaoHrVN.js";import{M as t}from"./MenuItem-CWw5E7ip.js";import{L as u}from"./ListItemIcon-C6-AuURX.js";import{A as d}from"./AddCircleRounded-DUxDTqCY.js";import{L as h}from"./ListItemText-DTczOWTP.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-BIx6xIqx.js";import"./styled-Df695Bk_.js";import"./useSlotProps-D5tRl93H.js";import"./resolveComponentProps-CrsE4bTA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CLmtxq_Y.js";import"./Paper-C1twuA-f.js";import"./Grow-DmB0QswF.js";import"./useTheme-D3Y4xEPH.js";import"./utils-CWuA1miZ.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./index-CvYkzCFT.js";import"./index-PZjx7uM8.js";import"./getReactElementRef-D1eMIxFv.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-DTq_ULZW.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-D_iRFePj.js";import"./Backdrop-BctZ34jH.js";import"./List-Ce3OYsrG.js";import"./ButtonBase-BDS4PFr6.js";import"./listItemIconClasses-BL8q_DWn.js";import"./listItemTextClasses-Bzrbunrh.js";import"./dividerClasses-C6rQjQLF.js";import"./createSvgIcon-bbdnzGJh.js";import"./SvgIcon-DZqMrxle.js";import"./Typography-DaPIykBW.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Button variant="contained" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        Action Menu
      </Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{
      'aria-labelledby': 'basic-button'
    }}>
        <MenuItem onClick={handleClose}>A very looooong item</MenuItem>
        <MenuItem onClick={handleClose}>A normal one</MenuItem>
        <MenuItem onClick={handleClose}>Short</MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleRoundedIcon fontSize="inherit" />
          </ListItemIcon>
          <ListItemText>With icon</ListItemText>
        </MenuItem>
      </Menu>
    </>;
}`,...e.parameters?.docs?.source}}};export{e as Default,$ as __namedExportsOrder,Z as default};
