import{r as c,j as n}from"./iframe-ByoTlC9Q.js";import{M as a}from"./Menu-uGkA2taP.js";import{B as p}from"./Button-DITFemx5.js";import{M as t}from"./MenuItem-ijjRCDmu.js";import{L as u}from"./ListItemIcon-CpmUESA8.js";import{A as d}from"./AddCircleRounded-LwjMEiZs.js";import{L as h}from"./ListItemText-D4PCUCnz.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DGsnD8AD.js";import"./styled-1Q9tXkxe.js";import"./useSlotProps-fCAmVprl.js";import"./resolveComponentProps-DFYKieea.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DBOtKc3X.js";import"./Paper-VRsON9tn.js";import"./Grow-ZZgLPD9v.js";import"./useTheme-ce18xD2I.js";import"./utils-x3U2XCHh.js";import"./TransitionGroupContext-Ccv7Y6Ew.js";import"./index-C3HY6R9u.js";import"./index-C0xsyHpE.js";import"./getReactElementRef-CP3g2otq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bvp72AYE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BC_yz0lI.js";import"./Backdrop-BHTk6LYe.js";import"./List-BFx_6zT2.js";import"./ButtonBase-BEVN0AM_.js";import"./listItemIconClasses-96msDJtp.js";import"./listItemTextClasses-putxnxWC.js";import"./dividerClasses-BOx9ErkM.js";import"./createSvgIcon-Ui3HqnD1.js";import"./SvgIcon-ZF511irs.js";import"./Typography-BUFn3w4e.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
