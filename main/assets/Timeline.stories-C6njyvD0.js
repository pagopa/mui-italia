import{b as r,j as i,B as s}from"./iframe-CDfDAPFk.js";import{B as c}from"./ButtonNaked-CLdONNaN.js";import{T as m,a as l,b as p,c as d,d as u,e as v}from"./TimelineNotificationDot-B5fPU2QW.js";import{T,a}from"./TimelineSeparator-CQ6vnwiv.js";import{T as e}from"./Typography-9AQN7ayB.js";import{C as f}from"./Chip-9dZu1vg8.js";import{A as h}from"./AttachFileRounded-CqQ27joQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BiDoaYB9.js";import"./DefaultPropsProvider-C1uSP4Zq.js";import"./styled-tN4ayshy.js";import"./ButtonBase-WCmC4j5j.js";import"./TransitionGroupContext-BpFr0Sds.js";import"./useForkRef-CNIqWbEd.js";import"./useThemeProps-ByWTvVcx.js";import"./useThemeProps-DVJ-9e3j.js";import"./Stack-CQ_WFl_6.js";import"./createStack-D3UHGSp-.js";import"./isMuiElement-BK0PQ6RV.js";import"./createSvgIcon-BbEuUIJp.js";import"./SvgIcon-C-yBIyJ3.js";const E={title:"Components/TimelineNotification",component:T,parameters:{controls:{sort:"size"},chromatic:{viewports:r}},backgrounds:[{name:"dark background",value:"#000",default:!0}]},g=[{statusLabel:"Pagata",state:"success",activeFrom:"2022-02-22T11:22:00.957Z"},{minor:!0,statusLabel:"In inoltro",title:"Minor event with multiple destinataries",description:"Description",activeFrom:"2022-02-22T11:22:12.971Z",fiscalCode:"MRARSS08S05I480N - Mario Rossi"},{statusLabel:"In inoltro",state:"warning",description:"Lorem ipsum dolor bla bla",activeFrom:"2022-02-22T11:22:12.971Z"},{statusLabel:"Perfezionata per visione",state:"success",activeFrom:"2022-02-22T08:12:29.991Z"},{minor:!0,statusLabel:"In inoltro",title:"Minor event with single destinatary",description:"Description",activeFrom:"2022-02-22T11:22:12.971Z"},{statusLabel:"Destinatario irreperibile",state:"error",activeFrom:"2022-02-09T11:24:33.061Z"}];function y(t){return new Date(t).toLocaleString("default",{month:"long"}).toUpperCase().substring(0,3)}function x(t){return`0${new Date(t).getDate()}`.slice(-2)}function b(t){const o=new Date(t);return`${o.getHours()}:${o.getMinutes()}`}const n=()=>i.jsx(s,{sx:{maxWidth:450,backgroundColor:"background.paper",borderRadius:2},children:i.jsx(m,{children:g.map((t,o)=>i.jsxs(l,{children:[i.jsxs(p,{children:[i.jsx(e,{variant:"sidenav",component:"div",children:x(t.activeFrom)}),i.jsx(e,{color:"text.secondary",variant:"caption",component:"div",children:y(t.activeFrom)})]}),i.jsxs(d,{children:[i.jsx(a,{}),i.jsx(u,{variant:o===0?"outlined":void 0,size:t.minor?"small":"default"}),i.jsx(a,{})]}),i.jsxs(v,{children:[i.jsx(e,{variant:"caption",color:"text.secondary",component:"div",children:b(t.activeFrom)}),t.state&&i.jsx(f,{size:"small",label:t.statusLabel,color:t.state}),t.title&&i.jsx(e,{color:"text.primary",variant:"caption-semibold",component:"div",children:t.title}),t.description&&i.jsx(e,{color:"text.primary",variant:"caption",component:"div",children:t.description}),t.minor&&t.fiscalCode&&i.jsx(e,{color:"text.secondary",variant:"caption",component:"div",children:t.fiscalCode}),!t.minor&&i.jsx(c,{href:"#",target:"_blank",variant:"naked",color:"primary",weight:"light",startIcon:i.jsx(h,{}),children:"Attestato opponibile a Terzi"})]})]},t.activeFrom))})});n.parameters={controls:{hideNoControlsWarning:!0}};n.decorators=[t=>i.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:i.jsx(t,{})})];const P=["Default"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Box sx={{
  maxWidth: 450,
  backgroundColor: 'background.paper',
  borderRadius: 2
}}>
    <TimelineNotification>
      {notificationStatusHistory.map((item: NotificationStatusHistory, i: number) => <TimelineNotificationItem key={item.activeFrom}>
          <TimelineNotificationOppositeContent>
            <Typography variant="sidenav" component="div">
              {getDay(item.activeFrom)}
            </Typography>
            <Typography color="text.secondary" variant="caption" component="div">
              {getMonthString(item.activeFrom)}
            </Typography>
          </TimelineNotificationOppositeContent>
          <TimelineNotificationSeparator>
            <TimelineConnector />
            <TimelineNotificationDot variant={i === 0 ? 'outlined' : undefined} size={item.minor ? 'small' : 'default'} />
            <TimelineConnector />
          </TimelineNotificationSeparator>
          <TimelineNotificationContent>
            <Typography variant="caption" color="text.secondary" component="div">
              {getTime(item.activeFrom)}
            </Typography>
            {item.state && <Chip size="small" label={item.statusLabel} color={item.state} />}
            {item.title && <Typography color="text.primary" variant="caption-semibold" component="div">
                {item.title}
              </Typography>}
            {item.description && <Typography color="text.primary" variant="caption" component="div">
                {item.description}
              </Typography>}
            {item.minor && item.fiscalCode && <Typography color="text.secondary" variant="caption" component="div">
                {item.fiscalCode}
              </Typography>}
            {!item.minor && <ButtonNaked href="#" target="_blank" variant="naked" color="primary" weight="light" startIcon={<AttachFileRoundedIcon />}>
                Attestato opponibile a Terzi
              </ButtonNaked>}
          </TimelineNotificationContent>
        </TimelineNotificationItem>)}
    </TimelineNotification>
  </Box>`,...n.parameters?.docs?.source}}};export{n as Default,P as __namedExportsOrder,E as default};
