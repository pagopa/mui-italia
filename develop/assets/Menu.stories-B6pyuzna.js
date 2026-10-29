import{r as c,j as n}from"./iframe-EJCMhezF.js";import{M as a}from"./Menu-CVwePGwc.js";import{B as p}from"./Button-DLK5id5n.js";import{M as t}from"./MenuItem-Dy-9dW-p.js";import{L as u}from"./ListItemIcon-qTf_nwzI.js";import{A as d}from"./AddCircleRounded-CIV716b2.js";import{L as h}from"./ListItemText-DQA_k7dB.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Cs_XeeBw.js";import"./styled-DRDTacfX.js";import"./useSlotProps-BQCHbPnp.js";import"./resolveComponentProps-FNbyDh7J.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CLOggWa6.js";import"./Paper-dYyLIbKF.js";import"./Grow-DG6YlP3O.js";import"./useTheme-C9TzCYyI.js";import"./utils-DPT7uM0p.js";import"./TransitionGroupContext-DqkEOCIG.js";import"./index-CD7GOfqp.js";import"./index-C4_o-THT.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-COfxLcVw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DkwA15hK.js";import"./Backdrop-BuDdHXf6.js";import"./List-iCGbns_O.js";import"./ButtonBase-BYlwM-_S.js";import"./listItemIconClasses-BuqAPFSv.js";import"./listItemTextClasses-CpVyitVI.js";import"./dividerClasses-D333aoAq.js";import"./createSvgIcon-BPgnJqPn.js";import"./SvgIcon-BAFrDdJe.js";import"./Typography-DLgU8XWP.js";const Y={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const Z=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
