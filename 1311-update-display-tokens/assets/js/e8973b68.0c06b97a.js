"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[785],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,y=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return a?n.createElement(y,r(r({ref:t},m),{},{components:a})):n.createElement(y,r({ref:t},m))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const s={description:"Display custom modals using the JavaScript SDK.",sidebar_position:10,tags:["JavaScript SDK"]},r="Display custom modals",i={unversionedId:"how-to/use-sdk/javascript/display-custom-modals",id:"how-to/use-sdk/javascript/display-custom-modals",title:"Display custom modals",description:"Display custom modals using the JavaScript SDK.",source:"@site/wallet/how-to/use-sdk/javascript/display-custom-modals.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/display-custom-modals",permalink:"/1311-update-display-tokens/wallet/how-to/use-sdk/javascript/display-custom-modals",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/display-custom-modals.md",tags:[{label:"JavaScript SDK",permalink:"/1311-update-display-tokens/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:10,frontMatter:{description:"Display custom modals using the JavaScript SDK.",sidebar_position:10,tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Batch JSON-RPC requests",permalink:"/1311-update-display-tokens/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},next:{title:"Gaming",permalink:"/1311-update-display-tokens/wallet/how-to/use-sdk/gaming/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a custom modal component",id:"1-create-a-custom-modal-component",level:3},{value:"2. Implement custom modal logic",id:"2-implement-custom-modal-logic",level:3},{value:"3. Test your custom modal",id:"3-test-your-custom-modal",level:3},{value:"Example",id:"example",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...s}=e;return(0,o.yg)(c,(0,n.A)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"display-custom-modals"},"Display custom modals"),(0,o.yg)("p",null,"You can use ",(0,o.yg)("a",{parentName:"p",href:"/1311-update-display-tokens/wallet/concepts/sdk/"},"MetaMask SDK")," to display custom MetaMask modals."),(0,o.yg)("p",null,"When integrating a web dapp with MetaMask, you can enhance the user experience by customizing the\nlogic and user interface of the displayed modals, which initiate user interactions such as prompting\nthe user to install MetaMask.\nThis page describes how to create a custom modal in React, but you can adapt the implementation to\nother web frameworks such as Vue.js or pure HTML/JavaScript."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"MetaMask SDK set up in your JavaScript dapp.\nThis example uses the ",(0,o.yg)("a",{parentName:"p",href:"/1311-update-display-tokens/wallet/how-to/use-sdk/javascript/react/"},"MetaMask React SDK"),"."),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("h3",{id:"1-create-a-custom-modal-component"},"1. Create a custom modal component"),(0,o.yg)("p",null,"Create a custom modal component that aligns with your dapp's design and functionality requirements."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\n\nconst CustomModal = ({ onClose }) => (\n  <div className="modal">\n    <button onClick={onClose}>Close</button>\n  </div>\n);\n\nexport default CustomModal;\n')),(0,o.yg)("h3",{id:"2-implement-custom-modal-logic"},"2. Implement custom modal logic"),(0,o.yg)("p",null,"When initializing ",(0,o.yg)("a",{parentName:"p",href:"/1311-update-display-tokens/wallet/how-to/use-sdk/javascript/react/#3-wrap-your-project-with-metamaskprovider"},(0,o.yg)("inlineCode",{parentName:"a"},"MetaMaskProvider")),",\nuse the ",(0,o.yg)("a",{parentName:"p",href:"/1311-update-display-tokens/wallet/reference/sdk-js-options#modals"},(0,o.yg)("inlineCode",{parentName:"a"},"modals"))," SDK option to set up custom behavior\nfor scenarios such as when MetaMask isn't installed.\nFor example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskProvider } from "@metamask/sdk-react";\nimport CustomModal from "./CustomModal";\nimport ReactDOM from "react-dom";\n\nconst App = () => (\n  <MetaMaskProvider\n    sdkOptions={{\n      modals: {\n        install: ({ link }) => {\n          let modalContainer = null;\n\n          return {\n            mount: () => {\n              modalContainer = document.createElement("div");\n              document.body.appendChild(modalContainer);\n\n              ReactDOM.render(\n                <CustomModal onClose={() => {\n                    ReactDOM.unmountComponentAtNode(modalContainer);\n                    modalContainer.remove();\n                  }}\n                />,\n                modalContainer\n              );\n            },\n            unmount: () => {\n              if (modalContainer) {\n                ReactDOM.unmountComponentAtNode(modalContainer);\n                modalContainer.remove();\n              }\n            },\n          };\n        },\n      },\n    }}\n  >\n    {/* Other components */}\n  </MetaMaskProvider>\n);\n\nexport default App;\n')),(0,o.yg)("h3",{id:"3-test-your-custom-modal"},"3. Test your custom modal"),(0,o.yg)("p",null,"Test your dapp to ensure the custom modal operates as intended, especially in scenarios such as when\nMetaMask isn't installed."),(0,o.yg)("p",{align:"center"},(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Custom modal gif",src:a(15836).A,width:"800",height:"360"}))),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/react-with-custom-modal"},"example React dapp with a custom modal\nimplementation"),".\nThis example can serve as a starting point for understanding the approach, which you can then adapt\nto other web frameworks as needed."))}d.isMDXComponent=!0},15836:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/custom-modal-b06fd8cd12d48799411b83cb1d152460.gif"}}]);