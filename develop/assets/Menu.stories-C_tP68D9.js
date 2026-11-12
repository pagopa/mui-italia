import{r as c,j as n}from"./iframe-QS4E-7kp.js";import{M as a}from"./Menu-BRgffnKd.js";import{B as p}from"./Button-BhwEEpAB.js";import{M as t}from"./MenuItem-CfmjWqwq.js";import{L as u}from"./ListItemIcon-Cx0v1JOY.js";import{A as d}from"./AddCircleRounded-Bdb3ldU4.js";import{L as h}from"./ListItemText-4fnrBaV8.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DskoNSvz.js";import"./styled-Cp8mViLI.js";import"./useSlotProps-BWyCKIRo.js";import"./resolveComponentProps-DqWDWvXv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CBZLFoQR.js";import"./Paper-BCI3Sze-.js";import"./Grow-BzuYhFp6.js";import"./useTheme-DtdRabi7.js";import"./utils-9SvnuSH6.js";import"./TransitionGroupContext-UHTf2kEp.js";import"./index-CIqeYx7Z.js";import"./index-Dh03kj_h.js";import"./getReactElementRef-Bpxh3ycP.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-DHfqxC__.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CPSPYf0G.js";import"./Backdrop-Bx_L-Dsc.js";import"./List-ySkBfMOo.js";import"./ButtonBase-C5zr_SjN.js";import"./listItemIconClasses-tJinU3cQ.js";import"./listItemTextClasses-D6a05_YW.js";import"./dividerClasses-CC3haytq.js";import"./createSvgIcon-DZMTz-8P.js";import"./SvgIcon-DPFPFDDJ.js";import"./Typography-BhBBVfSC.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
