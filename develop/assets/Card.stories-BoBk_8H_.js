import{e as h,f as x,r as y,_ as f,a as r,j as a}from"./iframe-DqKsui2S.js";import{u as v,c as b,a as A}from"./DefaultPropsProvider-BIx6xIqx.js";import{s as M}from"./styled-Df695Bk_.js";import{P as k}from"./Paper-C1twuA-f.js";import{T as p}from"./Typography-DaPIykBW.js";import{B as j}from"./Button-BmaoHrVN.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonBase-BDS4PFr6.js";import"./TransitionGroupContext-CfZLwTR8.js";import"./useForkRef-CLmtxq_Y.js";function _(t){return h("MuiCard",t)}x("MuiCard",["root"]);const F=["className","raised"],U=t=>{const{classes:o}=t;return A({root:["root"]},_,o)},P=M(k,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),N=y.forwardRef(function(o,e){const n=v({props:o,name:"MuiCard"}),{className:i,raised:c=!1}=n,d=f(n,F),s=r({},n,{raised:c}),l=U(s);return a.jsx(P,r({className:b(l.root,i),elevation:c?8:void 0,ref:e,ownerState:s},d))});function z(t){return h("MuiCardActions",t)}x("MuiCardActions",["root","spacing"]);const E=["disableSpacing","className"],O=t=>{const{classes:o,disableSpacing:e}=t;return A({root:["root",!e&&"spacing"]},z,o)},$=M("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableSpacing&&o.spacing]}})(({ownerState:t})=>r({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),B=y.forwardRef(function(o,e){const n=v({props:o,name:"MuiCardActions"}),{disableSpacing:i=!1,className:c}=n,d=f(n,E),s=r({},n,{disableSpacing:i}),l=O(s);return a.jsx($,r({className:b(l.root,c),ownerState:s,ref:e},d))});function V(t){return h("MuiCardContent",t)}x("MuiCardContent",["root"]);const D=["className","component"],L=t=>{const{classes:o}=t;return A({root:["root"]},V,o)},G=M("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),I=y.forwardRef(function(o,e){const n=v({props:o,name:"MuiCardContent"}),{className:i,component:c="div"}=n,d=f(n,D),s=r({},n,{component:c}),l=L(s);return a.jsx(G,r({as:c,className:b(l.root,i),ownerState:s,ref:e},d))});function q(t){return h("MuiCardMedia",t)}x("MuiCardMedia",["root","media","img"]);const H=["children","className","component","image","src","style"],J=t=>{const{classes:o,isMediaComponent:e,isImageComponent:n}=t;return A({root:["root",e&&"media",n&&"img"]},q,o)},K=M("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t,{isMediaComponent:n,isImageComponent:i}=e;return[o.root,n&&o.media,i&&o.img]}})(({ownerState:t})=>r({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),Q=["video","audio","picture","iframe","img"],X=["picture","img"],Y=y.forwardRef(function(o,e){const n=v({props:o,name:"MuiCardMedia"}),{children:i,className:c,component:d="div",image:s,src:l,style:R}=n,S=f(n,H),g=Q.indexOf(d)!==-1,T=!g&&s?r({backgroundImage:`url("${s}")`},R):R,w=r({},n,{component:d,isMediaComponent:g,isImageComponent:X.indexOf(d)!==-1}),W=J(w);return a.jsx(K,r({className:b(W.root,c),as:d,role:!g&&s?"img":void 0,ref:e,style:T,ownerState:w,src:g?s||l:void 0},S,{children:i}))}),ct={title:"Mui Components/Surfaces/Card",component:N,parameters:{controls:{sort:"size"}},decorators:[t=>a.jsx("div",{style:{padding:"2em",backgroundColor:"#F5F5F5"},children:a.jsx(t,{})})]},m=()=>a.jsxs(N,{sx:{minWidth:275,maxWidth:300},children:[a.jsxs(I,{children:[a.jsx(p,{variant:"h6",gutterBottom:!0,children:"Check IBAN"}),a.jsx(p,{variant:"body2",children:"Verifica l'abbinamento di un IBAN ad un CF di un cittadino o di un'impresa."})]}),a.jsx(B,{children:a.jsx(j,{variant:"outlined",size:"small",children:"Attiva prodotto"})})]});m.parameters={controls:{hideNoControlsWarning:!0}};const u=()=>a.jsxs(N,{raised:!0,sx:{minWidth:275,maxWidth:300},children:[a.jsxs(I,{children:[a.jsx(p,{variant:"h6",gutterBottom:!0,children:"Check IBAN"}),a.jsx(p,{variant:"body2",children:"Verifica l'abbinamento di un IBAN ad un CF di un cittadino o di un'impresa."})]}),a.jsx(B,{children:a.jsx(j,{variant:"outlined",size:"small",children:"Attiva prodotto"})})]});u.parameters={controls:{hideNoControlsWarning:!0}};const C=()=>a.jsxs(N,{raised:!0,sx:{maxWidth:300},children:[a.jsx(Y,{component:"img",height:"200",image:"https://www.pagopa.it/static/a94115c08531ba61e1f714ca9b9eadf3/c31a8/comp-img%402x.webp",alt:"pagoPA"}),a.jsxs(I,{children:[a.jsx(p,{variant:"h6",gutterBottom:!0,children:"Check IBAN"}),a.jsx(p,{variant:"body2",children:"Verifica l'abbinamento di un IBAN ad un CF di un cittadino o di un'impresa."})]}),a.jsx(B,{children:a.jsx(j,{variant:"outlined",size:"small",children:"Attiva prodotto"})})]});C.parameters={controls:{hideNoControlsWarning:!0}};const lt=["Default","Raised","WithMedia"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <Card sx={{
  minWidth: 275,
  maxWidth: 300
}}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Check IBAN
      </Typography>
      <Typography variant="body2">
        Verifica l&apos;abbinamento di un IBAN ad un CF di un cittadino o di un&apos;impresa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">
        Attiva prodotto
      </Button>
    </CardActions>
  </Card>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <Card raised sx={{
  minWidth: 275,
  maxWidth: 300
}}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Check IBAN
      </Typography>
      <Typography variant="body2">
        Verifica l&apos;abbinamento di un IBAN ad un CF di un cittadino o di un&apos;impresa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">
        Attiva prodotto
      </Button>
    </CardActions>
  </Card>`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Card raised sx={{
  maxWidth: 300
}}>
    <CardMedia component="img" height="200" image="https://www.pagopa.it/static/a94115c08531ba61e1f714ca9b9eadf3/c31a8/comp-img%402x.webp" alt="pagoPA" />
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Check IBAN
      </Typography>
      <Typography variant="body2">
        Verifica l&apos;abbinamento di un IBAN ad un CF di un cittadino o di un&apos;impresa.
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">
        Attiva prodotto
      </Button>
    </CardActions>
  </Card>`,...C.parameters?.docs?.source}}};export{m as Default,u as Raised,C as WithMedia,lt as __namedExportsOrder,ct as default};
