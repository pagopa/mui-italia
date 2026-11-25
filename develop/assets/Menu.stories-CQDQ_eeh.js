import{r as c,j as n}from"./iframe-6MQXqINC.js";import{M as a}from"./Menu-DgrH3aSW.js";import{B as p}from"./Button-dlB2ry0u.js";import{M as t}from"./MenuItem-B5uyZdG5.js";import{L as u}from"./ListItemIcon-BjcgRNy_.js";import{A as d}from"./AddCircleRounded-B8kHe85l.js";import{L as h}from"./ListItemText-BUqPodMa.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-lqupZO0f.js";import"./styled-CKtE3LBS.js";import"./useSlotProps-Pf3Any7V.js";import"./resolveComponentProps-CsVhd-mo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-yWUxwg9H.js";import"./Paper-Cz0z0t-m.js";import"./Grow-dpu60i7m.js";import"./useTheme-CT6pqya3.js";import"./utils-BEe1xe9s.js";import"./TransitionGroupContext-ChxoeE96.js";import"./index-Cnm0vLjP.js";import"./index-D2qA3XRf.js";import"./getReactElementRef-CqbYMo6Z.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal--lygC2oe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BBKilzSC.js";import"./Backdrop-CS-DBVpF.js";import"./List-Ca5ihrnF.js";import"./ListContext-Pcr2Hw3F.js";import"./ButtonBase-BspQdHa2.js";import"./listItemIconClasses-B9nyDx1m.js";import"./listItemTextClasses-htoWa2RV.js";import"./dividerClasses-CgxMar12.js";import"./createSvgIcon-DyGXVuQl.js";import"./SvgIcon-CMBky-ty.js";import"./Typography-C7bhwkwa.js";const $={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const nn=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
