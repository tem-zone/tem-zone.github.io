var At=Array.isArray,St=Array.from,Rt=Object.defineProperty,un=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyDescriptors,Ot=Object.prototype,xt=Array.prototype,Vn=Object.getPrototypeOf;function kt(n){return typeof n=="function"}const Dt=()=>{};function It(n){return n()}function Gn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,vn=4,M=8,tn=16,m=32,K=64,x=128,B=256,p=512,S=1024,Y=2048,P=4096,j=8192,$n=16384,pn=32768,Nt=65536,Kn=1<<18,hn=1<<19,on=Symbol("$state"),Pt=Symbol("legacy props");function dn(n){return n===this.v}function Zn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yn(n){return!Zn(n,this.v)}function zn(n){throw new Error("effect_in_teardown")}function Wn(){throw new Error("effect_in_unowned_derived")}function Jn(n){throw new Error("effect_orphan")}function Qn(){throw new Error("effect_update_depth_exceeded")}function bt(){throw new Error("hydration_failed")}function Ct(n){throw new Error("props_invalid_value")}function Ft(){throw new Error("state_descriptors_fixed")}function qt(){throw new Error("state_prototype_fixed")}function Xn(){throw new Error("state_unsafe_local_read")}function nt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Lt(){Z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:dn,version:0}}function Mt(n){return tt(rn(n))}function Yt(n,t=!1){var e;const r=rn(n);return t||(r.equals=yn),Z&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function tt(n){return o!==null&&o.f&E&&(T===null?dt([n]):T.push(n)),n}function jt(n,t){return o!==null&&ln()&&o.f&(E|tn)&&(T===null||!T.includes(n))&&nt(),rt(n,t)}function rt(n,t){return n.equals(t)||(n.v=t,n.version=Ln(),En(n,S),ln()&&u!==null&&u.f&p&&!(u.f&m)&&(c!==null&&c.includes(n)?(g(u,S),W(u)):A===null?yt([n]):A.push(n))),t}function En(n,t){var r=n.reactions;if(r!==null)for(var e=ln(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&S||!e&&a===u||(g(a,t),i&(p|x)&&(i&E?En(a,Y):W(a)))}}const Ht=1,Ut=2,Bt=4,Vt=8,Gt=16,$t=4,Kt=1,Zt=2,et="[",st="[!",lt="]",wn={},zt=Symbol();function Tn(n){console.warn("hydration_mismatch")}let O=!1;function Wt(n){O=n}let w;function F(n){if(n===null)throw Tn(),wn;return w=n}function Jt(){return F(k(w))}function Qt(n){if(O){if(k(w)!==null)throw Tn(),wn;w=n}}function Xt(n=1){if(O){for(var t=n,r=w;t--;)r=k(r);w=r}}function nr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===lt){if(n===0)return t;n-=1}else(r===et||r===st)&&(n+=1)}var e=k(t);t.remove(),t=e}}var fn,at,mn,gn;function tr(){if(fn===void 0){fn=window,at=document;var n=Element.prototype,t=Node.prototype;mn=un(t,"firstChild").get,gn=un(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function J(n=""){return document.createTextNode(n)}function Q(n){return mn.call(n)}function k(n){return gn.call(n)}function rr(n,t){if(!O)return Q(n);var r=Q(w);if(r===null)r=w.appendChild(J());else if(t&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function er(n,t){if(!O){var r=Q(n);return r instanceof Comment&&r.data===""?k(r):r}return w}function sr(n,t=1,r=!1){let e=O?w:n;for(var s;t--;)s=e,e=k(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=J();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function lr(n){n.textContent=""}function ut(n){var t=E|S;u===null?t|=x:u.f|=hn;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:_,deps:null,equals:dn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function ar(n){const t=ut(n);return t.equals=yn,t}function An(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?en(e):C(e)}}}function ot(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function Sn(n){var t,r=u;$(ot(n));try{An(n),t=Mn(n)}finally{$(r)}return t}function Rn(n){var t=Sn(n),r=(D||n.f&x)&&n.deps!==null?Y:p;g(n,r),n.equals(t)||(n.v=t,n.version=Ln())}function en(n){An(n),L(n,0),g(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function On(n){u===null&&o===null&&Jn(),o!==null&&o.f&x&&Wn(),sn&&zn()}function it(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function b(n,t,r,e=!0){var s=(n&K)!==0,l=u,a={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{_n(!0),z(a),a.f|=$n}catch(f){throw C(a),f}finally{_n(i)}}else t!==null&&W(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&hn)===0;if(!y&&!s&&e&&(l!==null&&it(a,l),o!==null&&o.f&E)){var h=o;(h.children??(h.children=[])).push(a)}return a}function ur(n){const t=b(M,null,!1);return g(t,p),t.teardown=n,t}function or(n){On();var t=u!==null&&(u.f&m)!==0&&_!==null&&!_.m;if(t){var r=_;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=xn(n);return e}}function ir(n){return On(),ft(n)}function fr(n){const t=b(K,n,!0);return()=>{C(t)}}function xn(n){return b(vn,n,!1)}function ft(n){return b(M,n,!0)}function _r(n){return _t(n)}function _t(n,t=0){return b(M|tn|t,n,!0)}function cr(n,t=!0){return b(M|m,n,!0,t)}function kn(n){var t=n.teardown;if(t!==null){const r=sn,e=o;cn(!0),G(null);try{t.call(null)}finally{cn(r),G(e)}}}function Dn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)en(t[r])}}function In(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;C(r,t),r=e}}function ct(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||C(t),t=r}}function C(n,t=!0){var r=!1;if((t||n.f&Kn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}In(n,t&&!r),Dn(n),L(n,0),g(n,j);var a=n.transitions;if(a!==null)for(const y of a)y.stop();kn(n);var i=n.parent;i!==null&&i.first!==null&&Nn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Nn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function vr(n,t){var r=[];Pn(n,r,!0),vt(r,()=>{C(n),t&&t()})}function vt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Pn(n,t,r){if(!(n.f&P)){if(n.f^=P,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&pn)!==0||(e.f&m)!==0;Pn(e,t,l?r:!1),e=s}}}function pr(n){bn(n,!0)}function bn(n,t){if(n.f&P){H(n)&&z(n),n.f^=P;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&pn)!==0||(r.f&m)!==0;bn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let V=!1,X=[];function Cn(){V=!1;const n=X.slice();X=[],Gn(n)}function hr(n){V||(V=!0,queueMicrotask(Cn)),X.push(n)}function pt(){V&&Cn()}const Fn=0,ht=1;let U=Fn,q=!1,I=!1,sn=!1;function _n(n){I=n}function cn(n){sn=n}let R=[],N=0;let o=null;function G(n){o=n}let u=null;function $(n){u=n}let T=null;function dt(n){T=n}let c=null,d=0,A=null;function yt(n){A=n}let qn=0,D=!1,_=null;function Ln(){return++qn}function ln(){return!Z||_!==null&&_.l===null}function H(n){var a,i;var t=n.f;if(t&S)return!0;if(t&Y){var r=n.deps,e=(t&x)!==0;if(r!==null){var s;if(t&B){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rn(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||g(n,p)}return!1}function Et(n,t,r){throw n}function Mn(n){var an;var t=c,r=d,e=A,s=o,l=D,a=T,i=_,y=n.f;c=null,d=0,A=null,o=y&(m|K)?null:n,D=!I&&(y&x)!==0,T=null,_=n.ctx;try{var h=(0,n.fn)(),f=n.deps;if(c!==null){var v;if(L(n,d),f!==null&&d>0)for(f.length=d+c.length,v=0;v<c.length;v++)f[d+v]=c[v];else n.deps=f=c;if(!D)for(v=d;v<f.length;v++)((an=f[v]).reactions??(an.reactions=[])).push(n)}else f!==null&&d<f.length&&(L(n,d),f.length=d);return h}finally{c=t,d=r,A=e,o=s,D=l,T=a,_=i}}function wt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&E&&(c===null||!c.includes(t))&&(g(t,Y),t.f&(x|B)||(t.f^=B),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)wt(n,r[e])}function z(n){var t=n.f;if(!(t&j)){g(n,p);var r=u;u=n;try{t&tn?ct(n):In(n),Dn(n),kn(n);var e=Mn(n);n.teardown=typeof e=="function"?e:null,n.version=qn}catch(s){Et(s)}finally{u=r}}}function Yn(){N>1e3&&(N=0,Qn()),N++}function jn(n){var t=n.length;if(t!==0){Yn();var r=I;I=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var l=[];Hn(s,l),Tt(l)}}finally{I=r}}}function Tt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|P))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nn(e):e.fn=null))}}function mt(){if(q=!1,N>1001)return;const n=R;R=[],jn(n),q||(N=0)}function W(n){U===Fn&&(q||(q=!0,queueMicrotask(mt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(K|m)){if(!(r&p))return;t.f^=p}}R.push(t)}function Hn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&p)!==0;if(!a&&!(s&P))if(s&M){l?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&vn&&e.push(r);var y=r.next;if(y===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=y}for(var f=0;f<e.length;f++)i=e[f],t.push(i),Hn(i,t)}function Un(n){var t=U,r=R;try{Yn();const s=[];U=ht,R=s,q=!1,jn(r);var e=n==null?void 0:n();return pt(),(R.length>0||s.length>0)&&Un(),N=0,e}finally{U=t,R=r}}async function dr(){await Promise.resolve(),Un()}function yr(n){var f;var t=n.f,r=(t&E)!==0;if(r&&t&j){var e=Sn(n);return en(n),e}if(o!==null){T!==null&&T.includes(n)&&Xn();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&u!==null&&u.f&p&&!(u.f&m)&&A.includes(n)&&(g(u,S),W(u))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&E){var y=a;i=y,a=y.parent}else{var h=a;(f=h.deriveds)!=null&&f.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(l=n,H(l)&&Rn(l)),n.v}function Er(n){const t=o;try{return o=null,n()}finally{o=t}}const gt=~(S|Y|p);function g(n,t){n.f=n.f&gt|t}function wr(n,t=!1,r){_={p:_,c:null,e:null,m:!1,s:n,x:null,l:null},Z&&!t&&(_.l={s:null,u:null,r1:[],r2:rn(!1)})}function Tr(n){const t=_;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),G(l.reaction),xn(l.fn)}}finally{$(r),G(e)}}_=t.p,t.m=!0}return{}}function mr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&on in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=Vn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{$n as $,w as A,Rt as B,G as C,$ as D,pn as E,At as F,o as G,u as H,J as I,Kn as J,et as K,k as L,Wt as M,F as N,Q as O,tr as P,wn as Q,Jt as R,lt as S,Tn as T,bt as U,lr as V,St as W,fr as X,Kt as Y,Zt as Z,tn as _,Dt as a,xn as a0,kt as a1,hr as a2,$t as a3,at as a4,on as a5,Ot as a6,xt as a7,rn as a8,Ft as a9,zt as aa,un as ab,qt as ac,Vn as ad,st as ae,nr as af,pr as ag,vr as ah,ft as ai,Ct as aj,Nt as ak,Bt as al,yn as am,m as an,K as ao,Ht as ap,Z as aq,Ut as ar,Vt as as,Pt as at,ar as au,Gt as av,Un as aw,dr as ax,Mt as ay,Zn as az,ir as b,or as c,_ as d,Lt as e,It as f,yr as g,mr as h,ut as i,er as j,_r as k,Tr as l,Yt as m,Xt as n,rr as o,wr as p,Qt as q,Gn as r,jt as s,ur as t,Er as u,sr as v,_t as w,cr as x,C as y,O as z};