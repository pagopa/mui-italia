import{r as p,j as o}from"./iframe-BZIr8g2c.js";import{B as r}from"./Backdrop-DvtVq_rs.js";import{B as c}from"./Button-CqYutGHV.js";import{T as i}from"./Typography-vGKoBJGT.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-26RYHGpy.js";import"./styled-C74EMrKI.js";import"./useTheme-Bb7eOhg8.js";import"./utils-GyIikVxa.js";import"./TransitionGroupContext-DcnNMgGE.js";import"./index-BfggY3cO.js";import"./index-BtLnuvOH.js";import"./useForkRef-DwqDbAPd.js";import"./getReactElementRef-BF20Trkt.js";import"./ButtonBase-o94ykCQy.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};export{e as Default,v as __namedExportsOrder,S as default};
