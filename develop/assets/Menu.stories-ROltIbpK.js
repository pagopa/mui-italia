import{r as c,j as n}from"./iframe-2X3ZxJBB.js";import{M as a}from"./Menu-Cyha9DVS.js";import{B as p}from"./Button-CKt4qX6J.js";import{M as t}from"./MenuItem-Ct8xFbQ7.js";import{L as u}from"./ListItemIcon-8AgyupnB.js";import{A as d}from"./AddCircleRounded-DlHBGPW-.js";import{L as h}from"./ListItemText-CiLUoFcT.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-LQZ2I4G8.js";import"./styled-CSThg6ob.js";import"./useSlotProps-BelVuA1F.js";import"./resolveComponentProps-oklE-LaI.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-vrRRETjr.js";import"./Paper-DaiBjWjc.js";import"./Grow-DZErd4bm.js";import"./useTheme-TBw-fLAI.js";import"./utils-B9Xpknxo.js";import"./TransitionGroupContext-ConkyLn2.js";import"./index-CxcEqGyV.js";import"./index-Chz68eeP.js";import"./getReactElementRef-DjnmNWy7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CZ0ZrDHY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CvLWWrVj.js";import"./Backdrop-CvgmQxSL.js";import"./List-CYwNHAQZ.js";import"./ListContext-DcRMFQ6t.js";import"./ButtonBase-DaB6vsJo.js";import"./listItemIconClasses-a3ro4LW1.js";import"./listItemTextClasses-CMLDIYs0.js";import"./dividerClasses-Bp6JYho7.js";import"./createSvgIcon-C6YSOS6Z.js";import"./SvgIcon-Dw8LRDkt.js";import"./Typography-BsD0WLvF.js";const $={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const nn=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};export{e as Default,nn as __namedExportsOrder,$ as default};
