import{r as c,j as n}from"./iframe-CDfDAPFk.js";import{M as a}from"./Menu-DPvdoFAj.js";import{B as p}from"./Button-BiDoaYB9.js";import{M as t}from"./MenuItem-Dh04SU7y.js";import{L as u}from"./ListItemIcon-D9Gw_NOi.js";import{A as d}from"./AddCircleRounded-OHkqNdqr.js";import{L as h}from"./ListItemText-DJwzSzCS.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./styled-tN4ayshy.js";import"./useSlotProps-DkUD6T-O.js";import"./resolveComponentProps-DNhtxahT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CNIqWbEd.js";import"./Paper-BtnOIDKN.js";import"./Grow-DkYaE8Oe.js";import"./useTheme-DDUJVjwp.js";import"./utils-DcX_SmDN.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./index-Bnc84QHD.js";import"./index-D3KWgPQG.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CJkEYfHL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-al-BQE5u.js";import"./Backdrop-UssTTFwn.js";import"./List-DxGWxlc4.js";import"./ButtonBase-WCmC4j5j.js";import"./listItemIconClasses-Dqbs3C37.js";import"./listItemTextClasses-BKzTzadW.js";import"./dividerClasses-CvupEbUz.js";import"./createSvgIcon-BbEuUIJp.js";import"./SvgIcon-C-yBIyJ3.js";import"./Typography-9AQN7ayB.js";const Y={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const Z=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
