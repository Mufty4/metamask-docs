"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5484],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>m});var n=t(96540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=s,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(m,i(i({ref:a},g),{},{components:t})):n.createElement(m,i({ref:a},g))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80530:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(58168),s=(t(96540),t(15680));const r={description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},i="Data storage",o={unversionedId:"features/data-storage",id:"features/data-storage",title:"Data storage",description:"Store encrypted and unencrypted data within a Snap.",source:"@site/snaps/features/data-storage.md",sourceDirName:"features",slug:"/features/data-storage",permalink:"/fix-gh-pages/snaps/features/data-storage",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/data-storage.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Store encrypted and unencrypted data within a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Home pages",permalink:"/fix-gh-pages/snaps/features/custom-ui/home-pages"},next:{title:"Lifecycle hooks",permalink:"/fix-gh-pages/snaps/features/lifecycle-hooks"}},p={},l=[{value:"Request permission to store data",id:"request-permission-to-store-data",level:2},{value:"Use encrypted storage",id:"use-encrypted-storage",level:2},{value:"Use unencrypted storage",id:"use-unencrypted-storage",level:2},{value:"Example",id:"example",level:2}],g={toc:l},d="wrapper";function c(e){let{components:a,...t}=e;return(0,s.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"data-storage"},"Data storage"),(0,s.yg)("p",null,"You can store and manage sensitive information within a Snap using encrypted storage, or\nnon-sensitive information using unencrypted storage.\nUse the ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," API method to persist up to\n100 MB of data to the user's disk and retrieve it at will.\nWe recommend using this method for storing data in a Snap long term."),(0,s.yg)("admonition",{title:"important",type:"caution"},(0,s.yg)("p",{parentName:"admonition"},"Snaps are installed in each user's MetaMask instance.\nIf a Snap stores data, that data is specific to that user's MetaMask instance.\nHowever, this data can be shared across multiple dapps.\nDo not assume that the data a Snap stores is unique to a single dapp unless it is specifically designed to be that way.")),(0,s.yg)("h2",{id:"request-permission-to-store-data"},"Request permission to store data"),(0,s.yg)("p",null,"To store data within a Snap, first request the\n",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," permission.\nAdd the following to your Snap's manifest file:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_manageState": {}\n}\n')),(0,s.yg)("h2",{id:"use-encrypted-storage"},"Use encrypted storage"),(0,s.yg)("p",null,"By default, ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState"))," automatically encrypts\ndata using a Snap-specific key before storing it on the user's disk, and automatically decrypts it\nwhen retrieved.\nThis is useful to store sensitive information, such as passwords."),(0,s.yg)("p",null,"The following example uses ",(0,s.yg)("inlineCode",{parentName:"p"},"snap_manageState")," to store some data using the ",(0,s.yg)("inlineCode",{parentName:"p"},"update")," operation, and\nretrieves the data at a later time using the ",(0,s.yg)("inlineCode",{parentName:"p"},"get")," operation.\nWhen the data is no longer required, the Snap's state is cleared using the ",(0,s.yg)("inlineCode",{parentName:"p"},"clear")," operation."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { operation: "get" },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n  },\n});\n')),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"Accessing encrypted state requires MetaMask to be unlocked.\nIf you need to access encrypted state in a background task such as a ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/cron-jobs"},"cron job"),", use\n",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_getclientstatus"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_getClientStatus"))," to ensure that MetaMask is\nunlocked before accessing state, preventing an unexpected password request.")),(0,s.yg)("h2",{id:"use-unencrypted-storage"},"Use unencrypted storage"),(0,s.yg)("p",null,"To use unencrypted storage, set ",(0,s.yg)("inlineCode",{parentName:"p"},"encrypted")," to ",(0,s.yg)("inlineCode",{parentName:"p"},"false")," when storing, retrieving, or clearing data\nusing ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThe Snap will use a storage section separate from the encrypted storage, and will not encrypt the data.\nThis is useful to access non-sensitive data from background operations such as\n",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/cron-jobs"},"cron jobs"),", without requiring the user to enter their password in the case that\nMetaMask is locked."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'// Persist some data.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "update",\n    newState: { hello: "world" },\n    encrypted: false,\n  },\n});\n\n// At a later time, get the stored data.\nconst persistedData = await snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "get",\n    encrypted: false,\n  },\n});\n\nconsole.log(persistedData);\n// { hello: "world" }\n\n// If data storage is no longer necessary, clear it.\nawait snap.request({\n  method: "snap_manageState",\n  params: { \n    operation: "clear",\n    encrypted: false,\n  },\n});\n')),(0,s.yg)("h2",{id:"example"},"Example"),(0,s.yg)("p",null,"See the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/manage-state"},(0,s.yg)("inlineCode",{parentName:"a"},"@metamask/manage-state-example-snap")),"\npackage for a full example of storing data using ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_managestate"},(0,s.yg)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThis example exposes a ",(0,s.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API")," for\ndapps to store, retrieve, and clear data."))}c.isMDXComponent=!0}}]);