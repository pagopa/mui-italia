import{j as o,a as u,r as C,e as K,f as X,_ as Y,D as B,c as oo,b as eo,B as s,h as no,p as to,l as ro}from"./iframe-UeoK4583.js";import{M as m,a as R}from"./MIBoxedModuleTitle-C7SpjFPk.js";import{a as T}from"./MIButton-DaTzsiVi.js";import{M as F}from"./MIChip-CazxKCk3.js";import{u as d}from"./useTheme-Co2ufE29.js";import{S as l}from"./Stack-BTEqUilJ.js";import{T as r}from"./Typography-YbG83az4.js";import{c as I}from"./createSvgIcon-BDmnSp2b.js";import{F as ao}from"./FormControlLabel-CorNRt4Q.js";import{u as io,c as so,a as lo}from"./DefaultPropsProvider-B8X_jXFd.js";import{S as co}from"./SwitchBase-BvSQfQuZ.js";import{s as w,r as U}from"./styled-CvWxMvRN.js";import{c as po}from"./createChainedFunction-BO_9K8Jh.js";import{S as c}from"./Skeleton-Cm2_8HjL.js";import{E as uo}from"./EmojiObjectsOutlined-CVLZdTn7.js";import{A as V}from"./Avatar-BAgNyEZm.js";import{A as G}from"./AccountBalance-8hVkqzkG.js";const mo=I(o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),xo=I(o.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ho=w("span",{name:"MuiRadioButtonIcon",shouldForwardProp:U})({position:"relative",display:"flex"}),go=w(mo,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),yo=w(xo,{name:"MuiRadioButtonIcon"})(({theme:e,ownerState:n})=>u({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Q(e){const{checked:n=!1,classes:t={},fontSize:a}=e,i=u({},e,{checked:n});return o.jsxs(ho,{className:t.root,ownerState:i,children:[o.jsx(go,{fontSize:a,className:t.background,ownerState:i}),o.jsx(yo,{fontSize:a,className:t.dot,ownerState:i})]})}const bo=C.createContext(void 0);function fo(){return C.useContext(bo)}function vo(e){return K("MuiRadio",e)}const O=X("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),jo=["checked","checkedIcon","color","icon","name","onChange","size","className"],So=e=>{const{classes:n,color:t,size:a}=e,i={root:["root",`color${B(t)}`,a!=="medium"&&`size${B(a)}`]};return u({},n,lo(i,vo,n))},Co=w(co,{shouldForwardProp:e=>U(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.size!=="medium"&&n[`size${B(t.size)}`],n[`color${B(t.color)}`]]}})(({theme:e,ownerState:n})=>u({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${n.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oo.alpha(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${O.checked}`]:{color:(e.vars||e).palette[n.color].main}},{[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Io(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const N=o.jsx(Q,{checked:!0}),H=o.jsx(Q,{}),Mo=C.forwardRef(function(n,t){var a,i;const p=io({props:n,name:"MuiRadio"}),{checked:z,checkedIcon:A=N,color:P="primary",icon:L=H,name:M,onChange:k,size:x="medium",className:D}=p,Z=Y(p,jo),_=u({},p,{color:P,size:x}),$=So(_),h=fo();let W=z;const J=po(k,h&&h.onChange);let E=M;return h&&(typeof W>"u"&&(W=Io(h.value,p.value)),typeof E>"u"&&(E=h.name)),o.jsx(Co,u({type:"radio",icon:C.cloneElement(L,{fontSize:(a=H.props.fontSize)!=null?a:x}),checkedIcon:C.cloneElement(A,{fontSize:(i=N.props.fontSize)!=null?i:x}),ownerState:_,classes:$,name:E,checked:W,onChange:J,ref:t,className:so($.root,D)},Z))}),ko=I(o.jsx("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"}),"Cached"),Bo=I(o.jsx("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg"),q=I(o.jsx("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt"),To=()=>{const e=d();return o.jsx(V,{variant:"rounded",sx:{border:"1px solid",borderColor:e.colors.neutral.black[60],bgcolor:e.colors.neutral.grey[50]},children:o.jsx(G,{sx:{color:e.colors.neutral.grey[300]}})})},Ro=()=>o.jsx(T,{variant:"text",children:"Bottone"}),wo=()=>{const e=d();return o.jsx(V,{variant:"rounded",sx:{width:44,height:44,boxSizing:"border-box",border:"1px solid",borderColor:ro(e.colors.neutral.black,.06),bgcolor:e.colors.neutral.grey[50]},children:o.jsx(G,{sx:{fontSize:to(22),color:e.colors.neutral.grey[300]}})})},zo={title:"Components/MIBoxedModule",component:m,parameters:{layout:"padded",controls:{include:["loading","loadingLabel","title","content","enableIcon","enableAction","direction"]}},args:{loading:!1,loadingLabel:"Content loading, please wait...",title:"Product title",content:"Description",enableIcon:!0,enableAction:!0},argTypes:{loading:{control:{type:"boolean"},description:"Mostra lo stato di caricamento del modulo.",table:{category:"MIBoxedModule",type:{summary:"boolean"},defaultValue:{summary:"false"}}},direction:{control:{type:"radio"},options:["horizontal","vertical"],description:"Direzione del contenuto interno. Se non valorizzata, il componente usa horizontal su desktop e vertical su mobile.",table:{category:"MIBoxedModule"}},loadingLabel:{control:{type:"text"},description:"Controllo Storybook: testo usato come localeText.loadingLabel durante lo stato di caricamento.",table:{category:"Storybook controls"}},title:{control:{type:"text"},description:"Controllo Storybook: testo usato come titolo del modulo.",table:{category:"Storybook controls"}},content:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del componente.",table:{category:"Storybook controls"}},enableIcon:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'icona.",table:{category:"Storybook controls"}},enableAction:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'action.",table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}},icon:{control:!1,table:{disable:!0}},action:{control:!1,table:{disable:!0}},slots:{control:!1,table:{disable:!0}},localeText:{control:!1,table:{disable:!0}}},render:function({content:n,enableIcon:t,title:a,children:i,enableAction:p,loadingLabel:z,loading:A,direction:P,...L}){const M=d(),k=n??i,x=t?o.jsx(To,{}):void 0,D=p?o.jsx(Ro,{}):void 0;return o.jsxs(m,{...L,loading:A,direction:P,icon:x,action:D,localeText:{loadingLabel:z},children:[a&&o.jsx(R,{children:a}),k&&o.jsxs(s,{children:[k,o.jsxs(l,{direction:"row",mt:1,alignItems:"center",children:[o.jsx(uo,{htmlColor:M.colors.purple[500],fontSize:"small"}),o.jsx(r,{variant:"caption-semibold",color:M.colors.purple[500],children:"Suggested because you are already client"})]})]})]})}},g={},y={parameters:{controls:{disable:!0}},render:function(){const n=d();return o.jsx(m,{action:o.jsx(q,{htmlColor:n.colors.blue[500]}),direction:"horizontal",children:o.jsxs(l,{direction:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:[o.jsx(r,{variant:"caption",mr:.5,color:n.colors.neutral.grey[700],children:"Codice avviso"}),o.jsx(r,{variant:"caption-semibold",mr:{xs:0,md:1},mb:{xs:1,md:0},color:n.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"}),o.jsx(F,{label:"Pagato",color:"success"})]})})}},b={parameters:{controls:{disable:!0},chromatic:{viewports:eo}},render:function(){const n=d();return o.jsxs(m,{icon:o.jsx(wo,{}),action:o.jsx(T,{variant:"text",endIcon:o.jsx(ko,{}),children:"Aggiorna documenti"}),children:[o.jsxs(l,{direction:"row",alignItems:"center",spacing:1,children:[o.jsx(R,{children:"Product title"}),o.jsx(F,{label:"Default"})]}),o.jsx(r,{component:"p",variant:"caption",mt:"2px",color:n.colors.neutral.grey[700],children:"Description"})]})}},f={parameters:{controls:{disable:!0}},render:function(){const n=d(),t=no(n.breakpoints.down("xs")),a=()=>o.jsxs(l,{direction:{xs:"column-reverse",md:"row"},justifyContent:"flex-end",spacing:3,mt:3,children:[o.jsx(T,{endIcon:o.jsx(q,{}),variant:"text",fullWidth:t,children:"Scarica documento"}),o.jsx(T,{fullWidth:t,children:"Paga 774,00 €"})]});return o.jsxs(m,{action:o.jsx(a,{}),direction:"vertical",children:[o.jsx(R,{children:"0000 0000 0000 0000 00"}),o.jsxs(l,{direction:"row",mt:"6px",children:[o.jsx(r,{variant:"caption",color:n.colors.neutral.grey[700],mr:.5,children:"Oggetto"}),o.jsx(r,{variant:"caption-semibold",color:n.colors.neutral.grey[700],children:"Accertamento TARI 2025 - 00016/2026"})]}),o.jsxs(l,{direction:"row",mt:"6px",children:[o.jsx(r,{variant:"caption",color:n.colors.neutral.grey[700],mr:.5,children:"Pagato il"}),o.jsx(r,{variant:"caption-semibold",color:n.colors.neutral.grey[700],children:"12/04/2026"})]}),o.jsxs(l,{direction:"row",mt:"6px",alignItems:"center",children:[o.jsx(r,{variant:"caption",color:n.colors.neutral.grey[700],mr:.5,children:"Status"}),o.jsx(F,{label:"Pagato",color:"success"})]})]})}},v={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento modulo in corso"}}},j={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento riepilogo pagamento in corso"},slots:{skeleton:()=>o.jsxs(s,{gap:1,display:"flex",alignItems:"center",flexDirection:"row",children:[o.jsxs(s,{display:"flex",gap:1,flexDirection:"column",flex:"1 0 0",children:[o.jsx(c,{variant:"rounded",width:"196px",height:"23px",sx:{borderRadius:"8px"}}),o.jsxs(s,{display:"flex",flexDirection:"row",children:[o.jsx(c,{variant:"rounded",width:"79px",height:"15px",sx:{borderRadius:"8px",mr:2,my:0}}),o.jsx(c,{variant:"rounded",width:"160px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsx(c,{variant:"rounded",width:"137px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsxs(s,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,children:[o.jsxs(s,{display:"flex",flexDirection:"column",gap:1,children:[o.jsx(c,{variant:"rounded",width:"79px",height:"23px",sx:{borderRadius:"8px"}}),o.jsx(c,{variant:"rounded",width:"120px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsx(c,{variant:"circular",width:"22px",height:"22px"})]})]})}}},S={parameters:{controls:{disable:!0}},render:function(){const n=d(),t=o.jsxs(l,{direction:{xs:"column",md:"row"},spacing:2,alignItems:{xs:"flex-start",md:"center"},children:[o.jsxs(s,{sx:{flex:"1 1 auto"},children:[o.jsx(R,{children:"Payment object"}),o.jsxs(s,{children:[o.jsx(r,{variant:"caption",mr:.5,color:n.colors.neutral.grey[700],children:"Codice avviso"}),o.jsx(r,{variant:"caption-semibold",color:n.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"})]}),o.jsxs(s,{children:[o.jsx(r,{variant:"caption",mr:.5,color:n.colors.neutral.grey[700],children:"Scade il"}),o.jsx(r,{variant:"caption-semibold",color:n.colors.neutral.grey[700],children:"[gg/mm/aaaa]"})]}),o.jsxs(l,{direction:"row",mt:.5,alignItems:"center",children:[o.jsx(Bo,{htmlColor:n.colors.purple[500],fontSize:"small"}),o.jsx(r,{variant:"caption-semibold",color:n.colors.purple[500],children:"Sei già cliente"})]})]}),o.jsxs(s,{textAlign:"right",sx:{flexShrink:0,width:{xs:"100%",md:"auto"}},position:"relative",left:{xs:"35px",md:0},children:[o.jsx(r,{variant:"caption-semibold",color:n.colors.blue[500],fontSize:"1rem",display:"block",children:"398,50 €"}),o.jsx(r,{variant:"caption-semibold",fontSize:"0.75rem",color:n.colors.neutral.grey[700],children:"Costi di notifica inclusi"})]})]});return o.jsx(m,{children:o.jsx(ao,{control:o.jsx(Mo,{}),label:t,labelPlacement:"start",sx:{alignItems:{xs:"flex-start",md:"center"},width:"100%",justifyContent:"space-between","& .MuiFormControlLabel-label":{width:"100%"}}})})}},Ao=["Playground","NoTitle","Action","ForceDirection","Loading","CustomSkeleton","ComplexContent"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderWithState() {
    const theme = useTheme();
    return <MIBoxedModule action={<SaveAltIcon htmlColor={theme.colors.blue[500]} />} direction="horizontal">
        <Stack direction={{
        xs: 'column',
        md: 'row'
      }} alignItems={{
        xs: 'flex-start',
        md: 'center'
      }}>
          <Typography variant="caption" mr={0.5} color={theme.colors.neutral.grey[700]}>
            Codice avviso
          </Typography>
          <Typography variant="caption-semibold" mr={{
          xs: 0,
          md: 1
        }} mb={{
          xs: 1,
          md: 0
        }} color={theme.colors.neutral.grey[700]}>
            0000 0000 0000 0000 00
          </Typography>
          <MIChip label="Pagato" color="success" />
        </Stack>
      </MIBoxedModule>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      viewports: breakpointsChromaticValues
    }
  },
  render: function RenderWithState() {
    const theme = useTheme();
    return <MIBoxedModule icon={<EntityAvatar />} action={<MIButton variant="text" endIcon={<CachedIcon />}>
            Aggiorna documenti
          </MIButton>}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MIBoxedModuleTitle>Product title</MIBoxedModuleTitle>
          <MIChip label="Default" />
        </Stack>
        <Typography component="p" variant="caption" mt="2px" color={theme.colors.neutral.grey[700]}>
          Description
        </Typography>
      </MIBoxedModule>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderWithState() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const Action = () => <Stack direction={{
      xs: 'column-reverse',
      md: 'row'
    }} justifyContent="flex-end" spacing={3} mt={3}>
        <MIButton endIcon={<SaveAltIcon />} variant="text" fullWidth={isMobile}>
          Scarica documento
        </MIButton>
        <MIButton fullWidth={isMobile}>Paga 774,00 €</MIButton>
      </Stack>;
    return <MIBoxedModule action={<Action />} direction="vertical">
        <MIBoxedModuleTitle>0000 0000 0000 0000 00</MIBoxedModuleTitle>

        <Stack direction="row" mt="6px">
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} mr={0.5}>
            Oggetto
          </Typography>
          <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
            Accertamento TARI 2025 - 00016/2026
          </Typography>
        </Stack>

        <Stack direction="row" mt="6px">
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} mr={0.5}>
            Pagato il
          </Typography>
          <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
            12/04/2026
          </Typography>
        </Stack>

        <Stack direction="row" mt="6px" alignItems="center">
          <Typography variant="caption" color={theme.colors.neutral.grey[700]} mr={0.5}>
            Status
          </Typography>
          <MIChip label="Pagato" color="success" />
        </Stack>
      </MIBoxedModule>;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    loading: true,
    localeText: {
      loadingLabel: 'Caricamento modulo in corso'
    }
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    loading: true,
    localeText: {
      loadingLabel: 'Caricamento riepilogo pagamento in corso'
    },
    slots: {
      skeleton: () => <Box gap={1} display="flex" alignItems="center" flexDirection="row">
          <Box display="flex" gap={1} flexDirection="column" flex="1 0 0">
            <Skeleton variant="rounded" width="196px" height="23px" sx={{
            borderRadius: '8px'
          }} />

            <Box display="flex" flexDirection="row">
              <Skeleton variant="rounded" width="79px" height="15px" sx={{
              borderRadius: '8px',
              mr: 2,
              my: 0
            }} />
              <Skeleton variant="rounded" width="160px" height="15px" sx={{
              borderRadius: '8px'
            }} />
            </Box>

            <Skeleton variant="rounded" width="137px" height="15px" sx={{
            borderRadius: '8px'
          }} />
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" gap={1}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Skeleton variant="rounded" width="79px" height="23px" sx={{
              borderRadius: '8px'
            }} />
              <Skeleton variant="rounded" width="120px" height="15px" sx={{
              borderRadius: '8px'
            }} />
            </Box>
            <Skeleton variant="circular" width="22px" height="22px" />
          </Box>
        </Box>
    }
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function RenderWithState() {
    const theme = useTheme();
    const radioLabel = <Stack direction={{
      xs: 'column',
      md: 'row'
    }} spacing={2} alignItems={{
      xs: 'flex-start',
      md: 'center'
    }}>
        <Box sx={{
        flex: '1 1 auto'
      }}>
          <MIBoxedModuleTitle>Payment object</MIBoxedModuleTitle>

          <Box>
            <Typography variant="caption" mr={0.5} color={theme.colors.neutral.grey[700]}>
              Codice avviso
            </Typography>
            <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
              0000 0000 0000 0000 00
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" mr={0.5} color={theme.colors.neutral.grey[700]}>
              Scade il
            </Typography>
            <Typography variant="caption-semibold" color={theme.colors.neutral.grey[700]}>
              [gg/mm/aaaa]
            </Typography>
          </Box>

          <Stack direction="row" mt={0.5} alignItems="center">
            <HowToRegIcon htmlColor={theme.colors.purple[500]} fontSize="small" />
            <Typography variant="caption-semibold" color={theme.colors.purple[500]}>
              Sei già cliente
            </Typography>
          </Stack>
        </Box>

        <Box textAlign="right" sx={{
        flexShrink: 0,
        width: {
          xs: '100%',
          md: 'auto'
        }
      }} position="relative" left={{
        xs: '35px',
        md: 0
      }}>
          <Typography variant="caption-semibold" color={theme.colors.blue[500]} fontSize="1rem" display="block">
            398,50 €
          </Typography>
          <Typography variant="caption-semibold" fontSize="0.75rem" color={theme.colors.neutral.grey[700]}>
            Costi di notifica inclusi
          </Typography>
        </Box>
      </Stack>;
    return <MIBoxedModule>
        <FormControlLabel control={<Radio />} label={radioLabel} labelPlacement="start" sx={{
        alignItems: {
          xs: 'flex-start',
          md: 'center'
        },
        width: '100%',
        justifyContent: 'space-between',
        '& .MuiFormControlLabel-label': {
          width: '100%'
        }
      }} />
      </MIBoxedModule>;
  }
}`,...S.parameters?.docs?.source}}};const Jo=Object.freeze(Object.defineProperty({__proto__:null,Action:b,ComplexContent:S,CustomSkeleton:j,ForceDirection:f,Loading:v,NoTitle:y,Playground:g,__namedExportsOrder:Ao,default:zo},Symbol.toStringTag,{value:"Module"}));export{b as A,j as C,f as F,v as L,Jo as M,y as N,S as a};
