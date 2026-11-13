import{r as p,j as o}from"./iframe-CIrS23cw.js";import{B as r}from"./Backdrop-kFps8nww.js";import{B as c}from"./Button-BnqwMWPM.js";import{T as i}from"./Typography-BznXhrek.js";import"./preload-helper-PPVm8Dsz.js";import"./DefaultPropsProvider-Cq_c-I1J.js";import"./styled-C6B4F5zM.js";import"./useTheme-DrsUlJ74.js";import"./utils-DdJQOc7R.js";import"./TransitionGroupContext-CP3rn5E1.js";import"./index-Thcbd2iF.js";import"./index-Ck8gTmYH.js";import"./useForkRef-CBQP0s6I.js";import"./getReactElementRef-x6XiUDE9.js";import"./ButtonBase-BfUaq9Uf.js";const S={title:"MUI Components/Feedback/Backdrop",component:r},e=()=>{const[n,t]=p.useState(!1),a=()=>{t(!1)},s=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsx(c,{variant:"contained",onClick:s,children:"Show backdrop"}),o.jsx(r,{open:n,onClick:a,children:o.jsx(i,{color:"white",variant:"h3",children:"Click/Tap to close"})})]})};e.parameters={controls:{hideNoControlsWarning:!0}};const v=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
