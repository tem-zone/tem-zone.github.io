import{a as S,t as R}from"../chunks/disclose-version.DNHKse1k.js";import"../chunks/legacy.DaQ8jmHU.js";import{E as G,_ as L,$ as M,a0 as j,H as F,u as B,a1 as H,a2 as I,a as y,a3 as P,C as g,D as C,G as Z,a4 as D,o as K,q as U}from"../chunks/runtime.p9rnjhnO.js";import{a as W,h as J}from"../chunks/render.By6D1wzD.js";import"../chunks/paths.CE0eojMT.js";const Q=()=>performance.now(),d={tick:r=>requestAnimationFrame(r),now:()=>Q(),tasks:new Set};function N(r){d.tasks.forEach(t=>{t.c(r)||(d.tasks.delete(t),t.f())}),d.tasks.size!==0&&d.tick(N)}function V(r){let t;return d.tasks.size===0&&d.tick(N),{promise:new Promise(i=>{d.tasks.add(t={c:r,f:i})}),abort(){d.tasks.delete(t)}}}function q(r,t){r.dispatchEvent(new CustomEvent(t))}function X(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function x(r){const t={},i=r.split(";");for(const n of i){const[c,s]=n.split(":");if(!c||s===void 0)break;const u=X(c.trim());t[u]=s.trim()}return t}const Y=r=>r;function tt(r,t,i,n){var c=(r&P)!==0,s="in",u,l=t.inert,a,f;function h(){var o=Z,_=F;g(null),C(null);try{return u??(u=i()(t,(n==null?void 0:n())??{},{direction:s}))}finally{g(o),C(_)}}var m={is_global:c,in(){t.inert=l,a==null||a.abort(),q(t,"introstart"),a=z(t,h(),f,1,()=>{q(t,"introend"),a==null||a.abort(),a=u=void 0})},out(o){{o==null||o(),u=void 0;return}},stop:()=>{a==null||a.abort()}},p=F;if((p.transitions??(p.transitions=[])).push(m),W){var v=c;if(!v){for(var e=p.parent;e&&e.f&G;)for(;(e=e.parent)&&!(e.f&L););v=!e||(e.f&M)!==0}v&&j(()=>{B(()=>m.in())})}}function z(r,t,i,n,c){if(H(t)){var s,u=!1;return I(()=>{if(!u){var o=t({direction:"in"});s=z(r,o,i,n,c)}}),{abort:()=>{u=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(!(t!=null&&t.duration))return c(),{abort:y,deactivate:y,reset:y,t:()=>n};const{delay:l=0,css:a,tick:f,easing:h=Y}=t;var m=[];if(f&&f(0,1),a){var p=x(a(0,1));m.push(p,p)}var v=()=>1-n,e=r.animate(m,{duration:l});return e.onfinish=()=>{var o=1-n,_=n-o,E=t.duration*Math.abs(_),$=[];if(E>0){if(a)for(var b=Math.ceil(E/16.666666666666668),T=0;T<=b;T+=1){var w=o+_*h(T/b),O=a(w,1-w);$.push(x(O))}v=()=>{var k=e.currentTime;return o+_*h(k/E)},f&&V(()=>{if(e.playState!=="running")return!1;var k=v();return f(k,1-k),!0})}e=r.animate($,{duration:E,fill:"forwards"}),e.onfinish=()=>{v=()=>n,f==null||f(n,1-n),c()}},{abort:()=>{e&&(e.cancel(),e.effect=null,e.onfinish=y)},deactivate:()=>{c=y},reset:()=>{},t:()=>v()}}function rt(r){const t=r-1;return t*t*t+1}function A(r){const t=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[r,"px"]}function at(r,{delay:t=0,duration:i=400,easing:n=rt,x:c=0,y:s=0,opacity:u=0}={}){const l=getComputedStyle(r),a=+l.opacity,f=l.transform==="none"?"":l.transform,h=a*(1-u),[m,p]=A(c),[v,e]=A(s);return{delay:t,duration:i,easing:n,css:(o,_)=>`
			transform: ${f} translate(${(1-o)*m}${p}, ${(1-o)*v}${e});
			opacity: ${a-h*_}`}}var et=R(`<div class="container svelte-1qqw51h"><div><pre class="title svelte-1qqw51h">
╠════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
║░░░░░░░░░█████████████░░░░████░░░░███░███░░░░░░░░░░░████████████░░░░█████████░░░░░░██████░░░░░░████░░░░░░░░░║
║░░░░░░░░░█████████████░░░█████░░░█████████░░░░░░░░░░████████████░░░███████████░░░░████████░░░░█████░░░░░░░░░║
║░░░░░░░░░░░░░░███░░░░░░░███░░░░░███░░█░░███░░░░░░░░░░░░░░░░░███░░░███░░░░░░░███░░███░░░░███░░███░░░░░░░░░░░░║
║░░░░░░░░░░░░░░███░░░░░░░███░░░░░███░░░░░███░░░░░░░░░░░░░░░░███░░░░███░░░░░░░███░░███░░░░███░░███░░░░░░░░░░░░║
║░░░░░░░░░░░░░░█▞█░░░░░░░█▞█░░░░░█▞█░░░░░█▚█░░░░░░░░░░░░░░░▚██░░░░░█▞█░░░░░░░█▚█░░█▞█░░░░█▚█░░█▞█░░░░░░░░░░░░║
║░░░░░░░░░░░░░░█▚█░░░░░░░█▚████░░█▚█░░░░░█▞█░░░░░░░░░░░░░░▚██░░░░░░█▚█░░░░░░░█▞█░░█▚█░░░░█▞█░░█▚████░░░░░░░░░║
║░░░░░░░░░░░░░░█▞█░░░░░░░█▞████░░█▞█░░░░░█▚█░░░░░░░░░░░░░█▞█░░░░░░░█▞█░░░░░░░█▚█░░█▞█░░░░█▚█░░█▞████░░░░░░░░░║
║░░░░░░░░░░░░░░█▚█░░░░░░░█▚█░░░░░█▚█░░░░░█▞█░░░░░░░░░░░░██▚░░░░░░░░█▚█░░░░░░░█▞█░░█▚█░░░░█▞█░░█▚█░░░░░░░░░░░░║
║░░░░░░░░░░░░░░█▞█░░░░░░░█▞█░░░░░█▞█░░░░░█▚█░░░░░░░░░░░▞██░░░░░░░░░█▞█░░░░░░░█▚█░░█▞█░░░░█▚█░░█▞█░░░░░░░░░░░░║
║░░░░░░░░░░░░░░█▚█░░░░░░░█▚█░░░░░█▚█░░░░░█▞█░░░░░░░░░░█▚█░░░░░░░░░░█▚█░░░░░░░█▞█░░█▚█░░░░█▞█░░█▚█░░░░░░░░░░░░║
║░░░░░░░░░░░░░░█▞█░░░░░░░░▞████░░█▞█░░░░░█▚█░░░░░░░░░██▞█████████░░░▞█████████▚░░░█▞█░░░░█▚█░░░▞████░░░░░░░░░║
║█░░░░░░░░░░░░░█▚█░░░░░░░░░▞███░░█▚█░░░░░█▞█░░░░░░░░███▚█████████░░░░▞███████▚░░░░█▚█░░░░█▞█░░░░▞███░░░░░░░░█║
║██░░░░░░░░░░░░█▞░░░░░░░░░░░░░░░░░░░░░░░░█▚░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█▞░░░░░░░░░░░░░░░░░░░░░░░██║
║███░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░███║
║█████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█████║
║███████████████████████████████████████████▆▅▃▂▁The Tem Zone▁▂▃▅▆███████████████████████████████████████████║
║████████████████████████████████████████████████████████████████████████████████████████████████████████████║
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║   <a href="https://github.com/tem-zone">github</a>    <a href="https://bsky.app/profile/tem.zone">bsky</a>   ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╠═══════════════════════════════════════════╩════════════════════╩═══════════════════════════════════════════╣
║                                                                                                            ║
║                                                  Enjoy :)                                                  ║
║                                                                                                            ║
╠═══════════════════════════════════════════╦════════════════════╦═══════════════════════════════════════════╣
║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║    Get in touch    ║░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░║
╠═══════════════════════════════════════════╩════════════════════╩═══════════════════════════════════════════╣
║                                                                                                            ║
║    - email: tem@tem.zone                                                                                   ║
║                                                                                                            ║
╚════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre></div></div>`);function ft(r){var t=et();J(n=>{D.title="THE TEM ZONE"});var i=K(t);U(t),tt(1,i,()=>at,()=>({delay:500,duration:5e3,x:0,y:500})),S(r,t)}export{ft as component};
