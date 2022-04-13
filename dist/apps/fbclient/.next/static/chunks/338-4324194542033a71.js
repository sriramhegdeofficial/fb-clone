(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{5017:function(e,r,t){"use strict";t.d(r,{x:function(){return v}});var o=t(2784),n=t(9182),a=t(4179),i=t(7441);const l={mt:"marginTop",mb:"marginBottom",ml:"marginLeft",mr:"marginRight",pt:"paddingTop",pb:"paddingBottom",pl:"paddingLeft",pr:"paddingRight"},c=["-xs","-sm","-md","-lg","-xl"];function s(e){return"string"===typeof e||"number"===typeof e}function d(e,r){return c.includes(e)?-1*r.fn.size({size:e.replace("-",""),sizes:r.spacing}):r.fn.size({size:e,sizes:r.spacing})}function u(e,r){const t={};if(s(e.p)){const o=d(e.p,r);t.padding=o}if(s(e.m)){const o=d(e.m,r);t.margin=o}if(s(e.py)){const o=d(e.py,r);t.paddingTop=o,t.paddingBottom=o}if(s(e.px)){const o=d(e.px,r);t.paddingLeft=o,t.paddingRight=o}if(s(e.my)){const o=d(e.my,r);t.marginTop=o,t.marginBottom=o}if(s(e.mx)){const o=d(e.mx,r);t.marginLeft=o,t.marginRight=o}return Object.keys(l).forEach((o=>{s(e[o])&&(t[l[o]]=r.fn.size({size:d(e[o],r),sizes:r.spacing}))})),t}function f(e,r){return"function"===typeof e?e(r):e}function p(e,r,t){const o=(0,a.rZ)(),{css:n,cx:l}=(0,i.Z)();return Array.isArray(e)?l(t,n(u(r,o)),e.map((e=>n(f(e,o))))):l(t,n(f(e,o)),n(u(r,o)))}var m=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const v=(0,o.forwardRef)(((e,r)=>{var t=e,{className:a,component:i,style:l,sx:c}=t,s=((e,r)=>{var t={};for(var o in e)b.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&g)for(var o of g(e))r.indexOf(o)<0&&h.call(e,o)&&(t[o]=e[o]);return t})(t,["className","component","style","sx"]);const{systemStyles:d,rest:u}=(0,n.x)(s),f=i||"div";return o.createElement(f,((e,r)=>{for(var t in r||(r={}))b.call(r,t)&&y(e,t,r[t]);if(g)for(var t of g(r))h.call(r,t)&&y(e,t,r[t]);return e})({ref:r,className:p(c,d,a),style:l},u))}));v.displayName="@mantine/core/Box"},4917:function(e,r,t){"use strict";t.d(r,{z:function(){return I}});var o=t(2784),n=t(4179),a=t(4948),i=t(3342),l=t(2001),c=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,g=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&m(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&m(e,t,r[t]);return e};const b={xs:{height:l.J.xs,padding:"0 14px"},sm:{height:l.J.sm,padding:"0 18px"},md:{height:l.J.md,padding:"0 22px"},lg:{height:l.J.lg,padding:"0 26px"},xl:{height:l.J.xl,padding:"0 32px"},"compact-xs":{height:22,padding:"0 7px"},"compact-sm":{height:26,padding:"0 8px"},"compact-md":{height:30,padding:"0 10px"},"compact-lg":{height:34,padding:"0 12px"},"compact-xl":{height:40,padding:"0 14px"}},h=Object.keys(b).reduce(((e,r)=>(e[r]=b[r].height,e)),{}),y=({compact:e,size:r})=>e?b[`compact-${r}`]:b[r],v=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});function k({variant:e,theme:r,color:t}){const o=(0,a.d)({theme:r,color:t,variant:e});return{border:`1px solid ${o.border}`,backgroundColor:o.background,backgroundImage:o.background,color:o.color,"&:hover":{backgroundColor:o.hover}}}var w=(0,i.k)(((e,{color:r,size:t,radius:o,fullWidth:n,compact:i,gradientFrom:l,gradientTo:c,gradientDeg:u},f)=>{const p=(0,a.d)({theme:e,color:r,variant:"gradient",gradient:{from:l,to:c,deg:u}});return{loading:{ref:f("loading"),pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(o),cursor:"not-allowed"}},outline:k({variant:"outline",theme:e,color:r}),filled:k({variant:"filled",theme:e,color:r}),light:k({variant:"light",theme:e,color:r}),default:k({variant:"default",theme:e,color:r}),white:k({variant:"white",theme:e,color:r}),subtle:k({variant:"subtle",theme:e,color:r}),gradient:{border:0,backgroundImage:p.background,color:p.color,"&:hover":{backgroundSize:"200%"}},root:(m=g(g(g(g({},y({compact:i,size:t})),e.fn.fontStyles()),e.fn.focusStyles()),v(n)),b={borderRadius:e.fn.radius(o),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:t,sizes:e.fontSizes}),WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none","&:not(:disabled):active":{transform:"translateY(1px)"},[`&:not(.${f("loading")}):disabled`]:{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed"}},s(m,d(b))),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}};var m,b})),x=t(9887),O=t(5017),z=Object.defineProperty,S=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&j(e,t,r[t]);if(S)for(var t of S(r))C.call(r,t)&&j(e,t,r[t]);return e};const P={size:"sm",type:"button",variant:"filled",loaderPosition:"left",gradient:{from:"blue",to:"cyan",deg:45}},I=(0,o.forwardRef)(((e,r)=>{const t=(0,n.Z3)("Button",P,e),{className:i,size:l,color:c,type:s,disabled:d,children:u,leftIcon:f,rightIcon:p,fullWidth:m,variant:g,radius:b,component:y,uppercase:v,compact:k,loading:z,loaderPosition:j,loaderProps:I,gradient:M,classNames:$,styles:R}=t,W=((e,r)=>{var t={};for(var o in e)E.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&S)for(var o of S(e))r.indexOf(o)<0&&C.call(e,o)&&(t[o]=e[o]);return t})(t,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","component","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles"]),{classes:B,cx:L,theme:T}=w({radius:b,color:c,size:l,fullWidth:m,compact:k,gradientFrom:M.from,gradientTo:M.to,gradientDeg:M.deg},{classNames:$,styles:R,name:"Button"}),Z=(0,a.d)({color:c,theme:T,variant:g}),A=o.createElement(x.a,N({color:Z.color,size:T.fn.size({size:l,sizes:h})/2},I));return o.createElement(O.x,N({component:y||"button",className:L(B[g],{[B.loading]:z},B.root,i),type:s,disabled:d||z,ref:r,onTouchStart:()=>{}},W),o.createElement("div",{className:B.inner},(f||z&&"left"===j)&&o.createElement("span",{className:L(B.icon,B.leftIcon)},z&&"left"===j?A:f),o.createElement("span",{className:B.label,style:{textTransform:v?"uppercase":void 0}},u),(p||z&&"right"===j)&&o.createElement("span",{className:L(B.icon,B.rightIcon)},z&&"right"===j?A:p)))}));I.displayName="@mantine/core/Button"},2001:function(e,r,t){"use strict";t.d(r,{J:function(){return p}});var o=t(3342),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&d(e,t,r[t]);return e},f=(e,r)=>a(e,i(r));const p={xs:30,sm:36,md:42,lg:50,xl:60};var m=(0,o.k)(((e,{size:r,multiline:t,radius:o,variant:n,invalid:a,rightSectionWidth:i,withRightSection:l,iconWidth:c})=>{const s=e.colors.red["dark"===e.colorScheme?6:7],d="default"===n||"filled"===n?{minHeight:e.fn.size({size:r,sizes:p}),paddingLeft:e.fn.size({size:r,sizes:p})/3,paddingRight:l?i:e.fn.size({size:r,sizes:p})/3,borderRadius:e.fn.radius(o)}:null;return{wrapper:{position:"relative"},input:"headless"===n?{}:f(u(f(u({},e.fn.fontStyles()),{height:t?"unstyled"===n?void 0:"auto":e.fn.size({size:r,sizes:p}),WebkitTapHighlightColor:"transparent",lineHeight:t?e.lineHeight:e.fn.size({size:r,sizes:p})-2+"px",appearance:"none",resize:"none",boxSizing:"border-box",fontSize:e.fn.size({size:r,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left"}),d),{"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":{opacity:1,userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),defaultVariant:{border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:e.colors[e.primaryColor]["dark"===e.colorScheme?8:5]}},filledVariant:{border:"1px solid transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":{outline:"none",borderColor:`${e.colors[e.primaryColor]["dark"===e.colorScheme?8:5]} !important`}},unstyledVariant:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}},withIcon:{paddingLeft:"number"===typeof c?c:e.fn.size({size:r,sizes:p})},invalid:{color:s,borderColor:s,"&::placeholder":{opacity:1,color:s}},disabled:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:e.fn.size({size:r,sizes:p}),color:a?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:i}}}));r.Z=m},9887:function(e,r,t){"use strict";t.d(r,{a:function(){return N}});var o=t(2784),n=t(4179),a=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var d=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var g=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var k=t(5017),w=Object.defineProperty,x=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const E={bars:function(e){var r=e,{size:t,color:n}=r,a=((e,r)=>{var t={};for(var o in e)l.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&i)for(var o of i(e))r.indexOf(o)<0&&c.call(e,o)&&(t[o]=e[o]);return t})(r,["size","color"]);return o.createElement("svg",((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&s(e,t,r[t]);return e})({viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg",fill:n,width:`${t}px`},a),o.createElement("rect",{y:"10",width:"15",height:"120",rx:"6"},o.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},o.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("rect",{x:"60",width:"15",height:"140",rx:"6"},o.createElement("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},o.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},o.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})))},oval:function(e){var r=e,{size:t,color:n}=r,a=((e,r)=>{var t={};for(var o in e)f.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))r.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(r,["size","color"]);return o.createElement("svg",((e,r)=>{for(var t in r||(r={}))f.call(r,t)&&m(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&m(e,t,r[t]);return e})({width:`${t}px`,height:`${t}px`,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:n},a),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("g",{transform:"translate(2.5 2.5)",strokeWidth:"5"},o.createElement("circle",{strokeOpacity:".5",cx:"16",cy:"16",r:"16"}),o.createElement("path",{d:"M32 16c0-9.94-8.06-16-16-16"},o.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"})))))},dots:function(e){var r=e,{size:t,color:n}=r,a=((e,r)=>{var t={};for(var o in e)h.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&b)for(var o of b(e))r.indexOf(o)<0&&y.call(e,o)&&(t[o]=e[o]);return t})(r,["size","color"]);return o.createElement("svg",((e,r)=>{for(var t in r||(r={}))h.call(r,t)&&v(e,t,r[t]);if(b)for(var t of b(r))y.call(r,t)&&v(e,t,r[t]);return e})({width:`${t}px`,height:t/4+"px",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:n},a),o.createElement("circle",{cx:"15",cy:"15",r:"15"},o.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},o.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"105",cy:"15",r:"15"},o.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))}},C={xs:18,sm:22,md:36,lg:44,xl:58},j={size:"md"};function N(e){const r=(0,n.Z3)("Loader",j,e),{size:t="md",color:a,variant:i}=r,l=((e,r)=>{var t={};for(var o in e)O.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&x)for(var o of x(e))r.indexOf(o)<0&&z.call(e,o)&&(t[o]=e[o]);return t})(r,["size","color","variant"]),c=(0,n.rZ)(),s=i in E?i:c.loader,d=a||c.primaryColor;return o.createElement(k.x,((e,r)=>{for(var t in r||(r={}))O.call(r,t)&&S(e,t,r[t]);if(x)for(var t of x(r))z.call(r,t)&&S(e,t,r[t]);return e})({role:"presentation",component:E[s]||E.bars,size:c.fn.size({size:t,sizes:C}),color:d in c.colors?c.fn.themeColor(d,"dark"===c.colorScheme?4:6):a},l))}N.displayName="@mantine/core/Loader"},9182:function(e,r,t){"use strict";t.d(r,{x:function(){return i}});var o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){const r=e,{m:t,mx:i,my:l,mt:c,mb:s,ml:d,mr:u,p:f,px:p,py:m,pt:g,pb:b,pl:h,pr:y}=r,v=((e,r)=>{var t={};for(var i in e)n.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&o)for(var i of o(e))r.indexOf(i)<0&&a.call(e,i)&&(t[i]=e[i]);return t})(r,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr"]),k={m:t,mx:i,my:l,mt:c,mb:s,ml:d,mr:u,p:f,px:p,py:m,pt:g,pb:b,pl:h,pr:y};return Object.keys(k).forEach((e=>{void 0===k[e]&&delete k[e]})),{systemStyles:k,rest:v}}},4948:function(e,r,t){"use strict";t.d(r,{d:function(){return i}});const o="indigo",n="cyan",a=45;function i({color:e,theme:r,variant:t,gradient:i}){if("light"===t)return{border:"transparent",background:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?8:0),"dark"===r.colorScheme?.35:1),color:"dark"===e?"dark"===r.colorScheme?r.colors.dark[0]:r.colors.dark[9]:r.fn.themeColor(e,"dark"===r.colorScheme?2:6),hover:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?7:1),"dark"===r.colorScheme?.45:.65)};if("default"===t)return{border:"dark"===r.colorScheme?r.colors.dark[5]:r.colors.gray[4],background:"dark"===r.colorScheme?r.colors.dark[5]:r.white,color:"dark"===r.colorScheme?r.white:r.black,hover:"dark"===r.colorScheme?r.colors.dark[4]:r.colors.gray[0]};if("white"===t)return{border:"transparent",background:r.white,color:r.fn.themeColor(e,6),hover:null};if("outline"===t)return{border:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?4:7),.75),background:"transparent",color:r.fn.themeColor(e,"dark"===r.colorScheme?4:7),hover:"dark"===r.colorScheme?r.fn.rgba(r.fn.themeColor(e,4),.05):r.fn.rgba(r.fn.themeColor(e,0),.35)};if("gradient"===t){const e={from:(null==i?void 0:i.from)||o,to:(null==i?void 0:i.to)||n,deg:(null==i?void 0:i.deg)||a};return{background:`linear-gradient(${e.deg}deg, ${r.fn.themeColor(e.from,6,!1)} 0%, ${r.fn.themeColor(e.to,6,!1)} 100%)`,color:r.white,border:"transparent",hover:null}}return"subtle"===t?{border:"transparent",background:"transparent",color:"dark"===e?"dark"===r.colorScheme?r.colors.dark[0]:r.colors.dark[9]:r.fn.themeColor(e,"dark"===r.colorScheme?2:6),hover:r.fn.rgba(r.fn.themeColor(e,"dark"===r.colorScheme?8:0),"dark"===r.colorScheme?.35:1)}:{border:"transparent",background:r.fn.themeColor(e,"dark"===r.colorScheme?8:6),color:r.white,hover:r.fn.themeColor(e,7)}}},3342:function(e,r,t){"use strict";t.d(r,{k:function(){return i}});var o=t(7441),n=t(4179);function a(e,r,t,o,n){return Object.keys(r).reduce(((a,i)=>(a[i]=e(r[i],null!==t&&t[i],null!=o&&o[i],n?`mantine-${n}-${i}`:null),a)),{})}function i(e){const r="function"===typeof e?e:()=>e;return function(e,t){const i=(0,n.rZ)(),{styles:l,classNames:c}=(0,n.sr)(null==t?void 0:t.name),{css:s,cx:d}=(0,o.Z)(),u=r(i,e,(function(e){return`__mantine-ref-${e||""}`})),f="function"===typeof(null==t?void 0:t.styles)?null==t?void 0:t.styles(i):(null==t?void 0:t.styles)||{},p="function"===typeof l?l(i,e||{}):l||{},m=function(e){const r={};return Object.keys(e).forEach((t=>{const[o,n]=e[t];r[o]=n})),r}(Object.keys(u).map((e=>[e,d(s(u[e]),s(p[e]),s(f[e]))])));return{classes:a(d,m,c,null==t?void 0:t.classNames,null==t?void 0:t.name),cx:d,theme:i}}}},7441:function(e,r,t){"use strict";function o(e){var r,t,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=o(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}t.d(r,{Z:function(){return v}});var n=t(9017),a=t(2792),i=t(2784);var l=t(5333),c=t(4179);const s={key:"mantine",prepend:!0},{getCache:d}=(()=>{let e,r=s.key;return{getCache:function(t){return void 0!==e&&r===(null==t?void 0:t.key)||(r=(null==t?void 0:t.key)||"mantine",e=(0,l.Z)((null==t?void 0:t.key)?t:s)),e}}})();var u=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const b="ref";function h(e){let r;if(1!==e.length)return{args:e,ref:r};const[t]=e;if(!(t instanceof Object))return{args:e,ref:r};if(!(b in t))return{args:e,ref:r};r=t.ref;const o=((e,r)=>{for(var t in r||(r={}))p.call(r,t)&&g(e,t,r[t]);if(f)for(var t of f(r))m.call(r,t)&&g(e,t,r[t]);return e})({},t);return delete o.ref,{args:[o],ref:r}}const{cssFactory:y}={cssFactory:function(e){const{cache:r}=e,t=(...e)=>{const{ref:t,args:o}=h(e),i=(0,n.O)(o,r.registered);return(0,a.My)(r,i,!1),`${r.key}-${i.name}${void 0===t?"":` ${t}`}`};return{css:t,cx:(...e)=>function(e,r,t){const o=[],n=(0,a.fp)(e,o,t);return o.length<2?t:n+r(o)}(r.registered,t,function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=o(e))&&(n&&(n+=" "),n+=r);return n}(e))}}};function v(){const e=function(){const e=(0,c.ly)();return d(e)}();return function(e,r){const t=(0,i.useRef)();return(!t.current||r.length!==t.current.prevDeps.length||t.current.prevDeps.map(((e,t)=>e===r[t])).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:[...r]}),t.current.v}((()=>y({cache:e})),[e])}},8322:function(e,r,t){"use strict";t.d(r,{_:function(){return i}});var o=t(2784);function n(e){try{return JSON.stringify(e)}catch(r){throw new Error("@mantine/hooks use-local-storage: Failed to serialize the value")}}function a(e){try{return JSON.parse(e)}catch(r){return e}}function i({key:e,defaultValue:r,getInitialValueInEffect:t=!1,deserialize:i=a,serialize:l=n}){var c;const[s,d]=(0,o.useState)("undefined"!==typeof window&&"localStorage"in window&&!t?i(null!=(c=window.localStorage.getItem(e))?c:void 0):null!=r?r:""),u=(0,o.useCallback)((r=>{r instanceof Function?d((t=>{const o=r(t);return window.localStorage.setItem(e,l(o)),o})):(window.localStorage.setItem(e,l(r)),d(r))}),[e]);var f,p,m;return f="storage",p=r=>{var t;r.storageArea===window.localStorage&&r.key===e&&d(i(null!=(t=r.newValue)?t:void 0))},(0,o.useEffect)((()=>(window.addEventListener(f,p,m),()=>window.removeEventListener(f,p,m))),[]),(0,o.useEffect)((()=>{void 0!==r&&void 0===s&&u(r)}),[r,s,u]),(0,o.useEffect)((()=>{var o;t&&d(i(null!=(o=window.localStorage.getItem(e))?o:void 0)||(null!=r?r:""))}),[]),[void 0===s?r:s,u]}},5632:function(e,r,t){e.exports=t(2203)}}]);