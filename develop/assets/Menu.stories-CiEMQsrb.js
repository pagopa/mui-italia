import{r as c,j as n}from"./iframe-Do2iWwl6.js";import{M as a}from"./Menu-BUmYGL1N.js";import{B as p}from"./Button-Y3u7qjJ7.js";import{M as t}from"./MenuItem-b8cxDTnS.js";import{L as u}from"./ListItemIcon-D2sPsZ5W.js";import{A as d}from"./AddCircleRounded-CVu4txRf.js";import{L as h}from"./ListItemText-BibVTiER.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Bbc_N8dw.js";import"./styled-DraHPSrp.js";import"./useSlotProps-DXm84P3q.js";import"./resolveComponentProps-lqsoT0q7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CTzFoPWU.js";import"./Paper-BC51vmns.js";import"./Grow-B9IQJKeu.js";import"./useTheme-D6XEe0y0.js";import"./utils-D8T4Hx0W.js";import"./TransitionGroupContext-dRzt1ax4.js";import"./index-NHoFLGkq.js";import"./index-CmeO_OfC.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-rw7nwyL6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CHXDxYw6.js";import"./Backdrop-CxkwvrRg.js";import"./List-Dr3UVcUt.js";import"./ButtonBase-BzG1LjfL.js";import"./listItemIconClasses-DoawQ5PD.js";import"./listItemTextClasses-BIlacF7u.js";import"./dividerClasses-DjWnIthi.js";import"./createSvgIcon-Ds57flxF.js";import"./SvgIcon-X6H-8jcg.js";import"./Typography-CiPK09A-.js";const Y={title:"MUI Components/Navigation/Menu",component:a},e=()=>{const[i,s]=c.useState(null),r=!!i,l=m=>{s(m.currentTarget)},o=()=>{s(null)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:l,children:"Action Menu"}),n.jsxs(a,{id:"basic-menu",anchorEl:i,open:r,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[n.jsx(t,{onClick:o,children:"A very looooong item"}),n.jsx(t,{onClick:o,children:"A normal one"}),n.jsx(t,{onClick:o,children:"Short"}),n.jsxs(t,{onClick:o,children:[n.jsx(u,{children:n.jsx(d,{fontSize:"inherit"})}),n.jsx(h,{children:"With icon"})]})]})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const Z=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
