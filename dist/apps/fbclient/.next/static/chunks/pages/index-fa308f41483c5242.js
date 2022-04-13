(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8738:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(957)}])},828:function(e,n,t){"use strict";t.d(n,{k:function(){return l}});var r=t(2784),i=t(8322);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(){var e=a((0,i._)({key:"user",defaultValue:null}),2),n=e[0],t=e[1],o=a((0,i._)({key:"token",defaultValue:null}),2),l=o[0],u=o[1],c=a(r.useState((function(){return!!n})),2);return[c[0],c[1],l,u,n,t]}},957:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var r=t(4776),i=t.n(r),o=t(2322),a=t(7301),l=t(5017),u=t(9644),c=t.n(u),s=t(7729),f=t(2784),d=t(1452),p=t(3408),m=t(4272),h=t(2767),x=t(4559),y=t(4917),g=t(9935),w=t(9097),b=t.n(w),v=t(195);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}var O=function(e){var n=e.loginHandler,t=f.useRef(null),r=v.z.object({email:v.z.string().email({message:"Invalid email"}).nonempty("Email can't be empty"),password:v.z.string().min(6,"Password must be minimum 6 characters").nonempty("Password can't be empty")}),i=(0,d.c)({schema:(0,p.F)(r),initialValues:{email:"",password:""}});return f.useEffect((function(){t.current.focus()}),[]),(0,o.jsx)(l.x,{sx:{boxShadow:"-1px 0px 18px -10px rgba(0,0,0,0.75)",padding:"20px",borderRadius:"10px",marginTop:"3rem",width:"85%",maxWidth:"400px","@media (min-width: 992px)":{width:"400px"}},mx:"auto",children:(0,o.jsxs)("form",{onSubmit:i.onSubmit((function(e){return n(e)})),children:[(0,o.jsx)(m.o,S({id:"email input",size:"lg",autoComplete:"off",placeholder:"Email address"},i.getInputProps("email"),{value:i.values.email,onBlur:function(){return i.validateField("email")},styles:{error:{fontSize:"0.7rem"}},onChange:function(e){return i.setFieldValue("email",e.currentTarget.value)},ref:t})),(0,o.jsx)(h.W,S({id:"password input",autoComplete:"off",styles:{rightSection:{display:"none",width:"0px"},innerInput:{width:"95%"},error:{fontSize:"0.7rem"}},sx:function(e){return{margin:"1.6rem 0px"}},value:i.values.password,size:"lg",placeholder:"Password"},i.getInputProps("password"),{onBlur:function(){return i.validateField("password")},onChange:function(e){return i.setFieldValue("password",e.currentTarget.value)}})),(0,o.jsx)(x.Z,{mt:"xl",children:(0,o.jsx)(y.z,{fullWidth:!0,size:"lg",type:"submit",children:"Log In"})}),(0,o.jsx)(l.x,{sx:function(e){return{textAlign:"center",marginTop:"20px",background:"none",color:e.colors.primary[0]}},children:(0,o.jsx)(b(),{href:"/feed",children:(0,o.jsx)(y.z,{sx:function(e){return{color:e.colors.primary[0],fontWeight:400}},component:"a",variant:"white",children:"Forgotten password?"})})}),(0,o.jsx)(g.i,{my:"sm"}),(0,o.jsx)(x.Z,{position:"center",mt:"xl",children:(0,o.jsx)(y.z,{size:"lg",styles:function(e){return{root:{background:e.colors.primary[3],"&:hover":{background:e.colors.primary[3]}}}},children:"Create New Account"})})]})})},k=t(6265),z=t(3191);var P=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.x,{sx:{margin:"0px auto",marginTop:"3rem",width:"85%",display:"flex",alignItems:"center",flexDirection:"column","@media (min-width: 992px)":{width:"500px",marginTop:"0px"}},children:[(0,o.jsx)(k.E,{sx:{width:"330px",height:"auto","@media (min-width: 576px)":{fontSize:"1.3rem",width:"430px"},"@media (min-width: 768px)":{fontSize:"1.6rem",width:"520px"},"@media (min-width: 992px)":{position:"relative",left:"-2.55rem"}},src:"/logo.svg",alt:"With custom placeholder",placeholder:(0,o.jsx)(z.x,{align:"center",children:"This image contained the meaning of life"})}),(0,o.jsx)(z.x,{sx:function(e){return{textAlign:"center",fontSize:"1rem",width:"300px",fontWeight:"bold",opacity:"0.7",lineHeight:"1.3rem","@media (min-width: 576px)":{fontSize:"1.3rem",width:"430px",lineHeight:"1.6rem"},"@media (min-width: 768px)":{fontSize:"1.6rem",width:"520px"},"@media (min-width: 992px)":{fontSize:"1.6rem",width:"100%",lineHeight:"1.9rem",textAlign:"left"}}},children:"Facebook helps you connect and share with the people in your life."})]})})},A=t(9126),E=t.n(A),I=t(5632),_=t(828);function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e,n,t,r,i,o,a){try{var l=e[o](a),u=l.value}catch(c){return void t(c)}l.done?n(u):Promise.resolve(u).then(r,i)}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function W(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=function(){var e=W((0,_.k)(),6),n=e[0],t=(e[1],e[2],e[3]),r=e[4],u=e[5],d=(0,I.useRouter)(),p=function(){var e,n=(e=i().mark((function e(n){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().post("http://localhost:4000/login",{email:n.email,password:n.password});case 2:return o=e.sent,t(o.data.accessToken),e.next=6,u(E().decode(o.data.accessToken).payload);case 6:console.log(r),d.push("/feed");case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){C(o,r,i,a,l,"next",e)}function l(e){C(o,r,i,a,l,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return f.useEffect((function(){n&&d.push("/feed")})),n?(0,o.jsx)("div",{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default,{children:(0,o.jsx)("title",{children:"Welcome | Facebook"})}),(0,o.jsx)(a.V,{styles:function(e){return{main:D({},e.other.appShellDefaultStyles,{background:e.colors.primary[1],padding:"0px"})}},children:(0,o.jsxs)(l.x,{sx:function(e){return{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"100vh",width:"100%","@media (min-width: 992px)":{flexDirection:"row",alignItems:"center"},"@media (min-width: 1200px)":{flexDirection:"row",padding:"0px 2rem",alignItems:"center"}}},children:[(0,o.jsx)(P,{}),(0,o.jsx)(O,{loginHandler:p})]})})]})}}},function(e){e.O(0,[934,338,27,774,888,179],(function(){return n=8738,e(e.s=n);var n}));var n=e.O();_N_E=n}]);