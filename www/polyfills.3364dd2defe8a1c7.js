"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3461],{4050:(ee,J,fe)=>{fe(6876),fe(6935)},6876:()=>{window.__Zone_disable_customElements=!0},6935:()=>{const ee=globalThis;function J(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const _e=Object.getOwnPropertyDescriptor,ke=Object.defineProperty,we=Object.getPrototypeOf,ft=Object.create,ht=Array.prototype.slice,Me="addEventListener",Le="removeEventListener",Ze=J(Me),Ae=J(Le),ce="true",ae="false",ve=J("");function je(t,r){return Zone.current.wrap(t,r)}function He(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=J,Re=typeof window<"u",Ee=Re?window:void 0,$=Re&&Ee||globalThis,dt="removeAttribute";function xe(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=je(t[c],r+"_"+c));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const ze=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in $)&&typeof $.process<"u"&&"[object process]"===$.process.toString(),Ge=!Ce&&!ze&&!(!Re||!Ee.HTMLElement),Xe=typeof $.process<"u"&&"[object process]"===$.process.toString()&&!ze&&!(!Re||!Ee.HTMLElement),De={},qe=function(t){if(!(t=t||$.event))return;let r=De[t.type];r||(r=De[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||$,n=c[r];let i;return Ge&&c===Ee&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function Ye(t,r,c){let n=_e(t,r);if(!n&&c&&_e(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const l=n.get,_=n.set,E=r.slice(2);let p=De[E];p||(p=De[E]=H("ON_PROPERTY"+E)),n.set=function(C){let T=this;!T&&t===$&&(T=$),T&&("function"==typeof T[p]&&T.removeEventListener(E,qe),_&&_.call(T,null),T[p]=C,"function"==typeof C&&T.addEventListener(E,qe,!1))},n.get=function(){let C=this;if(!C&&t===$&&(C=$),!C)return null;const T=C[p];if(T)return T;if(l){let L=l.call(this);if(L)return n.set.call(this,L),"function"==typeof C[dt]&&C.removeAttribute(r),L}return null},ke(t,r,n),t[i]=!0}function $e(t,r,c){if(r)for(let n=0;n<r.length;n++)Ye(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)Ye(t,n[i],c)}}const re=H("originalInstance");function be(t){const r=$[t];if(!r)return;$[H(t)]=r,$[t]=function(){const i=xe(arguments,t);switch(i.length){case 0:this[re]=new r;break;case 1:this[re]=new r(i[0]);break;case 2:this[re]=new r(i[0],i[1]);break;case 3:this[re]=new r(i[0],i[1],i[2]);break;case 4:this[re]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ue($[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?$[t].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:ke($[t].prototype,i,{set:function(l){"function"==typeof l?(this[re][i]=je(l,t+"."+i),ue(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&($[t][n]=r[n])}function le(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=we(n);!n&&t[r]&&(n=t);const i=H(r);let l=null;if(n&&(!(l=n[i])||!n.hasOwnProperty(i))&&(l=n[i]=n[r],We(n&&_e(n,r)))){const E=c(l,i,r);n[r]=function(){return E(this,arguments)},ue(n[r],l)}return l}function Et(t,r,c){let n=null;function i(l){const _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(_.target,_.args),l}n=le(t,r,l=>function(_,E){const p=c(_,E);return p.cbIdx>=0&&"function"==typeof E[p.cbIdx]?He(p.name,E[p.cbIdx],p,i):l.apply(_,E)})}function ue(t,r){t[H("OriginalDelegate")]=r}let Ke=!1,Ve=!1;function gt(){if(Ke)return Ve;Ke=!0;try{const t=Ee.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ve=!0)}catch{}return Ve}let Te=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){Te=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{Te=!1}const pt={useG:!0},ne={},Je={},Qe=new RegExp("^"+ve+"(\\w+)(true|false)$"),et=H("propagationStopped");function tt(t,r){const c=(r?r(t):t)+ae,n=(r?r(t):t)+ce,i=ve+c,l=ve+n;ne[t]={},ne[t][ae]=i,ne[t][ce]=l}function yt(t,r,c,n){const i=n&&n.add||Me,l=n&&n.rm||Le,_=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",p=H(i),C="."+i+":",T="prependListener",L="."+T+":",w=function(v,h,G){if(v.isRemoved)return;const W=v.callback;let q;"object"==typeof W&&W.handleEvent&&(v.callback=g=>W.handleEvent(g),v.originalDelegate=W);try{v.invoke(v,h,[G])}catch(g){q=g}const V=v.options;return V&&"object"==typeof V&&V.once&&h[l].call(h,G.type,v.originalDelegate?v.originalDelegate:v.callback,V),q};function j(v,h,G){if(!(h=h||t.event))return;const W=v||h.target||t,q=W[ne[h.type][G?ce:ae]];if(q){const V=[];if(1===q.length){const g=w(q[0],W,h);g&&V.push(g)}else{const g=q.slice();for(let B=0;B<g.length&&(!h||!0!==h[et]);B++){const M=w(g[B],W,h);M&&V.push(M)}}if(1===V.length)throw V[0];for(let g=0;g<V.length;g++){const B=V[g];r.nativeScheduleMicroTask(()=>{throw B})}}}const F=function(v){return j(this,v,!1)},x=function(v){return j(this,v,!0)};function oe(v,h){if(!v)return!1;let G=!0;h&&void 0!==h.useG&&(G=h.useG);const W=h&&h.vh;let q=!0;h&&void 0!==h.chkDup&&(q=h.chkDup);let V=!1;h&&void 0!==h.rt&&(V=h.rt);let g=v;for(;g&&!g.hasOwnProperty(i);)g=we(g);if(!g&&v[i]&&(g=v),!g||g[p])return!1;const B=h&&h.eventNameToString,M={},R=g[p]=g[i],k=g[H(l)]=g[l],S=g[H(_)]=g[_],Q=g[H(E)]=g[E];let z;h&&h.prepend&&(z=g[H(h.prepend)]=g[h.prepend]);const Y=G?function(s){if(!M.isExisting)return R.call(M.target,M.eventName,M.capture?x:F,M.options)}:function(s){return R.call(M.target,M.eventName,s.invoke,M.options)},Z=G?function(s){if(!s.isRemoved){const a=ne[s.eventName];let f;a&&(f=a[s.capture?ce:ae]);const b=f&&s.target[f];if(b)for(let D=0;D<b.length;D++)if(b[D]===s){b.splice(D,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[f]=null);break}}if(s.allRemoved)return k.call(s.target,s.eventName,s.capture?x:F,s.options)}:function(s){return k.call(s.target,s.eventName,s.invoke,s.options)},Pe=h&&h.diff?h.diff:function(s,a){const f=typeof a;return"function"===f&&s.callback===a||"object"===f&&s.originalDelegate===a},he=Zone[H("UNPATCHED_EVENTS")],Ne=t[H("PASSIVE_EVENTS")],u=function(s,a,f,b,D=!1,m=!1){return function(){const P=this||t;let O=arguments[0];h&&h.transferEventName&&(O=h.transferEventName(O));let A=arguments[1];if(!A)return s.apply(this,arguments);if(Ce&&"uncaughtException"===O)return s.apply(this,arguments);let U=!1;if("function"!=typeof A){if(!A.handleEvent)return s.apply(this,arguments);U=!0}if(W&&!W(s,A,P,arguments))return;const K=Te&&!!Ne&&-1!==Ne.indexOf(O),te=function I(s,a){return!Te&&"object"==typeof s&&s?!!s.capture:Te&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],K),pe=te?.signal;if(pe?.aborted)return;if(he)for(let ie=0;ie<he.length;ie++)if(O===he[ie])return K?s.call(P,O,A,te):s.apply(this,arguments);const Ue=!!te&&("boolean"==typeof te||te.capture),it=!(!te||"object"!=typeof te)&&te.once,It=Zone.current;let Fe=ne[O];Fe||(tt(O,B),Fe=ne[O]);const ct=Fe[Ue?ce:ae];let Ie,ye=P[ct],at=!1;if(ye){if(at=!0,q)for(let ie=0;ie<ye.length;ie++)if(Pe(ye[ie],A))return}else ye=P[ct]=[];const lt=P.constructor.name,ut=Je[lt];ut&&(Ie=ut[O]),Ie||(Ie=lt+a+(B?B(O):O)),M.options=te,it&&(M.options.once=!1),M.target=P,M.capture=Ue,M.eventName=O,M.isExisting=at;const de=G?pt:void 0;de&&(de.taskData=M),pe&&(M.options.signal=void 0);const se=It.scheduleEventTask(Ie,A,de,f,b);if(pe){M.options.signal=pe;const ie=()=>se.zone.cancelTask(se);s.call(pe,"abort",ie,{once:!0}),de&&(de.removeAbortListener=()=>pe.removeEventListener("abort",ie))}return M.target=null,de&&(de.taskData=null),it&&(te.once=!0),!Te&&"boolean"==typeof se.options||(se.options=te),se.target=P,se.capture=Ue,se.eventName=O,U&&(se.originalDelegate=A),m?ye.unshift(se):ye.push(se),D?P:void 0}};return g[i]=u(R,C,Y,Z,V),z&&(g[T]=u(z,L,function(s){return z.call(M.target,M.eventName,s.invoke,M.options)},Z,V,!0)),g[l]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=arguments[2],b=!!f&&("boolean"==typeof f||f.capture),D=arguments[1];if(!D)return k.apply(this,arguments);if(W&&!W(k,D,s,arguments))return;const m=ne[a];let P;m&&(P=m[b?ce:ae]);const O=P&&s[P];if(O)for(let A=0;A<O.length;A++){const U=O[A];if(Pe(U,D)){O.splice(A,1),U.isRemoved=!0,0!==O.length||(U.allRemoved=!0,s[P]=null,b||"string"!=typeof a)||(s[ve+"ON_PROPERTY"+a]=null);const K=U.data;return K?.removeAbortListener&&(K.removeAbortListener(),K.removeAbortListener=null),U.zone.cancelTask(U),V?s:void 0}}return k.apply(this,arguments)},g[_]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=[],b=nt(s,B?B(a):a);for(let D=0;D<b.length;D++){const m=b[D];f.push(m.originalDelegate?m.originalDelegate:m.callback)}return f},g[E]=function(){const s=this||t;let a=arguments[0];if(a){h&&h.transferEventName&&(a=h.transferEventName(a));const f=ne[a];if(f){const m=s[f[ae]],P=s[f[ce]];if(m){const O=m.slice();for(let A=0;A<O.length;A++){const U=O[A];this[l].call(this,a,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}if(P){const O=P.slice();for(let A=0;A<O.length;A++){const U=O[A];this[l].call(this,a,U.originalDelegate?U.originalDelegate:U.callback,U.options)}}}}else{const f=Object.keys(s);for(let b=0;b<f.length;b++){const m=Qe.exec(f[b]);let P=m&&m[1];P&&"removeListener"!==P&&this[E].call(this,P)}this[E].call(this,"removeListener")}if(V)return this},ue(g[i],R),ue(g[l],k),Q&&ue(g[E],Q),S&&ue(g[_],S),!0}let X=[];for(let v=0;v<c.length;v++)X[v]=oe(c[v],n);return X}function nt(t,r){if(!r){const l=[];for(let _ in t){const E=Qe.exec(_);let p=E&&E[1];if(p&&(!r||p===r)){const C=t[_];if(C)for(let T=0;T<C.length;T++)l.push(C[T])}}return l}let c=ne[r];c||(tt(r),c=ne[r]);const n=t[c[ae]],i=t[c[ce]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function mt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,l){i[et]=!0,n&&n.apply(i,l)})}const Oe=H("zoneTask");function ge(t,r,c,n){let i=null,l=null;c+=n;const _={};function E(C){const T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=i.apply(t,T.args),C}function p(C){return l.call(t,C.data.handleId)}i=le(t,r+=n,C=>function(T,L){if("function"==typeof L[0]){const w={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?L[1]||0:void 0,args:L},j=L[0];L[0]=function(){try{return j.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete _[w.handleId]:w.handleId&&(w.handleId[Oe]=null))}};const F=He(r,L[0],w,E,p);if(!F)return F;const x=F.data.handleId;return"number"==typeof x?_[x]=F:x&&(x[Oe]=F),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(F.ref=x.ref.bind(x),F.unref=x.unref.bind(x)),"number"==typeof x||x?x:F}return C.apply(t,L)}),l=le(t,c,C=>function(T,L){const w=L[0];let j;"number"==typeof w?j=_[w]:(j=w&&w[Oe],j||(j=w)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof w?delete _[w]:w&&(w[Oe]=null),j.zone.cancelTask(j)):C.apply(t,L)})}function rt(t,r,c){if(!c||0===c.length)return r;const n=c.filter(l=>l.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(l=>-1===i.indexOf(l))}function ot(t,r,c,n){t&&$e(t,rt(t,r,c),n)}function Be(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Ot(t,r,c,n,i){const l=Zone.__symbol__(n);if(r[l])return;const _=r[l]=r[n];r[n]=function(E,p,C){return p&&p.prototype&&i.forEach(function(T){const L=`${c}.${n}::`+T,w=p.prototype;try{if(w.hasOwnProperty(T)){const j=t.ObjectGetOwnPropertyDescriptor(w,T);j&&j.value?(j.value=t.wrapWithCurrentZone(j.value,L),t._redefineProperty(p.prototype,T,j)):w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],L))}else w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],L))}catch{}}),_.call(r,E,p,C)},t.attachOriginToPatched(r[n],_)}const st=function me(){const t=globalThis,r=!0===t[J("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function fe(){const t=ee.performance;function r(I){t&&t.mark&&t.mark(I)}function c(I,d){t&&t.measure&&t.measure(I,d)}r("Zone");let n=(()=>{class I{static#e=this.__symbol__=J;static assertZonePatched(){if(ee.Promise!==M.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return k.zone}static get currentTask(){return S}static __load_patch(e,o,y=!1){if(M.hasOwnProperty(e)){const N=!0===ee[J("forceDuplicateZoneCheck")];if(!y&&N)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const N="Zone:"+e;r(N),M[e]=o(ee,I,R),c(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const y=this._zoneDelegate.intercept(this,e,o),N=this;return function(){return N.runGuarded(y,this,arguments,o)}}run(e,o,y,N){k={parent:k,zone:this};try{return this._zoneDelegate.invoke(this,e,o,y,N)}finally{k=k.parent}}runGuarded(e,o=null,y,N){k={parent:k,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,y,N)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{k=k.parent}}runTask(e,o,y){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===X&&(e.type===B||e.type===g))return;const N=e.state!=G;N&&e._transitionTo(G,h),e.runCount++;const Y=S;S=e,k={parent:k,zone:this};try{e.type==g&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,y)}catch(Z){if(this._zoneDelegate.handleError(this,Z))throw Z}}finally{e.state!==X&&e.state!==q&&(e.type==B||e.data&&e.data.isPeriodic?N&&e._transitionTo(h,G):(e.runCount=0,this._updateTaskCount(e,-1),N&&e._transitionTo(X,G,X))),k=k.parent,S=Y}}scheduleTask(e){if(e.zone&&e.zone!==this){let y=this;for(;y;){if(y===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);y=y.parent}}e._transitionTo(v,X);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(y){throw e._transitionTo(q,v,X),this._zoneDelegate.handleError(this,y),y}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,o,y,N){return this.scheduleTask(new _(V,e,o,y,N,void 0))}scheduleMacroTask(e,o,y,N,Y){return this.scheduleTask(new _(g,e,o,y,N,Y))}scheduleEventTask(e,o,y,N,Y){return this.scheduleTask(new _(B,e,o,y,N,Y))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===h||e.state===G){e._transitionTo(W,h,G);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(q,W),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(X,W),e.runCount=0,e}}_updateTaskCount(e,o){const y=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let N=0;N<y.length;N++)y[N]._updateTaskCount(e.type,o)}}return I})();const i={name:"",onHasTask:(I,d,e,o)=>I.hasTask(e,o),onScheduleTask:(I,d,e,o)=>I.scheduleTask(e,o),onInvokeTask:(I,d,e,o,y,N)=>I.invokeTask(e,o,y,N),onCancelTask:(I,d,e,o)=>I.cancelTask(e,o)};class l{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const y=o&&o.onHasTask;(y||e&&e._hasTaskZS)&&(this._hasTaskZS=y?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,y,N){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,y,N):e.apply(o,y)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=V)throw new Error("Task is missing scheduleFn.");F(e)}return o}invokeTask(d,e,o,y){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,y):e.callback.apply(o,y)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,y=o[d],N=o[d]=y+e;if(N<0)throw new Error("More tasks executed then were scheduled.");0!=y&&0!=N||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,y,N,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=y,this.scheduleFn=N,this.cancelFn=Y,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;this.invoke=d===B&&y&&y.useG?_.invokeTask:function(){return _.invokeTask.call(ee,Z,this,arguments)}}static invokeTask(d,e,o){d||(d=this),Q++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==Q&&x(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(X,v)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==X&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=J("setTimeout"),p=J("Promise"),C=J("then");let w,T=[],L=!1;function j(I){if(w||ee[p]&&(w=ee[p].resolve(0)),w){let d=w[C];d||(d=w.then),d.call(w,I)}else ee[E](I,0)}function F(I){0===Q&&0===T.length&&j(x),I&&T.push(I)}function x(){if(!L){for(L=!0;T.length;){const I=T;T=[];for(let d=0;d<I.length;d++){const e=I[d];try{e.zone.runTask(e,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),L=!1}}const oe={name:"NO ZONE"},X="notScheduled",v="scheduling",h="scheduled",G="running",W="canceling",q="unknown",V="microTask",g="macroTask",B="eventTask",M={},R={symbol:J,currentZoneFrame:()=>k,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:F,showUncaughtError:()=>!n[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:j};let k={parent:null,zone:new n(null,null)},S=null,Q=0;function z(){}return c("Zone","Zone"),n}(),t.Zone}();(function Nt(t){(function Ct(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,E=n.symbol,p=[],C=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=E("Promise"),L=E("then"),w="__creationTrace__";n.onUnhandledError=u=>{if(n.showUncaughtError()){const s=u&&u.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(u)}},n.microtaskDrainDone=()=>{for(;p.length;){const u=p.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(s){F(s)}}};const j=E("unhandledPromiseRejectionHandler");function F(u){n.onUnhandledError(u);try{const s=c[j];"function"==typeof s&&s.call(this,u)}catch{}}function x(u){return u&&u.then}function oe(u){return u}function X(u){return Z.reject(u)}const v=E("state"),h=E("value"),G=E("finally"),W=E("parentPromiseValue"),q=E("parentPromiseState"),V="Promise.then",g=null,B=!0,M=!1,R=0;function k(u,s){return a=>{try{I(u,s,a)}catch(f){I(u,!1,f)}}}const S=function(){let u=!1;return function(a){return function(){u||(u=!0,a.apply(null,arguments))}}},Q="Promise resolved with itself",z=E("currentTaskTrace");function I(u,s,a){const f=S();if(u===a)throw new TypeError(Q);if(u[v]===g){let b=null;try{("object"==typeof a||"function"==typeof a)&&(b=a&&a.then)}catch(D){return f(()=>{I(u,!1,D)})(),u}if(s!==M&&a instanceof Z&&a.hasOwnProperty(v)&&a.hasOwnProperty(h)&&a[v]!==g)e(a),I(u,a[v],a[h]);else if(s!==M&&"function"==typeof b)try{b.call(a,f(k(u,s)),f(k(u,!1)))}catch(D){f(()=>{I(u,!1,D)})()}else{u[v]=s;const D=u[h];if(u[h]=a,u[G]===G&&s===B&&(u[v]=u[q],u[h]=u[W]),s===M&&a instanceof Error){const m=c.currentTask&&c.currentTask.data&&c.currentTask.data[w];m&&l(a,z,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<D.length;)o(u,D[m++],D[m++],D[m++],D[m++]);if(0==D.length&&s==M){u[v]=R;let m=a;try{throw new Error("Uncaught (in promise): "+function _(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=a,m.promise=u,m.zone=c.current,m.task=c.currentTask,p.push(m),n.scheduleMicroTask()}}}return u}const d=E("rejectionHandledHandler");function e(u){if(u[v]===R){try{const s=c[d];s&&"function"==typeof s&&s.call(this,{rejection:u[h],promise:u})}catch{}u[v]=M;for(let s=0;s<p.length;s++)u===p[s].promise&&p.splice(s,1)}}function o(u,s,a,f,b){e(u);const D=u[v],m=D?"function"==typeof f?f:oe:"function"==typeof b?b:X;s.scheduleMicroTask(V,()=>{try{const P=u[h],O=!!a&&G===a[G];O&&(a[W]=P,a[q]=D);const A=s.run(m,void 0,O&&m!==X&&m!==oe?[]:[P]);I(a,!0,A)}catch(P){I(a,!1,P)}},a)}const N=function(){},Y=r.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return s instanceof Z?s:I(new this(null),B,s)}static reject(s){return I(new this(null),M,s)}static withResolvers(){const s={};return s.promise=new Z((a,f)=>{s.resolve=a,s.reject=f}),s}static any(s){if(!s||"function"!=typeof s[Symbol.iterator])return Promise.reject(new Y([],"All promises were rejected"));const a=[];let f=0;try{for(let m of s)f++,a.push(Z.resolve(m))}catch{return Promise.reject(new Y([],"All promises were rejected"))}if(0===f)return Promise.reject(new Y([],"All promises were rejected"));let b=!1;const D=[];return new Z((m,P)=>{for(let O=0;O<a.length;O++)a[O].then(A=>{b||(b=!0,m(A))},A=>{D.push(A),f--,0===f&&(b=!0,P(new Y(D,"All promises were rejected")))})})}static race(s){let a,f,b=new this((P,O)=>{a=P,f=O});function D(P){a(P)}function m(P){f(P)}for(let P of s)x(P)||(P=this.resolve(P)),P.then(D,m);return b}static all(s){return Z.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(s,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(s,a){let f,b,D=new this((A,U)=>{f=A,b=U}),m=2,P=0;const O=[];for(let A of s){x(A)||(A=this.resolve(A));const U=P;try{A.then(K=>{O[U]=a?a.thenCallback(K):K,m--,0===m&&f(O)},K=>{a?(O[U]=a.errorCallback(K),m--,0===m&&f(O)):b(K)})}catch(K){b(K)}m++,P++}return m-=2,0===m&&f(O),D}constructor(s){const a=this;if(!(a instanceof Z))throw new Error("Must be an instanceof Promise.");a[v]=g,a[h]=[];try{const f=S();s&&s(f(k(a,B)),f(k(a,M)))}catch(f){I(a,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(s,a){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||Z);const b=new f(N),D=c.current;return this[v]==g?this[h].push(D,b,s,a):o(this,D,b,s,a),b}catch(s){return this.then(null,s)}finally(s){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=Z);const f=new a(N);f[G]=G;const b=c.current;return this[v]==g?this[h].push(b,f,s,s):o(this,b,f,s,s),f}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const Se=r[T]=r.Promise;r.Promise=Z;const Pe=E("thenPatched");function he(u){const s=u.prototype,a=i(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const f=s.then;s[L]=f,u.prototype.then=function(b,D){return new Z((P,O)=>{f.call(this,P,O)}).then(b,D)},u[Pe]=!0}return n.patchThen=he,Se&&(he(Se),le(r,"fetch",u=>function Ne(u){return function(s,a){let f=u.apply(s,a);if(f instanceof Z)return f;let b=f.constructor;return b[Pe]||he(b),f}}(u))),Promise[c.__symbol__("uncaughtPromiseErrors")]=p,Z})})(t),function Dt(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),l=H("Error"),_=function(){if("function"==typeof this){const T=this[n];if(T)return"function"==typeof T?c.call(T):Object.prototype.toString.call(T);if(this===Promise){const L=r[i];if(L)return c.call(L)}if(this===Error){const L=r[l];if(L)return c.call(L)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(t),function St(t){t.__load_patch("util",(r,c,n)=>{const i=Be(r);n.patchOnProperties=$e,n.patchMethod=le,n.bindArguments=xe,n.patchMacroTask=Et;const l=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[l]=r[_]),r[l]&&(c[l]=c[_]=r[l]),n.patchEventPrototype=mt,n.patchEventTarget=yt,n.isIEOrEdge=gt,n.ObjectDefineProperty=ke,n.ObjectGetOwnPropertyDescriptor=_e,n.ObjectCreate=ft,n.ArraySlice=ht,n.patchClass=be,n.wrapWithCurrentZone=je,n.filterProperties=rt,n.attachOriginToPatched=ue,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Ot,n.getGlobalObjects=()=>({globalSources:Je,zoneSymbolEventNames:ne,eventNames:i,isBrowser:Ge,isMix:Xe,isNode:Ce,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Le})})}(t)})(st),function Rt(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";ge(r,c,n,"Timeout"),ge(r,c,n,"Interval"),ge(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{ge(r,"request","cancel","AnimationFrame"),ge(r,"mozRequest","mozCancel","AnimationFrame"),ge(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)le(r,n[i],(_,E,p)=>function(C,T){return c.current.run(_,r,T,p)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function Pt(t,r){r.patchEventPrototype(t,r)})(r,n),function bt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let p=0;p<c.length;p++){const C=c[p],w=_+(C+l),j=_+(C+i);n[C]={},n[C][l]=w,n[C][i]=j}const E=t.EventTarget;E&&E.prototype&&r.patchEventTarget(t,r,[E&&E.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{be("MutationObserver"),be("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{be("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{be("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function wt(t,r){if(Ce&&!Xe||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(Ge){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function Tt(){try{const t=Ee.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ot(i,Be(i),c&&c.concat(l),we(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const l=r[n[i]];l&&l.prototype&&ot(l.prototype,Be(l.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function vt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function C(T){const L=T.XMLHttpRequest;if(!L)return;const w=L.prototype;let F=w[Ze],x=w[Ae];if(!F){const R=T.XMLHttpRequestEventTarget;if(R){const k=R.prototype;F=k[Ze],x=k[Ae]}}const oe="readystatechange",X="scheduled";function v(R){const k=R.data,S=k.target;S[_]=!1,S[p]=!1;const Q=S[l];F||(F=S[Ze],x=S[Ae]),Q&&x.call(S,oe,Q);const z=S[l]=()=>{if(S.readyState===S.DONE)if(!k.aborted&&S[_]&&R.state===X){const d=S[c.__symbol__("loadfalse")];if(0!==S.status&&d&&d.length>0){const e=R.invoke;R.invoke=function(){const o=S[c.__symbol__("loadfalse")];for(let y=0;y<o.length;y++)o[y]===R&&o.splice(y,1);!k.aborted&&R.state===X&&e.call(R)},d.push(R)}else R.invoke()}else!k.aborted&&!1===S[_]&&(S[p]=!0)};return F.call(S,oe,z),S[n]||(S[n]=R),B.apply(S,k.args),S[_]=!0,R}function h(){}function G(R){const k=R.data;return k.aborted=!0,M.apply(k.target,k.args)}const W=le(w,"open",()=>function(R,k){return R[i]=0==k[2],R[E]=k[1],W.apply(R,k)}),V=H("fetchTaskAborting"),g=H("fetchTaskScheduling"),B=le(w,"send",()=>function(R,k){if(!0===c.current[g]||R[i])return B.apply(R,k);{const S={target:R,url:R[E],isPeriodic:!1,args:k,aborted:!1},Q=He("XMLHttpRequest.send",h,S,v,G);R&&!0===R[p]&&!S.aborted&&Q.state===X&&Q.invoke()}}),M=le(w,"abort",()=>function(R,k){const S=function j(R){return R[n]}(R);if(S&&"string"==typeof S.type){if(null==S.cancelFn||S.data&&S.data.aborted)return;S.zone.cancelTask(S)}else if(!0===c.current[V])return M.apply(R,k)})}(r);const n=H("xhrTask"),i=H("xhrSync"),l=H("xhrListener"),_=H("xhrScheduled"),E=H("xhrURL"),p=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function _t(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],l=t[i];if(l){if(!We(_e(t,i)))continue;t[i]=(E=>{const p=function(){return E.apply(this,xe(arguments,c+"."+i))};return ue(p,E),p})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(l){nt(r,i).forEach(E=>{const p=r.PromiseRejectionEvent;if(p){const C=new p(i,{promise:l.promise,reason:l.rejection});E.invoke(C)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function kt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(st)}},ee=>{ee(ee.s=4050)}]);