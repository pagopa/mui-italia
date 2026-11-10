import{r as p,j as o}from"./iframe-Do2iWwl6.js";import{B as r}from"./Backdrop-CxkwvrRg.js";import{B as c}from"./Button-Y3u7qjJ7.js";import{T as i}from"./Typography-CiPK09A-.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Bbc_N8dw.js";import"./styled-DraHPSrp.js";import"./useTheme-D6XEe0y0.js";import"./utils-D8T4Hx0W.js";import"./TransitionGroupContext-dRzt1ax4.js";import"./index-NHoFLGkq.js";import"./index-CmeO_OfC.js";import"./useForkRef-CTzFoPWU.js";import"./ButtonBase-BzG1LjfL.js";const O={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const S=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return <>
      <Button variant="contained" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop open={open} onClick={handleClose}>
        <Typography color="white" variant="h3">
          Click/Tap to close
        </Typography>
      </Backdrop>
    </>;
}`,...e.parameters?.docs?.source}}};export{e as Default,S as __namedExportsOrder,O as default};
