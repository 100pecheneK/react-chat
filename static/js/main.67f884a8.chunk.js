(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(11),o=n.n(i),s=n(7);function l(e,t){var n="react-chat-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!==e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(s.a)(c,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,o]}var u=n(129),d=n(123),j=n(124),b=n(130),O=u.a.Label,f=u.a.Control,x=u.a.Group;function m(e){var t=e.onIdSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(c.jsx)(d.a,{className:"d-flex align-items-center",style:{height:"100vh"},children:Object(c.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),i&&t(i)},className:"w-100",children:[Object(c.jsxs)(x,{children:[Object(c.jsx)(O,{children:"Enter Your Id"}),Object(c.jsx)(f,{type:"text",onChange:function(e){o(e.target.value)},value:i,required:!0})]}),Object(c.jsx)(j.a,{type:"submit",className:"mr-2",children:"Login"}),Object(c.jsx)(j.a,{variant:"secondary",onClick:function(){t(Object(b.a)())},children:"Create A New Id"})]})})}var v=n(15),h=n(16),p=r.a.createContext();function g(){return Object(a.useContext)(p)}function C(e){var t=e.children,n=l("contacts",[]),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.jsx)(p.Provider,{value:{contacts:r,createContact:function(e,t){i((function(n){return[].concat(Object(v.a)(n),[{id:e,name:t}])}))},updateContact:function(e,t){i((function(n){return n.map((function(n){return n.id===e&&(n.name=t),n}))}))}},children:t})}var y=n(73),S=n.n(y),N={SERVER_URL:"https://react-chat-misha.herokuapp.com/"},k=r.a.createContext();function I(e){var t=e.id,n=e.children,r=Object(a.useState)(),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){var e=S()(N.SERVER_URL,{transports:["websocket"],query:{id:t}});return l(e),function(){return e.close()}}),[t]),Object(c.jsx)(k.Provider,{value:o,children:n})}var M=r.a.createContext();function w(){return Object(a.useContext)(M)}function E(e){var t=e.id,n=e.children,r=l("conversations",[]),i=Object(s.a)(r,2),o=i[0],u=i[1],d=g().contacts,j=Object(a.useState)(),b=Object(s.a)(j,2),O=b[0],f=b[1],x=Object(a.useContext)(k),m=o.map((function(e,n){var c=e.recipients.map((function(e){var t=d.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),a=e.messages.map((function(e){var n=d.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,a=t===e.sender;return Object(h.a)(Object(h.a)({},e),{},{senderName:c,fromMe:a})})),r=n===O;return Object(h.a)(Object(h.a)({},e),{},{messages:a,recipients:c,selected:r})}));var p=Object(a.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;u((function(e){var a,r=!1,i={sender:c,text:n},o=-1,s=e.find((function(e,n){return o=n,L(e.recipients,t)}));if(s&&o>=0&&(r=!0,s=Object(h.a)(Object(h.a)({},s),{},{messages:[].concat(Object(v.a)(s.messages),[i])})),a=r?[s].concat(Object(v.a)(e.slice(0,o)),Object(v.a)(e.slice(o+1))):[{recipients:t,messages:[i]}].concat(Object(v.a)(e)),void 0!==O){var l=a.findIndex((function(t){return L(t.recipients,e[O].recipients)}));f(l)}return a}))}),[u,O]);Object(a.useEffect)((function(){if(x)return x.on("receive-message",p),function(){return x.off("receive-message")}}),[x,p]);var C={conversations:m,createConversation:function(e){u((function(t){return[].concat(Object(v.a)(t),[{recipients:e,messages:[]}])}))},selectedConversationIndex:O,selectedConversation:m[O],selectConversationIndex:function(e){f((function(t){return t===e?null:e}))},sendMessage:function(e,n){x.emit("send-message",{recipients:e,text:n}),p({recipients:e,text:n,sender:t})}};return Object(c.jsx)(M.Provider,{value:C,children:n})}function L(e,t){return e.length===t.length&&(e.sort(),t.sort(),e.every((function(e,n){return e===t[n]})))}var D=n(127),V=n(125),A=n(126),K=n(45),P=n(128);function R(e){var t=e.closeModal,n=e.initialValue,r=e.options,i=g(),o=i.createContact,l=i.updateContact,d=Object(a.useState)({id:(null===n||void 0===n?void 0:n.id)?n.id:"",name:(null===n||void 0===n?void 0:n.name)?n.name:""}),b=Object(s.a)(d,2),O=b[0],f=b[1],x=O.id,m=O.name,v=function(e){f((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(K.a)({},e.target.name,e.target.value))}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(P.a.Header,{closeButton:!0,children:"Create Contact"}),Object(c.jsx)(P.a.Body,{children:Object(c.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),(null===r||void 0===r?void 0:r.update)?l(x.trim(),m):o(x.trim(),m),t()},children:[Object(c.jsxs)(u.a.Group,{children:[Object(c.jsx)(u.a.Label,{children:"Id"}),Object(c.jsx)(u.a.Control,{type:"text",name:"id",value:x,disabled:!!(null===r||void 0===r?void 0:r.update),onChange:v,required:!0})]}),Object(c.jsxs)(u.a.Group,{children:[Object(c.jsx)(u.a.Label,{children:"Name"}),Object(c.jsx)(u.a.Control,{type:"text",name:"name",value:m,onChange:v,required:!0})]}),Object(c.jsx)(j.a,{type:"submit",children:"Create"})]})})]})}function q(e){var t=e.closeModal,n=Object(a.useState)([]),r=Object(s.a)(n,2),i=r[0],o=r[1],l=g().contacts,d=w().createConversation;return Object(c.jsxs)("div",{children:[Object(c.jsx)(P.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(c.jsx)(P.a.Body,{children:Object(c.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),d(i),t()},children:[l.map((function(e){return Object(c.jsx)(u.a.Group,{controlId:e.id,children:Object(c.jsx)(u.a.Check,{type:"checkbox",value:i.includes(e.id),label:e.name,onChange:function(){return t=e.id,void o((function(e){return e.includes(t)?e.filter((function(e){return t===e})):[].concat(Object(v.a)(e),[t])}));var t}})},e.id)})),Object(c.jsx)(j.a,{type:"submit",children:"Create"})]})})]})}function B(e){var t=e.modalName,n=e.initialValue,a=e.options,r=J(),i=r.modalOpen,o=r.closeModal,s={conversation:Object(c.jsx)(q,{closeModal:o}),contact:Object(c.jsx)(R,{initialValue:n,closeModal:o,options:a})};return Object(c.jsx)(P.a,{show:i,onHide:o,children:s[t]})}var G=r.a.createContext();function J(){return Object(a.useContext)(G)}function T(e){var t=e.children,n=Object(a.useState)(!1),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(),u=Object(s.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(),O=Object(s.a)(b,2),f=O[0],x=O[1],m=Object(a.useState)(),v=Object(s.a)(m,2),h=v[0],p=v[1],g={openModal:function(e,t,n){x(t),p(n),j(e),o(!0)},closeModal:function(){o(!1)},modalOpen:i,render:Object(c.jsx)(B,{modalName:d,initialValue:f,options:h})};return Object(c.jsx)(G.Provider,{value:g,children:t})}function H(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=w(),o=i.sendMessage,l=i.selectedConversation,d=g().contacts,b=J().openModal,O=Object(a.useCallback)((function(e){e&&e.scrollIntoView({behavior:"smooth"})}),[]),f=function(e){e&&e.preventDefault(),n&&(o(l.recipients.map((function(e){return e.id})),n),r(""))};return Object(c.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(c.jsx)("div",{className:"border-bottom d-flex justify-content-end align-items-center px-2 py-1",style:{height:"42px"},children:l.recipients.map((function(e,t){return function(e,t){for(var n=0;n<t.length;n++)if(t[n].id===e.id)return!0;return!1}(e,d)?Object(c.jsx)(D.a,{placement:"bottom",overlay:Object(c.jsx)(V.a,{children:"Edit contact"}),children:Object(c.jsx)(j.a,{variant:"light",className:"".concat(t&&"ml-2"),onClick:function(){return b("contact",{id:l.recipients[t].id,name:l.recipients[t].name},{update:!0})},children:e.name})},e.id):Object(c.jsx)(D.a,{placement:"bottom",overlay:Object(c.jsx)(V.a,{children:"Add to contacts"}),children:Object(c.jsx)(j.a,{onClick:function(){return b("contact",{id:l.recipients[t].id})},children:t?"Unknown ".concat(t+1):e.name})},e.id)}))}),Object(c.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3 pt-2",children:l.messages.map((function(e,t){return Object(c.jsxs)("div",{ref:l.messages.length-1===t?O:null,className:"'my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(c.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"bg-primary text-white":"border"),children:e.text}),Object(c.jsx)("div",{className:"text-muted small ".concat(e.fromMe?"text-right":""),children:e.fromMe?"You":e.senderName})]},t)}))})}),Object(c.jsx)(u.a,{onSubmit:f,children:Object(c.jsx)(u.a.Group,{className:"m-2",children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(u.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return r(e.target.value)},style:{height:"75px",resize:"none"},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),f())}}),Object(c.jsx)(A.a.Append,{children:Object(c.jsx)(j.a,{type:"submit",children:"Send"})})]})})})]})}var U=n(132),Y=n(131),_=n(133);function z(){var e=w(),t=e.conversations,n=e.selectConversationIndex;return Object(c.jsx)(_.a,{variant:"flush",children:t.map((function(e,t){return Object(c.jsx)(_.a.Item,{action:!0,active:e.selected,onClick:function(){return n(t)},children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})}function F(){var e=g().contacts;return Object(c.jsx)(_.a,{variant:"flush",children:e.map((function(e){return Object(c.jsx)(_.a.Item,{children:e.name},e.id)}))})}var Q=n(74),W=n.n(Q);var X=U.a.Container,Z=U.a.Content,$=U.a.Pane,ee=Y.a.Item,te=Y.a.Link,ne="conversations",ce="contacts";function ae(e){var t=e.id,n=Object(a.useState)(ne),i=Object(s.a)(n,2),o=i[0],l=i[1],u=J(),d=o===ne,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=r.a.useState(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],i=r.a.useCallback((function(e){"string"===typeof e||"number"==typeof e?(W()(e.toString()),a(!0)):(a(!1),console.error("Cannot copy typeof ".concat(typeof e," to clipboard, must be a string or number.")))}),[]);return r.a.useEffect((function(){var t;return c&&e&&(t=setTimeout((function(){return a(!1)}),e)),function(){clearTimeout(t)}}),[c,e]),[c,i]}(5e3),O=Object(s.a)(b,2),f=O[0],x=O[1];return Object(c.jsx)("div",{style:{width:"250px"},className:"d-flex flex-column",children:Object(c.jsxs)(X,{activeKey:o,onSelect:l,children:[Object(c.jsxs)(Y.a,{variant:"tabs",className:"justify-content-center",children:[Object(c.jsx)(ee,{children:Object(c.jsx)(te,{eventKey:ne,children:"Conversations"})}),Object(c.jsx)(ee,{children:Object(c.jsx)(te,{eventKey:ce,children:"Contacts"})})]}),Object(c.jsxs)(Z,{className:"border-right overflow-auto flex-grow-1",children:[Object(c.jsx)($,{eventKey:ne,children:Object(c.jsx)(z,{})}),Object(c.jsx)($,{eventKey:ce,children:Object(c.jsx)(F,{})})]}),Object(c.jsx)(D.a,{placement:"top",overlay:Object(c.jsx)(V.a,{children:f?"Copied!":"Click to copy"}),children:Object(c.jsxs)("div",{className:"p-2 border-top border-right small",style:{cursor:"pointer"},onClick:function(){return x(t)},children:["Your Id: ",Object(c.jsx)("span",{className:"text-muted",children:t})]})}),Object(c.jsx)(j.a,{variant:"danger",onClick:function(){return localStorage.clear()},children:"DELETE ALL DATA"}),Object(c.jsxs)(j.a,{onClick:function(){d?u.openModal("conversation"):u.openModal("contact")},className:"rounded-0",children:["New ",d?"Conversation":"Contact"]}),u.render]})})}function re(e){var t=e.id,n=w().selectedConversation;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(c.jsx)(ae,{id:t}),n&&Object(c.jsx)(H,{})]})})}var ie=function(){var e=l("id"),t=Object(s.a)(e,2),n=t[0],a=t[1];return n?Object(c.jsx)(I,{id:n,children:Object(c.jsx)(T,{children:Object(c.jsx)(C,{children:Object(c.jsx)(E,{id:n,children:Object(c.jsx)(re,{id:n})})})})}):Object(c.jsx)(m,{onIdSubmit:a})};n(116);o.a.render(Object(c.jsx)(ie,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.67f884a8.chunk.js.map