import{b as r,j as i,B as s}from"./iframe-rw-T87Ps.js";import{B as c}from"./ButtonNaked-FPXFSsNP.js";import{T as m,a as l,b as p,c as d,d as u,e as v}from"./TimelineNotificationDot-CxPSXxvH.js";import{T,a as n}from"./TimelineSeparator-DAoDnWWE.js";import{T as e}from"./Typography-DIxyHfgM.js";import{C as f}from"./Chip-DG7bXvP3.js";import{A as h}from"./AttachFileRounded-Ru6MLoHm.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DRjStLay.js";import"./DefaultPropsProvider-DKSDSOOZ.js";import"./styled-BbRqDVtB.js";import"./ButtonBase-B-e_mOzE.js";import"./TransitionGroupContext-BpTk3B4j.js";import"./useForkRef-D1JMp28z.js";import"./useThemeProps-CypMe0Ry.js";import"./useThemeProps-uclZDVSV.js";import"./Stack-DK8xaQOE.js";import"./createStack-NLAxrvfx.js";import"./isMuiElement-l98Asye0.js";import"./createSvgIcon-BLI2zqKg.js";import"./SvgIcon-BqyspOV3.js";const E={title:"Components/TimelineNotification",component:T,parameters:{controls:{sort:"size"},chromatic:{viewports:r}},backgrounds:[{name:"dark background",value:"#000",default:!0}]},g=[{statusLabel:"Pagata",state:"success",activeFrom:"2022-02-22T11:22:00.957Z"},{minor:!0,statusLabel:"In inoltro",title:"Minor event with multiple destinataries",description:"Description",activeFrom:"2022-02-22T11:22:12.971Z",fiscalCode:"MRARSS08S05I480N - Mario Rossi"},{statusLabel:"In inoltro",state:"warning",description:"Lorem ipsum dolor bla bla",activeFrom:"2022-02-22T11:22:12.971Z"},{statusLabel:"Perfezionata per visione",state:"success",activeFrom:"2022-02-22T08:12:29.991Z"},{minor:!0,statusLabel:"In inoltro",title:"Minor event with single destinatary",description:"Description",activeFrom:"2022-02-22T11:22:12.971Z"},{statusLabel:"Destinatario irreperibile",state:"error",activeFrom:"2022-02-09T11:24:33.061Z"}];function y(t){return new Date(t).toLocaleString("default",{month:"long"}).toUpperCase().substring(0,3)}function x(t){return`0${new Date(t).getDate()}`.slice(-2)}function b(t){const o=new Date(t);return`${o.getHours()}:${o.getMinutes()}`}const a=()=>i.jsx(s,{sx:{maxWidth:450,backgroundColor:"background.paper",borderRadius:2},children:i.jsx(m,{children:g.map((t,o)=>i.jsxs(l,{children:[i.jsxs(p,{children:[i.jsx(e,{variant:"sidenav",component:"div",children:x(t.activeFrom)}),i.jsx(e,{color:"text.secondary",variant:"caption",component:"div",children:y(t.activeFrom)})]}),i.jsxs(d,{children:[i.jsx(n,{}),i.jsx(u,{variant:o===0?"outlined":void 0,size:t.minor?"small":"default"}),i.jsx(n,{})]}),i.jsxs(v,{children:[i.jsx(e,{variant:"caption",color:"text.secondary",component:"div",children:b(t.activeFrom)}),t.state&&i.jsx(f,{size:"small",label:t.statusLabel,color:t.state}),t.title&&i.jsx(e,{color:"text.primary",variant:"caption-semibold",component:"div",children:t.title}),t.description&&i.jsx(e,{color:"text.primary",variant:"caption",component:"div",children:t.description}),t.minor&&t.fiscalCode&&i.jsx(e,{color:"text.secondary",variant:"caption",component:"div",children:t.fiscalCode}),!t.minor&&i.jsx(c,{href:"#",target:"_blank",variant:"naked",color:"primary",weight:"light",startIcon:i.jsx(h,{}),children:"Attestato opponibile a Terzi"})]})]},t.activeFrom))})});a.parameters={controls:{hideNoControlsWarning:!0}};a.decorators=[t=>i.jsx("div",{style:{padding:"1em",backgroundColor:"#F5F5F5"},children:i.jsx(t,{})})];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Box sx={{
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
  </Box>`,...a.parameters?.docs?.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,E as default};
