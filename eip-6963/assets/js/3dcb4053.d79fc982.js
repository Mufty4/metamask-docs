"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const l={description:"Add support for EIP-6963 to discover multiple wallets.",sidebar_position:10},a="Discover multiple wallets",i={unversionedId:"how-to/discover-multiple-wallets",id:"how-to/discover-multiple-wallets",title:"Discover multiple wallets",description:"Add support for EIP-6963 to discover multiple wallets.",source:"@site/wallet/how-to/discover-multiple-wallets.md",sourceDirName:"how-to",slug:"/how-to/discover-multiple-wallets",permalink:"/eip-6963/wallet/how-to/discover-multiple-wallets",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/discover-multiple-wallets.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Add support for EIP-6963 to discover multiple wallets.",sidebar_position:10},sidebar:"walletSidebar",previous:{title:"Access a user's MetaMask provider",permalink:"/eip-6963/wallet/how-to/access-provider"},next:{title:"Use third party integrations",permalink:"/eip-6963/wallet/how-to/use-3rd-party-integrations"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"discover-multiple-wallets"},"Discover multiple wallets"),(0,n.kt)("p",null,"If a user has multiple wallet browser extensions installed, your web dapp can support\n",(0,n.kt)("a",{parentName:"p",href:"/eip-6963/wallet/concepts/wallet-interoperabilty"},"wallet interoperability")," by adding support for\n",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which enables your dapp to discover and connect\nto multiple installed wallets.\nWe recommend ",(0,n.kt)("a",{parentName:"p",href:"/eip-6963/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up MetaMask SDK")," in your dapp, which supports\nEIP-6963 by default."),(0,n.kt)("p",null,"If you don't have the SDK set up, you can directly update your dapp code to support EIP-6963."))}d.isMDXComponent=!0}}]);