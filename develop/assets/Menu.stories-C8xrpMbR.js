import{r as c,j as n}from"./iframe-DLqg6HX8.js";import{M as a}from"./Menu-BPwQNkMP.js";import{B as p}from"./Button-BALsOiSe.js";import{M as t}from"./MenuItem-BchdGVOu.js";import{L as u}from"./ListItemIcon-Cd2KT6SM.js";import{A as d}from"./AddCircleRounded-9yJGZz3K.js";import{L as h}from"./ListItemText-B6Dy0iYd.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-C0MVbvlw.js";import"./styled-BxDKlw5F.js";import"./useSlotProps-qdPkKgV-.js";import"./resolveComponentProps-DL8-z4ZK.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-QQIssf4j.js";import"./Paper-j_zfQP1o.js";import"./Grow-CMZG1PpA.js";import"./useTheme-B4I3gTml.js";import"./utils-BL_otCjh.js";import"./TransitionGroupContext-BdgLX1mE.js";import"./index-DByGtAqR.js";import"./index-DsQGSP8e.js";import"./getReactElementRef-B76VvR63.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-BLDyGXR8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-qD7zO2ig.js";import"./Backdrop-BPTkEcRC.js";import"./List-DsQxTWek.js";import"./ButtonBase-ChpoghoR.js";import"./listItemIconClasses-Cb35rUR2.js";import"./listItemTextClasses-DbWviVHK.js";import"./dividerClasses-gDvId7dV.js";import"./createSvgIcon-ByJkEFeY.js";import"./SvgIcon-CvcryhUT.js";import"./Typography-B2s-Ogo4.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
