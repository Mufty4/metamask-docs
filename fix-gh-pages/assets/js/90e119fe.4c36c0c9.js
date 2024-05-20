"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9107],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(t),m=i,g=f["".concat(p,".").concat(m)]||f[m]||y[m]||s;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[f]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(58168),i=(t(96540),t(15680));const s={description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},r="Notifications",o={unversionedId:"features/notifications",id:"features/notifications",title:"Notifications",description:"Notify users directly in MetaMask, or natively in their OS.",source:"@site/snaps/features/notifications.md",sourceDirName:"features",slug:"/features/notifications",permalink:"/fix-gh-pages/snaps/features/notifications",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/notifications.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Notify users directly in MetaMask, or natively in their OS.",sidebar_position:10},sidebar:"snapsSidebar",previous:{title:"Non-EVM networks",permalink:"/fix-gh-pages/snaps/features/non-evm-networks"},next:{title:"Signature insights",permalink:"/fix-gh-pages/snaps/features/signature-insights"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to notify users",id:"1-request-permission-to-notify-users",level:3},{value:"2. Create a notification",id:"2-create-a-notification",level:3},{value:"Example",id:"example",level:2}],c={toc:l},f="wrapper";function y(e){let{components:n,...s}=e;return(0,i.yg)(f,(0,a.A)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"notifications"},"Notifications"),(0,i.yg)("p",null,"You can display notifications directly in MetaMask or natively in a user's operating system (OS)\nusing the ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_notify"},(0,i.yg)("inlineCode",{parentName:"a"},"snap_notify"))," API method."),(0,i.yg)("h2",{id:"steps"},"Steps"),(0,i.yg)("h3",{id:"1-request-permission-to-notify-users"},"1. Request permission to notify users"),(0,i.yg)("p",null,"Request the ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_notify"},(0,i.yg)("inlineCode",{parentName:"a"},"snap_notify"))," permission.\nAdd the following to your Snap's manifest file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_notify": {}\n}\n')),(0,i.yg)("h3",{id:"2-create-a-notification"},"2. Create a notification"),(0,i.yg)("p",null,"Create a notification by calling ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_notify"},(0,i.yg)("inlineCode",{parentName:"a"},"snap_notify")),", which takes\na notification ",(0,i.yg)("inlineCode",{parentName:"p"},"type")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"message"),".\nSpecify ",(0,i.yg)("inlineCode",{parentName:"p"},'type: "inApp"')," to display the notification in the MetaMask UI, or ",(0,i.yg)("inlineCode",{parentName:"p"},'type: "native"')," to\ndisplay the notification in the user's OS."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"We recommend using ",(0,i.yg)("inlineCode",{parentName:"p"},'type: "inApp"')," because there's no guarantee that native notifications are\ndisplayed to the user.\nYou can also call ",(0,i.yg)("inlineCode",{parentName:"p"},"snap_notify")," twice, which each notification type, to trigger both an in-app and\nnative notification.")),(0,i.yg)("p",null,'The following example displays a notification in MetaMask, with the message "Hello, world!":'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'await snap.request({\n  method: "snap_notify",\n  params: {\n    type: "inApp",\n    message: "Hello, world!",\n  },\n});\n')),(0,i.yg)("div",{class:"row"},(0,i.yg)("div",{class:"column"},(0,i.yg)("img",{src:t(30911).A,width:"250px",alt:"Notification alert",style:{border:"1px solid #DCDCDC"}})),(0,i.yg)("div",{class:"column"},(0,i.yg)("img",{src:t(45636).A,width:"300px",alt:"Notification message",style:{border:"1px solid #DCDCDC"}}))),(0,i.yg)("admonition",{title:"Notification rate limits",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Each Snap can trigger up to:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Five in-app notifications per minute."),(0,i.yg)("li",{parentName:"ul"},"Two native notifications per five minutes."))),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"See the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/notifications"},(0,i.yg)("inlineCode",{parentName:"a"},"@metamask/notifications-example-snap")),"\npackage for a full example of implementing notifications using\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_notify"},(0,i.yg)("inlineCode",{parentName:"a"},"snap_notify")),".\nThis example exposes a ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to display in-app and native notifications."))}y.isMDXComponent=!0},30911:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/notifications-1-124974c2b537df6987224a2ce123fc48.png"},45636:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/notifications-2-a31a9c479c1713aabe039d2945a79210.png"}}]);