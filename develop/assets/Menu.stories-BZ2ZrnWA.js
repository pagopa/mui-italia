import{r as c,j as o}from"./iframe-rw-T87Ps.js";import{M as a}from"./Menu-DZdFlM9J.js";import{B as p}from"./Button-DRjStLay.js";import{M as n}from"./MenuItem-0tj72G9H.js";import{L as u}from"./ListItemIcon-CE2IfQ_2.js";import{A as d}from"./AddCircleRounded-DK-hvQAQ.js";import{L as h}from"./ListItemText-CBkDu_h0.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./styled-BbRqDVtB.js";import"./useSlotProps-BJPoFs7q.js";import"./resolveComponentProps-D4UfrecV.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D1JMp28z.js";import"./Paper-6XyShZCf.js";import"./Grow-DhIkgxjk.js";import"./useTheme-xu0WuyZg.js";import"./utils-z-7-CUm-.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./index-DJZS50BD.js";import"./index-B7uUZu8r.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-AHzXhWNy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cl8VqIp1.js";import"./Backdrop-DnG8wF6D.js";import"./List-DZ2vjiji.js";import"./ButtonBase-B-e_mOzE.js";import"./listItemIconClasses-Bd-0zwWc.js";import"./listItemTextClasses-DOtnDyuQ.js";import"./dividerClasses-DeGQ0NEE.js";import"./createSvgIcon-BLI2zqKg.js";import"./SvgIcon-BqyspOV3.js";import"./Typography-DIxyHfgM.js";const Y={title:"MUI Components/Navigation/Menu",component:a},t=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},e=()=>{s(null)};return o.jsxs(o.Fragment,{children:[o.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),o.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:e,MenuListProps:{"aria-labelledby":"basic-button"},children:[o.jsx(n,{onClick:e,children:"A very looooong item"}),o.jsx(n,{onClick:e,children:"A normal one"}),o.jsx(n,{onClick:e,children:"Short"}),o.jsxs(n,{onClick:e,children:[o.jsx(u,{children:o.jsx(d,{fontSize:"inherit"})}),o.jsx(h,{children:"With icon"})]})]})]})};t.parameters={controls:{hideNoControlsWarning:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const Z=["Default"];export{t as Default,Z as __namedExportsOrder,Y as default};
