"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"Learn about wallet interoperability.",sidebar_position:6},o="Wallet interoperability",l={unversionedId:"concepts/wallet-interoperabilty",id:"concepts/wallet-interoperabilty",title:"Wallet interoperability",description:"Learn about wallet interoperability.",source:"@site/wallet/concepts/wallet-interoperabilty.md",sourceDirName:"concepts",slug:"/concepts/wallet-interoperabilty",permalink:"/update-wallet-interop/wallet/concepts/wallet-interoperabilty",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-interoperabilty.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about wallet interoperability.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/update-wallet-interop/wallet/concepts/signing-methods"},next:{title:"Tutorials",permalink:"/update-wallet-interop/wallet/tutorials"}},p={},s=[{value:"Third Party Library Support",id:"third-party-library-support",level:2},{value:"Community support",id:"community-support",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wallet-interoperability"},"Wallet interoperability"),(0,n.kt)("p",null,"With ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", web dapps can easily discover multiple wallets installed in the users browser and connect to them. "),(0,n.kt)("p",null,"The primary implication for developers is the shift from relying solely on ",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for wallet detection giving developers an alternative discovery mechanism to the ",(0,n.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/concepts/apis#ethereum-provider-api"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum")," injected provider"),". We recommend using this new mechanism for provider discovery by using the standardized events and interfaces provided by EIP-6963."),(0,n.kt)("p",null,"Below is a visual demo of that user experience showing the data provided from each installed wallet."),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"100%",controls:!0},(0,n.kt)("source",{src:"/eip-6963-demo.mp4"}))),(0,n.kt)("p",null,"To implement EIP-6963 in a dapp, check out our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/blob/main/src/vite-env.d.ts"},"EIP-6963 ViteJS React + TypeScript Demo")," or visit our ",(0,n.kt)("a",{parentName:"p",href:"/update-wallet-interop/wallet/how-to/discover-multiple-wallets"},'"Discover Multiple Wallets Page"'),"."),(0,n.kt)("h2",{id:"third-party-library-support"},"Third Party Library Support"),(0,n.kt)("p",null,"You can add support for connecting to the MetaMask browser extension via EIP-6963 in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use third-party libraries that support EIP-6963"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wagmi.sh"},"WAGMI 2+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/update-wallet-interop/wallet/how-to/connect/set-up-sdk/javascript/"},"MetaMask SDK"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support like using WAGMI (v2.0+).")),(0,n.kt)("h2",{id:"community-support"},"Community support"),(0,n.kt)("p",null,"The alternative discovery mechanism works for wallets that have implemented support for EIP-6963.\nThis includes MetaMask, Coinbase, Trust Wallet, OKX, and other major wallets.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts"},"list of wallets that support EIP-6963"),"."),(0,n.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,n.kt)("p",null,"Dapps that do not support EIP-6963 can still detect MetaMask using the ",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider.\nHowever, we recommend adding support to improve the user experience for multiple installed wallets.\nRead more about ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#backwards-compatibility"},"EIP-6963 backwards compatibility"),"."))}d.isMDXComponent=!0}}]);