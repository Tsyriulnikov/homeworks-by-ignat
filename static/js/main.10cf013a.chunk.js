(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports={container:"Header_container__3Im7A",nav:"Header_nav__JmBOU",navbar:"Header_navbar__1nsCc",menuBars:"Header_menuBars__1Yoh9",navMenu:"Header_navMenu__2sbD2",navMenuActive:"Header_navMenuActive__2iJuS",navText:"Header_navText__2tLCe",navMenuItems:"Header_navMenuItems__Tfl2T",navbarToggle:"Header_navbarToggle__2w5N9"}},,,,function(e,a,t){e.exports={affair:"Affairs_affair__17K7A",table_Hw2:"Affairs_table_Hw2__2C5eb",button7:"Affairs_button7__1qpTH"}},function(e,a,t){e.exports={message:"Message_message__3VBdT",avatar:"Message_avatar__1L6dl",content:"Message_content__2sZ3z",angle:"Message_angle__qVG9l",text:"Message_text__1C8sO",name:"Message_name__3YqX_",time:"Message_time__15Z_d"}},,,,,,function(e,a,t){e.exports={totalUsersSpan:"Greeting_totalUsersSpan__2NLyo",error:"Greeting_error__3Coc1",error_message:"Greeting_error_message__3mbBw",button7:"Greeting_button7__IZm_X"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__ByHdD",errorInput:"SuperInputText_errorInput__3Xp3U",error:"SuperInputText_error__kJOFg",input:"SuperInputText_input__28nRD"}},function(e,a,t){e.exports={container:"Error404_container__2S4TF",oops:"Error404_oops__2yx7M",pnf:"Error404_pnf__2s-94",buttonHome:"Error404_buttonHome__2mn6u"}},,,,,,,function(e,a,t){e.exports={default:"SuperButton_default__sKlIP",red:"SuperButton_red__1rYEP",button:"SuperButton_button__3WrD3"}},function(e,a,t){e.exports={editImg:"HW6_editImg__-Py2f",spanWrap:"HW6_spanWrap__2j6hU",superSpan:"HW6_superSpan__3PTRS",delButton:"HW6_delButton__nLkgO"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__XU3S3",column:"HW4_column__2LPNx",testSpanError:"HW4_testSpanError__2MxcM"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__29Etg",spanClassName:"SuperCheckbox_spanClassName__1WmIx"}},function(e,a,t){e.exports={dark:"HW12_dark__3PuKl","dark-text":"HW12_dark-text__3grK2",red:"HW12_red__26Is_","red-text":"HW12_red-text__1YaFw",some:"HW12_some__1gyrL","some-text":"HW12_some-text__37uvb",orange:"HW12_orange__1wuV2","orange-text":"HW12_orange-text__13L4d",blue:"HW12_blue__UrqNB","blue-text":"HW12_blue-text__DDlxZ"}},,,function(e,a,t){e.exports={App:"App_App__xcGVP",blue:"App_blue__wR1aa"}},function(e,a,t){e.exports=t.p+"static/media/pen.1aa08a79.jpg"},function(e,a,t){e.exports={select:"SuperSelect_select__30NN-","select-css":"SuperSelect_select-css__1ynfK"}},function(e,a,t){e.exports={superRadio:"SuperRadio_superRadio__3xDr5"}},,,function(e,a,t){e.exports={loader:"HW10_loader__3YpYF",spin:"HW10_spin__2JMaa"}},function(e,a,t){e.exports={range:"SuperRange_range__wL4bi"}},,,,,,,function(e,a,t){e.exports=t(74)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(32),c=t.n(l),o=(t(66),t(47)),u=t.n(o),s=t(18),i=t(4),m=t(5),d=t(21),E=t.n(d);var _=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{className:E.a.avatar,src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:E.a.angle}),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",{className:E.a.text},e.message),r.a.createElement("div",{className:E.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",f="some text",b="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:p,name:v,message:f,time:b}),r.a.createElement("hr",null))},h=t(20),O=t.n(h);var C=function(e){return r.a.createElement("tr",{key:e.affair._id},r.a.createElement("td",null,e.affair.name),r.a.createElement("td",null,"[",e.affair.priority,"]"),r.a.createElement("td",null,r.a.createElement("button",{className:O.a.button7,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("table",{className:O.a.table_Hw2},r.a.createElement("tbody",null,a)),r.a.createElement("button",{className:O.a.button7,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:O.a.button7,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:O.a.button7,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:O.a.button7,onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(k),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(9),x=t(27),S=t.n(x),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.disabledAddButton,u=l?S.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:function(e){return t(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&n()},className:u}),r.a.createElement("button",{onClick:n,disabled:o,className:S.a.button7},"Add"),r.a.createElement("span",{className:S.a.totalUsersSpan},"  User count: ",c),l&&r.a.createElement("div",{className:S.a.error_message},l))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),d=m[0],E=m[1],_=!0;""!==o&&(_=!1);var p=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){u(e),E(null),_=!1},addUser:function(){""!==o.trim()?(t(o),alert("Hello! ".concat(o)),u("")):(E("Name is required"),u(""))},error:d,totalUsers:p,disabledAddButton:_})},T=t(94);var I=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){l([].concat(Object(y.a)(t),[{_id:Object(T.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(10),M=t(28),W=t.n(M),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(A.a)(e,B),i="".concat(W.a.error," ").concat(u||""),m="".concat(W.a.Input," ").concat(c?W.a.errorInput:W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},P=t(42),D=t.n(P),F=t(36),R=t.n(F),U=["red","className"],J=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,U),l=" ".concat(R.a.button," ").concat(a?R.a.red:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},G=t(43),K=t.n(G),X=["type","onChange","onChangeChecked","className","spanClassName","children"],Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,X),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){l(""),c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(L,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(L,{className:D.a.blue}),r.a.createElement(J,null,"default"),r.a.createElement(J,{red:!0,onClick:o},"delete "),r.a.createElement(J,{disabled:!0},"disabled"),r.a.createElement(Y,{checked:m,onChangeChecked:d},"Push me "),r.a.createElement(Y,{checked:m,onChange:function(e){d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=["autoFocus","onBlur","onEnter","spanProps"],V=["children","onDoubleClick","className"],z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,Z),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,_=d.onDoubleClick,p=d.className,v=Object(A.a)(d,V),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),_&&_(e)},className:f},v),E||c.value))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Q(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}$("test",{x:"A",y:1});Q("test",{x:"",y:0});var ee=t(37),ae=t.n(ee),te=t(48),ne=t.n(te);var re=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:ae.a.spanWrap},r.a.createElement("img",{className:ae.a.editImg,src:ne.a}),r.a.createElement(z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}}),r.a.createElement(J,{className:ae.a.delButton,onClick:function(){return l("")}},"X")),r.a.createElement(J,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(J,{onClick:function(){var e=Q("editable-span-value","");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(q,null),r.a.createElement(re,null))},ce=t(29),oe=t.n(ce);var ue=function(){var e=Object(m.g)();return r.a.createElement("div",{className:oe.a.container},r.a.createElement("div",{className:oe.a.oops},"OOPS!"),r.a.createElement("div",{className:oe.a.pnf},"404 - Page not found!"),r.a.createElement("div",null,r.a.createElement("button",{className:oe.a.buttonHome,onClick:function(){e("/")}},"Home")),r.a.createElement("div",null,r.a.createElement("img",{src:"https://miro.medium.com/1*uF7P2M_1EJRfZll4YxK6KA.gif"})))},se=t(49),ie=t.n(se),me=["options","value","onChange","onChangeOption"],de=function(e){var a=e.options,t=e.value,n=(e.onChange,e.onChangeOption),l=Object(A.a)(e,me),c=a?a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})):[];return r.a.createElement("select",Object.assign({className:ie.a.select,onChange:function(e){n&&n(e.currentTarget.value)},value:t},l),c)},Ee=t(50),_e=t.n(Ee),pe=["type","name","options","value","onChange","onChangeOption"],ve=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(A.a)(e,pe),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{className:_e.a.superRadio,value:e,type:"radio",onChange:c,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},fe=["x","y","z"];var be=function(){var e=Object(n.useState)(fe[0]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(de,{options:fe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ve,{name:"radio",options:fe,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ge=function(e,a){switch(a.type){case"sort":var t=Object(y.a)(e);switch(a.payload){case"up":return t.sort((function(e,a){return e.name>a.name?1:-1}));case"down":return t.sort((function(e,a){return e.name<a.name?1:-1}))}case"check":return Object(y.a)(e).filter((function(e){return e.age>=parseInt(a.payload)}));default:return e}},he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Oe=function(){var e=Object(n.useState)(he),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("table",null,r.a.createElement("tbody",null,c)),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(J,{onClick:function(){return l(ge(he,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(J,{onClick:function(){return l(ge(he,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(J,{onClick:function(){return l(ge(he,{type:"check",payload:"18"}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ce=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),E=d[0],_=d[1],p=function(){clearInterval(t),l(0)},v=u.toLocaleTimeString(),f=u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)}},v),E?r.a.createElement("div",null,f):r.a.createElement("br",null),r.a.createElement(J,{onClick:function(){p();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(J,{onClick:p},"stop"))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Ce,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ke=t(19),je=t(22),ye={isLoading:!1},xe=function(e){return{type:"LOADING",payload:{isLoading:e}}},Se=t(53),we=t.n(Se);var He=function(){var e=Object(ke.b)(),a=Object(ke.c)((function(e){return e.loading})),t=function(){e(xe(!1))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a.isLoading?r.a.createElement("div",{className:we.a.loader}):r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){e(xe(!0)),setTimeout(t,2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Te=t(54),Ie=t.n(Te),Ae=["type","onChange","onChangeRange","className"],Me=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(A.a)(e,Ae),c="".concat(Ie.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c},l)))},We=t(96),Be=t(93),Le=["type","onChange","onChangeRange","className"],Pe=function(e){e.type,e.onChange,e.onChangeRange,e.className,Object(A.a)(e,Le);var a=r.a.useState([20,37]),t=Object(i.a)(a,2),n=t[0],l=t[1];return r.a.createElement(We.a,{sx:{width:300}},r.a.createElement(Be.a,{getAriaLabel:function(){return"Temperature range"},value:n,onChange:function(e,a){l(a)},valueLabelDisplay:"auto"}))};var De=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(i.a)(c,2),u=o[0],s=(o[1],r.a.useState([20,37])),m=Object(i.a)(s,2);return m[0],m[1],r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11 \u041f\u043e\u043a\u0430 \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b :(",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Me,{onChangeRange:l})),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Pe,null),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Fe=t(44),Re=t.n(Fe),Ue={theme:"dark"},Je=["dark","red","some","orange","blue"];var Ge=function(){var e=Object(ke.c)((function(e){return e.theme})),a=Object(ke.b)();return r.a.createElement("div",{className:Re.a[e.theme]},r.a.createElement("hr",null),r.a.createElement("span",{className:Re.a[e.theme+"-text"]},"homeworks 12"),r.a.createElement("div",null,r.a.createElement(ve,{name:"radio",options:Je,value:e.theme,onChangeOption:function(e){a(function(e){return{type:"CHANGE-THEME",payload:{theme:e}}}(e))}})),r.a.createElement("hr",null))},Ke=function(){return r.a.createElement("div",null,"Junior",r.a.createElement(be,null),r.a.createElement(Oe,null),r.a.createElement(Ne,null),r.a.createElement(He,null),r.a.createElement(De,null),r.a.createElement(Ge,null))},Xe=function(){return r.a.createElement("div",null,"JuniorPlus")},Ye="/pre-junior",qe="/junior",Ze="/junior-plus";var Ve=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:Ye})}),r.a.createElement(m.b,{path:Ye,element:r.a.createElement(le,null)}),r.a.createElement(m.b,{path:qe,element:r.a.createElement(Ke,null)}),r.a.createElement(m.b,{path:Ze,element:r.a.createElement(Xe,null)}),r.a.createElement(m.b,{path:"/*",element:r.a.createElement(ue,null)})))},ze=t(16),$e=t.n(ze),Qe=t(55),ea=t(56);var aa=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(){return l(!t)};return r.a.createElement("div",{className:$e.a.container},r.a.createElement("div",{className:$e.a.navbar},r.a.createElement(s.b,{to:"#",className:$e.a.menuBars},r.a.createElement(Qe.a,{onClick:c}))),r.a.createElement("nav",{className:t?$e.a.navMenuActive:$e.a.navMenu},r.a.createElement("ul",{className:$e.a.navMenuItems,onClick:c},r.a.createElement("li",{className:$e.a.navbarToggle},r.a.createElement(s.b,{to:"#",className:$e.a.menuBars},r.a.createElement(ea.a,null))),r.a.createElement(s.c,{className:$e.a.nav,to:"/"},"Pre_junior"),r.a.createElement(s.c,{className:$e.a.nav,to:qe},"Junior"),r.a.createElement(s.c,{className:$e.a.nav,to:Ze},"Junior+"))))};var ta=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(aa,null),r.a.createElement(Ve,null)))};var na=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ta,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ra=t(39),la=Object(ra.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(je.a)(Object(je.a)({},e),{},{isLoading:a.payload.isLoading});default:return Object(je.a)({},e)}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE-THEME":return Object(je.a)(Object(je.a)({},e),{},{theme:a.payload.theme});default:return e}}}),ca=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ra.b,oa=Object(ra.c)(la,ca()),ua=oa;window.store=oa,c.a.render(r.a.createElement(ke.a,{store:ua},r.a.createElement(r.a.StrictMode,null,r.a.createElement(na,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[61,1,2]]]);
//# sourceMappingURL=main.10cf013a.chunk.js.map