"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2804],{2804:(Wt,L,c)=>{c.r(L),c.d(L,{IngIngrPageModule:()=>Kt});var f=c(177),me=c(4341),d=c(7863),S=c(2146),s=c(4438);let x;try{x=typeof Intl<"u"&&Intl.v8BreakIterator}catch{x=!1}let E,P=(()=>{class i{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,f.UE)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!x)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(n){return new(n||i)(s.KVO(s.Agw))};static#t=this.\u0275prov=s.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function D(i){return function pe(){if(null==E&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>E=!0}))}finally{E=E||!1}return E}()?i:!!i.capture}var C=c(1413),B=c(8359);c(8141);class je extends B.yU{constructor(t,e){super()}schedule(t,e=0){return this}}const k={setInterval(i,t,...e){const{delegate:n}=k;return n?.setInterval?n.setInterval(i,t,...e):setInterval(i,t,...e)},clearInterval(i){const{delegate:t}=k;return(t?.clearInterval||clearInterval)(i)},delegate:void 0};var Be=c(7908);const U={now:()=>(U.delegate||Date).now(),delegate:void 0};class I{constructor(t,e=I.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,n){return new this.schedulerActionCtor(this,t).schedule(n,e)}}I.now=U.now;const Ke=new class Ve extends I{constructor(t,e=I.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}(class Ue extends je{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var n;if(this.closed)return this;this.state=t;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(t,e,n=0){return k.setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&k.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r,n=!1;try{this.work(t)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Be.o)(n,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}});var He=c(9974),We=c(4360);var K=c(5964),O=c(6354),H=c(6697);function W(i){return Array.isArray(i)?i:[i]}function z(i){return i instanceof s.aKT?i.nativeElement:i}var Ge=c(4572),$e=c(8793),Ze=c(1985),Qe=c(9172),Xe=c(6977);const G=new Set;let g,qe=(()=>{class i{constructor(e,n){this._platform=e,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):et}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function Je(i,t){if(!G.has(i))try{g||(g=document.createElement("style"),t&&g.setAttribute("nonce",t),g.setAttribute("type","text/css"),document.head.appendChild(g)),g.sheet&&(g.sheet.insertRule(`@media ${i} {body{ }}`,0),G.add(i))}catch(e){console.error(e)}}(e,this._nonce),this._matchMedia(e)}static#e=this.\u0275fac=function(n){return new(n||i)(s.KVO(P),s.KVO(s.BIS,8))};static#t=this.\u0275prov=s.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function et(i){return{matches:"all"===i||""===i,media:i,addListener:()=>{},removeListener:()=>{}}}let tt=(()=>{class i{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new C.B}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return $(W(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){const r=$(W(e)).map(a=>this._registerQuery(a).observable);let o=(0,Ge.z)(r);return o=(0,$e.x)(o.pipe((0,H.s)(1)),o.pipe(function Ye(i){return(0,K.p)((t,e)=>i<=e)}(1),function V(i,t=Ke){return(0,He.N)((e,n)=>{let r=null,o=null,a=null;const l=()=>{if(r){r.unsubscribe(),r=null;const h=o;o=null,n.next(h)}};function p(){const h=a+i,u=t.now();if(u<h)return r=this.schedule(void 0,h-u),void n.add(r);l()}e.subscribe((0,We._)(n,h=>{o=h,a=t.now(),r||(r=t.schedule(p,i),n.add(r))},()=>{l(),n.complete()},void 0,()=>{o=r=null}))})}(0))),o.pipe((0,O.T)(a=>{const l={matches:!1,breakpoints:{}};return a.forEach(({matches:p,query:h})=>{l.matches=l.matches||p,l.breakpoints[h]=p}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const n=this._mediaMatcher.matchMedia(e),o={observable:new Ze.c(a=>{const l=p=>this._zone.run(()=>a.next(p));return n.addListener(l),()=>{n.removeListener(l)}}).pipe((0,Qe.Z)(n),(0,O.T)(({matches:a})=>({query:e,matches:a})),(0,Xe.Q)(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static#e=this.\u0275fac=function(n){return new(n||i)(s.KVO(qe),s.KVO(s.SKi))};static#t=this.\u0275prov=s.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function $(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var v=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(v||{});const X="cdk-high-contrast-black-on-white",q="cdk-high-contrast-white-on-black",F="cdk-high-contrast-active";let ft=(()=>{class i{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=(0,s.WQX)(tt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return v.NONE;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return v.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return v.BLACK_ON_WHITE}return v.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(F,X,q),this._hasCheckedHighContrastMode=!0;const n=this.getHighContrastMode();n===v.BLACK_ON_WHITE?e.add(F,X):n===v.WHITE_ON_BLACK&&e.add(F,q)}}static#e=this.\u0275fac=function(n){return new(n||i)(s.KVO(P),s.KVO(f.qQ))};static#t=this.\u0275prov=s.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),J=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=s.$C({type:i});static#i=this.\u0275inj=s.G2t({})}return i})();const bt=new s.nKC("mat-sanity-checks",{providedIn:"root",factory:function vt(){return!0}});let yt=(()=>{class i{constructor(e,n,r){this._sanityChecks=n,this._document=r,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!function ge(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}static#e=this.\u0275fac=function(n){return new(n||i)(s.KVO(ft),s.KVO(bt,8),s.KVO(f.qQ))};static#t=this.\u0275mod=s.$C({type:i});static#i=this.\u0275inj=s.G2t({imports:[J,J]})}return i})();var m=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(m||{});class Ct{constructor(t,e,n,r=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r,this.state=m.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}}const ie=D({passive:!0,capture:!0});class kt{constructor(){this._events=new Map,this._delegateEventHandler=t=>{const e=function _e(i){return i.composedPath?i.composedPath()[0]:i.target}(t);e&&this._events.get(t.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(t))})}}addHandler(t,e,n,r){const o=this._events.get(e);if(o){const a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ie)})}removeHandler(t,e,n){const r=this._events.get(t);if(!r)return;const o=r.get(e);o&&(o.delete(n),0===o.size&&r.delete(e),0===r.size&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,ie)))}}const ne={enterDuration:225,exitDuration:150},re=D({passive:!0,capture:!0}),se=["mousedown","touchstart"],oe=["mouseup","mouseleave","touchend","touchcancel"];class N{static#e=this._eventManager=new kt;constructor(t,e,n,r){this._target=t,this._ngZone=e,this._platform=r,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=z(n))}fadeInRipple(t,e,n={}){const r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o={...ne,...n.animation};n.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);const a=n.radius||function wt(i,t,e){const n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+r*r)}(t,e,r),l=t-r.left,p=e-r.top,h=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=l-a+"px",u.style.top=p-a+"px",u.style.height=2*a+"px",u.style.width=2*a+"px",null!=n.color&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(u);const ce=window.getComputedStyle(u),le=ce.transitionDuration,R="none"===ce.transitionProperty||"0s"===le||"0s, 0s"===le||0===r.width&&0===r.height,b=new Ct(this,u,n,R);u.style.transform="scale3d(1, 1, 1)",b.state=m.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let de=null;return!R&&(h||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const ue=()=>this._finishRippleTransition(b),he=()=>this._destroyRipple(b);u.addEventListener("transitionend",ue),u.addEventListener("transitioncancel",he),de={onTransitionEnd:ue,onTransitionCancel:he}}),this._activeRipples.set(b,de),(R||!h)&&this._finishRippleTransition(b),b}fadeOutRipple(t){if(t.state===m.FADING_OUT||t.state===m.HIDDEN)return;const e=t.element,n={...ne,...t.config.animation};e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=m.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const e=z(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,se.forEach(n=>{N._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{oe.forEach(e=>{this._triggerElement.addEventListener(e,this,re)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===m.FADING_IN?this._startFadeOutTransition(t):t.state===m.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){const e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=m.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){const e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=m.HIDDEN,null!==e&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){const e=function ut(i){return 0===i.buttons||0===i.detail}(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!function ht(i){const t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(t.state===m.VISIBLE||t.config.terminateOnPointerUp&&t.state===m.FADING_IN)&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const t=this._triggerElement;t&&(se.forEach(e=>N._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(oe.forEach(e=>t.removeEventListener(e,this,re)),this._pointerUpEventsRegistered=!1))}}const Ot=["determinateSpinner"];function Ft(i,t){if(1&i&&(s.qSk(),s.j41(0,"svg",11),s.nrm(1,"circle",12),s.k0s()),2&i){const e=s.XpG();s.BMQ("viewBox",e._viewBox()),s.R7$(),s.xc7("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),s.BMQ("r",e._circleRadius())}}const Nt=new s.nKC("mat-progress-spinner-default-options",{providedIn:"root",factory:function Rt(){return{diameter:ae}}}),ae=100;let St=(()=>{class i{get color(){return this._color||this._defaultColor}set color(e){this._color=e}constructor(e,n,r){this._elementRef=e,this._defaultColor="primary",this._value=0,this._diameter=ae,this._noopAnimations="NoopAnimations"===n&&!!r&&!r._forceAnimations,this.mode="mat-spinner"===e.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const e=2*this._circleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static#e=this.\u0275fac=function(n){return new(n||i)(s.rXU(s.aKT),s.rXU(s.bc$,8),s.rXU(Nt))};static#t=this.\u0275cmp=s.VBU({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,r){if(1&n&&s.GBs(Ot,5),2&n){let o;s.mGM(o=s.lsd())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,r){2&n&&(s.BMQ("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===r.mode?r.value:null)("mode",r.mode),s.HbH("mat-"+r.color),s.xc7("width",r.diameter,"px")("height",r.diameter,"px")("--mdc-circular-progress-size",r.diameter+"px")("--mdc-circular-progress-active-indicator-width",r.diameter+"px"),s.AVh("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===r.mode))},inputs:{color:"color",mode:"mode",value:[s.Mj6.HasDecoratorInputTransform,"value","value",s.Udg],diameter:[s.Mj6.HasDecoratorInputTransform,"diameter","diameter",s.Udg],strokeWidth:[s.Mj6.HasDecoratorInputTransform,"strokeWidth","strokeWidth",s.Udg]},exportAs:["matProgressSpinner"],standalone:!0,features:[s.GFd,s.aNF],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,r){if(1&n&&(s.DNE(0,Ft,2,8,"ng-template",null,0,s.C5r),s.j41(2,"div",2,1),s.qSk(),s.j41(4,"svg",3),s.nrm(5,"circle",4),s.k0s()(),s.joV(),s.j41(6,"div",5)(7,"div",6)(8,"div",7),s.eu8(9,8),s.k0s(),s.j41(10,"div",9),s.eu8(11,8),s.k0s(),s.j41(12,"div",10),s.eu8(13,8),s.k0s()()()),2&n){const o=s.sdS(1);s.R7$(4),s.BMQ("viewBox",r._viewBox()),s.R7$(),s.xc7("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),s.BMQ("r",r._circleRadius()),s.R7$(4),s.Y8G("ngTemplateOutlet",o),s.R7$(2),s.Y8G("ngTemplateOutlet",o),s.R7$(2),s.Y8G("ngTemplateOutlet",o)}},dependencies:[f.T3],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}return i})(),Pt=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=s.$C({type:i});static#i=this.\u0275inj=s.G2t({imports:[f.MD,yt]})}return i})();function jt(i,t){if(1&i&&(s.j41(0,"ion-select-option",7),s.EFF(1),s.k0s()),2&i){const e=t.$implicit;s.Y8G("value",e),s.R7$(),s.JRh(e)}}function Bt(i,t){if(1&i&&(s.qex(0,2),s.j41(1,"ion-row")(2,"ion-col")(3,"ion-select",3),s.DNE(4,jt,2,2,"ion-select-option",4),s.k0s()(),s.j41(5,"ion-col"),s.nrm(6,"ion-input",5),s.k0s(),s.j41(7,"ion-col"),s.nrm(8,"ion-input",6),s.k0s()(),s.bVm()),2&i){const e=s.XpG();s.R7$(4),s.Y8G("ngForOf",e.options)}}const Ut=[{path:"",component:(()=>{class i{constructor(){this.options=["Mantequilla","Az\xfacar","Harina","Huevos","Vainilla"],this.rows=Array(10).fill(0)}ngOnInit(){}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=s.VBU({type:i,selectors:[["app-ing-ingr"]],decls:21,vars:1,consts:[["slot","start"],["class","contenedor",4,"ngFor","ngForOf"],[1,"contenedor"],["placeholder","Selecciona un ingrediente"],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Cantidad"],["placeholder","Unidades"],[3,"value"]],template:function(n,r){1&n&&(s.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),s.EFF(3," Formulario de Ingredientes "),s.k0s(),s.j41(4,"ion-buttons",0),s.nrm(5,"ion-menu-button")(6,"ion-back-button"),s.k0s()()(),s.j41(7,"ion-content")(8,"ion-grid")(9,"ion-row")(10,"ion-col")(11,"strong"),s.EFF(12,"Ingrediente"),s.k0s()(),s.j41(13,"ion-col")(14,"strong"),s.EFF(15,"Cantidad"),s.k0s()(),s.j41(16,"ion-col")(17,"strong"),s.EFF(18,"Unidades"),s.k0s()()(),s.DNE(19,Bt,9,1,"ng-container",1),s.k0s(),s.nrm(20,"mat-spinner"),s.k0s()),2&n&&(s.R7$(19),s.Y8G("ngForOf",r.rows))},dependencies:[f.Sq,d.QW,d.hU,d.W9,d.lO,d.eU,d.$w,d.MC,d.ln,d.Nm,d.Ip,d.BC,d.ai,d.su,d.Je,d.Gw,d.el,St],styles:["*[_ngcontent-%COMP%]{background-color:#7f3d0d}"]})}return i})()}];let Vt=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=s.$C({type:i});static#i=this.\u0275inj=s.G2t({imports:[S.iI.forChild(Ut),S.iI]})}return i})(),Kt=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=s.$C({type:i});static#i=this.\u0275inj=s.G2t({imports:[f.MD,me.YN,d.bv,Vt,Pt]})}return i})()}}]);