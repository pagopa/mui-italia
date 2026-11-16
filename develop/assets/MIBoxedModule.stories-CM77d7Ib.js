import{j as e,b as P,B as r,h as W,p as F,l as E}from"./iframe-ByoTlC9Q.js";import{M as c,a as f}from"./MIBoxedModuleTitle-fF5702dP.js";import{a as b}from"./MIButton-CttAo4IM.js";import{M as j}from"./MIChip-grFjiEVg.js";import{u as i}from"./useTheme-ce18xD2I.js";import{S as a}from"./Stack-BUBEZOaa.js";import{T as n}from"./Typography-BUFn3w4e.js";import{c as v}from"./createSvgIcon-Ui3HqnD1.js";import{F as O}from"./FormControlLabel-C3qvJ8-b.js";import{a as H}from"./Radio-CTJbTcF7.js";import{S as l}from"./Skeleton-CaVhlPdy.js";import{E as _}from"./EmojiObjectsOutlined-CgIIMl8V.js";import{A as M}from"./Avatar-CLSthz9B.js";import{A as T}from"./AccountBalance-B_dsCIJJ.js";const V=v(e.jsx("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"}),"Cached"),N=v(e.jsx("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg"),C=v(e.jsx("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt"),Q=()=>{const t=i();return e.jsx(M,{variant:"rounded",sx:{border:"1px solid",borderColor:t.colors.neutral.black[60],bgcolor:t.colors.neutral.grey[50]},children:e.jsx(T,{sx:{color:t.colors.neutral.grey[300]}})})},q=()=>e.jsx(b,{variant:"text",children:"Bottone"}),G=()=>{const t=i();return e.jsx(M,{variant:"rounded",sx:{width:44,height:44,boxSizing:"border-box",border:"1px solid",borderColor:E(t.colors.neutral.black,.06),bgcolor:t.colors.neutral.grey[50]},children:e.jsx(T,{sx:{fontSize:F(22),color:t.colors.neutral.grey[300]}})})},J={title:"Components/MIBoxedModule",component:c,parameters:{layout:"padded",controls:{include:["loading","loadingLabel","title","content","enableIcon","enableAction","direction"]}},args:{loading:!1,loadingLabel:"Content loading, please wait...",title:"Product title",content:"Description",enableIcon:!0,enableAction:!0},argTypes:{loading:{control:{type:"boolean"},description:"Mostra lo stato di caricamento del modulo.",table:{category:"MIBoxedModule",type:{summary:"boolean"},defaultValue:{summary:"false"}}},direction:{control:{type:"radio"},options:["horizontal","vertical"],description:"Direzione del contenuto interno. Se non valorizzata, il componente usa horizontal su desktop e vertical su mobile.",table:{category:"MIBoxedModule"}},loadingLabel:{control:{type:"text"},description:"Controllo Storybook: testo usato come localeText.loadingLabel durante lo stato di caricamento.",table:{category:"Storybook controls"}},title:{control:{type:"text"},description:"Controllo Storybook: testo usato come titolo del modulo.",table:{category:"Storybook controls"}},content:{control:{type:"text"},description:"Controllo Storybook: testo usato come children del componente.",table:{category:"Storybook controls"}},enableIcon:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'icona.",table:{category:"Storybook controls"}},enableAction:{control:{type:"boolean"},description:"Controllo Storybook: abilita o disabilita l'action.",table:{category:"Storybook controls"}},children:{control:!1,table:{disable:!0}},icon:{control:!1,table:{disable:!0}},action:{control:!1,table:{disable:!0}},slots:{control:!1,table:{disable:!0}},localeText:{control:!1,table:{disable:!0}}},render:function({content:o,enableIcon:s,title:y,children:w,enableAction:B,loadingLabel:k,loading:R,direction:A,...z}){const S=i(),I=o??w,L=s?e.jsx(Q,{}):void 0,D=B?e.jsx(q,{}):void 0;return e.jsxs(c,{...z,loading:R,direction:A,icon:L,action:D,localeText:{loadingLabel:k},children:[y&&e.jsx(f,{children:y}),I&&e.jsxs(r,{children:[I,e.jsxs(a,{direction:"row",mt:1,alignItems:"center",children:[e.jsx(_,{htmlColor:S.colors.purple[500],fontSize:"small"}),e.jsx(n,{variant:"caption-semibold",color:S.colors.purple[500],children:"Suggested because you are already client"})]})]})]})}},d={},p={parameters:{controls:{disable:!0}},render:function(){const o=i();return e.jsx(c,{action:e.jsx(C,{htmlColor:o.colors.blue[500]}),direction:"horizontal",children:e.jsxs(a,{direction:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:[e.jsx(n,{variant:"caption",mr:.5,color:o.colors.neutral.grey[700],children:"Codice avviso"}),e.jsx(n,{variant:"caption-semibold",mr:{xs:0,md:1},mb:{xs:1,md:0},color:o.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"}),e.jsx(j,{label:"Pagato",color:"success"})]})})}},x={parameters:{controls:{disable:!0},chromatic:{viewports:P}},render:function(){const o=i();return e.jsxs(c,{icon:e.jsx(G,{}),action:e.jsx(b,{variant:"text",endIcon:e.jsx(V,{}),children:"Aggiorna documenti"}),children:[e.jsxs(a,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(f,{children:"Product title"}),e.jsx(j,{label:"Default"})]}),e.jsx(n,{component:"p",variant:"caption",mt:"2px",color:o.colors.neutral.grey[700],children:"Description"})]})}},m={parameters:{controls:{disable:!0}},render:function(){const o=i(),s=W(o.breakpoints.down("xs")),y=()=>e.jsxs(a,{direction:{xs:"column-reverse",md:"row"},justifyContent:"flex-end",spacing:3,mt:3,children:[e.jsx(b,{endIcon:e.jsx(C,{}),variant:"text",fullWidth:s,children:"Scarica documento"}),e.jsx(b,{fullWidth:s,children:"Paga 774,00 €"})]});return e.jsxs(c,{action:e.jsx(y,{}),direction:"vertical",children:[e.jsx(f,{children:"0000 0000 0000 0000 00"}),e.jsxs(a,{direction:"row",mt:"6px",children:[e.jsx(n,{variant:"caption",color:o.colors.neutral.grey[700],mr:.5,children:"Oggetto"}),e.jsx(n,{variant:"caption-semibold",color:o.colors.neutral.grey[700],children:"Accertamento TARI 2025 - 00016/2026"})]}),e.jsxs(a,{direction:"row",mt:"6px",children:[e.jsx(n,{variant:"caption",color:o.colors.neutral.grey[700],mr:.5,children:"Pagato il"}),e.jsx(n,{variant:"caption-semibold",color:o.colors.neutral.grey[700],children:"12/04/2026"})]}),e.jsxs(a,{direction:"row",mt:"6px",alignItems:"center",children:[e.jsx(n,{variant:"caption",color:o.colors.neutral.grey[700],mr:.5,children:"Status"}),e.jsx(j,{label:"Pagato",color:"success"})]})]})}},u={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento modulo in corso"}}},h={parameters:{controls:{disable:!0}},args:{loading:!0,localeText:{loadingLabel:"Caricamento riepilogo pagamento in corso"},slots:{skeleton:()=>e.jsxs(r,{gap:1,display:"flex",alignItems:"center",flexDirection:"row",children:[e.jsxs(r,{display:"flex",gap:1,flexDirection:"column",flex:"1 0 0",children:[e.jsx(l,{variant:"rounded",width:"196px",height:"23px",sx:{borderRadius:"8px"}}),e.jsxs(r,{display:"flex",flexDirection:"row",children:[e.jsx(l,{variant:"rounded",width:"79px",height:"15px",sx:{borderRadius:"8px",mr:2,my:0}}),e.jsx(l,{variant:"rounded",width:"160px",height:"15px",sx:{borderRadius:"8px"}})]}),e.jsx(l,{variant:"rounded",width:"137px",height:"15px",sx:{borderRadius:"8px"}})]}),e.jsxs(r,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",gap:1,children:[e.jsxs(r,{display:"flex",flexDirection:"column",gap:1,children:[e.jsx(l,{variant:"rounded",width:"79px",height:"23px",sx:{borderRadius:"8px"}}),e.jsx(l,{variant:"rounded",width:"120px",height:"15px",sx:{borderRadius:"8px"}})]}),e.jsx(l,{variant:"circular",width:"22px",height:"22px"})]})]})}}},g={parameters:{controls:{disable:!0}},render:function(){const o=i(),s=e.jsxs(a,{direction:{xs:"column",md:"row"},spacing:2,alignItems:{xs:"flex-start",md:"center"},children:[e.jsxs(r,{sx:{flex:"1 1 auto"},children:[e.jsx(f,{children:"Payment object"}),e.jsxs(r,{children:[e.jsx(n,{variant:"caption",mr:.5,color:o.colors.neutral.grey[700],children:"Codice avviso"}),e.jsx(n,{variant:"caption-semibold",color:o.colors.neutral.grey[700],children:"0000 0000 0000 0000 00"})]}),e.jsxs(r,{children:[e.jsx(n,{variant:"caption",mr:.5,color:o.colors.neutral.grey[700],children:"Scade il"}),e.jsx(n,{variant:"caption-semibold",color:o.colors.neutral.grey[700],children:"[gg/mm/aaaa]"})]}),e.jsxs(a,{direction:"row",mt:.5,alignItems:"center",children:[e.jsx(N,{htmlColor:o.colors.purple[500],fontSize:"small"}),e.jsx(n,{variant:"caption-semibold",color:o.colors.purple[500],children:"Sei già cliente"})]})]}),e.jsxs(r,{textAlign:"right",sx:{flexShrink:0,width:{xs:"100%",md:"auto"}},position:"relative",left:{xs:"35px",md:0},children:[e.jsx(n,{variant:"caption-semibold",color:o.colors.blue[500],fontSize:"1rem",display:"block",children:"398,50 €"}),e.jsx(n,{variant:"caption-semibold",fontSize:"0.75rem",color:o.colors.neutral.grey[700],children:"Costi di notifica inclusi"})]})]});return e.jsx(c,{children:e.jsx(O,{control:e.jsx(H,{}),label:s,labelPlacement:"start",sx:{alignItems:{xs:"flex-start",md:"center"},width:"100%",justifyContent:"space-between","& .MuiFormControlLabel-label":{width:"100%"}}})})}},K=["Playground","NoTitle","Action","ForceDirection","Loading","CustomSkeleton","ComplexContent"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ce=Object.freeze(Object.defineProperty({__proto__:null,Action:x,ComplexContent:g,CustomSkeleton:h,ForceDirection:m,Loading:u,NoTitle:p,Playground:d,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{x as A,h as C,m as F,u as L,ce as M,p as N,g as a};
