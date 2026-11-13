import{r as c,j as n}from"./iframe-CIrS23cw.js";import{M as a}from"./Menu-BPPQv57w.js";import{B as p}from"./Button-BnqwMWPM.js";import{M as t}from"./MenuItem-pNERoLqr.js";import{L as u}from"./ListItemIcon-BqTEkkPB.js";import{A as d}from"./AddCircleRounded-DALcdhnK.js";import{L as h}from"./ListItemText-D1yZTmEc.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./styled-C6B4F5zM.js";import"./useSlotProps-IC8Zf0Uw.js";import"./resolveComponentProps-BM5yZ89Q.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CBQP0s6I.js";import"./Paper-BbB74qzV.js";import"./Grow-DOpMj5Vc.js";import"./useTheme-DrsUlJ74.js";import"./utils-DdJQOc7R.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./index-Thcbd2iF.js";import"./index-Ck8gTmYH.js";import"./getReactElementRef-x6XiUDE9.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-JkPBgbYF.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-WI67lwan.js";import"./Backdrop-kFps8nww.js";import"./List-Bx7zJ13z.js";import"./ButtonBase-BfUaq9Uf.js";import"./listItemIconClasses-C2-quctp.js";import"./listItemTextClasses-BWsttFUg.js";import"./dividerClasses-CrOPU__-.js";import"./createSvgIcon-DOz7MUQP.js";import"./SvgIcon-CmWwVM1A.js";import"./Typography-BznXhrek.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
