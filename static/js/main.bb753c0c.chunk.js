(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(6),s=n.n(r),c=n(1),a=n.n(c),u=n(3),o=n(4),i=n(2),l="https://mate.academy/students-api/posts",p=function(){var t=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("".concat(l,"?userId=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e){t.next=10;break}return t.next=3,fetch("".concat(l,"/").concat(e));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=(n(12),n(13),n(14),n(0)),m=function(t){var e=t.posts,n=t.selectPost,r=t.selectedPostId;return Object(d.jsxs)("div",{className:"PostsList",children:[Object(d.jsx)("h2",{children:"Posts:"}),Object(d.jsx)("ul",{className:"PostsList__list",children:e.length>0&&e.map((function(t){return Object(d.jsxs)("li",{className:"PostsList__item",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("b",{children:["User ID:"," ",t.userId]}),Object(d.jsx)("p",{children:t.title})]}),r===t.id?Object(d.jsx)("button",{type:"button",className:"PostsList__button button is-success is-light",onClick:function(){n(0)},children:"Close"}):Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){n(t.id)},children:"Open"})]},t.id)}))})]})},f="https://mate.academy/students-api/comments";function h(t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e){t.next=10;break}return t.next=3,fetch("".concat(f,"?postId=").concat(e));case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f,"/").concat(e),{method:"DELETE"});case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return r=t.sent,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(16);var k=function(t){var e=t.postId,n=t.updateComments,r=Object(i.useState)(""),s=Object(o.a)(r,2),c=s[0],l=s[1],p=Object(i.useState)(""),j=Object(o.a)(p,2),b=j[0],m=j[1],f=Object(i.useState)(""),h=Object(o.a)(f,2),x=h[0],O=h[1],v=function(){var t=Object(u.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,w({postId:e,name:c,email:b,body:x});case 3:t.sent&&n(),l(""),m(""),O("");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("form",{action:"POST",className:"NewCommentForm",onSubmit:v,children:[Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{value:c,type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:function(t){return l(t.target.value)}})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{value:b,type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:function(t){return m(t.target.value)}})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("textarea",{value:x,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(t){return O(t.target.value)}})}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})},N=(n(17),function(t){var e=t.post,n=t.selectedPostId,r=Object(i.useState)(!0),s=Object(o.a)(r,2),c=s[0],l=s[1],p=Object(i.useState)([]),j=Object(o.a)(p,2),b=j[0],m=j[1],f=b&&!c?"Comments are hidden":"No Comments",x=Object(i.useCallback)(Object(u.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n);case 2:(e=t.sent)&&m(e);case 4:case"end":return t.stop()}}),t)}))),[n]),v=function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:t.sent&&x();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return x(),function(){}}),[n]),Object(d.jsxs)("div",{className:"PostDetails",children:[Object(d.jsx)("h2",{children:"Post details:"}),e&&Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"PostDetails__post",children:Object(d.jsx)("p",{children:null===e||void 0===e?void 0:e.title})}),Object(d.jsxs)("section",{className:"PostDetails__comments",children:[b&&b.length>0&&Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return l((function(t){return!t}))},children:b&&c?"Hide comments":"Show Comments"}),Object(d.jsx)("ul",{className:"PostDetails__list",children:b&&b.length>0&&c?b.map((function(t){return Object(d.jsxs)("li",{className:"PostDetails__list-item",children:[Object(d.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return v(t.id)},children:"X"}),Object(d.jsx)("p",{children:t.name})]},t.id)})):Object(d.jsx)("p",{children:f})})]})]}),Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(d.jsx)(k,{updateComments:x,postId:n})})})]})});function y(){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(a.a.mark((function t(){var e,n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("https://mate.academy/students-api/users/"),fetch("https://mate.academy/students-api/posts")]);case 2:if((e=t.sent)[0].ok&&e[1].ok){t.next=5;break}throw new Error("Error ocured while fetching the data");case 5:return t.next=7,e[0].json();case 7:return n=t.sent,t.next=10,e[1].json();case 10:return r=t.sent,t.abrupt("return",[n,r]);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(i.useState)([]),c=Object(o.a)(s,2),l=c[0],p=c[1],f=Object(i.useState)(0),h=Object(o.a)(f,2),x=h[0],O=h[1],v=Object(i.useState)(0),w=Object(o.a)(v,2),_=w[0],k=w[1],P=Object(i.useState)(null),C=Object(o.a)(P,2),S=C[0],g=C[1];Object(i.useEffect)((function(){function t(){return(t=Object(u.a)(a.a.mark((function t(){var e,n,s,c,u,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==x){t.next=12;break}return t.next=3,y();case 3:e=t.sent,n=Object(o.a)(e,2),s=n[0],c=n[1],u=s.filter((function(t){return c.find((function(e){return e.userId===t.id}))})),p(u),r(c),t.next=16;break;case 12:return t.next=14,j(x);case 14:i=t.sent,r(i);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[x,_]);var E=Object(i.useCallback)(function(){var t=Object(u.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:n=t.sent,k(e),g(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App__header",children:Object(d.jsxs)("label",{htmlFor:"userName",children:["Select a user: \xa0",Object(d.jsxs)("select",{name:"userName",className:"App__user-selector",onChange:function(t){var e=t.target.value;O(Number(e))},children:[Object(d.jsx)("option",{value:"0",children:"All users"}),l.length>0&&l.map((function(t){return Object(d.jsx)("option",{value:t.id,children:t.name},t.name)}))]})]})}),Object(d.jsxs)("main",{className:"App__main",children:[Object(d.jsx)("div",{className:"App__sidebar",children:Object(d.jsx)(m,{selectedPostId:_,posts:n,selectPost:E})}),Object(d.jsx)("div",{className:"App__content",children:S?Object(d.jsx)(N,{selectedPostId:_,post:S}):Object(d.jsx)("h1",{children:"Select a post"})})]})]})};s.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bb753c0c.chunk.js.map