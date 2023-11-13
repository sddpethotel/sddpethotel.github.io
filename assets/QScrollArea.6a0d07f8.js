import{u as me,a as be}from"./use-dark.94e400c1.js";import{g as x,s as V,Q as N}from"./touch.5b285bde.js";import{c as ee,e as pe,d as ze}from"./QBtn.9996c0f7.js";import{g as Se,a as ge,b as ye,s as w,c as R}from"./scroll.bf116c29.js";import{q as j,y as Ce,s as te,K as le,D as oe,Y as qe,J as C,L as _e,M as P,N as A,X as K,W as O,O as F,Q as D,A as Me,n as z,m,a1 as Ee,H as Pe,I as Te,t as g,z as I}from"./index.dda7049c.js";import{c as we}from"./selection.ebc1c08a.js";import{b as T}from"./format.2bc25e5f.js";const{passive:U}=qe,Ae=["both","horizontal","vertical"];var Oe=ee({name:"QScrollObserver",props:{axis:{type:String,validator:a=>Ae.includes(a),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(a,{emit:s}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let d=null,e,l;j(()=>a.scrollTarget,()=>{c(),t()});function r(){d!==null&&d();const b=Math.max(0,ge(e)),h=ye(e),f={top:b-i.position.top,left:h-i.position.left};if(a.axis==="vertical"&&f.top===0||a.axis==="horizontal"&&f.left===0)return;const S=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";i.position={top:b,left:h},i.directionChanged=i.direction!==S,i.delta=f,i.directionChanged===!0&&(i.direction=S,i.inflectionPoint=i.position),s("scroll",{...i})}function t(){e=Se(l,a.scrollTarget),e.addEventListener("scroll",u,U),u(!0)}function c(){e!==void 0&&(e.removeEventListener("scroll",u,U),e=void 0)}function u(b){if(b===!0||a.debounce===0||a.debounce==="0")r();else if(d===null){const[h,f]=a.debounce?[setTimeout(r,a.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];d=()=>{f(h),d=null}}}const{proxy:p}=oe();return j(()=>p.$q.lang.rtl,r),Ce(()=>{l=p.$el.parentNode,t()}),te(()=>{d!==null&&d(),c()}),Object.assign(p,{trigger:u,getPosition:()=>i}),le}});function H(a,s,i){const d=F(a);let e,l=d.left-s.event.x,r=d.top-s.event.y,t=Math.abs(l),c=Math.abs(r);const u=s.direction;u.horizontal===!0&&u.vertical!==!0?e=l<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",t>c&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.down===!0&&r>0?(e="down",t>c&&(u.left===!0&&l<0?e="left":u.right===!0&&l>0&&(e="right"))):u.left===!0&&l<0?(e="left",t<c&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&l>0&&(e="right",t<c&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let p=!1;if(e===void 0&&i===!1){if(s.event.isFirst===!0||s.event.lastDir===void 0)return{};e=s.event.lastDir,p=!0,e==="left"||e==="right"?(d.left-=l,t=0,l=0):(d.top-=r,c=0,r=0)}return{synthetic:p,payload:{evt:a,touch:s.event.mouse!==!0,mouse:s.event.mouse===!0,position:d,direction:e,isFirst:s.event.isFirst,isFinal:i===!0,duration:Date.now()-s.event.time,distance:{x:t,y:c},offset:{x:l,y:r},delta:{x:d.left-s.event.lastX,y:d.top-s.event.lastY}}}}let De=0;var J=pe({name:"touch-pan",beforeMount(a,{value:s,modifiers:i}){if(i.mouse!==!0&&C.has.touch!==!0)return;function d(l,r){i.mouse===!0&&r===!0?Me(l):(i.stop===!0&&O(l),i.prevent===!0&&K(l))}const e={uid:"qvtp_"+De++,handler:s,modifiers:i,direction:x(i),noop:le,mouseStart(l){V(l,e)&&_e(l)&&(P(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(V(l,e)){const r=l.target;P(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,r){if(C.is.firefox===!0&&A(a,!0),e.lastEvt=l,r===!0||i.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&K(u),l.cancelBubble===!0&&O(u),Object.assign(u,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:u}}O(l)}const{left:t,top:c}=F(l);e.event={x:t,y:c,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:c}},move(l){if(e.event===void 0)return;const r=F(l),t=r.left-e.event.x,c=r.top-e.event.y;if(t===0&&c===0)return;e.lastEvt=l;const u=e.event.mouse===!0,p=()=>{d(l,u);let f;i.preserveCursor!==!0&&i.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),we(),e.styleCleanup=S=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{q(),S()},50):q()}else S!==void 0&&S()}};if(e.event.detected===!0){e.event.isFirst!==!0&&d(l,e.event.mouse);const{payload:f,synthetic:S}=H(l,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=S===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(l);return}const b=Math.abs(t),h=Math.abs(c);b!==h&&(e.direction.horizontal===!0&&b>h||e.direction.vertical===!0&&b<h||e.direction.up===!0&&b<h&&c<0||e.direction.down===!0&&b<h&&c>0||e.direction.left===!0&&b>h&&t<0||e.direction.right===!0&&b>h&&t>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,r){if(e.event!==void 0){if(D(e,"temp"),C.is.firefox===!0&&A(a,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(H(l===void 0?e.lastEvt:l,e).payload);const{payload:t}=H(l===void 0?e.lastEvt:l,e,!0),c=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(a.__qtouchpan=e,i.mouse===!0){const l=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";P(e,"main",[[a,"mousedown","mouseStart",`passive${l}`]])}C.has.touch===!0&&P(e,"main",[[a,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,s){const i=a.__qtouchpan;i!==void 0&&(s.oldValue!==s.value&&(typeof value!="function"&&i.end(),i.handler=s.value),i.direction=x(s.modifiers))},beforeUnmount(a){const s=a.__qtouchpan;s!==void 0&&(s.event!==void 0&&s.end(),D(s,"main"),D(s,"temp"),C.is.firefox===!0&&A(a,!1),s.styleCleanup!==void 0&&s.styleCleanup(),delete a.__qtouchpan)}});const W=["vertical","horizontal"],$={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},G={prevent:!0,mouse:!0,mouseAllDir:!0},Z=a=>a>=250?50:Math.ceil(a/5);var Xe=ee({name:"QScrollArea",props:{...me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(a,{slots:s,emit:i}){const d=z(!1),e=z(!1),l=z(!1),r={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:c}=oe(),u=be(a,c.$q);let p=null,b;const h=z(null),f=m(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=m(()=>{const o=t.vertical.size.value-r.vertical.value;if(o<=0)return 0;const n=T(t.vertical.position.value/o,0,1);return Math.round(n*1e4)/1e4}),t.vertical.thumbHidden=m(()=>(a.visible===null?l.value:a.visible)!==!0&&d.value===!1&&e.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=m(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=m(()=>Math.round(T(r.vertical.value*r.vertical.value/t.vertical.size.value,Z(r.vertical.value),r.vertical.value))),t.vertical.style=m(()=>({...a.thumbStyle,...a.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=m(()=>{const o=t.horizontal.size.value-r.horizontal.value;if(o<=0)return 0;const n=T(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(n*1e4)/1e4}),t.horizontal.thumbHidden=m(()=>(a.visible===null?l.value:a.visible)!==!0&&d.value===!1&&e.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=m(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=m(()=>Math.round(T(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,Z(r.horizontal.value),r.horizontal.value))),t.horizontal.style=m(()=>({...a.thumbStyle,...a.horizontalThumbStyle,[c.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=m(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),q=[[J,o=>{X(o,"vertical")},void 0,{vertical:!0,...G}]],re=[[J,o=>{X(o,"horizontal")},void 0,{horizontal:!0,...G}]];function B(){const o={};return W.forEach(n=>{const v=t[n];o[n+"Position"]=v.position.value,o[n+"Percentage"]=v.percentage.value,o[n+"Size"]=v.size.value,o[n+"ContainerSize"]=r[n].value}),o}const L=Ee(()=>{const o=B();o.ref=c,i("scroll",o)},0);function Q(o,n,v){if(W.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?R:w)(h.value,n,v)}function ae({height:o,width:n}){let v=!1;r.vertical.value!==o&&(r.vertical.value=o,v=!0),r.horizontal.value!==n&&(r.horizontal.value=n,v=!0),v===!0&&_()}function ie({position:o}){let n=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,n=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,n=!0),n===!0&&_()}function ne({height:o,width:n}){t.horizontal.size.value!==n&&(t.horizontal.size.value=n,_()),t.vertical.size.value!==o&&(t.vertical.size.value=o,_())}function X(o,n){const v=t[n];if(o.isFirst===!0){if(v.thumbHidden.value===!0)return;b=v.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const y=$[n],E=r[n].value,de=(v.size.value-E)/(E-v.thumbSize.value),fe=o.distance[y.dist],he=b+(o.direction===y.dir?1:-1)*fe*de;k(he,n)}function Y(o,n){const v=t[n];if(v.thumbHidden.value!==!0){const y=o[$[n].offset];if(y<v.thumbStart.value||y>v.thumbStart.value+v.thumbSize.value){const E=y-v.thumbSize.value/2;k(E/r[n].value*v.size.value,n)}v.ref.value!==null&&v.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function ue(o){Y(o,"vertical")}function se(o){Y(o,"horizontal")}function _(){d.value=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,d.value=!1},a.delay),a.onScroll!==void 0&&L()}function k(o,n){h.value[$[n].scroll]=o}function ce(){l.value=!0}function ve(){l.value=!1}let M=null;return j(()=>c.$q.lang.rtl,o=>{h.value!==null&&w(h.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),Pe(()=>{M={top:t.vertical.position.value,left:t.horizontal.position.value}}),Te(()=>{if(M===null)return;const o=h.value;o!==null&&(w(o,M.left),R(o,M.top))}),te(L.cancel),Object.assign(c,{getScrollTarget:()=>h.value,getScroll:B,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:Q,setScrollPercentage(o,n,v){Q(o,n*(t[o].size.value-r[o].value)*(o==="horizontal"&&c.$q.lang.rtl===!0?-1:1),v)}}),()=>g("div",{class:f.value,onMouseenter:ce,onMouseleave:ve},[g("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:S.value},ze(s.default,[g(N,{debounce:0,onResize:ne})])),g(Oe,{axis:"both",onScroll:ie})]),g(N,{debounce:0,onResize:ae}),g("div",{class:t.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:ue}),g("div",{class:t.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:se}),I(g("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),q),I(g("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),re)])}});export{Xe as Q};
