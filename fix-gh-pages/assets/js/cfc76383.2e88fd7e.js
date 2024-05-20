"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[792],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>d});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=l(a),g=i,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||s;return a?t.createElement(d,o(o({ref:n},m),{},{components:a})):t.createElement(d,o({ref:n},m))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=g;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},54972:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=a(58168),i=(a(96540),a(15680)),s=a(4865),o=a(19365);const r={description:"See the Snaps permissions reference.",sidebar_position:5},p="Snaps permissions",l={unversionedId:"reference/permissions",id:"reference/permissions",title:"Snaps permissions",description:"See the Snaps permissions reference.",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/fix-gh-pages/snaps/reference/permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"See the Snaps permissions reference.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Snaps entry points",permalink:"/fix-gh-pages/snaps/reference/entry-points"},next:{title:"Snaps known errors",permalink:"/fix-gh-pages/snaps/reference/known-errors"}},m={},u=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"<code>endowment:cronjob</code>",id:"endowmentcronjob",level:3},{value:"<code>endowment:ethereum-provider</code>",id:"endowmentethereum-provider",level:3},{value:"<code>endowment:page-home</code>",id:"endowmentpage-home",level:3},{value:"<code>endowment:keyring</code>",id:"endowmentkeyring",level:3},{value:"<code>endowment:lifecycle-hooks</code>",id:"endowmentlifecycle-hooks",level:3},{value:"<code>endowment:name-lookup</code>",id:"endowmentname-lookup",level:3},{value:"<code>endowment:network-access</code>",id:"endowmentnetwork-access",level:3},{value:"<code>endowment:rpc</code>",id:"endowmentrpc",level:3},{value:"Allowed origins",id:"allowed-origins",level:4},{value:"<code>endowment:transaction-insight</code>",id:"endowmenttransaction-insight",level:3},{value:"<code>endowment:signature-insight</code>",id:"endowmentsignature-insight",level:3},{value:"<code>endowment:webassembly</code>",id:"endowmentwebassembly",level:3},{value:"Snap-defined timeouts",id:"snap-defined-timeouts",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:2},{value:"<code>eth_accounts</code>",id:"eth_accounts",level:3}],c={toc:u},g="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"snaps-permissions"},"Snaps permissions"),(0,i.yg)("p",null,"Snaps can ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/how-to/request-permissions"},"request the following permissions"),"."),(0,i.yg)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,i.yg)("p",null,"You must request permission to call ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api"},"Snaps API methods"),".\nFor example, to request to call ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/snaps-api#snap_dialog"},(0,i.yg)("inlineCode",{parentName:"a"},"snap_dialog")),", add the following to the\nmanifest file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {}\n}\n')),(0,i.yg)("h2",{id:"endowments"},"Endowments"),(0,i.yg)("h3",{id:"endowmentcronjob"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:cronjob")),(0,i.yg)("p",null,"To run ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/cron-jobs"},"cron jobs")," for the user, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission.\nThis permission allows the Snap to specify cron jobs that trigger the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#oncronjob"},(0,i.yg)("inlineCode",{parentName:"a"},"onCronjob"))," entry point."),(0,i.yg)("p",null,"This permission takes an object with an array of ",(0,i.yg)("inlineCode",{parentName:"p"},"jobs"),", each containing two parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"expression")," - A ",(0,i.yg)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm"},"cron expression"),"\nthat defines the schedule of the job."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"request")," - A JSON-RPC request object that will be sent to the Snap's ",(0,i.yg)("inlineCode",{parentName:"li"},"onCronjob")," entry point when\nthe job is executed.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the cron job's execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "exampleMethodOne",\n          "params": {\n            "param1": "foo"\n          }\n        }\n      },\n      {\n        "expression": "*/2 * * * *",\n        "request": {\n          "method": "exampleMethodTwo",\n          "params": {\n            "param1": "bar"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,i.yg)("h3",{id:"endowmentethereum-provider"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:ethereum-provider")),(0,i.yg)("p",null,"To communicate with a node using MetaMask, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:ethereum-provider")," permission.\nThis permission exposes the ",(0,i.yg)("inlineCode",{parentName:"p"},"ethereum")," global to the Snap execution environment, allowing Snaps to\ncall some ",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods.\nThis global is an ",(0,i.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," provider."),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n')),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,i.yg)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSee the ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/learn/about-snaps/apis#metamask-json-rpc-api"},"list of methods")," not available to Snaps.")),(0,i.yg)("h3",{id:"endowmentpage-home"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:page-home")),(0,i.yg)("p",null,"To display a ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/custom-ui/home-pages"},"home page")," within MetaMask, a Snap must request\nthe ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:page-home")," permission.\nThis permission allows the Snap to present a dedicated UI by exposing the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onhomepage"},(0,i.yg)("inlineCode",{parentName:"a"},"onHomePage"))," entry point. "),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:page-home": {}\n}\n')),(0,i.yg)("h3",{id:"endowmentkeyring"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:keyring")),(0,i.yg)("p",null,"For a dapp to call ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/keyring-api/account-management/"},"Account Management API")," methods on an\naccount management Snap to integrate ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/custom-evm-accounts/"},"custom EVM accounts"),",\nthe Snap must configure a list of allowed dapp URLs using the ",(0,i.yg)("inlineCode",{parentName:"p"},"allowedOrigins")," field of the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:keyring")," permission.\nThis permission grants a Snap access to Account Management API requests sent to the Snap, using the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onkeyringrequest"},(0,i.yg)("inlineCode",{parentName:"a"},"onKeyringRequest"))," entry point."),(0,i.yg)("p",null,"If a dapp hosted on a domain not listed in the ",(0,i.yg)("inlineCode",{parentName:"p"},"allowedOrigins")," attempts to call a Keyring API method,\nMetaMask rejects the request."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the Account Management API's execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": ["https://<dapp domain>"]\n  }\n}\n')),(0,i.yg)("h3",{id:"endowmentlifecycle-hooks"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:lifecycle-hooks")),(0,i.yg)("p",null,"To implement a ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/lifecycle-hooks"},"lifecycle hook")," that runs an action when a user\ninstalls or updates a Snap, the Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:lifecycle-hooks")," permission.\nThis permission allows the Snap to expose the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#oninstall"},(0,i.yg)("inlineCode",{parentName:"a"},"onInstall"))," and\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onupdate"},(0,i.yg)("inlineCode",{parentName:"a"},"onUpdate")),"\nentry points, which MetaMask calls after a successful installation or update, respectively."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the lifecycle hooks' execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n')),(0,i.yg)("h3",{id:"endowmentname-lookup"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:name-lookup")),(0,i.yg)("admonition",{type:"flaskOnly"}),(0,i.yg)("p",null,"To provide ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/custom-name-resolution"},"custom name resolution"),", a Snap must request the\n",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:name-lookup")," permission.\nThis permission grants the Snap read-only access to user input or an address by exporting the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onnamelookup"},(0,i.yg)("inlineCode",{parentName:"a"},"onNameLookup"))," entry point."),(0,i.yg)("p",null,"This permission takes an object with two optional properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"chains")," - An array of ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain IDs for which the Snap can resolve names and addresses.\nPass this array to reduce overhead on your Snap by making sure it only receives requests for\nchains it can resolve."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"matchers")," - An object that helps reduce overhead by filtering the domains passed to your Snap.\nThis must contain at least one of the following properties:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"tlds")," - An array of strings for top-level domains that the Snap supports."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"schemes")," - An array of strings for schemes that the Snap supports.")))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the name lookup logic's execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:name-lookup": {\n    "chains": ["eip155:1"],\n    "matchers": {\n      "tlds": ["crypto"],\n      "schemes": ["farcaster"]\n    }\n  }\n},\n')),(0,i.yg)("p",null,"In this example, the Snap's ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onnamelookup"},(0,i.yg)("inlineCode",{parentName:"a"},"onNameLookup"))," entry point would be\ncalled for domains such as ",(0,i.yg)("inlineCode",{parentName:"p"},"someuser.crypto")," or schemes such as ",(0,i.yg)("inlineCode",{parentName:"p"},"farcaster:someuser"),", as long as the\ndomain resolution is happening on Ethereum Mainnet."),(0,i.yg)("h3",{id:"endowmentnetwork-access"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:network-access")),(0,i.yg)("p",null,"To access the internet, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:network-access")," permission.\nThis permission exposes the global ",(0,i.yg)("inlineCode",{parentName:"p"},"fetch")," API to the Snaps execution environment."),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:network-access": {}\n}\n')),(0,i.yg)("h3",{id:"endowmentrpc"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:rpc")),(0,i.yg)("p",null,"To handle arbitrary JSON-RPC requests, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:rpc")," permission.\nThis permission grants a Snap access to JSON-RPC requests sent to the Snap, using the\n",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onrpcrequest"},(0,i.yg)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry point."),(0,i.yg)("p",null,"This permission requires an object with a ",(0,i.yg)("inlineCode",{parentName:"p"},"snaps")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"dapps")," property (or both), to signal if the\nSnap can receive JSON-RPC requests from other Snaps, or dapps, respectively.\nThe default for both properties is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the RPC API's execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }\n}\n')),(0,i.yg)("h4",{id:"allowed-origins"},"Allowed origins"),(0,i.yg)("p",null,"Alternatively, you can specify the caveat ",(0,i.yg)("inlineCode",{parentName:"p"},"allowedOrigins")," to restrict all requests to specific domains or Snap IDs.\nCalls from any other origins are rejected. "),(0,i.yg)("p",null,"Specify this caveat in the manifest file as follows: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": { \n    "allowedOrigins": [\n      "https://metamask.io", \n      "https://consensys.io",\n      "npm:@metamask/example-snap"\n    ] \n  }\n}\n')),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you specify ",(0,i.yg)("inlineCode",{parentName:"p"},"allowedOrigins"),", you should not specify ",(0,i.yg)("inlineCode",{parentName:"p"},"dapps")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"snaps"),". ")),(0,i.yg)("h3",{id:"endowmenttransaction-insight"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:transaction-insight")),(0,i.yg)("p",null,"To provide ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/transaction-insights"},"transaction insights")," before a user signs a\ntransaction, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:transaction-insight")," permission.\nThis permission grants a Snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exposing the ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#ontransaction"},(0,i.yg)("inlineCode",{parentName:"a"},"onTransaction")),"\nentry point."),(0,i.yg)("p",null,"This permission requires an object with an ",(0,i.yg)("inlineCode",{parentName:"p"},"allowTransactionOrigin")," property to signal if the Snap\nshould pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"transactionOrigin")," property as part of the ",(0,i.yg)("inlineCode",{parentName:"p"},"onTransaction")," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"You can modify the transaction insight logic's execution limit using ",(0,i.yg)("a",{parentName:"p",href:"#snap-defined-timeouts"},"Snap-defined timeouts"),".")),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n}\n')),(0,i.yg)("h3",{id:"endowmentsignature-insight"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:signature-insight")),(0,i.yg)("admonition",{type:"flaskOnly"}),(0,i.yg)("p",null,"To provide ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/features/signature-insights"},"signature insights"),", a Snap must request the\n",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:signature-insight")," permission.\nThis permission grants a Snap read-only access to raw signature payloads, before they're accepted\nfor signing by the user, by exposing the ",(0,i.yg)("a",{parentName:"p",href:"/fix-gh-pages/snaps/reference/entry-points#onsignature"},(0,i.yg)("inlineCode",{parentName:"a"},"onSignature"))," entry point."),(0,i.yg)("p",null,"This permission requires an object with an ",(0,i.yg)("inlineCode",{parentName:"p"},"allowSignatureOrigin")," property to signal if the Snap\nshould pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"signatureOrigin")," property as part of the ",(0,i.yg)("inlineCode",{parentName:"p"},"onSignature")," parameters.\nThis property represents the signature initiator origin.\nThe default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:signature-insight": {\n    "allowSignatureOrigin": true\n  }\n},\n')),(0,i.yg)("h3",{id:"endowmentwebassembly"},(0,i.yg)("inlineCode",{parentName:"h3"},"endowment:webassembly")),(0,i.yg)("p",null,"To use WebAssembly, a Snap must request the ",(0,i.yg)("inlineCode",{parentName:"p"},"endowment:webassembly")," permission.\nThis permission exposes the global ",(0,i.yg)("inlineCode",{parentName:"p"},"WebAssembly")," API to the Snap execution environment."),(0,i.yg)("p",null,"Specify this permission in the manifest file as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:webassembly": {}\n}\n')),(0,i.yg)("h3",{id:"snap-defined-timeouts"},"Snap-defined timeouts"),(0,i.yg)("p",null,"Many endowments entail having MetaMask run arbitrary code defined in the Snap.\nThe default execution timeout is 60000 milliseconds, or one minute."),(0,i.yg)("p",null,"You can modify this execution timeout by adding a caveat ",(0,i.yg)("inlineCode",{parentName:"p"},"maxRequestTime")," to the permission.\nIt can take values from ",(0,i.yg)("inlineCode",{parentName:"p"},"5000")," (5 seconds) to ",(0,i.yg)("inlineCode",{parentName:"p"},"180000")," (3 minutes).\nFor example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "maxRequestTime": 10000\n  }\n}\n')),(0,i.yg)("p",null,"The following endowments accept this caveat:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentcronjob"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:cronjob"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentkeyring"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:keyring"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentlifecycle-hooks"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:lifecycle-hooks"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentname-lookup"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:name-lookup"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentpage-home"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:page-home"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmentrpc"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:rpc"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#endowmenttransaction-insight"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:transaction-insight")))),(0,i.yg)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,i.yg)("h3",{id:"eth_accounts"},(0,i.yg)("inlineCode",{parentName:"h3"},"eth_accounts")),(0,i.yg)("p",null,"A Snap can request permission to call the ",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_accounts"))," MetaMask\nJSON-RPC API method by calling ",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,i.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),".\nCalling ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_requestAccounts")," requires the\n",(0,i.yg)("a",{parentName:"p",href:"#endowmentethereum-provider"},(0,i.yg)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission:"),(0,i.yg)(s.A,{mdxType:"Tabs"},(0,i.yg)(o.A,{value:"Manifest file",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n'))),(0,i.yg)(o.A,{value:"JavaScript",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'await ethereum.request({ "method": "eth_requestAccounts" });\n')))),(0,i.yg)("p",null,"You can check the presence of the permission by calling\n",(0,i.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_getpermissions"},(0,i.yg)("inlineCode",{parentName:"a"},"wallet_getPermissions")),".\nIf the permission is present, the result contains a permission with a ",(0,i.yg)("inlineCode",{parentName:"p"},"parentCapability")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_accounts"),".\nThe permission contains a ",(0,i.yg)("inlineCode",{parentName:"p"},"restrictReturnedAccounts")," caveat, an array of all the accounts the user\nallows for this Snap.\nThe following is an example ",(0,i.yg)("inlineCode",{parentName:"p"},"eth_accounts")," permission:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "47vm2UUi1pccNAeYKGmwF",\n  "parentCapability": "eth_accounts",\n  "invoker": "npm:SNAP_ID",\n  "caveats": [\n    {\n      "type": "restrictReturnedAccounts",\n      "value": [\n        "0xc403b37bf1e700cb214ea1be9de066824b420de6"\n      ]\n    }\n  ],\n  "date": 1692616452846\n}\n')),(0,i.yg)("p",null,"The user can revoke this permission by going to the Snap's settings under ",(0,i.yg)("strong",{parentName:"p"},"Snap permissions"),"."))}d.isMDXComponent=!0},19365:(e,n,a)=>{a.d(n,{A:()=>o});var t=a(96540),i=a(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:a},n)}},4865:(e,n,a)=>{a.d(n,{A:()=>g});var t=a(58168),i=a(96540),s=a(20053),o=a(23104),r=a(47751),p=a(92303);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){let{className:n,block:a,selectedValue:r,selectValue:p,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),g=e=>{const n=e.currentTarget,a=u.indexOf(n),t=m[a].value;t!==r&&(c(n),p(t))},d=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n)},m.map((e=>{let{value:n,label:a,attributes:o}=e;return i.createElement("li",(0,t.A)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:g},o,{className:(0,s.A)("tabs__item",l.tabItem,o?.className,{"tabs__item--active":r===n})}),a??n)})))}function u(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function c(e){const n=(0,r.u)(e);return i.createElement("div",{className:(0,s.A)("tabs-container",l.tabList)},i.createElement(m,(0,t.A)({},e,n)),i.createElement(u,(0,t.A)({},e,n)))}function g(e){const n=(0,p.A)();return i.createElement(c,(0,t.A)({key:String(n)},e))}},47751:(e,n,a)=>{a.d(n,{u:()=>c});var t=a(96540),i=a(56347),s=a(57485),o=a(31682),r=a(89466);function p(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}function l(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??p(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:a}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function c(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,s=l(e),[o,p]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,g]=u({queryString:a,groupId:i}),[d,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,r.Dv)(a);return[i,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:i}),h=(()=>{const e=c??d;return m({value:e,tabValues:s})?e:null})();(0,t.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);p(e),g(e),y(e)}),[g,y,s]),tabValues:s}}}}]);