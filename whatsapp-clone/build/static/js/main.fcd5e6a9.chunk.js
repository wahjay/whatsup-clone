(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{61:function(e,a,t){e.exports=t(87)},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),o=(t(66),t(6)),s=(t(67),t(68),t(99)),i=t(101),m=t(50),u=t.n(m),d=t(51),p=t.n(d),h=t(36),E=t.n(h),v=t(37),f=t.n(v),g=(t(69),t(28)),b=t(27),_=t.n(b),N=_.a.initializeApp({apiKey:"AIzaSyB0JoV3-6Kg4YqOnpYdPOi3v7K53RWhUz4",authDomain:"whatsapp-clone-78b77.firebaseapp.com",databaseURL:"https://whatsapp-clone-78b77.firebaseio.com",projectId:"whatsapp-clone-78b77",storageBucket:"whatsapp-clone-78b77.appspot.com",messagingSenderId:"984528169704",appId:"1:984528169704:web:5fd2bf3f42d4472ab3b75d",measurementId:"G-YQEF5HFK7H"}).firestore(),S=_.a.auth(),O=new _.a.auth.GoogleAuthProvider,j=N;function y(e){var a,t=e.addNewChat,r=e.id,l=e.name,s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)([]),h=Object(o.a)(p,2),E=h[0],v=h[1];Object(n.useEffect)((function(){r&&j.collection("rooms").doc(r).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return v(e.docs.map((function(e){return e.data()})))}))}),[r]),Object(n.useEffect)((function(){d(Math.floor(6e3*Math.random()))}),[]);return t?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat room");e&&j.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add New Chat")):c.a.createElement(g.b,{to:"/rooms/".concat(r)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/avataaars/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,l),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))}var w=t(52),I=t.n(w),U=Object(n.createContext)(),C=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(U.Provider,{value:Object(n.useReducer)(a,t)},r)},R=function(){return Object(n.useContext)(U)},L=t(41),x={user:function(e){var a=sessionStorage.getItem(e);if(!a)return null;var t=JSON.parse(a);return(new Date).getTime()>t.exp?(sessionStorage.removeItem(e),sessionStorage.removeItem("curUser"),null):{displayName:t.displayName,photoURL:t.photoURL}}(sessionStorage.getItem("curUser"))},k="SET_USER",D=function(e,a){switch(a.type){case k:return Object(L.a)(Object(L.a)({},e),{},{user:a.user});default:return e}};function A(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=R(),m=Object(o.a)(l,2),d=m[0].user,h=m[1],v=Object(n.useState)(null),g=Object(o.a)(v,2),b=g[0],_=g[1];Object(n.useEffect)((function(){var e=j.collection("rooms").onSnapshot((function(e){var a=e.docs.map((function(e){return{id:e.id,data:e.data()}}));r(a)}));return function(){e()}}),[]);return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,null,c.a.createElement(i.a,{src:null===d||void 0===d?void 0:d.photoURL})),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(s.a,null,c.a.createElement(u.a,null)),c.a.createElement(s.a,null,c.a.createElement(p.a,null)),c.a.createElement(s.a,{onClick:function(){return _((function(e){return!e}))}},c.a.createElement(E.a,null)),b&&c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{className:"option",onClick:function(){S.signOut().then((function(){var e=sessionStorage.getItem("curUser");sessionStorage.removeItem("curUser"),e&&sessionStorage.removeItem(e),h({type:k,user:null})})).catch((function(e){return alert(e.message)}))}},c.a.createElement(I.a,null),c.a.createElement("button",null,"Sign out"))))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(f.a,null),c.a.createElement("input",{placeholder:"Search or start a new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(y,{addNewChat:!0}),t.map((function(e){return c.a.createElement(y,{key:e.id,id:e.id,name:e.data.name})}))))}var B=t(5),P=(t(85),t(53)),T=t.n(P),W=t(54),J=t.n(W),M=t(55),G=t.n(M);function H(){var e,a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),d=u[0],p=u[1],h=Object(B.f)().roomId,v=Object(n.useState)(""),g=Object(o.a)(v,2),b=g[0],N=g[1],S=Object(n.useState)([]),O=Object(o.a)(S,2),y=O[0],w=O[1],I=R(),U=Object(o.a)(I,2),C=U[0].user;U[1];Object(n.useEffect)((function(){h&&(j.collection("rooms").doc(h).onSnapshot((function(e){return N(e.data().name)})),j.collection("rooms").doc(h).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){var a=e.docs.map((function(e){return e.data()}));w(a)}))),l(Math.floor(6e3*Math.random()))}),[h]),Object(n.useEffect)((function(){L()}),[y.length]);var L=function(){var e=document.getElementById("chat__window");e.scrollTop=e.scrollHeight-e.clientHeight};return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(i.a,{src:"https://avatars.dicebear.com/api/gridy/".concat(r,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,b),c.a.createElement("p",null,"Last Seen: ",y.length>0&&new Date(null===(e=y[y.length-1].timestamp)||void 0===e?void 0:e.toDate()).toLocaleString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(s.a,null,c.a.createElement(f.a,null)),c.a.createElement(s.a,null,c.a.createElement(T.a,null)),c.a.createElement(s.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"chat__body",id:"chat__window"},y.map((function(e){var a;return c.a.createElement("div",{className:"chat__messageContainer"},c.a.createElement("div",{className:"chat__message"},e.name!==C.displayName&&c.a.createElement(i.a,{src:null===C||void 0===C?void 0:C.photoURL,style:{marginRight:"10px"}}),c.a.createElement("p",{className:"chat__messageInfo ".concat(e.name===C.displayName&&"chat__receiver")},c.a.createElement("span",{className:"chat__name"},e.name),e.message),e.name===C.displayName&&c.a.createElement(i.a,{src:null===C||void 0===C?void 0:C.photoURL,style:{marginLeft:"10px"}})),c.a.createElement("span",{className:"chat__timestamp ".concat(e.name===C.displayName&&"chat__receiverTimestamp")},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toLocaleString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(s.a,null,c.a.createElement(J.a,null)),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j.collection("rooms").doc(h).collection("messages").add({message:d,name:C.displayName,timestamp:_.a.firestore.FieldValue.serverTimestamp(),profilePic:C.photoURL}),p("")}},c.a.createElement("input",{value:d,type:"text",placeholder:"Got something to say?",onChange:function(e){return p(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Send a message")),c.a.createElement(s.a,null,c.a.createElement(G.a,null))))}var K=t(56),z=t(100);t(86);function F(){var e=R(),a=Object(o.a)(e,2);Object(K.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"WhatsApp logo"}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(z.a,{onClick:function(){S.signInWithPopup(O).then((function(e){!function(e,a,t){var n=new Date,c={displayName:a.displayName,photoURL:a.photoURL,exp:n.getTime()+t};sessionStorage.setItem("curUser",e),sessionStorage.setItem(e,JSON.stringify(c))}(e.user.email,e.user,72e5),t({type:k,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))}var Y=function(){var e=R(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(g.a,null,c.a.createElement(A,null),c.a.createElement(B.c,null,c.a.createElement(B.a,{path:"/rooms/:roomId",component:H}),c.a.createElement(B.a,{path:"/",exact:!0})))):c.a.createElement(F,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,{initialState:x,reducer:D},c.a.createElement(Y,null))),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.fcd5e6a9.chunk.js.map