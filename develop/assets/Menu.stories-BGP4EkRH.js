import{r as c,j as n}from"./iframe-UeoK4583.js";import{M as a}from"./Menu-Dprvt6bz.js";import{B as p}from"./Button-D0Khv6Ir.js";import{M as t}from"./MenuItem-aD9rZ--u.js";import{L as u}from"./ListItemIcon-DiIcFWWy.js";import{A as d}from"./AddCircleRounded-DuxM6bvb.js";import{L as h}from"./ListItemText-DR25ukrS.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-B8X_jXFd.js";import"./styled-CvWxMvRN.js";import"./useSlotProps-BZSRsv06.js";import"./resolveComponentProps-Wl6qOvm4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BhHiLiTZ.js";import"./Paper-BDZ3FE86.js";import"./Grow-BkOU8FEv.js";import"./useTheme-Co2ufE29.js";import"./utils-C24Gt4bt.js";import"./TransitionGroupContext-3bEoF1vn.js";import"./index-YdzIi5gF.js";import"./index-CL3xlXTf.js";import"./getReactElementRef-CUTSO03e.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BNfV-xR1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CV74gxTU.js";import"./Backdrop-DO2_7rty.js";import"./List-DygjksvE.js";import"./ButtonBase-DADYQYz3.js";import"./listItemIconClasses-D5IsuB18.js";import"./listItemTextClasses-Duzsm0Dz.js";import"./dividerClasses-sDueouI1.js";import"./createSvgIcon-BDmnSp2b.js";import"./SvgIcon-CnC7-k0D.js";import"./Typography-YbG83az4.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
