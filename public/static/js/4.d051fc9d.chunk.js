(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[4],{1044:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),c=t(415),i=t(7),o=t(866),s=t(865),m=t(341),u=t(33),d=t(36),p=t.n(d),f=t(60),E=t(14),g=t(9),b=t(1006),h=t.n(b),v=t(47),O=t(455),y=t(456),j=t(2),N=t(997),w=t.n(N),P=t(71),x=t.n(P),I=t(94),C=t.n(I),k=t(4),S=t.n(k),T=t(8),D=t(461),R=t(609),B=t(863),Y=t(864),z=t(340),L=t(84),M=t.n(L),W=Object(T.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:4,color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(g.a)(e,["children","classes","onClose"]);return r.a.createElement(B.a,Object.assign({disableTypography:!0,className:t.root},l),r.a.createElement(v.a,{variant:"h4"},a),n?r.a.createElement(z.a,{"aria-label":"close",className:t.closeButton,onClick:n},r.a.createElement(M.a,null)):null)})),A=Object(T.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Y.a);var H=Object(n.forwardRef)((function(e,a){var t=r.a.useState(!1),l=Object(E.a)(t,2),c=l[0],i=l[1],o=function(){i(!0)},s=function(){i(!1)};Object(n.useImperativeHandle)(a,(function(){return{close:s,open:o}}));var m=e.label,u=e.title,d=e.children,p=(e.variant,e.color),f=void 0===p?void 0:p;return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"outlined",color:f,onClick:o},m),r.a.createElement(R.a,{maxWidth:"lg",onClose:s,"aria-labelledby":"customized-dialog-title",open:c},r.a.createElement(W,{id:"customized-dialog-title",onClose:s},u),r.a.createElement(A,{dividers:!0},d)))})),F=t(848),J=t(346),_=t(725),V=t(729),q=t(728),G=t(726),K=t(727),Q=t(1018),U=t.n(Q),X=function(e){var a=e.image,t=e.caption,l=Object(n.useState)(!1),c=Object(E.a)(l,2),i=c[0],o=c[1];return a&&"noPic"!==a?r.a.createElement("div",null,r.a.createElement("img",{src:a,style:{cursor:"pointer"},width:150,onClick:function(){return o(!0)}}),r.a.createElement(U.a,{onClose:function(){return o(!1)},isOpen:i,currImg:0,imgs:[{src:a,srcSet:a,caption:t,alt:t}]})):null},Z=t(305),$=t.n(Z),ee=Object(J.a)({root:{textAlign:"left",border:"1px solid #ececef",verticalAlign:"top"}}),ae=function(e){var a=ee(),t=[{label:"\u4e13\u5229\u516c\u5f00\u53f7",dataIndex:["relatedPartyPatentInformation.publicNumber","patentInformationOfTheComplainant.publicNumber"]},{label:"\u4ea7\u54c1\u540d\u79f0",dataIndex:["relatedPartyPatentInformation.title","patentInformationOfTheComplainant.title"]},{label:"\u4ea7\u54c1\u63cf\u8ff0",dataIndex:["relatedPartyPatentInformation.summary","patentInformationOfTheComplainant.summary"]},{label:"\u56fe\u7247\u4fe1\u606f",dataIndex:["reportedImagePath","investigatorImagePath"],cell:function(e){return r.a.createElement(X,{image:e})}},{label:"\u7533\u8bf7\u53f7",dataIndex:["relatedPartyPatentInformation.applicationNumber","patentInformationOfTheComplainant.applicationNumber"]},{label:"\u7533\u8bf7\u65e5",dataIndex:["relatedPartyPatentInformation.applicationDate","patentInformationOfTheComplainant.applicationDate"]},{label:"\u5f53\u524d\u4e13\u5229\u6743\u4eba",dataIndex:["relatedPartyPatentInformation.applicant","patentInformationOfTheComplainant.applicant"]},{label:"\u5f53\u524d\u6cd5\u5f8b\u72b6\u6001",dataIndex:["relatedPartyPatentInformation.currentLegalStatus","patentInformationOfTheComplainant.currentLegalStatus"]},{label:"A\u6280\u672f\u65b9\u6848(\u6807\u9898)",dataIndex:["relatedPartyPatentInformation.atsTitle","patentInformationOfTheComplainant.atsTitle"]},{label:"\u5907\u6ce8",dataIndex:["relatedPartyPatentInformation.remark","patentInformationOfTheComplainant.remark"]}],n=e.data;return r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement(_.a,{className:a.root},r.a.createElement(G.a,null,r.a.createElement(K.a,null,r.a.createElement(q.a,{className:a.root,width:"20%"}),r.a.createElement(q.a,{className:a.root,width:"40%"},"\u4e3e\u62a5\u65b9"),r.a.createElement(q.a,{className:a.root,width:"40%"},"\u88ab\u4e3e\u62a5\u65b9"))),r.a.createElement(V.a,null,t.map((function(e){var t=e.cell||function(e){return e};return r.a.createElement(K.a,null,r.a.createElement(q.a,{className:a.root},e.label),r.a.createElement(q.a,{className:a.root},t($.a.get(n,e.dataIndex[0]))),r.a.createElement(q.a,{className:a.root},t($.a.get(n,e.dataIndex[1]))))})))))},te=t(701),ne=t(95),re=Object(J.a)((function(e){return{container:{padding:0,marginTop:-e.spacing(1)},textField:{width:"100%"},button:{marginTop:e.spacing(1),float:"right"}}})),le=function(e){var a=e.onOk,t=void 0===a?function(){}:a,l=re(),c=Object(n.useState)(e.value),i=Object(E.a)(c,2),o=i[0],s=i[1],m=function(){var a=Object(f.a)(p.a.mark((function a(){var n,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o){a.next=3;break}return ne.a.notice({variant:"error",message:"\u8bf7\u5148\u8f93\u5165\u53d7\u7406\u610f\u89c1"}),a.abrupt("return");case 3:return n=w.a.stringify({id:e.id,acceptance_description:o}),a.next=6,x()("http://47.96.129.81:8081/f/v1/reply-to-complaint?".concat(n));case 6:return r=a.sent,a.next=9,r.json();case 9:0===a.sent.code&&(ne.a.notice({variant:"success",message:"\u53d7\u7406\u6210\u529f"}),t());case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:l.container,style:{width:600}},r.a.createElement(te.a,{id:"outlined-multiline-static",label:"\u586b\u5199\u53d7\u7406\u610f\u89c1",multiline:!0,rows:"4",value:o,defaultValue:"",onChange:function(e){s(e.target.value)},className:l.textField,margin:"normal",variant:"outlined",placeholder:"\u5728\u6b64\u8f93\u5165"}),r.a.createElement(D.a,{onClick:function(){m()},className:l.button,variant:"outlined",color:"primary"},"\u63d0\u4ea4\u53d7\u7406\u610f\u89c1"))},ce=t(602),ie=t(603),oe=t(850),se=Object(c.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),me=function(e){var a=e.onRefresh,t=void 0===a?function(e){return e}:a,l=se(),c=e.className,i=e.data,o=e.onPageChange,s=void 0===o?function(e){return e}:o,u=Object(g.a)(e,["className","data","onPageChange"]),d=Object(n.useState)(0),p=Object(E.a)(d,2),f=p[0],b=p[1],h=Object(n.useState)(10),N=Object(E.a)(h,2),w=N[0],P=N[1],x=function(){I.current.close(),t()},I=Object(n.useRef)(null);return r.a.createElement("div",Object.assign({},u,{className:Object(j.a)(l.root,c)}),r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"\u603b\u6570 ",i.count," \u6761 / \u7b2c ",i.pageNo," \u9875"),r.a.createElement(O.a,null,r.a.createElement(ce.a,{title:"\u6295\u8bc9\u5217\u8868"}),r.a.createElement(m.a,null),r.a.createElement(y.a,{className:l.content},r.a.createElement(C.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(_.a,{stickyHeader:!0},r.a.createElement(G.a,null,r.a.createElement(K.a,null,r.a.createElement(q.a,{width:140},r.a.createElement("label",{style:{marginLeft:10}},"\u88ab\u4e3e\u62a5\u4ea7\u54c1\u540d\u79f0")),r.a.createElement(q.a,{width:140},"\u88ab\u4e3e\u62a5\u4e13\u5229\u53f7"),r.a.createElement(q.a,{width:130},"\u4e3e\u62a5\u65f6\u95f4"),r.a.createElement(q.a,{width:100},"\u4e3e\u62a5\u4eba"),r.a.createElement(q.a,{width:120},"\u4e3e\u62a5\u4eba\u7535\u8bdd"),r.a.createElement(q.a,{width:100},"\u53d7\u7406\u72b6\u6001"),r.a.createElement(q.a,{width:180},"\u53d7\u7406\u610f\u89c1"),r.a.createElement(q.a,{width:100},"\u5bf9\u6bd4\u8be6\u60c5"),r.a.createElement(q.a,{width:120},"\u64cd\u4f5c"))),r.a.createElement(V.a,null,i.list&&i.list.slice(0,w).map((function(e){return r.a.createElement(K.a,null,r.a.createElement(q.a,{padding:"checkbox"},r.a.createElement("div",{style:{marginLeft:24}},e.reportedProductName)),r.a.createElement(q.a,null,e.reportedPatentNumber),r.a.createElement(q.a,null,S()(e.createDate).format("YYYY-MM-DD")),r.a.createElement(q.a,null,e.informer),r.a.createElement(q.a,null,e.informerContact),r.a.createElement(q.a,null,"1"==e.acceptanceStatus?r.a.createElement(F.a,{color:"secondary",label:"\u672a\u53d7\u7406"}):r.a.createElement(F.a,{label:"\u5df2\u53d7\u7406"})),r.a.createElement(q.a,null,e.acceptanceDescription),r.a.createElement(q.a,null,r.a.createElement(H,{title:"\u4e13\u5229\u4fe1\u606f\u5bf9\u6bd4",label:"\u5bf9\u6bd4"},r.a.createElement("div",{style:{width:760}},r.a.createElement(ae,{caption:e.reportedProductName,data:e})))),r.a.createElement(q.a,null,r.a.createElement(H,{ref:I,label:"\u53d7\u7406",title:"\u6295\u8bc9\u53d7\u7406",variant:"outlined",color:"secondary"},r.a.createElement(le,{onOk:x,value:e.acceptanceDescription,id:e.id}))))}))))))),r.a.createElement(ie.a,{className:l.actions},r.a.createElement(oe.a,{component:"div",count:i.count,onChangePage:function(e,a){b(a),s(a,w)},onChangeRowsPerPage:function(e){var a=e.target.value;P(a),s(f,a)},page:f,rowsPerPage:w,rowsPerPageOptions:[5,10,25]}))))};me.getInitialProps=function(){},me.defaultProps={customers:[]};var ue=me,de=Object(c.a)((function(e){return{root:{},posts:{marginTop:e.spacing(2)},post:{marginBottom:e.spacing(2)}}})),pe=function(e){var a=e.className,t=Object(g.a)(e,["className"]),l=de(),c=Object(n.useState)({list:[],count:0,pageNo:1}),i=Object(E.a)(c,2),o=i[0],s=i[1],m=function(){var e=Object(f.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a.stringify({token:window.token,pageNum:1,pageSize:10,complaintType:1,createDate:"2019-06-04"}),e.next=3,x()("http://47.96.129.81:8081/f/v1/rights-protection-createDate-complaintType?".concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n.body);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),r.a.createElement("div",Object.assign({},t,{className:Object(j.a)(l.root,a)}),r.a.createElement("div",{className:l.posts},o&&o.list.length>0?r.a.createElement(ue,{onRefresh:m,data:o}):r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:200}},r.a.createElement("span",{style:{padding:8}},r.a.createElement(h.a,{style:{fontSize:36}})),r.a.createElement(v.a,{variant:"h3"},"\u6ca1\u6709\u6570\u636e"))))))},fe=t(610),Ee=Object(c.a)((function(e){return{root:{padding:e.spacing(3),height:300,backgroundImage:"url(/images/covers/cover_2.jpg)",backgroundSize:"cover",backgroundPosition:"0 -100%",boxShadow:"0 0 1px rgba(0, 0, 0, 0.7)"}}})),ge=function(e){var a=e.className,t=Object(g.a)(e,["className"]),n=Ee();return r.a.createElement("div",Object.assign({},t,{className:Object(j.a)(n.root,a)}),r.a.createElement(fe.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(fe.a,{item:!0},r.a.createElement(v.a,{component:"h2",gutterBottom:!0,variant:"overline"},"\u6b22\u8fce\u4f7f\u7528\u9547\u6c5f\u5e02\u4e13\u5229\u7f51\u7ad9\u7ba1\u7406\u7cfb\u7edf"),r.a.createElement(v.a,{component:"h1",variant:"h2"},"\u6295\u8bc9\u53d7\u7406"))))},be=Object(c.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),he=function(e){var a=e.onRefresh,t=void 0===a?function(e){return e}:a,l=be(),c=e.className,i=e.data,o=e.onPageChange,s=void 0===o?function(e){return e}:o,u=Object(g.a)(e,["className","data","onPageChange"]),d=Object(n.useState)(0),p=Object(E.a)(d,2),f=p[0],b=p[1],h=Object(n.useState)(10),N=Object(E.a)(h,2),w=N[0],P=N[1],x=function(){I.current.close(),t()},I=Object(n.useRef)(null);return r.a.createElement("div",Object.assign({},u,{className:Object(j.a)(l.root,c)}),r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"\u603b\u6570 ",i.count," \u6761 / \u7b2c ",i.pageNo," \u9875"),r.a.createElement(O.a,null,r.a.createElement(ce.a,{title:"\u6295\u8bc9\u5217\u8868"}),r.a.createElement(m.a,null),r.a.createElement(y.a,{className:l.content},r.a.createElement(C.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(_.a,{stickyHeader:!0},r.a.createElement(G.a,null,r.a.createElement(K.a,null,r.a.createElement(q.a,{width:140},r.a.createElement("label",{style:{marginLeft:10}},"\u88ab\u4e3e\u62a5\u4ea7\u54c1\u540d\u79f0")),r.a.createElement(q.a,{width:140},"\u88ab\u4e3e\u62a5\u4e13\u5229\u53f7"),r.a.createElement(q.a,{width:130},"\u4e3e\u62a5\u65f6\u95f4"),r.a.createElement(q.a,{width:100},"\u4e3e\u62a5\u4eba"),r.a.createElement(q.a,{width:120},"\u4e3e\u62a5\u4eba\u7535\u8bdd"),r.a.createElement(q.a,{width:100},"\u53d7\u7406\u72b6\u6001"),r.a.createElement(q.a,{width:180},"\u53d7\u7406\u610f\u89c1"),r.a.createElement(q.a,{width:100},"\u5bf9\u6bd4\u8be6\u60c5"),r.a.createElement(q.a,{width:120},"\u64cd\u4f5c"))),r.a.createElement(V.a,null,i.list&&i.list.slice(0,w).map((function(e){return r.a.createElement(K.a,null,r.a.createElement(q.a,{padding:"checkbox"},r.a.createElement("div",{style:{marginLeft:24}},e.reportedProductName)),r.a.createElement(q.a,null,e.reportedPatentNumber),r.a.createElement(q.a,null,S()(e.createDate).format("YYYY-MM-DD")),r.a.createElement(q.a,null,e.informer),r.a.createElement(q.a,null,e.informerContact),r.a.createElement(q.a,null,"1"==e.acceptanceStatus?r.a.createElement(F.a,{color:"secondary",label:"\u672a\u53d7\u7406"}):r.a.createElement(F.a,{label:"\u5df2\u53d7\u7406"})),r.a.createElement(q.a,null,e.acceptanceDescription),r.a.createElement(q.a,null,r.a.createElement(H,{title:"\u4e13\u5229\u4fe1\u606f\u5bf9\u6bd4",label:"\u5bf9\u6bd4"},r.a.createElement("div",{style:{width:760}},r.a.createElement(ae,{caption:e.reportedProductName,data:e})))),r.a.createElement(q.a,null,r.a.createElement(H,{ref:I,label:"\u53d7\u7406",title:"\u6295\u8bc9\u53d7\u7406",variant:"outlined",color:"secondary"},r.a.createElement(le,{onOk:x,value:e.acceptanceDescription,id:e.id}))))}))))))),r.a.createElement(ie.a,{className:l.actions},r.a.createElement(oe.a,{component:"div",count:i.count,onChangePage:function(e,a){b(a),s(a,w)},onChangeRowsPerPage:function(e){var a=e.target.value;P(a),s(f,a)},page:f,rowsPerPage:w,rowsPerPageOptions:[5,10,25]}))))};he.getInitialProps=function(){},he.defaultProps={customers:[]};var ve=he,Oe=Object(c.a)((function(e){return{root:{},posts:{marginTop:e.spacing(2)},post:{marginBottom:e.spacing(2)}}})),ye=function(e){var a=e.className,t=Object(g.a)(e,["className"]),l=Oe(),c=Object(n.useState)({list:[],count:0,pageNo:1}),i=Object(E.a)(c,2),o=i[0],s=i[1],m=function(){var e=Object(f.a)(p.a.mark((function e(){var a,t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a.stringify({token:window.token,pageNum:1,pageSize:10,complaintType:2,createDate:"2019-06-04"}),e.next=3,x()("http://47.96.129.81:8081/f/v1/rights-protection-createDate-complaintType?".concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n.body);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),r.a.createElement("div",Object.assign({},t,{className:Object(j.a)(l.root,a)}),r.a.createElement("div",{className:l.posts},o&&o.list.length>0?r.a.createElement(ve,{onRefresh:m,data:o}):r.a.createElement(O.a,null,r.a.createElement(y.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:200}},r.a.createElement("span",{style:{padding:8}},r.a.createElement(h.a,{style:{fontSize:36}})),r.a.createElement(v.a,{variant:"h3"},"\u6ca1\u6709\u6570\u636e"))))))},je=Object(c.a)((function(e){return{root:{padding:0},inner:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},divider:{backgroundColor:i.a.grey[300]},content:{marginTop:e.spacing(3)}}})),Ne=function(e){var a=e.match,t=e.history,n=je(),c=a.params.tab,i=[{value:"fake",label:"\u5047\u5192\u6295\u8bc9\u53d7\u7406"},{value:"infringement",label:"\u4fb5\u6743\u6295\u8bc9\u53d7\u7406"}];return c?i.find((function(e){return e.value===c}))?r.a.createElement(u.d,{className:n.root,title:"\u6295\u8bc9\u53d7\u7406"},r.a.createElement(ge,null),r.a.createElement("div",{className:n.inner},r.a.createElement(o.a,{onChange:function(e,a){t.push(a)},scrollButtons:"auto",value:c,variant:"scrollable"},i.map((function(e){return r.a.createElement(s.a,{key:e.value,label:e.label,value:e.value})}))),r.a.createElement(m.a,{className:n.divider}),r.a.createElement("div",{className:n.content},"fake"===c&&r.a.createElement(pe,null),"infringement"===c&&r.a.createElement(ye,null)))):r.a.createElement(l.a,{to:"/errors/error-404"}):r.a.createElement(l.a,{to:"/complaint/fake"})};t.d(a,"default",(function(){return Ne}))}}]);