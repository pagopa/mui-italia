import{r as c,j as n}from"./iframe-5Wy2T5h3.js";import{M as a}from"./Menu-BxNCXn7u.js";import{B as p}from"./Button-CkvxX6Vq.js";import{M as t}from"./MenuItem--zvOf3lN.js";import{L as u}from"./ListItemIcon-CGPxbZBt.js";import{A as d}from"./AddCircleRounded-loAdbibT.js";import{L as h}from"./ListItemText-fGFWKYxH.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CIIoM0-p.js";import"./styled-CRUdqmCq.js";import"./useSlotProps-CsI9Chwd.js";import"./resolveComponentProps-B7ZPKosw.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DuMiwuLC.js";import"./Paper-CjnJvMOl.js";import"./Grow-DTVxn6k3.js";import"./useTheme-BId1B-vw.js";import"./utils-CKabMFkr.js";import"./TransitionGroupContext-BnCUWMPb.js";import"./index-JNbNqKiQ.js";import"./index-DMpAINUT.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CesdzBj9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CR8ib3oi.js";import"./Backdrop-2_UANPKd.js";import"./List-DGqJeVTW.js";import"./ButtonBase-BhLrVkcf.js";import"./listItemIconClasses-Q0c5fy6w.js";import"./listItemTextClasses-DP3dbmbR.js";import"./dividerClasses-D4WBs5nz.js";import"./createSvgIcon-DmL99QgT.js";import"./SvgIcon-DdZ_-XQg.js";import"./Typography-D0v0-SYT.js";const Y={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const Z=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};export{e as Default,Z as __namedExportsOrder,Y as default};
