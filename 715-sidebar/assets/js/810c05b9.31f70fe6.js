"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={description:"Integrate your dapp with MetaMask Mobile.",sidebar_position:2},i="Use MetaMask Mobile",l={unversionedId:"how-to/use-mobile",id:"how-to/use-mobile",title:"Use MetaMask Mobile",description:"Integrate your dapp with MetaMask Mobile.",source:"@site/wallet/how-to/use-mobile.md",sourceDirName:"how-to",slug:"/how-to/use-mobile",permalink:"/715-sidebar/wallet/how-to/use-mobile",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate your dapp with MetaMask Mobile.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Native Android (coming soon)",permalink:"/715-sidebar/wallet/how-to/use-sdk/mobile/android"},next:{title:"Interact with smart contracts",permalink:"/715-sidebar/wallet/how-to/interact-with-smart-contracts"}},s={},p=[{value:"Detect the provider",id:"detect-the-provider",level:2},{value:"Use WalletConnect",id:"use-walletconnect",level:2},{value:"Use deeplinks",id:"use-deeplinks",level:2},{value:"Test your dapp",id:"test-your-dapp",level:2},{value:"Debug your dapp",id:"debug-your-dapp",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-metamask-mobile"},"Use MetaMask Mobile"),(0,o.kt)("p",null,"With MetaMask Mobile, you can onboard your users in seconds, whether they're new or existing\nMetaMask users.\nYour users can sign with their MetaMask wallet, whether they use your dapp on MetaMask browser,\nother primary browsers, mobile, or desktop."),(0,o.kt)("p",null,"To use MetaMask Mobile:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure your dapp is compatible with the ",(0,o.kt)("a",{parentName:"li",href:"/715-sidebar/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),"."),(0,o.kt)("li",{parentName:"ul"},"Include MetaMask Mobile as a listed wallet in your dapp, and link to open the MetaMask Mobile app\n(if installed) or to go to the app store (if not yet installed).\nWe recommend adding a ",(0,o.kt)("strong",{parentName:"li"},"Connect with MetaMask")," button and ",(0,o.kt)("a",{parentName:"li",href:"#use-deeplinks"},"using deeplinks"),"."),(0,o.kt)("li",{parentName:"ul"},"Direct your users to either the relevant app store listing or to the\n",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"MetaMask homepage")," to download MetaMask Mobile.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"/715-sidebar/wallet/how-to/use-sdk/"},"MetaMask SDK")," to enable a reliable, secure,\nand seamless connection from your dapp to both the MetaMask extension and MetaMask Mobile.")),(0,o.kt)("h2",{id:"detect-the-provider"},"Detect the provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/715-sidebar/wallet/reference/provider-api"},"provider API")," is the same for MetaMask Mobile and the desktop extension.\nHowever, the providers become available (injected into the page) at different points in the page lifecycle."),(0,o.kt)("p",null,"If you\n",(0,o.kt)("a",{parentName:"p",href:"/715-sidebar/wallet/get-started/detect-metamask#use-metamaskdetect-provider"},"use the ",(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider")," module"),",\nit reliably detects both the mobile and extension provider.\nIf you don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"@metamask/detect-provider"),", you must detect the mobile provider manually.\nFor example, you can manually detect the mobile and extension provider with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (window.ethereum) {\n  handleEthereum();\n} else {\n  window.addEventListener('ethereum#initialized', handleEthereum, {\n    once: true,\n  });\n\n  // If the event is not dispatched by the end of the timeout,\n  // the user probably doesn't have MetaMask installed.\n  setTimeout(handleEthereum, 3000); // 3 seconds\n}\n\nfunction handleEthereum() {\n  const { ethereum } = window;\n  if (ethereum && ethereum.isMetaMask) {\n    console.log('Ethereum successfully detected!');\n    // Access the decentralized web!\n  } else {\n    console.log('Please install MetaMask!');\n  }\n}\n")),(0,o.kt)("p",null,"The extension provider is always available when your code executes.\nBecause of platform limitations, the mobile provider may not be injected until later in the page\nlifecycle, so the MetaMask provider dispatches the event ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum#initialized")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," when\nit's fully initialized."),(0,o.kt)("h2",{id:"use-walletconnect"},"Use WalletConnect"),(0,o.kt)("p",null,"With WalletConnect, your users can use MetaMask Mobile as a signer while using other web, desktop,\nor mobile apps.\nRead the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/mobile-linking"},"WalletConnect mobile linking documentation"),"\nfor more information."),(0,o.kt)("h2",{id:"use-deeplinks"},"Use deeplinks"),(0,o.kt)("p",null,"Deeplinks enable instant invocation of the user's preferred wallet app with correctly parameterized\ntransactions.\nOnly the user can confirm the transaction, and the wallet can be a web, desktop, or mobile app."),(0,o.kt)("p",null,"URLs embedded in QR codes, and hyperlinks in web pages, emails, or chat messages enable robust\nsignaling between otherwise loosely coupled apps."),(0,o.kt)("p",null,"With deeplinks, you can enable your users to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your dapp directly in MetaMask Mobile to interact with your dapp with their Ethereum account."),(0,o.kt)("li",{parentName:"ul"},"Make payments to another account in one click (with pre-filled parameters such as recipient\naddress, amount, and network)."),(0,o.kt)("li",{parentName:"ul"},"Make gasless and instant transactions with Connext payment channel requests.\nThis requires that the user opt in for the InstaPay experimental feature.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/metamask-deeplinks/"},"MetaMask deeplink generator")," to create deeplinks."),(0,o.kt)("h2",{id:"test-your-dapp"},"Test your dapp"),(0,o.kt)("p",null,"To test your dapp's integration with MetaMask Mobile:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure your development server to run on your host machine's local IP address ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.x.x"),",\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure your testing device uses the same WiFi connection as the machine hosting the server."),(0,o.kt)("li",{parentName:"ol"},"In the MetaMask Mobile web browser, navigate to your website at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://YOUR_LOCAL_IP:PORT"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you use an Android device, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip")," in your URL.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.x.x.sslip.io:8000"),".")),(0,o.kt)("h2",{id:"debug-your-dapp"},"Debug your dapp"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For security purposes, web browser debugging on both iOS and Android doesn't work if you downloaded\nMetaMask Mobile through the Apple App Store or Google Play Store.\nYou must build MetaMask Mobile locally from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"GitHub repository"),"\nand run it on a simulator or physical device.")),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"To debug your dapp on iOS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Safari Preferences > Advanced")," and check ",(0,o.kt)("strong",{parentName:"li"},"Show Develop menu in the menu bar"),"."),(0,o.kt)("li",{parentName:"ol"},"Open MetaMask Mobile in an iOS simulator or iOS device."),(0,o.kt)("li",{parentName:"ol"},"In the Safari menu bar, select ",(0,o.kt)("strong",{parentName:"li"},"Develop > ","[device name]"," > ","[dapp name]"," > ","[url - title]"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When debugging on a physical device, you must enable Web Inspector in your device's settings by\nselecting ",(0,o.kt)("strong",{parentName:"p"},"Settings > Safari > Advanced > Web Inspector"),".")),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"To debug your dapp on Android:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open MetaMask Mobile in an Android emulator or Android device."),(0,o.kt)("li",{parentName:"ol"},"Open Google Chrome's ",(0,o.kt)("strong",{parentName:"li"},"DevTools > menu (",(0,o.kt)("inlineCode",{parentName:"strong"},"..."),") > More tools > Remote devices"),".\nYou can also navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://inspect")," from Chrome to display the list of available devices\nfor debugging."),(0,o.kt)("li",{parentName:"ol"},"Select your device on the left and select ",(0,o.kt)("strong",{parentName:"li"},"Inspect")," on the browser contents you'd like to inspect.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When debugging on a physical device you must enable USB debugging in your device's settings by\nselecting ",(0,o.kt)("strong",{parentName:"p"},"Settings > System > About Phone > Developer options > Enable USB debugging"),".")))}u.isMDXComponent=!0}}]);