(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{7942:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var s,a=(s=r(7294))&&s.__esModule?s:{default:s},o=r(4957),i=r(9898),u=r(639);var l={};function c(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,s=i.useRouter(),f=a.default.useMemo((function(){var t=o.resolveHref(s,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?o.resolveHref(s,e.as):i||a}}),[s,e.href,e.as]),d=f.href,g=f.as,m=e.children,h=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var p=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,_=u.useIntersection({rootMargin:"200px"}),w=n(_,2),O=w[0],x=w[1],j=a.default.useCallback((function(e){O(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,O]);a.default.useEffect((function(){var e=x&&r&&o.isLocalURL(d),t="undefined"!==typeof y?y:s&&s.locale,n=l[d+"%"+g+(t?"%"+t:"")];e&&!n&&c(s,d,g,{locale:t})}),[g,d,x,y,r,s]);var V={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),t[s?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,s,d,g,h,v,b,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(d)&&c(s,d,g,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:s&&s.locale,S=s&&s.isLocaleDomain&&o.getDomainLocale(g,k,s&&s.locales,s&&s.domainLocales);V.href=S||o.addBasePath(o.addLocale(g,k,s&&s.defaultLocale))}return a.default.cloneElement(t,V)};t.default=f},639:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!o,c=s.useRef(),f=s.useState(!1),d=n(f,2),g=d[0],m=d[1],h=s.useState(t?t.current:null),v=n(h,2),b=v[0],y=v[1],p=s.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||g||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),u.push(r));if(t)return t;var s=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:s}),t}(r),s=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(s);var t=u.findIndex((function(e){return e.root===s.root&&e.margin===s.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:b,rootMargin:r}))}),[l,b,r,g]);return s.useEffect((function(){if(!o&&!g){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[g]),s.useEffect((function(){t&&y(t.current)}),[t]),[p,g]};var s=r(7294),a=r(6286),o="undefined"!==typeof IntersectionObserver;var i=new Map,u=[]},1664:function(e,t,r){e.exports=r(7942)},1163:function(e,t,r){e.exports=r(9898)},5907:function(e,t,r){"use strict";r.d(t,{gW:function(){return D}});var n=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(s[r]=e[r]);return s}function o(e){var t=(0,n.useRef)(e),r=(0,n.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,r.current}var i=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},u=function(e){return"touches"in e},l=function(e){return e&&e.ownerDocument.defaultView||self},c=function(e,t,r){var n=e.getBoundingClientRect(),s=u(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:i((s.pageX-(n.left+l(e).pageXOffset))/n.width),top:i((s.pageY-(n.top+l(e).pageYOffset))/n.height)}},f=function(e){!u(e)&&e.preventDefault()},d=n.memo((function(e){var t=e.onMove,r=e.onKey,i=a(e,["onMove","onKey"]),d=(0,n.useRef)(null),g=o(t),m=o(r),h=(0,n.useRef)(null),v=(0,n.useRef)(!1),b=(0,n.useMemo)((function(){var e=function(e){f(e),(u(e)?e.touches.length>0:e.buttons>0)&&d.current?g(c(d.current,e,h.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=v.current,s=l(d.current),a=r?s.addEventListener:s.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=d.current;if(n&&(f(t),!function(e,t){return t&&!u(e)}(t,v.current)&&n)){if(u(t)){v.current=!0;var s=t.changedTouches||[];s.length&&(h.current=s[0].identifier)}n.focus(),g(c(n,t,h.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),m({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]}),[m,g]),y=b[0],p=b[1],_=b[2];return(0,n.useEffect)((function(){return _}),[_]),n.createElement("div",s({},i,{onTouchStart:y,onMouseDown:y,className:"react-colorful__interactive",ref:d,onKeyDown:p,tabIndex:0,role:"slider"}))})),g=function(e){return e.filter(Boolean).join(" ")},m=function(e){var t=e.color,r=e.left,s=e.top,a=void 0===s?.5:s,o=g(["react-colorful__pointer",e.className]);return n.createElement("div",{className:o,style:{top:100*a+"%",left:100*r+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},h=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},v=(Math.PI,function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}}),b=function(e){var t=e.s,r=e.v,n=e.a,s=(200-t)*r/100;return{h:h(e.h),s:h(s>0&&s<200?t*r/100/(s<=100?s:200-s)*100:0),l:h(s/2),a:h(n,2)}},y=function(e){var t=b(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},p=function(e){var t=e.h,r=e.s,n=e.v,s=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),o=n*(1-r),i=n*(1-(t-a)*r),u=n*(1-(1-t+a)*r),l=a%6;return{r:h(255*[n,i,o,o,u,n][l]),g:h(255*[u,n,n,i,o,o][l]),b:h(255*[o,o,u,n,n,i][l]),a:h(s,2)}},_=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},w=function(e){var t=e.r,r=e.g,n=e.b,s=e.a,a=Math.max(t,r,n),o=a-Math.min(t,r,n),i=o?a===t?(r-n)/o:a===r?2+(n-t)/o:4+(t-r)/o:0;return{h:h(60*(i<0?i+6:i)),s:h(a?o/a*100:0),v:h(a/255*100),a:s}},O=n.memo((function(e){var t=e.hue,r=e.onChange,s=g(["react-colorful__hue",e.className]);return n.createElement("div",{className:s},n.createElement(d,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":h(t)},n.createElement(m,{className:"react-colorful__hue-pointer",left:t/360,color:y({h:t,s:100,v:100,a:1})})))})),x=n.memo((function(e){var t=e.hsva,r=e.onChange,s={backgroundColor:y({h:t.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:s},n.createElement(d,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+h(t.s)+"%, Brightness "+h(t.v)+"%"},n.createElement(m,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:y(t)})))})),j=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0};function V(e,t,r){var s=o(r),a=(0,n.useState)((function(){return e.toHsva(t)})),i=a[0],u=a[1],l=(0,n.useRef)({color:t,hsva:i});(0,n.useEffect)((function(){if(!e.equal(t,l.current.color)){var r=e.toHsva(t);l.current={hsva:r,color:t},u(r)}}),[t,e]),(0,n.useEffect)((function(){var t;j(i,l.current.hsva)||e.equal(t=e.fromHsva(i),l.current.color)||(l.current={hsva:i,color:t},s(t))}),[i,e,s]);var c=(0,n.useCallback)((function(e){u((function(t){return Object.assign({},t,e)}))}),[]);return[i,c]}var k,S="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,A=new Map,F=function(e){S((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!A.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',A.set(t,n);var s=k||r.nc;s&&n.setAttribute("nonce",s),t.head.appendChild(n)}}),[])},E=function(e){var t=e.className,r=e.colorModel,o=e.color,i=void 0===o?r.defaultColor:o,u=e.onChange,l=a(e,["className","colorModel","color","onChange"]),c=(0,n.useRef)(null);F(c);var f=V(r,i,u),d=f[0],m=f[1],h=g(["react-colorful",t]);return n.createElement("div",s({},l,{ref:c,className:h}),n.createElement(x,{hsva:d,onChange:m}),n.createElement(O,{hue:d.h,onChange:m,className:"react-colorful__last-control"}))},C={defaultColor:"000",toHsva:function(e){return w(v(e))},fromHsva:function(e){return r=(t=p(e)).g,n=t.b,"#"+_(t.r)+_(r)+_(n);var t,r,n},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||j(v(e),v(t))}},D=function(e){return n.createElement(E,s({},e,{colorModel:C}))}},4730:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}r.d(t,{Z:function(){return n}})},7536:function(e,t,r){"use strict";r.d(t,{Qr:function(){return K},RV:function(){return D},cI:function(){return Fe}});var n=r(7294),s=e=>"checkbox"===e.type,a=e=>e instanceof Date,o=e=>null==e;const i=e=>"object"===typeof e;var u=e=>!o(e)&&!Array.isArray(e)&&i(e)&&!a(e),l=e=>u(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),f=e=>e.filter(Boolean),d=e=>void 0===e,g=(e,t,r)=>{if(!t||!u(e))return r;const n=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>o(e)?e:e[t]),e);return d(n)||n===e?d(e[t])?r:e[t]:n};const m="blur",h="focusout",v="change",b="onBlur",y="onChange",p="onSubmit",_="onTouched",w="all",O="max",x="min",j="maxLength",V="minLength",k="pattern",S="required",A="validate";var F=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const E=n.createContext(null),C=()=>n.useContext(E),D=e=>n.createElement(E.Provider,{value:F(e,"children")},e.children);var M=(e,t,r,n=!0)=>{const s={};for(const a in e)Object.defineProperty(s,a,{get:()=>{const s=a;return t[s]!==w&&(t[s]=!n||w),r&&(r[s]=!0),e[s]}});return s},L=e=>u(e)&&!Object.keys(e).length,N=(e,t,r)=>{const n=F(e,"name");return L(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!r||w)))},R=e=>Array.isArray(e)?e:[e],U=(e,t,r)=>r&&t?e===t:!e||!t||e===t||R(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function I(e){const t=n.useRef(e);t.current=e,n.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var T=e=>"string"===typeof e,B=(e,t,r,n)=>{const s=Array.isArray(e);return T(e)?(n&&t.watch.add(e),g(r,e)):s?e.map((e=>(n&&t.watch.add(e),g(r,e)))):(n&&(t.watchAll=!0),r)},H=e=>"function"===typeof e,q=e=>{for(const t in e)if(H(e[t]))return!0;return!1};function P(e){const t=C(),{name:r,control:s=t.control,shouldUnregister:a}=e,o=c(s._names.array,r),i=function(e){const t=C(),{control:r=t.control,name:s,defaultValue:a,disabled:o,exact:i}=e||{},l=n.useRef(s);l.current=s;const c=n.useCallback((e=>{if(U(l.current,e.name,i)){const t=B(l.current,r._names,e.values||r._formValues);g(d(l.current)||u(t)&&!q(t)?Object.assign({},t):Array.isArray(t)?[...t]:d(t)?a:t)}}),[r,i,a]);I({disabled:o,subject:r._subjects.watch,callback:c});const[f,g]=n.useState(d(a)?r._getWatch(s):a);return n.useEffect((()=>{r._removeUnmounted()})),f}({control:s,name:r,defaultValue:g(s._formValues,r,g(s._defaultValues,r,e.defaultValue)),exact:!0}),f=function(e){const t=C(),{control:r=t.control,disabled:s,name:a,exact:o}=e||{},[i,u]=n.useState(r._formState),l=n.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=n.useRef(a),f=n.useRef(!0);return c.current=a,I({disabled:s,callback:n.useCallback((e=>f.current&&U(c.current,e.name,o)&&N(e,l.current)&&u(Object.assign(Object.assign({},r._formState),e))),[r,o]),subject:r._subjects.state}),n.useEffect((()=>()=>{f.current=!1}),[]),M(i,r._proxyFormState,l.current,!1)}({control:s,name:r}),h=n.useRef(s.register(r,Object.assign(Object.assign({},e.rules),{value:i})));return n.useEffect((()=>{const e=(e,t)=>{const r=g(s._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=s._options.shouldUnregister||a;(o?t&&!s._stateFlags.action:t)?s.unregister(r):e(r,!1)}}),[r,s,o,a]),{field:{name:r,value:i,onChange:n.useCallback((e=>{h.current.onChange({target:{value:l(e),name:r},type:v})}),[r]),onBlur:n.useCallback((()=>{h.current.onBlur({target:{value:g(s._formValues,r),name:r},type:m})}),[r,s]),ref:n.useCallback((e=>{const t=g(s._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}),[r,s._fields])},formState:f,fieldState:s.getFieldState(r,f)}}const K=e=>e.render(P(e));var z=(e,t,r,n,s)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[n]:s||!0})}):{},W=e=>/^\w*$/.test(e),$=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function X(e,t,r){let n=-1;const s=W(t)?[t]:$(t),a=s.length,o=a-1;for(;++n<a;){const t=s[n];let a=r;if(n!==o){const r=e[t];a=u(r)||Array.isArray(r)?r:isNaN(+s[n+1])?{}:[]}e[t]=a,e=e[t]}return e}const Y=(e,t,r)=>{for(const n of r||Object.keys(e)){const r=g(e,n);if(r){const e=r._f,n=F(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&d(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(n)&&Y(n,t)}}};var Q=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function Z(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(H(e[r])){t=e;break}t[r]=Z(e[r])}}return t}function G(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var J=e=>o(e)||!i(e);function ee(e,t){if(J(e)||J(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){const r=e[s];if(!n.includes(s))return!1;if("ref"!==s){const e=t[s];if(a(r)&&a(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ee(r,e):r!==e)return!1}}return!0}var te=e=>({isOnSubmit:!e||e===p,isOnBlur:e===b,isOnChange:e===y,isOnAll:e===w,isOnTouch:e===_}),re=e=>"boolean"===typeof e,ne=e=>"file"===e.type,se=e=>e instanceof HTMLElement,ae=e=>"select-multiple"===e.type,oe=e=>"radio"===e.type,ie="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document,ue=e=>se(e)&&e.isConnected;function le(e,t){const r=W(t)?[t]:$(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=d(e)?n++:e[t[n++]];return e}(e,r),s=r[r.length-1];let a;n&&delete n[s];for(let o=0;o<r.slice(0,-1).length;o++){let t,n=-1;const s=r.slice(0,-(o+1)),i=s.length-1;for(o>0&&(a=e);++n<s.length;){const r=s[n];t=t?t[r]:e[r],i===n&&(u(t)&&L(t)||Array.isArray(t)&&!t.filter((e=>!d(e))).length)&&(a?delete a[r]:delete e[r]),a=t}}return e}function ce(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const n in e)Array.isArray(e[n])||u(e[n])&&!q(e[n])?(t[n]=Array.isArray(e[n])?[]:{},ce(e[n],t[n])):o(e[n])||(t[n]=!0);return t}function fe(e,t,r){const n=Array.isArray(e);if(u(e)||n)for(const s in e)Array.isArray(e[s])||u(e[s])&&!q(e[s])?d(t)||J(r[s])?r[s]=Array.isArray(e[s])?ce(e[s],[]):Object.assign({},ce(e[s])):fe(e[s],o(t)?{}:t[s],r[s]):r[s]=!ee(e[s],t[s]);return r}var de=(e,t)=>fe(e,t,ce(t));const ge={value:!1,isValid:!1},me={value:!0,isValid:!0};var he=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?me:{value:e[0].value,isValid:!0}:me:ge}return ge},ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>d(e)?e:t?""===e?NaN:+e:r&&T(e)?new Date(e):n?n(e):e;const be={isValid:!1,value:null};var ye=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),be):be;function pe(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return ne(t)?t.files:oe(t)?ye(e.refs).value:ae(t)?[...t.selectedOptions].map((({value:e})=>e)):s(t)?he(e.refs).value:ve(d(t.value)?e.ref.value:t.value,e)}var _e=e=>e instanceof RegExp,we=e=>d(e)?void 0:_e(e)?e.source:u(e)?_e(e.value)?e.value.source:e.value:e;function Oe(e,t,r){const n=g(e,r);if(n||W(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const n=s.join("."),a=g(t,n),o=g(e,n);if(a&&!Array.isArray(a)&&r!==n)return{name:r};if(o&&o.type)return{name:n,error:o};s.pop()}return{name:r}}var xe=e=>T(e)||n.isValidElement(e);function je(e,t,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||re(e)&&!e)return{type:r,message:xe(e)?e:"",ref:t}}var Ve=e=>u(e)&&!_e(e)?e:{value:e,message:""},ke=async(e,t,r,n)=>{const{ref:a,refs:i,required:l,maxLength:c,minLength:f,min:d,max:g,pattern:m,validate:h,name:v,valueAsNumber:b,mount:y,disabled:p}=e._f;if(!y||p)return{};const _=i?i[0]:a,w=e=>{n&&_.reportValidity&&(_.setCustomValidity(re(e)?"":e||" "),_.reportValidity())},F={},E=oe(a),C=s(a),D=E||C,M=(b||ne(a))&&!a.value||""===t||Array.isArray(t)&&!t.length,N=z.bind(null,v,r,F),R=(e,t,r,n=j,s=V)=>{const o=e?t:r;F[v]=Object.assign({type:e?n:s,message:o,ref:a},N(e?n:s,o))};if(l&&(!D&&(M||o(t))||re(t)&&!t||C&&!he(i).isValid||E&&!ye(i).isValid)){const{value:e,message:t}=xe(l)?{value:!!l,message:l}:Ve(l);if(e&&(F[v]=Object.assign({type:S,message:t,ref:_},N(S,t)),!r))return w(t),F}if(!M&&(!o(d)||!o(g))){let e,n;const s=Ve(g),i=Ve(d);if(isNaN(t)){const r=a.valueAsDate||new Date(t);T(s.value)&&(e=r>new Date(s.value)),T(i.value)&&(n=r<new Date(i.value))}else{const r=a.valueAsNumber||+t;o(s.value)||(e=r>s.value),o(i.value)||(n=r<i.value)}if((e||n)&&(R(!!e,s.message,i.message,O,x),!r))return w(F[v].message),F}if((c||f)&&!M&&T(t)){const e=Ve(c),n=Ve(f),s=!o(e.value)&&t.length>e.value,a=!o(n.value)&&t.length<n.value;if((s||a)&&(R(s,e.message,n.message),!r))return w(F[v].message),F}if(m&&!M&&T(t)){const{value:e,message:n}=Ve(m);if(_e(e)&&!t.match(e)&&(F[v]=Object.assign({type:k,message:n,ref:a},N(k,n)),!r))return w(n),F}if(h)if(H(h)){const e=je(await h(t),_);if(e&&(F[v]=Object.assign(Object.assign({},e),N(A,e.message)),!r))return w(e.message),F}else if(u(h)){let e={};for(const n in h){if(!L(e)&&!r)break;const s=je(await h[n](t),_,n);s&&(e=Object.assign(Object.assign({},s),N(n,s.message)),w(s.message),r&&(F[v]=e))}if(!L(e)&&(F[v]=Object.assign({ref:_},e),!r))return F}return w(!0),F};const Se={mode:p,reValidateMode:y,shouldFocusError:!0};function Ae(e={}){let t,r=Object.assign(Object.assign({},Se),e),n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},i={},u=r.defaultValues||{},v=r.shouldUnregister?{}:Z(u),b={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,_={};const O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:G(),array:G(),state:G()},j=te(r.mode),V=te(r.reValidateMode),k=r.criteriaMode===w,S=async e=>{let t=!1;return O.isValid&&(t=r.resolver?L((await M()).errors):await N(i,!0),e||t===n.isValid||(n.isValid=t,x.state.next({isValid:t}))),t},A=(e,t)=>(X(n.errors,e,t),x.state.next({errors:n.errors})),E=(e,t,r,n)=>{const s=g(i,e);if(s){const a=g(v,e,d(r)?g(u,e):r);d(a)||n&&n.defaultChecked||t?X(v,e,t?a:pe(s._f)):q(e,a),b.mount&&S()}},C=(e,t,r,s,a)=>{let o=!1;const i={name:e},l=g(n.touchedFields,e);if(O.isDirty){const e=n.isDirty;n.isDirty=i.isDirty=U(),o=e!==i.isDirty}if(O.dirtyFields&&(!r||s)){const r=g(n.dirtyFields,e);ee(g(u,e),t)?le(n.dirtyFields,e):X(n.dirtyFields,e,!0),i.dirtyFields=n.dirtyFields,o=o||r!==g(n.dirtyFields,e)}return r&&!l&&(X(n.touchedFields,e,r),i.touchedFields=n.touchedFields,o=o||O.touchedFields&&l!==r),o&&a&&x.state.next(i),o?i:{}},D=async(r,s,a,o,i)=>{const u=g(n.errors,s),l=O.isValid&&n.isValid!==a;var c,f;if(e.delayError&&o?(t=t||(c=A,f=e.delayError,(...e)=>{clearTimeout(p),p=window.setTimeout((()=>c(...e)),f)}),t(s,o)):(clearTimeout(p),o?X(n.errors,s,o):le(n.errors,s)),((o?!ee(u,o):u)||!L(i)||l)&&!r){const e=Object.assign(Object.assign(Object.assign({},i),l?{isValid:a}:{}),{errors:n.errors,name:s});n=Object.assign(Object.assign({},n),e),x.state.next(e)}_[s]--,O.isValidating&&!Object.values(_).some((e=>e))&&(x.state.next({isValidating:!1}),_={})},M=async e=>r.resolver?await r.resolver(Object.assign({},v),r.context,((e,t,r,n)=>{const s={};for(const a of e){const e=g(t,a);e&&X(s,a,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}})(e||y.mount,i,r.criteriaMode,r.shouldUseNativeValidation)):{},N=async(e,t,s={valid:!0})=>{for(const a in e){const o=e[a];if(o){const e=o._f,a=F(o,"_f");if(e){const a=await ke(o,g(v,e.name),k,r.shouldUseNativeValidation);if(a[e.name]&&(s.valid=!1,t))break;t||(a[e.name]?X(n.errors,e.name,a[e.name]):le(n.errors,e.name))}a&&await N(a,t,s)}}return s.valid},U=(e,t)=>(e&&t&&X(v,e,t),!ee($(),u)),I=(e,t,r)=>{const n=Object.assign({},b.mount?v:d(t)?u:T(e)?{[e]:t}:t);return B(e,y,n,r)},q=(e,t,r={})=>{const n=g(i,e);let a=t;if(n){const r=n._f;r&&(!r.disabled&&X(v,e,ve(t,r)),a=ie&&se(r.ref)&&o(t)?"":t,ae(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value)):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):ne(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||x.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&W(e)},P=(e,t,r)=>{for(const n in t){const s=t[n],o=`${e}.${n}`,u=g(i,o);!y.array.has(e)&&J(s)&&(!u||u._f)||a(s)?q(o,s,r):P(o,s,r)}},K=(e,t,r={})=>{const s=g(i,e),a=y.array.has(e),l=Z(t);X(v,e,l),a?(x.array.next({name:e,values:v}),(O.isDirty||O.dirtyFields)&&r.shouldDirty&&(n.dirtyFields=de(u,v),x.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:U(e,l)}))):!s||s._f||o(l)?q(e,l,r):P(e,l,r),Q(e,y)&&x.state.next({}),x.watch.next({name:e})},z=async e=>{const t=e.target;let s=t.name;const a=g(i,s);if(a){let u,c;const f=t.type?pe(a._f):l(e),d=e.type===m||e.type===h,b=!((o=a._f).mount&&(o.required||o.min||o.max||o.maxLength||o.minLength||o.pattern||o.validate))&&!r.resolver&&!g(n.errors,s)&&!a._f.deps||((e,t,r,n,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:!(r?n.isOnChange:s.isOnChange)||e))(d,g(n.touchedFields,s),n.isSubmitted,V,j),p=Q(s,y,d);X(v,s,f),d?a._f.onBlur&&a._f.onBlur(e):a._f.onChange&&a._f.onChange(e);const w=C(s,f,d,!1),O=!L(w)||p;if(!d&&x.watch.next({name:s,type:e.type}),b)return O&&x.state.next(Object.assign({name:s},p?{}:w));if(!d&&p&&x.state.next({}),_[s]=(_[s],1),x.state.next({isValidating:!0}),r.resolver){const{errors:e}=await M([s]),t=Oe(n.errors,i,s),r=Oe(e,i,t.name||s);u=r.error,s=r.name,c=L(e)}else u=(await ke(a,g(v,s),k,r.shouldUseNativeValidation))[s],c=await S(!0);a._f.deps&&W(a._f.deps),D(!1,s,c,u,w)}var o},W=async(e,t={})=>{let s,a;const o=R(e);if(x.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await M();if(e)for(const r of e){const e=g(t,r);e?X(n.errors,r,e):le(n.errors,r)}else n.errors=t;return t})(d(e)?e:o);s=L(t),a=e?!o.some((e=>g(t,e))):s}else e?(a=(await Promise.all(o.map((async e=>{const t=g(i,e);return await N(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||n.isValid)&&S()):a=s=await N(i);return x.state.next(Object.assign(Object.assign(Object.assign({},!T(e)||O.isValid&&s!==n.isValid?{}:{name:e}),r.resolver?{isValid:s}:{}),{errors:n.errors,isValidating:!1})),t.shouldFocus&&!a&&Y(i,(e=>g(n.errors,e)),e?o:y.mount),a},$=e=>{const t=Object.assign(Object.assign({},u),b.mount?v:{});return d(e)?t:T(e)?g(t,e):e.map((e=>g(t,e)))},ce=(e,t)=>({invalid:!!g((t||n).errors,e),isDirty:!!g((t||n).dirtyFields,e),isTouched:!!g((t||n).touchedFields,e),error:g((t||n).errors,e)}),fe=(e,t={})=>{for(const s of e?R(e):y.mount)y.mount.delete(s),y.array.delete(s),g(i,s)&&(t.keepValue||(le(i,s),le(v,s)),!t.keepError&&le(n.errors,s),!t.keepDirty&&le(n.dirtyFields,s),!t.keepTouched&&le(n.touchedFields,s),!r.shouldUnregister&&!t.keepDefaultValue&&le(u,s));x.watch.next({}),x.state.next(Object.assign(Object.assign({},n),t.keepDirty?{isDirty:U()}:{})),!t.keepIsValid&&S()},ge=(e,t={})=>{let n=g(i,e);const a=re(t.disabled);return X(i,e,{_f:Object.assign(Object.assign(Object.assign({},n&&n._f?n._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),y.mount.add(e),n?a&&X(v,e,t.disabled?void 0:g(v,e,pe(n._f))):E(e,!0,t.value),Object.assign(Object.assign(Object.assign({},a?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:we(t.min),max:we(t.max),minLength:we(t.minLength),maxLength:we(t.maxLength),pattern:we(t.pattern)}:{}),{name:e,onChange:z,onBlur:z,ref:a=>{if(a){ge(e,t),n=g(i,e);const r=d(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,o=(e=>oe(e)||s(e))(r),u=n._f.refs||[];if(o?u.find((e=>e===r)):r===n._f.ref)return;X(i,e,{_f:Object.assign(Object.assign({},n._f),o?{refs:[...u.filter(ue),r],ref:{type:r.type,name:e}}:{ref:r})}),E(e,!1,void 0,r)}else n=g(i,e,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(y.array,e)||!b.action)&&y.unMount.add(e)}})};return{control:{register:ge,unregister:fe,getFieldState:ce,_executeSchema:M,_getWatch:I,_getDirty:U,_updateValid:S,_removeUnmounted:()=>{for(const e of y.unMount){const t=g(i,e);t&&(t._f.refs?t._f.refs.every((e=>!ue(e))):!ue(t._f.ref))&&fe(e)}y.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,o=!0)=>{if(s&&r){if(b.action=!0,o&&Array.isArray(g(i,e))){const t=r(g(i,e),s.argA,s.argB);a&&X(i,e,t)}if(O.errors&&o&&Array.isArray(g(n.errors,e))){const t=r(g(n.errors,e),s.argA,s.argB);a&&X(n.errors,e,t),((e,t)=>{!f(g(e,t)).length&&le(e,t)})(n.errors,e)}if(O.touchedFields&&o&&Array.isArray(g(n.touchedFields,e))){const t=r(g(n.touchedFields,e),s.argA,s.argB);a&&X(n.touchedFields,e,t)}O.dirtyFields&&(n.dirtyFields=de(u,v)),x.state.next({isDirty:U(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else X(v,e,t)},_getFieldArray:t=>f(g(b.mount?v:u,t,e.shouldUnregister?g(u,t,[]):[])),_subjects:x,_proxyFormState:O,get _fields(){return i},get _formValues(){return v},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return u},get _names(){return y},set _names(e){y=e},get _formState(){return n},set _formState(e){n=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:W,register:ge,handleSubmit:(e,t)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let a=!0,o=Z(v);x.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await M();n.errors=e,o=t}else await N(i);L(n.errors)&&Object.keys(n.errors).every((e=>g(o,e)))?(x.state.next({errors:{},isSubmitting:!0}),await e(o,s)):(t&&await t(Object.assign({},n.errors),s),r.shouldFocusError&&Y(i,(e=>g(n.errors,e)),y.mount))}catch(u){throw a=!1,u}finally{n.isSubmitted=!0,x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:L(n.errors)&&a,submitCount:n.submitCount+1,errors:n.errors})}},watch:(e,t)=>H(e)?x.watch.subscribe({next:r=>e(I(void 0,t),r)}):I(e,t,!0),setValue:K,getValues:$,reset:(t,r={})=>{const s=t||u,a=Z(s),o=t&&!L(t)?a:u;if(r.keepDefaultValues||(u=s),!r.keepValues){if(ie&&d(t))for(const e of y.mount){const t=g(i,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{se(e)&&e.closest("form").reset();break}catch(l){}}}v=e.shouldUnregister?r.keepDefaultValues?Z(u):{}:a,i={},x.array.next({values:o}),x.watch.next({values:o})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount=!O.isValid||!!r.keepIsValid,b.watch=!!e.shouldUnregister,x.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty?n.isDirty:!!r.keepDefaultValues&&!ee(t,u),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirty?n.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==g(u,t)})),{}):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{g(i,e)&&(d(t.defaultValue)?K(e,g(u,e)):(K(e,t.defaultValue),X(u,e,t.defaultValue)),t.keepTouched||le(n.touchedFields,e),t.keepDirty||(le(n.dirtyFields,e),n.isDirty=t.defaultValue?U(e,g(u,e)):U()),t.keepError||(le(n.errors,e),O.isValid&&S()),x.state.next(Object.assign({},n)))},clearErrors:e=>{e?R(e).forEach((e=>le(n.errors,e))):n.errors={},x.state.next({errors:n.errors})},unregister:fe,setError:(e,t,r)=>{const s=(g(i,e,{_f:{}})._f||{}).ref;X(n.errors,e,Object.assign(Object.assign({},t),{ref:s})),x.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=g(i,e)._f,n=r.refs?r.refs[0]:r.ref;t.shouldSelect?n.select():n.focus()},getFieldState:ce}}function Fe(e={}){const t=n.useRef(),[r,s]=n.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Ae(e)),{formState:r});const a=t.current.control,o=n.useCallback((e=>{N(e,a._proxyFormState,!0)&&(a._formState=Object.assign(Object.assign({},a._formState),e),s(Object.assign({},a._formState)))}),[a]);return I({subject:a._subjects.state,callback:o}),n.useEffect((()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()})),t.current.formState=M(r,a._proxyFormState),t.current}}}]);