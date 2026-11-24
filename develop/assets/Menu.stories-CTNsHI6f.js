import{r as c,j as n}from"./iframe-BZIr8g2c.js";import{M as a}from"./Menu-JnJsfbez.js";import{B as p}from"./Button-CqYutGHV.js";import{M as t}from"./MenuItem-yXl6cyCa.js";import{L as u}from"./ListItemIcon-CYbtw_x8.js";import{A as d}from"./AddCircleRounded-DboLMHjw.js";import{L as h}from"./ListItemText-kVKoKwFB.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-26RYHGpy.js";import"./styled-C74EMrKI.js";import"./useSlotProps-C-ZiyOKo.js";import"./resolveComponentProps-DG62WAbE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DwqDbAPd.js";import"./Paper-DJswL_QY.js";import"./Grow-B_rkVyMY.js";import"./useTheme-Bb7eOhg8.js";import"./utils-GyIikVxa.js";import"./TransitionGroupContext-DcnNMgGE.js";import"./index-BfggY3cO.js";import"./index-BtLnuvOH.js";import"./getReactElementRef-BF20Trkt.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CCI1fG2s.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DliXxA7l.js";import"./Backdrop-DvtVq_rs.js";import"./List-ua1mvM97.js";import"./ButtonBase-o94ykCQy.js";import"./listItemIconClasses-DxfdBKOU.js";import"./listItemTextClasses-A3kv6QSE.js";import"./dividerClasses-BfEzi3l-.js";import"./createSvgIcon-C2s2QPWS.js";import"./SvgIcon-qyfv5-Sn.js";import"./Typography-vGKoBJGT.js";const Z={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const $=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
