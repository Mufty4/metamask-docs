"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4284],{20378:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>U,contentTitle:()=>z,default:()=>X,frontMatter:()=>V,metadata:()=>Y,toc:()=>J});var t=s(74848),n=s(28453),a=s(96540),i=s(66588),c=s(51107);const l=e=>e.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>').replace(/`(.*?)`/g,"<code>$1</code>"),o=e=>{let{content:r=""}=e;return(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:l(r)}})},d={paramWrapper:"paramWrapper_vOYc",borderWrapper:"borderWrapper_lVzN",textAltColor:"textAltColor_g6aO",textErrorColor:"textErrorColor_RCwt",paramItemWrapper:"paramItemWrapper_Yvaj",borderTopLine:"borderTopLine_RRPr",borderBottomLine:"borderBottomLine_g9KY",enumWrapper:"enumWrapper_kfzq",enumItem:"enumItem_mblo",enumTitle:"enumTitle_Wukg",secondaryHeading:"secondaryHeading_UNPX",tagList:"tagList_azL0",tagItem:"tagItem_eDUC"},m=e=>{let{title:r,type:s,required:n,description:a}=e;return(0,t.jsxs)("div",{className:"padding-vert--md",children:[(0,t.jsxs)("div",{className:"row row--align-center row--no-gutters padding-bottom--sm",style:{justifyContent:"space-between"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:r}),(0,t.jsxs)("span",{className:d.textAltColor,children:[" ",s," "]})]}),n&&(0,t.jsx)("span",{className:d.textErrorColor,children:"required"})]}),(0,t.jsx)("p",{className:"margin--none",children:(0,t.jsx)(o,{content:a})})]})},p=e=>{let{name:r}=e;const s={MetaMask:"#4DB6AC",Restricted:"#FFECB3",Deprecated:"#7E57C2"};return(0,t.jsx)("div",{className:d.tagItem,style:{backgroundColor:`${s[r]?s[r]:"#FFCDD2"}`},children:r})};var h=s(20053),u=s(41422),x=s(95293);const g="collapseWrapper_pPPa",j="collapsedWrapperView_Tcl9",f="collapseBtn_mgbu",v="collapseIcon_Lbwa",_="collapsedBtnLightHover_hYIU",N="collapsedBtnView_xwLc",w="collapsedIconView_Omph",y=e=>{let{children:r,isInitCollapsed:s=!1}=e;const{collapsed:n,toggleCollapsed:i}=(0,u.u)({initialState:!0}),{colorMode:c}=(0,x.G)();return(0,a.useEffect)((()=>{s&&i()}),[s]),(0,t.jsxs)("div",{className:(0,h.A)(g,!n&&j),children:[(0,t.jsxs)("button",{className:(0,h.A)(f,!n&&N,"light"===c&&_),onClick:i,children:[n?"Show child attributes":"Hide child attributes",(0,t.jsx)("div",{className:(0,h.A)(v,!n&&w)})]}),(0,t.jsx)(u.N,{lazy:!0,collapsed:n,children:r})]})},b=(e,r,s)=>{if(!e)return(0,t.jsx)("div",{children:"Invalid schema"});const n=e=>{const t=r[e.replace("#/components/schemas/","")];return b(t,r,s)};if(e?.schema?.$ref)return n(e.schema.$ref);if(e?.$ref)return n(e.$ref);const a=(e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{title:n||e.title,type:"object",required:!!e.required,description:e.description||e.title||""}),(0,t.jsx)("div",{className:"padding-bottom--md",children:(0,t.jsx)(y,{isInitCollapsed:!!s,children:Object.entries(e.properties).map((e=>{let[s,n]=e;return(0,t.jsx)("div",{className:d.paramItemWrapper,children:b(n,r,s)},s)}))})})]});if("object"===e?.schema?.type&&e?.schema?.properties)return a(e.schema,s||e?.schema?.title);if("object"===e.type&&e.properties)return a(e,s||e.title);const i=(e,s)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{title:s||e.title,type:"array",required:!!e.required,description:e.description||e.title||""}),(0,t.jsx)("div",{className:"padding-bottom--md",children:(0,t.jsx)(y,{children:(0,t.jsx)("div",{className:d.paramItemWrapper,children:b(e.items,r,"")})})})]});if("array"===e.type&&e.items)return i(e,s||e.title);if("array"===e?.schema?.type&&e?.schema?.items)return i(e.schema,s||e.schema.title);const c=(e,s,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{title:s||e.title,type:n,required:!!e.required,description:e.description||e.title||""}),(0,t.jsx)("div",{className:"padding-bottom--md",children:(0,t.jsx)(y,{children:e[n].map(((e,s)=>(0,t.jsx)("div",{className:d.paramItemWrapper,children:b(e,r,e.title)},`${s}`)))})})]});if(e.oneOf)return c(e,s,"oneOf");if(e.allOf)return c(e,s,"allOf");if(e.anyOf)return c(e,s,"anyOf");const l=(e,r,s)=>{const n=e=>{const r=new RegExp(`\`${e}\`: ([^;]+)(;|$)`),t=s.match(r);return t?t[1]:""},a=r&&s&&"Block tag"===r;return(0,t.jsxs)("div",{className:d.enumWrapper,children:[(0,t.jsx)("div",{className:"padding--md",children:"Possible enum values"}),e.map(((e,r)=>(0,t.jsxs)("div",{className:d.enumItem,children:[(0,t.jsx)("div",{className:d.enumTitle,children:e}),a&&(0,t.jsx)("div",{style:{paddingTop:"10px"},children:(0,t.jsx)(o,{content:n(e)})})]},r)))]})};return e?.schema?(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{title:s||e.schema.title,type:e.schema.enum?"enum":e.schema.type,required:!!e.required,description:e.schema.description||e.schema.title||""}),e.schema.enum&&l(e.schema.enum,e.schema.title,e.schema.description)]}):(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{title:s||e.title,type:e.enum?"enum":e.type,required:!!e.required,description:e.enum&&"Block tag"===e.title?"":e.description||e.title}),e.enum&&l(e.enum,e.title,e.description)]})},C=(e,r)=>(0,t.jsx)(t.Fragment,{children:e.map(((e,s)=>(0,t.jsx)("div",{className:d.borderTopLine,children:b(e,r,e.name)},`${s}`)))}),k=(e,r)=>(0,t.jsx)(t.Fragment,{children:b(e,r,e.name)});function H(e){let{method:r,description:s,params:n,components:a,result:i,tags:l}=e;return(0,t.jsxs)(t.Fragment,{children:[l.length>0&&(0,t.jsx)("div",{className:d.tagList,children:l.map((e=>(0,t.jsx)("div",{children:(0,t.jsx)(p,{name:e.name})},e.name)))}),(0,t.jsx)(c.A,{as:"h1",children:r}),(0,t.jsx)(o,{content:s}),(0,t.jsx)(c.A,{as:"h2",className:(0,h.A)(d.secondaryHeading,"padding-vert--md"),children:"Parameters"}),0===n.length?(0,t.jsx)("div",{children:"This method does not accept any parameters"}):(0,t.jsx)(t.Fragment,{children:n&&C(n,a)}),(0,t.jsx)(c.A,{as:"h2",className:(0,h.A)(d.secondaryHeading,d.borderBottomLine,"padding-vert--md"),children:"Returns"}),i?.description&&(0,t.jsx)("div",{className:"padding-vert--md",children:(0,t.jsx)(o,{content:i.description})}),i&&k(i,a)]})}var M=s(96763);function W(e){let{method:r,params:s,components:n}=e;return M.log("method_name___",r),M.log("method_params___",s),M.log("method_components___",n),(0,t.jsx)("div",{})}var I=s(28774);const R="msgWrapper_oYyw",A="msgHeading_N7nq",L="msgText_uOYG",q={root:"root_PX0e",primaryBtn:"primaryBtn_ZB4u",linkBtn:"linkBtn_S6o3",stickyCol:"stickyCol__QqH",rowWrap:"rowWrap_EJOg",colLeft:"colLeft_Xh9H",colRight:"colRight_NS1y"},B=()=>(0,t.jsxs)("div",{className:R,children:[(0,t.jsx)("strong",{className:A,children:"Install MetaMask"}),(0,t.jsx)("p",{className:L,children:"Install MetaMask for your browser to enable interactive features"}),(0,t.jsx)(I.A,{className:q.primaryBtn,href:"https://metamask.io/download/",children:"Install MetaMask"})]}),$=e=>{let{isMetamaskInstalled:r}=e;return(0,t.jsx)(t.Fragment,{children:r?null:(0,t.jsx)(B,{})})};var O=s(21432);const F={cardWrapper:"cardWrapper_cIWN",cardHeader:"cardHeader_REo7",cardHeading:"cardHeading_nQCU",cardFooter:"cardFooter_f0Rz"};function E(e){let{isMetamaskInstalled:r,method:s,params:n,response:i}=e;const c=(0,a.useMemo)((()=>`await window.ethereum.request({\n "method": "${s}",\n "params": [${n}],\n});`),[s,n]),l=(0,a.useMemo)((()=>{const e={jsonrpc:"2.0",id:1,result:`${i}`};return JSON.stringify(e,null,2)}),[i]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:F.cardWrapper,children:[(0,t.jsx)("div",{className:F.cardHeader,children:(0,t.jsx)("strong",{className:F.cardHeading,children:"Request"})}),(0,t.jsx)("div",{children:(0,t.jsx)(O.A,{language:"javascript",className:"margin-bottom--none",children:c})}),(0,t.jsxs)("div",{className:F.cardFooter,children:[n.length>0&&(0,t.jsx)("button",{className:(0,h.A)(q.linkBtn,"margin-right--md"),disabled:!r,children:"Customize request"}),(0,t.jsx)("button",{className:q.primaryBtn,disabled:!r,children:"Run request"})]})]}),(0,t.jsxs)("div",{className:F.cardWrapper,children:[(0,t.jsx)("div",{className:F.cardHeader,children:(0,t.jsx)("strong",{className:F.cardHeading,children:"Response"})}),(0,t.jsx)("div",{children:(0,t.jsx)(O.A,{language:"javascript",className:"margin-bottom--none",children:l})})]})]})}const T={errWrapper:"errWrapper_Ooob",errRow:"errRow_uRo9",errRowHeading:"errRowHeading_JlAr",errRowHeadingLightView:"errRowHeadingLightView_RWTS",secondaryHeading:"secondaryHeading_aeHO",errColCode:"errColCode_HSyJ",errColMsg:"errColMsg_fKtc"};function P(e){let{errors:r}=e;const{colorMode:s}=(0,x.G)();return 0===r.length?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{as:"h2",className:(0,h.A)(T.secondaryHeading,"padding-vert--md"),children:"Errors"}),(0,t.jsxs)("div",{className:T.errWrapper,children:[(0,t.jsxs)("div",{className:(0,h.A)(T.errRowHeading,"light"===s&&T.errRowHeadingLightView),children:[(0,t.jsx)("div",{className:T.errColCode,children:"Code"}),(0,t.jsx)("div",{className:T.errColMsg,children:"Message"})]}),r.map(((e,r)=>(0,t.jsxs)("div",{className:T.errRow,children:[(0,t.jsx)("div",{className:T.errColCode,children:e.code}),(0,t.jsx)("div",{className:T.errColMsg,children:(0,t.jsx)(o,{content:e.message})})]},`${e.code}-${r}`)))]})]})}function S(e){let{network:r,method:s}=e;if(!s||!r)return null;const[n,c]=(0,a.useState)(!1),{netData:l}=(0,i.P_)("plugin-json-rpc"),o=l.find((e=>e.name===r));if(!o&&o.error)return null;const d=(0,a.useMemo)((()=>{const e=(e,r,s)=>e?.map((e=>{if(e?.name||e?.code&&e?.message)return e;if(e?.$ref){const t=e.$ref.replace(r,"");return o.data.components[s][t]}return null})).filter(Boolean)||[],r=o.data.methods?.find((e=>e.name===s));if(!r)return null;const t=e(r.errors,"#/components/errors/","errors"),n=e(r.tags,"#/components/tags/","tags");return{description:r.summary||r.description||null,params:r.params||[],result:r.result||null,components:o.data.components||null,errors:t,tags:n}}),[o,s]);return null===d?null:((0,a.useEffect)((()=>{const e=!!window?.ethereum;c(e)}),[]),(0,t.jsxs)("div",{className:q.rowWrap,children:[(0,t.jsxs)("div",{className:q.colLeft,children:[(0,t.jsx)(H,{method:s,description:d.description,params:d.params,components:d.components.schemas,result:d.result,tags:d.tags}),(0,t.jsx)(P,{errors:d.errors})]}),(0,t.jsx)("div",{className:q.colRight,children:(0,t.jsxs)("div",{className:q.stickyCol,children:[(0,t.jsx)($,{isMetamaskInstalled:n}),(0,t.jsx)(E,{isMetamaskInstalled:n,method:s,params:[],response:"0x"}),(0,t.jsx)(W,{method:s,params:d.params,components:d.components.schemas})]})})]}))}let D=function(e){return e.linea="linea",e.metamask="metamask",e}({});D.linea,D.linea,D.metamask;const V={title:"new-reference",hide_title:!0,hide_table_of_contents:!0,sidebar_class_name:"hidden"},z=void 0,Y={id:"reference/new-reference",title:"new-reference",description:"",source:"@site/wallet/reference/new-reference.mdx",sourceDirName:"reference",slug:"/reference/new-reference",permalink:"/wallet/reference/new-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/new-reference.mdx",tags:[],version:"current",frontMatter:{title:"new-reference",hide_title:!0,hide_table_of_contents:!0,sidebar_class_name:"hidden"},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/wallet/reference/provider-api"}},U={},J=[];function G(e){return(0,t.jsx)(S,{network:D.metamask,method:"eth_call"})}function X(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(G,{...e})}):G()}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var t=s(96540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);