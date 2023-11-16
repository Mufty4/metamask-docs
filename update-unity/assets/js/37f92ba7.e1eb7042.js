"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,b=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"Integrate the MetaMask JavaScript SDK with Web3-Onboard.",sidebar_position:1},i="Use Web3-Onboard with MetaMask SDK",s={unversionedId:"how-to/use-3rd-party-integrations/web3-onboard",id:"how-to/use-3rd-party-integrations/web3-onboard",title:"Use Web3-Onboard with MetaMask SDK",description:"Integrate the MetaMask JavaScript SDK with Web3-Onboard.",source:"@site/wallet/how-to/use-3rd-party-integrations/web3-onboard.md",sourceDirName:"how-to/use-3rd-party-integrations",slug:"/how-to/use-3rd-party-integrations/web3-onboard",permalink:"/update-unity/wallet/how-to/use-3rd-party-integrations/web3-onboard",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-3rd-party-integrations/web3-onboard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Integrate the MetaMask JavaScript SDK with Web3-Onboard.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Use third party integrations",permalink:"/update-unity/wallet/how-to/use-3rd-party-integrations"},next:{title:"Make read-only requests in JavaScript",permalink:"/update-unity/wallet/how-to/use-3rd-party-integrations/js-infura-api"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the module",id:"1-install-the-module",level:3},{value:"2. Import the module",id:"2-import-the-module",level:3},{value:"3. Instantiate the module",id:"3-instantiate-the-module",level:3},{value:"4. Use the module",id:"4-use-the-module",level:3},{value:"Example",id:"example",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-web3-onboard-with-metamask-sdk"},"Use Web3-Onboard with MetaMask SDK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://onboard.blocknative.com/"},"Web3-Onboard")," is a JavaScript library that simplifies the process\nof onboarding users into dapps.\nIt provides a smooth user interface, a variety of wallet integrations, and is highly customizable to\nmeet the needs of your dapp."),(0,r.kt)("p",null,"You can integrate ",(0,r.kt)("a",{parentName:"p",href:"/update-unity/wallet/concepts/sdk/"},"MetaMask SDK")," into your dapp alongside Web3-Onboard,\nusing the Web3-Onboard MetaMask module, to enable your users to easily connect to the MetaMask\nbrowser extension and MetaMask Mobile."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"A project set up with ",(0,r.kt)("a",{parentName:"p",href:"https://onboard.blocknative.com/docs/getting-started/installation"},"Web3-Onboard"),"."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-module"},"1. Install the module"),(0,r.kt)("p",null,"Install the Web3-Onboard MetaMask module into your dapp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @web3-onboard/metamask\n")),(0,r.kt)("h3",{id:"2-import-the-module"},"2. Import the module"),(0,r.kt)("p",null,"In your project script, add the following to import the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import metamaskSDK from '@web3-onboard/metamask'\n")),(0,r.kt)("h3",{id:"3-instantiate-the-module"},"3. Instantiate the module"),(0,r.kt)("p",null,"Instantiate the module using any ",(0,r.kt)("a",{parentName:"p",href:"/update-unity/wallet/reference/sdk-js-options"},"JavaScript SDK options"),", for\nexample, ",(0,r.kt)("a",{parentName:"p",href:"/update-unity/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const metamaskSDKWallet = metamaskSDK({options: {\n  extensionOnly: false,\n  dappMetadata: {\n    name: 'Demo Web3Onboard'\n  }\n}})\n")),(0,r.kt)("h3",{id:"4-use-the-module"},"4. Use the module"),(0,r.kt)("p",null,"Use the module as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboard = Onboard({\n  // Other Onboard options\n  wallets: [\n    metamaskSDKWallet\n    // Other wallets\n  ]\n})\n\nconst connectedWallets = await onboard.connectWallet()\nconsole.log(connectedWallets)\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For an example of using Web3-Onboard with MetaMask SDK, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/with-web3onboard"},"example dapp"),"\nin the JavaScript SDK GitHub repository.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/with-web3onboard/src/App.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"App.tsx")),"\nfile for more details on implementing the integration in a React dapp."))}m.isMDXComponent=!0}}]);