import{a as d,t as v}from"../chunks/disclose-version.CAeTGqb1.js";import"../chunks/legacy.DSyKcS2_.js";import{u as h,l as f,m as x,o as $,r as u,q as _,t as k,v as y,w as q,p as w,f as z,x as E,k as S,s as j,y as l,z as g}from"../chunks/runtime.D6Gbojwx.js";import{s as A,a as b,b as B}from"../chunks/store.DzkEAbMI.js";import{s as C}from"../chunks/entry.DLVmLJlk.js";function D(s=!1){const t=x,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const c=q(()=>{let i=!1;const p=t.s;for(const o in p)p[o]!==r[o]&&(r[o]=p[o],i=!0);return i&&a++,a});n=()=>_(c)}e.b.length&&h(()=>{m(t,n),u(e.b)}),f(()=>{const a=$(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{m(t,n),u(e.a)})}function m(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function N(s,t){w(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=z(a),c=l(r,!0);g(r);var i=j(r,2),p=l(i,!0);g(i),E(()=>{var o;b(c,n().status),b(p,(o=n().error)==null?void 0:o.message)}),d(s,a),S()}export{N as component};