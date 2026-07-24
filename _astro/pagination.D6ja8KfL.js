import{j as i,c as o}from"./utils.DiAzy6JO.js";import{r as l}from"./index.CtnuBGm6.js";import{c as v}from"./index.FZcW60ht.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:a="",children:n,iconNode:d,...p},f)=>l.createElement("svg",{ref:f,...j,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:m("lucide",a),...p},[...d.map(([x,g])=>l.createElement(x,g)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const r=l.forwardRef(({className:s,...a},n)=>l.createElement(k,{ref:n,iconNode:t,className:m(`lucide-${b(e)}`,s),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=u("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=u("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=u("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),C=v("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background hover:bg-muted hover:text-[oklch(from_var(--color-foreground)_calc(l+0.25)_c_h)]",muted:"bg-muted text-muted-foreground hover:bg-muted/80",ghost:"hover:bg-muted hover:text-[oklch(from_var(--color-foreground)_calc(l+0.25)_c_h)] dark:hover:bg-muted/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function _({className:e,...t}){return i.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...t})}function z({className:e,...t}){return i.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...t})}function c({...e}){return i.jsx("li",{"data-slot":"pagination-item",...e})}function h({className:e,isActive:t,isDisabled:r,size:s="icon",...a}){return i.jsx("a",{"aria-current":t?"page":void 0,"data-slot":"pagination-link","data-active":t,"data-disabled":r,className:o(C({variant:t?"outline":"ghost",size:s}),r&&"pointer-events-none opacity-50",e),...a})}function E({className:e,isDisabled:t,...r}){return i.jsxs(h,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",e),isDisabled:t,...r,children:[i.jsx(y,{}),i.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function L({className:e,isDisabled:t,...r}){return i.jsxs(h,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",e),isDisabled:t,...r,children:[i.jsx("span",{className:"hidden sm:block",children:"Next"}),i.jsx(w,{})]})}function $({className:e,...t}){return i.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...t,children:[i.jsx(N,{className:"size-4"}),i.jsx("span",{className:"sr-only",children:"More pages"})]})}const B=({currentPage:e,totalPages:t,baseUrl:r})=>{const s=Array.from({length:t},(n,d)=>d+1),a=n=>n===1?r:`${r}${n}`;return i.jsx(_,{children:i.jsxs(z,{className:"flex-wrap",children:[i.jsx(c,{children:i.jsx(E,{href:e>1?a(e-1):void 0,isDisabled:e===1})}),s.map(n=>i.jsx(c,{children:i.jsx(h,{href:a(n),isActive:n===e,children:n})},n)),t>5&&i.jsx(c,{children:i.jsx($,{})}),i.jsx(c,{children:i.jsx(L,{href:e<t?a(e+1):void 0,isDisabled:e===t})})]})})};export{B as default};
