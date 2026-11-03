import{r as c,j as n}from"./iframe--Veu_H0i.js";import{M as a}from"./Menu-CFRZOorh.js";import{B as p}from"./Button--MV15_HC.js";import{M as t}from"./MenuItem-fbTTlMMt.js";import{L as u}from"./ListItemIcon-DZm4cUNU.js";import{A as d}from"./AddCircleRounded-CPwavWj6.js";import{L as h}from"./ListItemText-Qg5Jo0vi.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-CvO-XTiv.js";import"./styled-CSprtNKk.js";import"./useSlotProps-C-enEAQe.js";import"./resolveComponentProps-DBw8yxvm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BylnVgws.js";import"./Paper-DFJr4nZJ.js";import"./Grow-BL3mP394.js";import"./useTheme-CfF9d9rw.js";import"./utils-D-va7lpp.js";import"./TransitionGroupContext-DGEyIdyq.js";import"./index-KVX4_Kyo.js";import"./index-D22e8-md.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BLaPJWd2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DfWvea1R.js";import"./Backdrop-DReJv6gb.js";import"./List-liAYxLEi.js";import"./ButtonBase-B0hIrA6B.js";import"./listItemIconClasses-BUOFc76e.js";import"./listItemTextClasses--zzdN5dT.js";import"./dividerClasses-BMu7XgQC.js";import"./createSvgIcon-CpLUNxU5.js";import"./SvgIcon-BVB0onhD.js";import"./Typography-DTg26sul.js";const Y={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const Z=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
