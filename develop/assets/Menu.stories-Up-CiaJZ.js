import{r as c,j as n}from"./iframe-BFNOB_y6.js";import{M as a}from"./Menu-BEwlwHXq.js";import{B as p}from"./Button-CbWtR1KO.js";import{M as t}from"./MenuItem-6SF_vPET.js";import{L as u}from"./ListItemIcon-sFFHrsby.js";import{A as d}from"./AddCircleRounded-CVW9WGx3.js";import{L as h}from"./ListItemText-DluqAXZY.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-B_LwGPKB.js";import"./styled-Cz4HiKLZ.js";import"./useSlotProps-D9ohKvxR.js";import"./resolveComponentProps-D8tPrrtR.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BF9WlKKq.js";import"./Paper-BkIryZVP.js";import"./Grow-BgyZl9O2.js";import"./useTheme-C9FgiBBS.js";import"./utils-CR8_5X8g.js";import"./TransitionGroupContext-Bm58Dos8.js";import"./index-Ci01uZSO.js";import"./index-BGbn-GBN.js";import"./getReactElementRef-CFBcUj76.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cx3N1H6u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DWClkEhw.js";import"./Backdrop-tMu91c7w.js";import"./List-Cqw6tsAo.js";import"./ButtonBase-BAsQVFTs.js";import"./listItemIconClasses-Uv0o71ej.js";import"./listItemTextClasses-CpCA480u.js";import"./dividerClasses-CsdWF31_.js";import"./createSvgIcon-Dxz1zQvO.js";import"./SvgIcon-z4cUbE7h.js";import"./Typography-D1Awp86s.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
