"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3442],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47220:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(96540),r=n(20053),o=n(75489),i=n(49259);function s(e){let{item:t}=e;const n=a.createElement(a.Fragment,null,t.title&&a.createElement("h2",{className:(0,r.A)(i.A.cardTitle)},t.icon&&a.createElement("img",{src:t.icon,className:i.A.cardIcon}),a.createElement("span",null,t.title)),t.description&&a.createElement("p",null,t.description)),s=(0,r.A)("card","padding--lg",i.A.cardContainer,{[i.A.flaskOnly]:t.flaskOnly});return t.href?a.createElement(o.A,{className:s,href:t.href},n):a.createElement("div",{className:s},n)}function c(e){const{items:t}=e;return a.createElement("section",{className:"row"},t.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(s,{item:e})))))}},45600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(47220);const i={title:"Introduction"},s="Integrate your dapp with the MetaMask wallet",c={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with MetaMask using the Wallet API.",source:"@site/wallet/index.mdx",sourceDirName:".",slug:"/",permalink:"/fix-gh-pages/wallet/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.mdx",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"How to",permalink:"/fix-gh-pages/wallet/how-to"}},l={},p=[{value:"New to developing on MetaMask?",id:"new-to-developing-on-metamask",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"integrate-your-dapp-with-the-metamask-wallet"},"Integrate your dapp with the MetaMask wallet"),(0,r.yg)("p",null,"Integrate your dapp with ",(0,r.yg)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," using the ",(0,r.yg)("a",{parentName:"p",href:"reference/json-rpc-api"},"Wallet API"),".\nYou can interact with your users' Ethereum accounts, performing tasks such as the following:"),(0,r.yg)(o.A,{items:[{href:"how-to/connect",title:"\u2194\ufe0f Connect to MetaMask",description:"Connect to MetaMask and other wallets in your users' browsers."},{href:"how-to/sign-data",title:"\ud83d\udd8a\ufe0f Sign data",description:"Request signatures from users, and allow them to sign in with Ethereum."},{href:"how-to/display",title:"\ud83d\udcc4 Display in MetaMask",description:"Display tokens, contract methods, and icons in MetaMask."},{href:"how-to/use-sdk",title:"\ud83d\udcf1 Connect to extension & mobile",description:"Connect to the MetaMask extension and mobile app using MetaMask SDK."}],mdxType:"CardList"}),(0,r.yg)("h2",{id:"new-to-developing-on-metamask"},"New to developing on MetaMask?"),(0,r.yg)("p",null,"If you're new to integrating dapps with MetaMask, check out the following topics:"),(0,r.yg)(o.A,{items:[{href:"concepts/architecture",title:"\ud83d\udcd0 Architecture",description:"Learn about the high-level MetaMask architecture."},{href:"concepts/wallet-api",title:"\ud83c\udf10 About the Wallet API",description:"Learn about MetaMask's Wallet API and its components."},{href:"concepts/sdk",title:"\ud83d\udcf1 About MetaMask SDK",description:"Learn about the benefits of the SDK and how the SDK connects to MetaMask."},{href:"tutorials/react-dapp-local-state",title:"\ud83d\udee0\ufe0f Create a React dapp tutorial",description:"Follow the tutorial to create a React dapp and integrate it with MetaMask."}],mdxType:"CardList"}),(0,r.yg)("h2",{id:"questions"},"Questions?"),(0,r.yg)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,r.yg)("a",{parentName:"p",href:"https://discord.gg/consensys"},"Consensys Discord"),"."))}m.isMDXComponent=!0},49259:(e,t,n)=>{n.d(t,{A:()=>a});const a={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}}}]);