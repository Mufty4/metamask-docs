"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Detect MetaMask and other wallets via EIP-6963.",sidebar_position:2},o="Detect multiple wallets",l={unversionedId:"how-to/detect-wallet/multiple-wallets",id:"how-to/detect-wallet/multiple-wallets",title:"Detect multiple wallets",description:"Detect MetaMask and other wallets via EIP-6963.",source:"@site/wallet/how-to/detect-wallet/multiple-wallets.md",sourceDirName:"how-to/detect-wallet",slug:"/how-to/detect-wallet/multiple-wallets",permalink:"/1120-wallet-api/wallet/how-to/detect-wallet/multiple-wallets",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/detect-wallet/multiple-wallets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Detect MetaMask and other wallets via EIP-6963.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Detect MetaMask",permalink:"/1120-wallet-api/wallet/how-to/detect-wallet/metamask"},next:{title:"Detect a user's network",permalink:"/1120-wallet-api/wallet/how-to/detect-network"}},s={},p=[{value:"Use third-party libraries",id:"use-third-party-libraries",level:2},{value:"Implement EIP-6963",id:"implement-eip-6963",level:2},{value:"1. Review the EIP-6963 interfaces",id:"1-review-the-eip-6963-interfaces",level:3},{value:"Provider info",id:"provider-info",level:4},{value:"Provider detail",id:"provider-detail",level:4},{value:"Announce and request events",id:"announce-and-request-events",level:4},{value:"2. Set up a Vite project",id:"2-set-up-a-vite-project",level:3},{value:"3. Detect and connect to wallets",id:"3-detect-and-connect-to-wallets",level:3},{value:"Example",id:"example",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-multiple-wallets"},"Detect multiple wallets"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963")," introduces an alternative discovery mechanism\nfor multiple wallets, shifting from relying solely on ",(0,a.kt)("a",{parentName:"p",href:"/1120-wallet-api/wallet/how-to/detect-wallet/metamask"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum"))," for wallet detection."),(0,a.kt)("p",null,"If a user has multiple wallet browser extensions installed, your web dapp can support\n",(0,a.kt)("a",{parentName:"p",href:"/1120-wallet-api/wallet/concepts/wallet-interoperabilty"},"wallet interoperability")," by adding support for\nEIP-6963, which enables your dapp to detect and connect to multiple installed wallets.\nYou can ",(0,a.kt)("a",{parentName:"p",href:"#use-third-party-libraries"},"use third-party libraries")," or directly\n",(0,a.kt)("a",{parentName:"p",href:"#implement-eip-6963"},"implement EIP-6963")," in your dapp."),(0,a.kt)("h2",{id:"use-third-party-libraries"},"Use third-party libraries"),(0,a.kt)("p",null,"You can add support for EIP-6963 by using the following third-party libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/1120-wallet-api/wallet/how-to/use-sdk/javascript/"},"MetaMask SDK")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support such as Wagmi 2+."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://wagmi.sh"},"Wagmi 2+"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/wevm/mipd"},"MIPD Store")))),(0,a.kt)("h2",{id:"implement-eip-6963"},"Implement EIP-6963"),(0,a.kt)("p",null,"To directly implement support for EIP-6963 in your React dapp:"),(0,a.kt)("h3",{id:"1-review-the-eip-6963-interfaces"},"1. Review the EIP-6963 interfaces"),(0,a.kt)("p",null,"Review and understand the interfaces implemented and exposed by wallets that support EIP-6963:"),(0,a.kt)("h4",{id:"provider-info"},"Provider info"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-info"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP6963ProviderInfo"))," interface\nrepresents the assets needed to display a wallet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EIP6963ProviderInfo {\n  uuid: string;\n  name: string;\n  icon: string;\n  rdns: string;\n}\n")),(0,a.kt)("h4",{id:"provider-detail"},"Provider detail"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#provider-detail"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP6963ProviderDetail"))," interface\nrepresents additional metadata about the wallet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo;\n  provider: EIP1193Provider;\n}\n")),(0,a.kt)("h4",{id:"announce-and-request-events"},"Announce and request events"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP6963AnnounceProviderEvent")),"\ninterface announces an event dispatched by the wallet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface EIP6963AnnounceProviderEvent extends CustomEvent {\n  type: "eip6963:announceProvider";\n  detail: EIP6963ProviderDetail;\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP6963RequestProviderEvent")),"\ninterface requests an event dispatched by a dapp:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface EIP6963RequestProviderEvent extends Event {\n  type: "eip6963:requestProvider";\n}\n')),(0,a.kt)("h3",{id:"2-set-up-a-vite-project"},"2. Set up a Vite project"),(0,a.kt)("p",null,"Set up a Vite project and update ",(0,a.kt)("inlineCode",{parentName:"p"},"src/vite-env.d.ts")," with the EIP-6963 interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo;\n  provider: EIP1193Provider;\n}\n\ninterface EIP6963ProviderInfo {\n  walletId: string;\n  uuid: string;\n  name: string;\n  icon: string;\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail:{\n    info: EIP6963ProviderInfo,\n    provider: EIP1193Provider\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean;\n  host?: string;\n  path?: string;\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In addition to the EIP-6963 interfaces, you need the ",(0,a.kt)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for\nEthereum wallet providers. This structure represents the essential properties and methods for interacting with dapps.")),(0,a.kt)("p",null,"Then, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," directory and add the following two files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="useSyncProviders.tsx"',title:'"useSyncProviders.tsx"'},'import { useSyncExternalStore } from "react";\nimport { store } from "./store";\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="store.tsx"',title:'"store.tsx"'},'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n  value: ()=>providers,\n  subscribe: (callback: ()=>void)=>{\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n    window.addEventListener("eip6963:announceProvider", onAnnouncement);\n    window.dispatchEvent(new Event("eip6963:requestProvider"));\n    \n    return ()=>window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n')),(0,a.kt)("h3",{id:"3-detect-and-connect-to-wallets"},"3. Detect and connect to wallets"),(0,a.kt)("p",null,"Create a component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components")," directory with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="DiscoverWalletProviders.tsx"',title:'"DiscoverWalletProviders.tsx"'},"import { useState } from 'react'\nimport { useSyncProviders } from '../hooks/useSyncProviders'\nimport { formatAddress } from '~/utils'\n\nexport const DiscoverWalletProviders = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>('')\n  const providers = useSyncProviders()\n  \n  const handleConnect = async(providerWithInfo: EIP6963ProviderDetail)=> {\n    const accounts = await providerWithInfo.provider\n      .request({method:'eth_requestAccounts'})\n      .catch(console.error)\n      \n    if(accounts?.[0]){\n      setSelectedWallet(providerWithInfo)\n      setUserAccount(accounts?.[0])\n    }\n  }\n \n  return (\n    <>\n      <h2>Wallets Detected:</h2>\n      <div>\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail)=>(\n            <button key={provider.info.uuid} onClick={()=>handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n          <div>\n            there are no Announced Providers\n          </div>\n        }\n      </div>\n      <hr />\n      <h2>{ userAccount ? \"\" : \"No \" }Wallet Selected</h2>\n      { userAccount &&\n        <div>\n          <div>\n            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n            <div>{selectedWallet.info.name}</div>\n            <div>({formatAddress(userAccount)})</div>\n          </div>\n        </div>\n      }\n    </>\n  )\n}\n")),(0,a.kt)("p",null,"This component detects the installed wallets and creates a connection button for each one, which can\nbe used to call ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),"."),(0,a.kt)("p",null,"Finally, link to this component from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { DiscoverWalletProviders } from './components/DiscoverWalletProviders'\n\nfunction App() {\n\n  return (\n    <>\n      <DiscoverWalletProviders/>\n    </>\n  )\n}\n\nexport default App\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/tree/main"},"EIP-6963 Vite React + TypeScript demo"),"\nfor a detailed example and more information."))}u.isMDXComponent=!0}}]);