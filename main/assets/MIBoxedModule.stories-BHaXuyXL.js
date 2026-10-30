import{j as o,d as p,r as v,f as q,h as Z,_ as J,D as k,e as K,B as s,u as X}from"./iframe-CDfDAPFk.js";import{M as j,a as F}from"./MIBoxedModuleTitle-hwWVLNk4.js";import{a as D}from"./MIButton-Dvkhp4m4.js";import{M as N}from"./MIChip-Bt7UmFNO.js";import{u as S}from"./useTheme-DDUJVjwp.js";import{S as l}from"./Stack-CQ_WFl_6.js";import{T as r}from"./Typography-9AQN7ayB.js";import{c as M}from"./createSvgIcon-BbEuUIJp.js";import{F as Y}from"./FormControlLabel-BMw69ERn.js";import{u as oo,c as eo,a as no}from"./DefaultPropsProvider-C1uSP4Zq.js";import{S as to}from"./SwitchBase-DYcLFI22.js";import{s as B,r as U}from"./styled-tN4ayshy.js";import{c as ro}from"./createChainedFunction-BO_9K8Jh.js";import{S as c}from"./Skeleton-BfoFEhTd.js";import{E as ao}from"./EmojiObjectsOutlined-CM9odPpL.js";import{A as io}from"./Avatar-dqKK86a5.js";import{A as so}from"./AccountBalance-BIIi23Zd.js";const lo=M(o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),co=M(o.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),po=B("span",{name:"MuiRadioButtonIcon",shouldForwardProp:U})({position:"relative",display:"flex"}),uo=B(lo,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),mo=B(co,{name:"MuiRadioButtonIcon"})(({theme:n,ownerState:e})=>p({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})}));function H(n){const{checked:e=!1,classes:t={},fontSize:a}=n,i=p({},n,{checked:e});return o.jsxs(po,{className:t.root,ownerState:i,children:[o.jsx(uo,{fontSize:a,className:t.background,ownerState:i}),o.jsx(mo,{fontSize:a,className:t.dot,ownerState:i})]})}const xo=v.createContext(void 0);function ho(){return v.useContext(xo)}function go(n){return q("MuiRadio",n)}const $=Z("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),yo=["checked","checkedIcon","color","icon","name","onChange","size","className"],bo=n=>{const{classes:e,color:t,size:a}=n,i={root:["root",`color${k(t)}`,a!=="medium"&&`size${k(a)}`]};return p({},e,no(i,go,e))},fo=B(to,{shouldForwardProp:n=>U(n)||n==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.size!=="medium"&&e[`size${k(t.size)}`],e[`color${k(t.color)}`]]}})(({theme:n,ownerState:e})=>p({color:(n.vars||n).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${e.color==="default"?n.vars.palette.action.activeChannel:n.vars.palette[e.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:K.alpha(e.color==="default"?n.palette.action.active:n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${$.checked}`]:{color:(n.vars||n).palette[e.color].main}},{[`&.${$.disabled}`]:{color:(n.vars||n).palette.action.disabled}}));function vo(n,e){return typeof e=="object"&&e!==null?n===e:String(n)===String(e)}const E=o.jsx(H,{checked:!0}),O=o.jsx(H,{}),jo=v.forwardRef(function(e,t){var a,i;const d=oo({props:e,name:"MuiRadio"}),{checked:T,checkedIcon:R=E,color:w="primary",icon:z=O,name:C,onChange:I,size:u="medium",className:P}=d,V=J(d,yo),W=p({},d,{color:w,size:u}),_=bo(W),m=ho();let A=T;const Q=ro(I,m&&m.onChange);let L=C;return m&&(typeof A>"u"&&(A=vo(m.value,d.value)),typeof L>"u"&&(L=m.name)),o.jsx(fo,p({type:"radio",icon:v.cloneElement(z,{fontSize:(a=O.props.fontSize)!=null?a:u}),checkedIcon:v.cloneElement(R,{fontSize:(i=E.props.fontSize)!=null?i:u}),ownerState:W,classes:_,name:L,checked:A,onChange:Q,ref:t,className:eo(_.root,P)},V))}),So=M(o.jsx("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg"),G=M(o.jsx("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt"),Co=()=>{const n=S();return o.jsx(io,{variant:"rounded",sx:{border:"1px solid",borderColor:n.colors.neutral.black[60],bgcolor:n.colors.neutral.grey[50]},children:o.jsx(so,{sx:{color:n.colors.neutral.grey[300]}})})},Io=()=>o.jsx(D,{variant:"text",children:"Bottone"}),ko={title:"Components/MIBoxedModule",component:j,parameters:{layout:"padded",controls:{include:["loading","loadingLabel","title","content","enableIcon","enableAction","direction"]}},args:{loading:!1,loadingLabel:"Content loading, please wait...",title:"Product title",content:"Description",enableIcon:!0,enableAction:!0},argTypes:{loading:{control:{type:"boolean"},description:"Mostra lo stato di caricamento del modulo.",table:{category:"MIBoxedModule",type:{summary:"boolean"},defaultValue:{summary:"false"}}},direction:{control:{type:"radio"},options:["horizontal","vertical"],description:"Direzione del contenuto interno. Se non valorizzata, il componente usa horizontal su desktop e vertical su mobile.",table:{category:"MIBoxedModule"}},loadingLabel:{control:{type:"text"},description:"Controllo Storybook: testo usato come localeText.loadingLabel durante lo stato di caricamento.",table:{category:"Storybook controls"}},title:{control:{type:"text"},description:"Controllo Storybook: testo usato come titolo del modulo.",table:{category:"Storybook controls"}},content:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del componente.",table:{category:"Storybook controls"}},enableIcon:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'icona.",table:{category:"Storybook controls"}},enableAction:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'action.",table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}},icon:{control:!1,table:{disable:!0}},action:{control:!1,table:{disable:!0}},slots:{control:!1,table:{disable:!0}},localeText:{control:!1,table:{disable:!0}}},render:function({content:e,enableIcon:t,title:a,children:i,enableAction:d,loadingLabel:T,loading:R,direction:w,...z}){const C=S(),I=e??i,u=t?o.jsx(Co,{}):void 0,P=d?o.jsx(Io,{}):void 0;return o.jsxs(j,{...z,loading:R,direction:w,icon:u,action:P,localeText:{loadingLabel:T},children:[a&&o.jsx(F,{children:a}),I&&o.jsxs(s,{children:[I,o.jsxs(l,{direction:"row",mt:1,alignItems:"center",children:[o.jsx(ao,{htmlColor:C.colors.purple[500],fontSize:"small"}),o.jsx(r,{variant:"caption-semibold",color:C.colors.purple[500],children:"Suggested because you are already client"})]})]})]})}},x={},h={parameters:{controls:{disable:!0}},render:function(){const e=S();return o.jsx(j,{action:o.jsx(G,{htmlColor:e.colors.blue[500]}),direction:"horizontal",children:o.jsxs(l,{direction:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:[o.jsx(r,{variant:"caption",mr:.5,color:e.colors.neutral.grey[700],children:"Codice avviso"}),o.jsx(r,{variant:"caption-semibold",mr:{xs:0,md:1},mb:{xs:1,md:0},color:e.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"}),o.jsx(N,{label:"Pagato",color:"success"})]})})}},g={parameters:{controls:{disable:!0}},render:function(){const e=S(),t=X(e.breakpoints.down("xs")),a=()=>o.jsxs(l,{direction:{xs:"column-reverse",md:"row"},justifyContent:"flex-end",spacing:3,mt:3,children:[o.jsx(D,{endIcon:o.jsx(G,{}),variant:"text",fullWidth:t,children:"Scarica documento"}),o.jsx(D,{fullWidth:t,children:"Paga 774,00 €"})]});return o.jsxs(j,{action:o.jsx(a,{}),direction:"vertical",children:[o.jsx(F,{children:"0000 0000 0000 0000 00"}),o.jsxs(l,{direction:"row",mt:"6px",children:[o.jsx(r,{variant:"caption",color:e.colors.neutral.grey[700],mr:.5,children:"Oggetto"}),o.jsx(r,{variant:"caption-semibold",color:e.colors.neutral.grey[700],children:"Accertamento TARI 2025 - 00016/2026"})]}),o.jsxs(l,{direction:"row",mt:"6px",children:[o.jsx(r,{variant:"caption",color:e.colors.neutral.grey[700],mr:.5,children:"Pagato il"}),o.jsx(r,{variant:"caption-semibold",color:e.colors.neutral.grey[700],children:"12/04/2026"})]}),o.jsxs(l,{direction:"row",mt:"6px",alignItems:"center",children:[o.jsx(r,{variant:"caption",color:e.colors.neutral.grey[700],mr:.5,children:"Status"}),o.jsx(N,{label:"Pagato",color:"success"})]})]})}},y={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento modulo in corso"}}},b={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento riepilogo pagamento in corso"},slots:{skeleton:()=>o.jsxs(s,{gap:1,display:"flex",alignItems:"center",flexDirection:"row",children:[o.jsxs(s,{display:"flex",gap:1,flexDirection:"column",flex:"1 0 0",children:[o.jsx(c,{variant:"rounded",width:"196px",height:"23px",sx:{borderRadius:"8px"}}),o.jsxs(s,{display:"flex",flexDirection:"row",children:[o.jsx(c,{variant:"rounded",width:"79px",height:"15px",sx:{borderRadius:"8px",mr:2,my:0}}),o.jsx(c,{variant:"rounded",width:"160px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsx(c,{variant:"rounded",width:"137px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsxs(s,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,children:[o.jsxs(s,{display:"flex",flexDirection:"column",gap:1,children:[o.jsx(c,{variant:"rounded",width:"79px",height:"23px",sx:{borderRadius:"8px"}}),o.jsx(c,{variant:"rounded",width:"120px",height:"15px",sx:{borderRadius:"8px"}})]}),o.jsx(c,{variant:"circular",width:"22px",height:"22px"})]})]})}}},f={parameters:{controls:{disable:!0}},render:function(){const e=S(),t=o.jsxs(l,{direction:{xs:"column",md:"row"},spacing:2,alignItems:{xs:"flex-start",md:"center"},children:[o.jsxs(s,{sx:{flex:"1 1 auto"},children:[o.jsx(F,{children:"Payment object"}),o.jsxs(s,{children:[o.jsx(r,{variant:"caption",mr:.5,color:e.colors.neutral.grey[700],children:"Codice avviso"}),o.jsx(r,{variant:"caption-semibold",color:e.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"})]}),o.jsxs(s,{children:[o.jsx(r,{variant:"caption",mr:.5,color:e.colors.neutral.grey[700],children:"Scade il"}),o.jsx(r,{variant:"caption-semibold",color:e.colors.neutral.grey[700],children:"[gg/mm/aaaa]"})]}),o.jsxs(l,{direction:"row",mt:.5,alignItems:"center",children:[o.jsx(So,{htmlColor:e.colors.purple[500],fontSize:"small"}),o.jsx(r,{variant:"caption-semibold",color:e.colors.purple[500],children:"Sei già cliente"})]})]}),o.jsxs(s,{textAlign:"right",sx:{flexShrink:0,width:{xs:"100%",md:"auto"}},position:"relative",left:{xs:"35px",md:0},children:[o.jsx(r,{variant:"caption-semibold",color:e.colors.blue[500],fontSize:"1rem",display:"block",children:"398,50 €"}),o.jsx(r,{variant:"caption-semibold",fontSize:"0.75rem",color:e.colors.neutral.grey[700],children:"Costi di notifica inclusi"})]})]});return o.jsx(j,{children:o.jsx(Y,{control:o.jsx(jo,{}),label:t,labelPlacement:"start",sx:{alignItems:{xs:"flex-start",md:"center"},width:"100%",justifyContent:"space-between","& .MuiFormControlLabel-label":{width:"100%"}}})})}},Mo=["Playground","NoTitle","ForceDirection","Loading","CustomSkeleton","ComplexContent"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"{}",...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const Ho=Object.freeze(Object.defineProperty({__proto__:null,ComplexContent:f,CustomSkeleton:b,ForceDirection:g,Loading:y,NoTitle:h,Playground:x,__namedExportsOrder:Mo,default:ko},Symbol.toStringTag,{value:"Module"}));export{b as C,g as F,y as L,Ho as M,h as N,f as a};
