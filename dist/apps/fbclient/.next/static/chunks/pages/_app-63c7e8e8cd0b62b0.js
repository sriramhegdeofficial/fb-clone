(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5333:function(e,t,n){"use strict";n.d(t,{Z:function(){return oe}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function s(e){return e.trim()}function c(e,t,n){return e.replace(t,n)}function f(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function l(e,t,n){return e.slice(t,n)}function p(e){return e.length}function d(e){return e.length}function b(e,t){return t.push(e),e}var m=1,y=1,h=0,g=0,v=0,x="";function w(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:m,column:y,length:i,return:""}}function S(e,t){return i(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return v=g>0?u(x,--g):0,y--,10===v&&(y=1,m--),v}function $(){return v=g<h?u(x,g++):0,y++,10===v&&(y=1,m++),v}function O(){return u(x,g)}function C(){return g}function j(e,t){return l(x,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return m=y=1,h=p(x=e),g=0,[]}function A(e){return x="",e}function E(e){return s(j(g-1,N(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=O())&&v<33;)$();return z(e)>2||z(v)>3?"":" "}function F(e,t){for(;--t&&$()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return j(e,C()+(t<6&&32==O()&&32==$()))}function N(e){for(;$();)switch(v){case e:return g;case 34:case 39:34!==e&&39!==e&&N(v);break;case 40:41===e&&N(e);break;case 92:$()}return g}function _(e,t){for(;$()&&e+v!==57&&(e+v!==84||47!==O()););return"/*"+j(t,g-1)+"*"+a(47===e?e:$())}function T(e){for(;!z(O());)$();return j(e,g)}var R="-ms-",I="-moz-",H="-webkit-",W="comm",G="rule",D="decl",L="@keyframes";function B(e,t){for(var n="",r=d(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function U(e,t,n,r){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case W:return"";case L:return e.return=e.value+"{"+B(e.children,r)+"}";case G:e.value=e.props.join(",")}return p(n=B(e.children,r))?e.return=e.value+"{"+n+"}":""}function Z(e,t){switch(function(e,t){return(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+I+e+R+e+e;case 6828:case 4268:return H+e+R+e+e;case 6165:return H+e+R+"flex-"+e+e;case 5187:return H+e+c(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return H+e+R+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return H+e+R+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return H+e+R+c(e,"shrink","negative")+e;case 5292:return H+e+R+c(e,"basis","preferred-size")+e;case 6060:return H+"box-"+c(e,"-grow","")+H+e+R+c(e,"grow","positive")+e;case 4554:return H+c(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+I+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~f(e,"stretch")?Z(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,p(e)-3-(~f(e,"!important")&&10))){case 107:return c(e,":",":"+H)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+H+(45===u(e,14)?"inline-":"")+"box$3$1"+H+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return H+e+R+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+R+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+R+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return H+e+R+e+e}return e}function q(e){return A(Y("",null,null,null,[""],e=P(e),0,[0],e))}function Y(e,t,n,r,o,i,s,u,l){for(var d=0,m=0,y=s,h=0,g=0,v=0,x=1,w=1,S=1,j=0,z="",P=o,A=i,N=r,R=z;w;)switch(v=j,j=$()){case 40:if(108!=v&&58==R.charCodeAt(y-1)){-1!=f(R+=c(E(j),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:R+=E(j);break;case 9:case 10:case 13:case 32:R+=M(v);break;case 92:R+=F(C()-1,7);continue;case 47:switch(O()){case 42:case 47:b(X(_($(),C()),t,n),l);break;default:R+="/"}break;case 123*x:u[d++]=p(R)*S;case 125*x:case 59:case 0:switch(j){case 0:case 125:w=0;case 59+m:g>0&&p(R)-y&&b(g>32?J(R+";",r,n,y-1):J(c(R," ","")+";",r,n,y-2),l);break;case 59:R+=";";default:if(b(N=V(R,t,n,d,m,o,u,z,P=[],A=[],y),i),123===j)if(0===m)Y(R,t,N,N,P,i,y,u,A);else switch(h){case 100:case 109:case 115:Y(e,N,N,r&&b(V(e,N,N,0,0,o,u,z,o,P=[],y),A),o,A,y,u,r?P:A);break;default:Y(R,N,N,N,[""],A,0,u,A)}}d=m=g=0,x=S=1,z=R="",y=s;break;case 58:y=1+p(R),g=v;default:if(x<1)if(123==j)--x;else if(125==j&&0==x++&&125==k())continue;switch(R+=a(j),j*x){case 38:S=m>0?1:(R+="\f",-1);break;case 44:u[d++]=(p(R)-1)*S,S=1;break;case 64:45===O()&&(R+=E($())),h=O(),m=y=p(z=R+=T(C())),j++;break;case 45:45===v&&2==p(R)&&(x=0)}}return i}function V(e,t,n,r,a,i,f,u,p,b,m){for(var y=a-1,h=0===a?i:[""],g=d(h),v=0,x=0,S=0;v<r;++v)for(var k=0,$=l(e,y+1,y=o(x=f[v])),O=e;k<g;++k)(O=s(x>0?h[k]+" "+$:c($,/&\f/g,h[k])))&&(p[S++]=O);return w(e,t,n,0===a?G:u,p,b,m)}function X(e,t,n){return w(e,t,n,W,a(v),l(e,2,-2),0)}function J(e,t,n,r){return w(e,t,n,D,l(e,0,r),l(e,r+1,-1),r)}var K=function(e,t,n){for(var r=0,o=0;r=o,o=O(),38===r&&12===o&&(t[n]=1),!z(o);)$();return j(e,g)},Q=function(e,t){return A(function(e,t){var n=-1,r=44;do{switch(z(r)){case 0:38===r&&12===O()&&(t[n]=1),e[n]+=K(g-1,t,n);break;case 2:e[n]+=E(r);break;case 4:if(44===r){e[++n]=58===O()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=a(r)}}while(r=$());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(n))&&!r){ee.set(e,!0);for(var o=[],a=Q(t,o),i=n.props,s=0,c=0;s<a.length;s++)for(var f=0;f<i.length;f++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[f]):i[f]+" "+a[s]}}},ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=Z(e.value,e.length);break;case L:return B([S(e,{value:c(e.value,"@","@"+H)})],r);case G:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([S(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return B([S(e,{props:[c(t,/:(plac\w+)/,":-webkit-input-$1")]}),S(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[c(t,/:(plac\w+)/,R+"input-$1")]})],r)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||re;var a,i,s={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;c.push(e)}));var f,u,l=[U,(u=function(e){f.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=function(e){var t=d(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}([te,ne].concat(o,l));i=function(e,t,n,r){f=n,B(q(e?e+"{"+t.styles+"}":t.styles),p),r&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return b.sheet.hydrate(c),b}},9017:function(e,t,n){"use strict";n.d(t,{O:function(){return b}});var r=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!==typeof e},f=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return s(e)?e:e.replace(a,"-$&").toLowerCase()})),u=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,n){return p={name:t,styles:n,next:p},t}))}return 1===o[e]||s(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return p={name:n.name,styles:n.styles,next:p},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)p={name:r.name,styles:r.styles,next:p},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=l(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":c(i)&&(r+=f(a)+":"+u(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=l(e,t,i);switch(a){case"animation":case"animationName":r+=f(a)+":"+s+";";break;default:r+=a+"{"+s+"}"}}else for(var p=0;p<i.length;p++)c(i[p])&&(r+=f(a)+":"+u(a,i[p])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=p,a=n(e);return p=o,l(e,t,a)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var p,d=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var b=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";p=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=l(n,t,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=l(n,t,e[s]),o&&(a+=i[s]);d.lastIndex=0;for(var c,f="";null!==(c=d.exec(a));)f+="-"+c[1];return{name:r(a)+f,styles:a,next:p}}},2792:function(e,t,n){"use strict";n.d(t,{My:function(){return o},fp:function(){return r}});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var o=function(e,t,n){!function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)}(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},4179:function(e,t,n){"use strict";n.d(t,{Me:function(){return se},Z3:function(){return ie},ly:function(){return ae},rZ:function(){return re},sr:function(){return oe}});var r=n(2784),o=n.t(r,2);const a={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};function i(e){let t="";for(let n=1;n<e.length-1;n+=1)t+=`${e[n]} ${n/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function s(e){return"number"===typeof e.size?e.size:e.sizes[e.size]||e.size||e.sizes.md}function c(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){const e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}const n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:255&n,a:1}}(e):e.startsWith("rgb")?function(e){const[t,n,r,o]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:n,b:r,a:o||1}}(e):{r:0,g:0,b:0,a:1}}const f={fontStyles:function(e){return()=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:e.fontFamily||"sans-serif"})},themeColor:function(e){return(t,n,r=!0)=>{const o=e.colors[e.primaryColor];return t in e.colors?e.colors[t][n]:r?o[n]:t}},focusStyles:function(e){return()=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:"always"===e.focusRing||"auto"===e.focusRing?`2px solid ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`:"none"},"&:focus:not(:focus-visible)":{outline:"auto"===e.focusRing||"never"===e.focusRing?"none":void 0}})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${i(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${i(e)})`},smallerThan:function(e){return t=>`@media (max-width: ${s({size:t,sizes:e.breakpoints})}px)`},largerThan:function(e){return t=>`@media (min-width: ${s({size:t,sizes:e.breakpoints})+1}px)`},rgba:function(e,t){if("string"!==typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:n,g:r,b:o}=c(e);return`rgba(${n}, ${r}, ${o}, ${t})`},size:s,cover:function(e=0){return{position:"absolute",top:e,right:e,left:e,bottom:e}},darken:function(e,t){const{r:n,g:r,b:o,a:a}=c(e),i=1-t,s=e=>Math.round(e*i);return`rgba(${s(n)}, ${s(r)}, ${s(o)}, ${a})`},lighten:function(e,t){const{r:n,g:r,b:o,a:a}=c(e),i=e=>Math.round(e+(255-e)*t);return`rgba(${i(n)}, ${i(r)}, ${i(o)}, ${a})`},radius:function(e){return t=>{if("number"===typeof t)return t;const n="number"===typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[t]||t||n}}};var u=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function h(e){return t=((e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&y(e,n,t[n]);return e})({},e),n={fn:{fontStyles:f.fontStyles(e),themeColor:f.themeColor(e),focusStyles:f.focusStyles(e),largerThan:f.largerThan(e),smallerThan:f.smallerThan(e),radialGradient:f.radialGradient,linearGradient:f.linearGradient,rgba:f.rgba,size:f.size,cover:f.cover,lighten:f.lighten,darken:f.darken,radius:f.radius(e)}},l(t,p(n));var t,n}Object.keys(a);const g=h({dir:"ltr",focusRing:"auto",loader:"oval",dateFormat:"MMMM D, YYYY",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:a,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},fontSizes:{xs:12,sm:14,md:16,lg:18,xl:20},radius:{xs:2,sm:4,md:8,lg:16,xl:32},spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:34,lineHeight:1.3},h2:{fontSize:26,lineHeight:1.35},h3:{fontSize:22,lineHeight:1.4},h4:{fontSize:18,lineHeight:1.45},h5:{fontSize:16,lineHeight:1.5},h6:{fontSize:14,lineHeight:1.5}}},other:{},datesLocale:"en"});var v=n(5333),x=n(9017),w=(0,r.createContext)("undefined"!==typeof HTMLElement?(0,v.Z)({key:"css"}):null);w.Provider;var S=function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(w);return e(t,o,n)}))},k=(0,r.createContext)({});o.useInsertionEffect&&o.useInsertionEffect;n(3463);var $=n(2792),O=o.useInsertionEffect?o.useInsertionEffect:r.useLayoutEffect,C=S((function(e,t){var n=e.styles,o=(0,x.O)([n],void 0,(0,r.useContext)(k)),a=(0,r.useRef)();return O((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),a.current=[n,r],function(){n.flush()}}),[t]),O((function(){var e=a.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,$.My)(t,o.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",o,n,!1)}}),[t,o.name]),null}));var j=Object.defineProperty,z=Object.defineProperties,P=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&F(e,n,t[n]);if(A)for(var n of A(t))M.call(t,n)&&F(e,n,t[n]);return e};function _({theme:e}){return r.createElement(C,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},body:(t=N({},e.fn.fontStyles()),n={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSize:e.fontSizes.md},z(t,P(n)))}});var t,n}function T(e,t,n){Object.keys(t).forEach((r=>{e[`--mantine-${n}-${r}`]="number"===typeof t[r]?`${t[r]}px`:t[r]}))}function R({theme:e}){const t={"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-transition-timing-function":e.transitionTimingFunction,"--mantine-line-height":`${e.lineHeight}`,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":`${e.headings.fontWeight}`};T(t,e.shadows,"shadow"),T(t,e.fontSizes,"font-size"),T(t,e.radius,"radius"),T(t,e.spacing,"spacing"),Object.keys(e.colors).forEach((n=>{e.colors[n].forEach(((e,r)=>{t[`--mantine-color-${n}-${r}`]=e}))}));const n=e.headings.sizes;return Object.keys(n).forEach((e=>{t[`--mantine-${e}-font-size`]=`${n[e].fontSize}px`,t[`--mantine-${e}-line-height`]=`${n[e].lineHeight}`})),r.createElement(C,{styles:{":root":t}})}var I=Object.defineProperty,H=Object.defineProperties,W=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&B(e,n,t[n]);if(G)for(var n of G(t))L.call(t,n)&&B(e,n,t[n]);return e},Z=(e,t)=>H(e,W(t));function q(e,t){return h(function(e,t){return t?Object.keys(e).reduce(((n,r)=>{if("headings"===r&&t.headings){const r=t.headings.sizes?Object.keys(e.headings.sizes).reduce(((n,r)=>(n[r]=U(U({},e.headings.sizes[r]),t.headings.sizes[r]),n)),{}):e.headings.sizes;return Z(U({},n),{headings:Z(U(U({},e.headings),t.headings),{sizes:r})})}return n[r]="object"===typeof t[r]?U(U({},e[r]),t[r]):"number"===typeof t[r]?t[r]:t[r]||e[r],n}),{}):e}(e,t))}const Y={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}};function V(){return r.createElement(C,{styles:Y})}var X=Object.defineProperty,J=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&ee(e,n,t[n]);if(J)for(var n of J(t))Q.call(t,n)&&ee(e,n,t[n]);return e};const ne=(0,r.createContext)({theme:g,styles:{},classNames:{},emotionOptions:{key:"mantine",prepend:!0},defaultProps:{}});function re(){var e;return(null==(e=(0,r.useContext)(ne))?void 0:e.theme)||g}function oe(e){const t=(0,r.useContext)(ne);return{styles:t.styles[e]||{},classNames:t.classNames[e]||{}}}function ae(){var e;return(null==(e=(0,r.useContext)(ne))?void 0:e.emotionOptions)||{key:"mantine",prepend:!0}}function ie(e,t,n){var o,a;const i=(null==(a=null==(o=(0,r.useContext)(ne))?void 0:o.defaultProps)?void 0:a[e])||{};return te(te(te({},t),i),function(e){return Object.keys(e).reduce(((t,n)=>(void 0!==e[n]&&(t[n]=e[n]),t)),{})}(n))}function se({theme:e,styles:t={},classNames:n={},defaultProps:o={},emotionOptions:a,withNormalizeCSS:i=!1,withGlobalStyles:s=!1,withCSSVariables:c=!1,inherit:f=!1,children:u}){const l=(0,r.useContext)(ne),p={themeOverride:f?te(te({},l.theme),e):e,emotionOptions:f?te(te({},l.emotionOptions),a):a,styles:f?te(te({},l.styles),t):t,classNames:f?te(te({},l.classNames),n):n,defaultProps:f?te(te({},l.defaultProps),o):o},d=q(g,p.themeOverride);return r.createElement(ne.Provider,{value:{theme:d,styles:p.styles,classNames:p.classNames,emotionOptions:p.emotionOptions,defaultProps:p.defaultProps}},i&&r.createElement(V,null),s&&r.createElement(_,{theme:d}),c&&r.createElement(R,{theme:d}),u)}se.displayName="@mantine/core/MantineProvider"},3463:function(e,t,n){"use strict";var r=n(3887),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?i:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var f=Object.defineProperty,u=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(b){var o=d(n);o&&o!==b&&e(t,o,r)}var i=u(n);l&&(i=i.concat(l(n)));for(var s=c(t),m=c(n),y=0;y<i.length;++y){var h=i[y];if(!a[h]&&(!r||!r[h])&&(!m||!m[h])&&(!s||!s[h])){var g=p(n,h);try{f(t,h,g)}catch(v){}}}}return t}},3459:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case l:case a:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case f:case p:case y:case m:case c:return e;default:return t}}case o:return t}}}function S(e){return w(e)===l}t.AsyncMode=u,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return S(e)||w(e)===u},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===f},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===s||e===i||e===d||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===f||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===h)},t.typeOf=w},3887:function(e,t,n){"use strict";e.exports=n(3459)},3394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3430)}])},3430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(2322),o=n(7729),a=n(4179),i={fontFamily:"Noto Sans, sans-serif",colorScheme:"light",headings:{fontFamily:"Noto Sans, sans-serif"},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},colors:{primary:["#1877f2","#f0f2f5","#ffffff","#42b72a","#f0f2f5","#f6f2f5","#f0fqf5","#f0f9f5","#f012f5","#f092f5"]},other:{appShellDefaultStyles:{maxWidth:"1800px",minHeight:"100vh",margin:"0px auto"}}},s=n(2784);n(5129);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.Component,n=e.pageProps,c=l(s.useState(!1),2),f=c[0],p=c[1];return s.useEffect((function(){p(!0)}),[]),f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Welcome to fbclient!"})}),(0,r.jsx)(a.Me,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:i,children:(0,r.jsx)(t,u({},n))})]}):null}},5129:function(){},7729:function(e,t,n){e.exports=n(7016)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(3394),t(2203)}));var n=e.O();_N_E=n}]);