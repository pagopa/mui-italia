import{r as c,j as n}from"./iframe-CL-nofVy.js";import{M as a}from"./Menu-CQoUesTe.js";import{B as p}from"./Button-CuoZ7k1t.js";import{M as t}from"./MenuItem-BfXC2JM-.js";import{L as u}from"./ListItemIcon-Z4ThNiUF.js";import{A as d}from"./AddCircleRounded-N6HOEGR9.js";import{L as h}from"./ListItemText-BW3G8PBm.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CUarE2Ck.js";import"./styled-ovOPsWgk.js";import"./useSlotProps-7FeIQ9Eg.js";import"./resolveComponentProps-BZFCHnpD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-FJdE9ynN.js";import"./Paper-D6WCdEAS.js";import"./Grow-BtfEH-Ui.js";import"./useTheme-D4iwhroH.js";import"./utils-DWjdt6ri.js";import"./TransitionGroupContext-C7nOtKIy.js";import"./index-B36LPZwX.js";import"./index-BAHv-n70.js";import"./getReactElementRef-BJzfQJXO.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dou6J6cK.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CW1uKa3W.js";import"./Backdrop-BI0vZlIF.js";import"./List-BJ8SSYE_.js";import"./ButtonBase-DHfqvIli.js";import"./listItemIconClasses-DT-XBSV6.js";import"./listItemTextClasses-Co2Z3-4a.js";import"./dividerClasses-C64rEYkl.js";import"./createSvgIcon-CZbxXrtE.js";import"./SvgIcon-DBqYGDsd.js";import"./Typography-Cz4LsPd3.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
