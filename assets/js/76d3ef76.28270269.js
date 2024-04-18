"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2169],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>g});var a=t(58168),r=(t(96540),t(15680)),i=t(4865),s=t(19365);const o={description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:8,sidebar_custom_props:{flask_only:!0}},l="Signature insights",u={unversionedId:"features/signature-insights",id:"features/signature-insights",title:"Signature insights",description:"Provide insights to your users in MetaMask's signature confirmation flow.",source:"@site/snaps/features/signature-insights.md",sourceDirName:"features",slug:"/features/signature-insights",permalink:"/snaps/features/signature-insights",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/signature-insights.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:8,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Non-EVM networks",permalink:"/snaps/features/non-evm-networks"},next:{title:"Static files",permalink:"/snaps/features/static-files"}},p={},g=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to display signature insights",id:"1-request-permission-to-display-signature-insights",level:3},{value:"2. Implement <code>onSignature</code> and export it from <code>index.ts</code>",id:"2-implement-onsignature-and-export-it-from-indexts",level:3},{value:"Example",id:"example",level:2}],c={toc:g},d="wrapper";function m(e){let{components:n,...o}=e;return(0,r.yg)(d,(0,a.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"signature-insights"},"Signature insights"),(0,r.yg)("admonition",{type:"flaskOnly"}),(0,r.yg)("p",null,"You can provide signature insights before a user signs a message.\nFor example, you can warn the user about potentially dangerous signature requests."),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("h3",{id:"1-request-permission-to-display-signature-insights"},"1. Request permission to display signature insights"),(0,r.yg)("p",null,"Request the ",(0,r.yg)("a",{parentName:"p",href:"/snaps/reference/permissions#endowmentsignature-insight"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:signature-insight")),"\npermission by adding the following to your Snap's manifest file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "initialPermissions": {\n        "endowment:signature-insight": {}\n    }\n}\n')),(0,r.yg)("p",null,"If you need to receive the origin of the signature request, add ",(0,r.yg)("inlineCode",{parentName:"p"},"allowSignatureOrigin")," to the\npermission object, and set it to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'{\n    "initialPermissions": {\n        "endowment:signature-insight": {\n            "allowSignatureOrigin": true\n        }\n    }\n}\n')),(0,r.yg)("p",null,"When requesting this permission, the following displays in the MetaMask UI when a user installs the Snap:"),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:t(26913).A,alt:"Signature insights permission",style:{border:"1px solid #DCDCDC"}})),(0,r.yg)("h3",{id:"2-implement-onsignature-and-export-it-from-indexts"},"2. Implement ",(0,r.yg)("inlineCode",{parentName:"h3"},"onSignature")," and export it from ",(0,r.yg)("inlineCode",{parentName:"h3"},"index.ts")),(0,r.yg)("p",null,"Expose an ",(0,r.yg)("a",{parentName:"p",href:"/snaps/reference/entry-points#onsignature"},(0,r.yg)("inlineCode",{parentName:"a"},"onSignature"))," entry point, which receives a\n",(0,r.yg)("inlineCode",{parentName:"p"},"signature")," object.\nThe shape of this object depends on the chain and the signing method used.\nThis is why it's typed as ",(0,r.yg)("inlineCode",{parentName:"p"},"Record<string, unknown>"),"."),(0,r.yg)("p",null,"For Ethereum and Ethereum-compatible chains, the ",(0,r.yg)("inlineCode",{parentName:"p"},"signature")," object can have one of the following\nshapes, depending on the signing method used:"),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"eth_sign",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'interface EthSignature {\n    from: string;\n    data: string;\n    signatureMethod: "eth_sign";\n}\n'))),(0,r.yg)(s.A,{value:"personal_sign",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'interface PersonalSignature {\n    from: string;\n    data: string;\n    signatureMethod: "personal_sign";\n}\n'))),(0,r.yg)(s.A,{value:"eth_signTypedData",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataSignature {\n    from: string;\n    data: Record<string, any>[];\n    signatureMethod: "eth_signTypedData";\n}\n'))),(0,r.yg)(s.A,{value:"eth_signTypedData_v3",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataV3Signature {\n    from: string;\n    data: Record<string, any>;\n    signatureMethod: "eth_signTypedData_v3";\n}\n'))),(0,r.yg)(s.A,{value:"eth_signTypedData_v4",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'interface SignTypedDataV4Signature {\n    from: string;\n    data: Record<string, any>;\n    signatureMethod: "eth_signTypedData_v4";\n}\n')))),(0,r.yg)("p",null,"Your Snap should use ",(0,r.yg)("inlineCode",{parentName:"p"},"signatureMethod")," as the source of truth to identify the signature scheme it is\nproviding insights for."),(0,r.yg)("p",null,"Once you've identified the signature object, your Snap can run any logic, including calling APIs.\nThen, your Snap must either return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if it has no insights to provide, or an object with a\n",(0,r.yg)("inlineCode",{parentName:"p"},"content")," property and an optional ",(0,r.yg)("inlineCode",{parentName:"p"},"severity")," property as specified in the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps/reference/entry-points#onsignature"},(0,r.yg)("inlineCode",{parentName:"a"},"onSignature"))," entry point."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Due to current MetaMask UI limitations, signature insights will only be displayed if your Snap's\nlogic deems the signature to be one that a user shouldn't sign, that is, if you return a severity\nlevel of ",(0,r.yg)("inlineCode",{parentName:"p"},"SeverityLevel.Critical"),".")),(0,r.yg)("p",null,"The following is an example implementation of ",(0,r.yg)("inlineCode",{parentName:"p"},"onSignature"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnSignatureHandler, SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onSignature: OnSignatureHandler = async ({\n    signature,\n    signatureOrigin,\n}) => {\n    const insights = /* Get insights based on custom logic */;\n    return {\n        content: panel([\n            heading("My Signature Insights"),\n            text("Here are the insights:"),\n            ...(insights.map((insight) => text(insight.value))),\n        ]),\n        severity: SeverityLevel.Critical,\n    };\n};\n')),(0,r.yg)("p",null,"When your Snap returns a signature insight with a ",(0,r.yg)("inlineCode",{parentName:"p"},"severity")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"SeverityLevel.Critical"),", the custom\nUI displays in a modal after the user selects the ",(0,r.yg)("strong",{parentName:"p"},"Sign")," button.\nFor example:"),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Signature insights warning",src:t(27543).A,width:"354",height:"582"}))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/signature-insights"},(0,r.yg)("inlineCode",{parentName:"a"},"@metamask/signature-insights-example-snap")),"\npackage for a full example of implementing signature insights."))}m.isMDXComponent=!0},19365:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(96540),r=t(20053);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>d});var a=t(58168),r=t(96540),i=t(20053),s=t(23104),o=t(47751),l=t(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:p}=e;const g=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=g.indexOf(n),a=p[t].value;a!==o&&(c(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;n=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;n=g[t]??g[g.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>g.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":o===n})}),t??n)})))}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function c(e){const n=(0,o.u)(e);return r.createElement("div",{className:(0,i.A)("tabs-container",u.tabList)},r.createElement(p,(0,a.A)({},e,n)),r.createElement(g,(0,a.A)({},e,n)))}function d(e){const n=(0,l.A)();return r.createElement(c,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>c});var a=t(96540),r=t(56347),i=t(57485),s=t(31682),o=t(89466);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function c(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),h=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,i]),tabValues:i}}},26913:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/signature-insights-permission-ef74a844b73ec794137b089f86fcdb90.png"},27543:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/signature-insights-warning-7b5808128e4d993228ee01b8e75a9f84.png"}}]);