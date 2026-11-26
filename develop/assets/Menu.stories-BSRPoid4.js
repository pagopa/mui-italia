import{r as c,j as n}from"./iframe-D2suRgZv.js";import{M as a}from"./Menu-BT8kIIn1.js";import{B as p}from"./Button-2-Dq0vFn.js";import{M as t}from"./MenuItem-Ceqw7wmD.js";import{L as u}from"./ListItemIcon-Cf681JpA.js";import{A as d}from"./AddCircleRounded-6OE8ZwCY.js";import{L as h}from"./ListItemText-DVAiPbVl.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C9pPN9CS.js";import"./styled-Dg4SAjqP.js";import"./useSlotProps-BbqPJ-Qx.js";import"./resolveComponentProps-AZibFEcc.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-qR2CMe6R.js";import"./Paper-CMMaOTor.js";import"./Grow-pOX774nb.js";import"./useTheme-Bi1oBoTE.js";import"./utils-Lq2e-y9I.js";import"./TransitionGroupContext-CriRyQ-M.js";import"./index-DLZ6Eal3.js";import"./index-pAvcHujp.js";import"./getReactElementRef-CIHR9XSW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-ynsoB7Od.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BeL3h0Wm.js";import"./Backdrop-Cge0zgS_.js";import"./List-PzIdTtaY.js";import"./ListContext-BKluAAv5.js";import"./ButtonBase-c57h5RGA.js";import"./listItemIconClasses-BZiNTu4y.js";import"./listItemTextClasses-BHd_NcUe.js";import"./dividerClasses-BpObdQ9j.js";import"./createSvgIcon-DXqKnqxi.js";import"./SvgIcon-B5OBknnD.js";import"./Typography-lSWCvWZi.js";const $={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const nn=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
