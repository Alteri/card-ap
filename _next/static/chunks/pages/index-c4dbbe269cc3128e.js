(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6649:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var r=n(7294),i=n(1043),o=n(6911),s=n(3749),c=n(3857),l=n(7379),a=n(5117),d=n(9552),p=n(4870),u=(l.ZP.div.withConfig({displayName:"styled__WrapperStyled",componentId:"sc-1av4qrp-0"})(["overflow:hidden;"]),(0,l.ZP)(d.V).withConfig({displayName:"styled__ProjectItemHeader",componentId:"sc-1av4qrp-1"})(["position:relative;padding-bottom:24px;border-bottom:1px solid ",";"],a.w.pN)),m=l.ZP.div.withConfig({displayName:"styled__RowWithIcon",componentId:"sc-1av4qrp-2"})(["display:flex;align-items:center;grid-gap:12px;"]),x=(l.ZP.div.withConfig({displayName:"styled__MembersWrapper",componentId:"sc-1av4qrp-3"})(["display:flex;grid-gap:8px;"]),l.ZP.img.withConfig({displayName:"styled__MemberItem",componentId:"sc-1av4qrp-4"})(["width:32px;height:32px;border-radius:50%;object-fit:cover;"]),(0,l.ZP)(p.W).withConfig({displayName:"styled__TeamIconStyled",componentId:"sc-1av4qrp-5"})(["position:absolute;left:0;top:-78px;"])),f=n(9499),j=n(4730),h=n(765),g=l.ZP.div.withConfig({displayName:"styled__CardEditPageStyled",componentId:"sc-oqqjw9-0"})(["position:fixed;overflow:auto;width:100%;min-height:100vh;height:100%;left:0;top:0;background:",";z-index:4;padding:16px;@media (min-width:","){padding:32px;}"],a.w.ix,a.u.Tablet),y=(0,l.ZP)(h.X).withConfig({displayName:"styled__ExitIcon",componentId:"sc-oqqjw9-1"})(["position:absolute;cursor:pointer;right:16px;top:16px;"]),b=l.ZP.div.withConfig({displayName:"styled__RowWithIcon",componentId:"sc-oqqjw9-2"})(["display:flex;align-items:center;grid-gap:12px;"]),v=n(6804),w=n(8418),O=n(1905),I=l.ZP.div.withConfig({displayName:"styled__RowWithIcon",componentId:"sc-kvmmc6-0"})(["display:flex;align-items:center;grid-gap:12px;"]),P=function(e){var t=(new Date).getTime(),n=864e5,r=0;if(e){var i=new Date(e).getTime();r=Math.ceil((i-t)/n)}else{var o=new Date((new Date).getTime()+Math.random()*(new Date(2022,12,31).getTime()-(new Date).getTime())).getTime();r=Math.ceil((o-t)/n)}var s=Math.floor(r/7);switch(!0){case 0==r:return"Today";case 1==r:return r+" Day Left";case r<7:return r+" Days Left";case r>=14:return s+" Weeks Left";case r>=7:return s+" Week Left";default:return r}},_=n(5893),k=function(e){var t=e.dueDate;return(0,_.jsxs)(I,{children:[(0,_.jsx)(h.SU,{color:a.w.de}),(0,_.jsx)(v.x,{color:a.w.de,fontWeight:"200",textType:"caption",children:P(t)})]})},T=n(7184),S=(0,l.ZP)(d.V).withConfig({displayName:"styled__TasksListStyled",componentId:"sc-90m679-0"})([""]),D=(0,l.ZP)(d.V).withConfig({displayName:"styled__ItemListStyled",componentId:"sc-90m679-1"})([""]),C=(0,l.ZP)(d.V).withConfig({displayName:"styled__ItemHeaderStyled",componentId:"sc-90m679-2"})(["display:flex;align-items:center;"]),N=(0,l.ZP)(d.V).withConfig({displayName:"styled__TitleWrapper",componentId:"sc-90m679-3"})(["display:flex;"]),Z=(0,l.ZP)(v.x).withConfig({displayName:"styled__TaskId",componentId:"sc-90m679-4"})(["background:",";padding:4px 8px;border-radius:4px;"],a.w.Sn),L=l.ZP.label.withConfig({displayName:"styled__CompleteWrapper",componentId:"sc-90m679-5"})(["border:2px solid ",";border-radius:4px;display:flex;padding:2px;cursor:pointer;transition:all 0.5s ease;&:hover{border-color:",";}",""],a.w.pN,a.w.ek,(function(e){return e.complete&&(0,l.iv)(["background:",";border-color:",";&:hover{background:",";border-color:",";}"],a.w.ek,a.w.ek,a.w.ST,a.w.ST)})),E=(0,l.ZP)(h.rF).withConfig({displayName:"styled__TrashStyled",componentId:"sc-90m679-6"})(["cursor:pointer;transition:all 0.5s ease;&:hover{transform:scale(1.2);}"]),W=l.ZP.div.withConfig({displayName:"styled__IconsWrapper",componentId:"sc-90m679-7"})(["display:flex;align-items:center;gap:8px;"]),q=(0,l.ZP)(T.o2).withConfig({displayName:"styled__InputComplete",componentId:"sc-90m679-8"})(["display:none;"]),V=n(1159),F=n(7536);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.task,n=t.id,r=t.title,o=t.projectId,s=t.description,c=t.complete,l=e.taskNumber,d=(0,i.I0)(),p=(0,F.cI)({defaultValues:{id:n,projectId:o,title:r,description:s,complete:c}}),u=function(e){d((0,V.Hd)(e))};return(0,_.jsx)(F.RV,R(R({},p),{},{children:(0,_.jsx)("form",{onSubmit:p.handleSubmit(u),children:(0,_.jsxs)(D,{as:"li",gap:"8px",children:[(0,_.jsxs)(C,{children:[(0,_.jsxs)(N,{gap:"8px",children:[(0,_.jsx)(Z,{color:a.w.ix,textType:"caption",children:l+1}),(0,_.jsx)(v.x,{children:r})]}),(0,_.jsxs)(W,{children:[(0,_.jsx)(E,{onClick:function(){return function(e){d((0,V.F6)(e))}(n)}}),(0,_.jsxs)(L,{complete:c,children:[(0,_.jsx)(q,{name:"complete",onChange:p.handleSubmit(u)}),(0,_.jsx)(h.Jr,{color:c?a.w.ix:a.w.de})]})]})]}),(0,_.jsx)(v.x,{textType:"caption",color:a.w.de,children:s})]},n)})}))},H=n(8746);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){var t=e.onSubmitFunc,n=e.projectId,r=(0,F.cI)({defaultValues:{id:(new Date).getTime(),title:"",description:"",projectId:n,complete:!1}});return r.setValue("id",(new Date).getTime()),(0,_.jsx)(F.RV,X(X({},r),{},{children:(0,_.jsx)("form",{onSubmit:r.handleSubmit(t),children:(0,_.jsxs)(w.r,{gap:"16px",children:[(0,_.jsx)(T.II,{name:"title",label:"Title",type:"text"}),(0,_.jsx)(T.II,{name:"description",label:"Description",type:"text"}),(0,_.jsx)(H.z,{children:"Submit"})]})})}))},U=function(e){var t=e.taskList,n=e.projectId,r=(0,i.I0)(),o=(null===t||void 0===t?void 0:t.filter((function(e){return e.complete})).length)+"/"+t.length;return(0,_.jsxs)(w.r,{gap:"16px",children:[t.length?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(v.x,{textType:"h4",children:"To do List"}),(0,_.jsxs)(v.x,{textType:"caption",children:["Result: ",o]})]}),(0,_.jsx)(S,{as:"ul",gap:"24px",children:t.map((function(e,t){return(0,_.jsx)(A,{task:e,taskNumber:t},t)}))})]}):null,(0,_.jsxs)(w.r,{gap:"8px",children:[(0,_.jsx)(v.x,{children:t.length?"Add new task":"Add first task"}),(0,_.jsx)(Q,{onSubmitFunc:function(e){r((0,V.gI)(e))},projectId:n})]})]})},B=["team","members","open","activeCard","taskList","projectItem","setOpenEditPage"];function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){var t=e.team,n=e.members,r=e.open,i=e.activeCard,o=e.taskList,s=e.projectItem,c=s.id,l=s.title,d=s.dueDate,p=e.setOpenEditPage,u=(0,j.Z)(e,B);return(0,_.jsx)(_.Fragment,{children:r&&i&&(0,_.jsxs)(g,$($({},u),{},{children:[(0,_.jsx)(y,{onClick:p}),(0,_.jsxs)(w.r,{gap:"12px",children:[(0,_.jsx)(v.x,{textType:"h2",children:l}),(0,_.jsx)(k,{dueDate:d}),t&&(0,_.jsxs)(b,{children:[(0,_.jsx)(h.SZ,{color:a.w.de}),(0,_.jsxs)(v.x,{color:a.w.de,children:[t," Team"]})]}),n&&(0,_.jsx)(O.Q,{members:n}),o&&(0,_.jsx)(U,{projectId:c,taskList:o})]})]}))})},K=n(7388),Y=n(7109),ee=function(e){var t=e.teamList,n=e.taskList,s=e.projectItem,c=(0,r.useState)(!1),l=c[0],d=c[1],p=(0,r.useState)(0),f=p[0],j=p[1],g=s.id,y=s.title,b=s.dueDate,I=s.teamId,P=(0,i.I0)(),T=null===t||void 0===t?void 0:t.filter((function(e){return e.id==I}))[0],S=null===n||void 0===n?void 0:n.filter((function(e){return e.projectId==g})),D=f==g,C=null===S||void 0===S?void 0:S.filter((function(e){return e.complete})).length,N=Math.round(C/S.length*100)+"%";return(0,r.useEffect)((function(){document.body.style.overflow=l?"hidden":"unset"}),[l]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(G,{projectItem:s,team:null===T||void 0===T?void 0:T.name,members:null===T||void 0===T?void 0:T.members,setOpenEditPage:function(){return d(!l)},open:l,activeCard:D,taskList:S}),(0,_.jsxs)(Y.U,{color:null===T||void 0===T?void 0:T.color,padding:"48px 32px 32px",children:[(0,_.jsx)(K.$,{setActiveCard:function(){return j(g)},removeCard:function(){return function(e){P((0,o.rR)(e))}(g)},editPage:function(){return d(!l)},color:null===T||void 0===T?void 0:T.color}),(0,_.jsxs)(u,{gap:"8px",children:[(0,_.jsx)(x,{iconId:null===T||void 0===T?void 0:T.iconId,color:null===T||void 0===T?void 0:T.color}),(0,_.jsx)(v.x,{textType:"h3",children:y}),(0,_.jsxs)(m,{children:[(0,_.jsx)(h.SZ,{color:a.w.de}),(0,_.jsxs)(v.x,{color:a.w.de,fontWeight:"200",textType:"caption",children:[null===T||void 0===T?void 0:T.name," Team"]})]}),(0,_.jsx)(k,{dueDate:b})]}),(0,_.jsxs)(w.r,{templateColumns:"70% 30%",children:[(0,_.jsxs)(w.r,{gap:"8px",children:[(0,_.jsx)(v.x,{fontWeight:"600",textType:"caption",children:"Team Member"}),(0,_.jsx)(O.Q,{members:null===T||void 0===T?void 0:T.members})]}),S.length?(0,_.jsxs)(w.r,{children:[(0,_.jsx)(v.x,{fontWeight:"600",textType:"caption",children:"Progress"}),(0,_.jsx)(v.x,{children:N})]}):null]})]})]})},te=function(e){var t=e.projectList,n=e.teamList,r=e.taskList;return(0,_.jsx)(_.Fragment,{children:null!==t&&void 0!==t&&t.length?t.map((function(e,t){return(0,_.jsx)(ee,{teamList:n,taskList:r,projectItem:e},t)})):null})},ne=n(8451),re=n(2958);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(e){var t=e.onSubmitFunc,n=e.teamList,r=e.nextProjectId,i=n.map((function(e){var t=e.name;return{value:e.id,label:t}})),o=(0,F.cI)({defaultValues:{id:r||1,title:"",teamId:1,dueDate:""}});return(0,_.jsx)(F.RV,oe(oe({},o),{},{children:(0,_.jsx)("form",{onSubmit:o.handleSubmit(t),children:(0,_.jsxs)(w.r,{gap:"16px",children:[(0,_.jsx)(T.II,{name:"title",label:"Title",type:"text"}),(0,_.jsx)(T.Ph,{name:"teamId",label:"Team",options:i}),(0,_.jsx)(T.II,{name:"dueDate",label:"Due date",type:"date"}),(0,_.jsx)(H.z,{children:"Submit"})]})})}))},ce=function(){var e,t=(0,i.I0)(),n=(0,r.useState)(!1),l=n[0],a=n[1],d=(0,i.v9)((function(e){return e.projects})),p=(0,i.v9)((function(e){return e.teams})),u=(0,i.v9)((function(e){return e.tasks}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s.W,{children:(0,_.jsx)(c.l,{gap:"64px 32px",children:(0,_.jsx)(te,{projectList:d,teamList:p,taskList:u})})}),(0,_.jsx)(re.p,{title:"New project",subTitle:"Add new project",open:l,onClose:function(){return a(!l)},children:(0,_.jsx)(se,{onSubmitFunc:function(e){t((0,o.B)(e)),(0,re.M)(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},teamList:p,nextProjectId:(null===(e=d.slice(-1)[0])||void 0===e?void 0:e.id)+1})}),(0,_.jsx)(ne.v,{modalAction:function(){return a(!l)}})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6649)}])}},function(e){e.O(0,[340,654,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);