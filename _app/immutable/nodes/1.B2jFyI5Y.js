import{a as _,t as v}from"../chunks/disclose-version.DNHKse1k.js";import"../chunks/legacy.DaQ8jmHU.js";import{b as h,c as f,d as $,u as x,r as u,g as d,f as k,h as y,i as j,p as q,j as E,k as S,l as w,o as l,q as g,v as z}from"../chunks/runtime.p9rnjhnO.js";import{s as m}from"../chunks/render.By6D1wzD.js";import{s as A,a as B}from"../chunks/store.DewEWdPg.js";import{s as C}from"../chunks/entry.Ci_2BXgu.js";function D(s=!1){const t=$,e=t.l.u;if(!e)return;let n=()=>y(t.s);if(s){let a=0,r={};const c=j(()=>{let i=!1;const p=t.s;for(const o in p)p[o]!==r[o]&&(r[o]=p[o],i=!0);return i&&a++,a});n=()=>d(c)}e.b.length&&h(()=>{b(t,n),u(e.b)}),f(()=>{const a=x(()=>e.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&f(()=>{b(t,n),u(e.a)})}function b(s,t){if(s.l.s)for(const e of s.l.s)d(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function O(s,t){q(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=E(a),c=l(r,!0);g(r);var i=z(r,2),p=l(i,!0);g(i),S(()=>{var o;m(c,n().status),m(p,(o=n().error)==null?void 0:o.message)}),_(s,a),w()}export{O as component};