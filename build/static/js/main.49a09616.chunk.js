(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=(a(37),a(11)),s=a(12),i=a(14),u=a(13),d=a(8),m=a.n(d),f=a(10),p=a(18),h=a(7),E=a(9),v=a.n(E),b=a(66),g=a(30),j=a(69),w=a(68),O=(a(57),a(2)),y=a.n(O),k=function(e){var t=Object(n.useState)(20),a=Object(h.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(h.a)(l,2),i=s[0],u=s[1];return r.a.createElement(g.a,{xs:12,sm:4,className:"mt-1 mb-1",onClick:e.clicked,"data-test":"post-div"},r.a.createElement(w.a,{className:y()("PostDiv",i&&"Height100")},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,{"data-test":"post-title"},e.title.length>o?e.title.substring(0,o):e.title),r.a.createElement(w.a.Text,{"data-test":"post-content"},e.content.length>o?e.content.substring(0,o):e.content)),r.a.createElement(w.a.Body,null,r.a.createElement(j.a,{"data-test":"post-button",className:"ReadMore",variant:"primary",onClick:function(){c(255),u(!0)}},"Read more"))))},x=(a(58),function(e){var t=function(){var t=Object(f.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.delete("https://jsonplaceholder.typicode.com/posts/"+e.id).then((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.loading?r.a.createElement("p",{"data-test":"loading-div",style:{textAlign:"center"}},"Loading...!"):e.loadedPost.title?r.a.createElement(g.a,{className:"FullPost","data-test":"loadedPost-div"},r.a.createElement("h6",{"data-test":"loadedPost-title"},e.loadedPost.title),r.a.createElement("p",{"data-test":"loadedPost-body"},e.loadedPost.body),r.a.createElement("div",{className:"Edit"},r.a.createElement("button",{onClick:function(){return t},className:"Delete"},"Delete"))):r.a.createElement("p",{"data-test":"noResult-div",style:{textAlign:"center"}},"Please select a Post!")}),C=a(67),P=(a(59),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",author:"Varun"},e.postDataHandler=function(){var t={title:e.state.title,content:e.state.content,author:e.state.author};v.a.post("https://jsonplaceholder.typicode.com/posts/",t).then((function(e){}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{className:"NewPost"},r.a.createElement(C.a,null,r.a.createElement(C.a.Row,null,r.a.createElement(g.a,{xs:12},"Add a Post"),r.a.createElement(C.a.Group,{as:g.a,md:"4",xs:"12"},r.a.createElement(C.a.Label,null,"Title"),r.a.createElement(C.a.Control,{type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement(C.a.Group,{as:g.a,md:"4",xs:"12"},r.a.createElement(C.a.Label,null,"Content"),r.a.createElement(C.a.Control,{as:"textarea",rows:3,value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})),r.a.createElement(C.a.Group,{as:g.a,md:"4",xs:"12"},r.a.createElement(C.a.Label,null,"Author"),r.a.createElement(C.a.Control,{as:"select",value:this.state.author,onChange:function(t){return e.setState({author:t.target.value})}},r.a.createElement("option",{value:"Varun"},"Varun"),r.a.createElement("option",{value:"Manu"},"Manu")))),r.a.createElement(C.a.Row,null,r.a.createElement(g.a,{xs:12},r.a.createElement(j.a,{onClick:this.postDataHandler},"Add Post")))))}}]),a}(n.Component));a(63);function N(e){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 3:if(200!==(a=e.sent).status||!a.data){e.next=8;break}return e.abrupt("return",a.data);case 8:throw Error("Error");case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),Error("Error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var A=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),l=Object(h.a)(c,2),s=l[0],i=l[1],u=Object(n.useState)(null),d=Object(h.a)(u,2),E=d[0],w=d[1],O=Object(n.useState)(4),y=Object(h.a)(O,2),C=y[0],S=y[1],A=Object(n.useState)({}),L=Object(h.a)(A,2),D=L[0],M=L[1],R=Object(n.useState)(!1),B=Object(h.a)(R,2),V=B[0],W=B[1];Object(n.useEffect)((function(){v.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var t=e.data.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{author:"Varun"})}));o(t)}))}),[]),Object(n.useEffect)((function(){i(a.slice(0,C))}),[a,C]),Object(n.useEffect)((function(){E&&function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D&&(!D||D.id===E)){e.next=7;break}return W(!0),e.next=4,N(E);case 4:t=e.sent,M(t||{}),W(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[E]);var G=s.map((function(e){return r.a.createElement(k,{key:e.id,title:e.title,author:e.author,content:e.body,clicked:function(){return t=e.id,void w(t);var t}})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{xs:12},r.a.createElement("h2",null,"Add Articles!"))),r.a.createElement(b.a,null,r.a.createElement(g.a,{xs:12},r.a.createElement("p",null,"Articles can be added with title and content"))),r.a.createElement(b.a,null,G),r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"LoadMoreDiv"},r.a.createElement(j.a,{classes:"LoadMore",variant:"secondary",onClick:function(){S(C+4)}}," ","Load More"," "))),r.a.createElement(b.a,null,r.a.createElement(x,{id:E,loadedPost:D,loading:V})),r.a.createElement(b.a,null,r.a.createElement(P,null)))},L=a(31),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(L.a,null,r.a.createElement(A,null))}}]),a}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(64);c.a.render(r.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-blog",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-blog","/service-worker.js");M?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.49a09616.chunk.js.map