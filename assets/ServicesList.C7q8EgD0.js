import{k as e,j as t,L as s,b as a,l as r,F as i,A as l,m as o,s as n,M as c,n as h,G as m,g as d}from"./index.V5yfC9Ni.js";import{r as x}from"./vendor.CbKhAOLC.js";function g(t){return e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Medical_Clipboard"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.44,3.5H15.75V2.97a.949.949,0,0,0-1-.91H9.25a.949.949,0,0,0-1,.91V3.5H6.56A2.5,2.5,0,0,0,4.06,6V19.44a2.5,2.5,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V6A2.5,2.5,0,0,0,17.44,3.5ZM9.25,3.06l5.5.01V4.19c0,.61-.69,1.12-1.5,1.12h-2.5c-.82,0-1.5-.51-1.5-1.12Zm9.69,16.38a1.511,1.511,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6a1.5,1.5,0,0,1,1.5-1.5H8.28a2.4,2.4,0,0,0,2.47,1.81h2.5A2.4,2.4,0,0,0,15.72,4.5h1.72A1.5,1.5,0,0,1,18.94,6Z"},child:[]},{tag:"path",attr:{d:"M14.5,12.71a.5.5,0,0,1-.5.5H12.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5H14A.508.508,0,0,1,14.5,12.71Z"},child:[]}]}]}]})(t)}const u=x.memo((({service:e,category:i,setMobileMenuOpen:l})=>t.jsx("li",{className:"w-full rounded-lg bg-gray-100 flex justify-self-center  drop-shadow-sm hover:animate-pulse-slow hover:bg-gray-100 hover:shadow-lg hover:ring-2 hover:ring-white transition-colors duration-200",children:t.jsxs(s,{onClick:()=>l(!1),to:`/services/${i}/${a(e.name)}`,className:"flex items-center justify-between p-3 w-full group",children:[t.jsxs("div",{className:"flex prose items-center",children:[t.jsx(g,{className:"h-5 w-5 mr-3 prose-xl text-gray-600 flex-shrink-0"}),t.jsx("span",{className:" group-hover:text-blue-600 transition-colors font-500 leading-3 tracking-normal text-center text-pretty font-lato duration-200",children:e.name})]}),t.jsx(r,{className:"h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"})]})}))),p={general:h,cosmetic:m,surgical:d},v=x.memo((({category:e,services:s,setMobileMenuOpen:a})=>{const[r,n]=x.useState(!1),[h,m]=x.useState(!1),d=h?s:s.slice(0,3),g=p[e]||c;return t.jsxs("div",{className:"mb-2 w-full font-cursive",children:[t.jsxs("button",{onClick:()=>n(!r),className:"flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 text-left font-title font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-50 active:bg-slate-100",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(g,{className:"mr-8 h-6 w-6 text-gray-600"}),t.jsx("span",{className:"transition-colors duration-200 hover:text-[#30648B]",children:e.charAt(0).toUpperCase()+e.slice(1)})]}),t.jsx(i,{className:"h-5 w-5 text-gray-600 transition-transform duration-200 "+(r?"rotate-180":"")})]}),t.jsx(l,{children:r&&t.jsx(o.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"w-full",children:t.jsxs("ul",{className:"mt-2 w-full flex-1 space-y-2",children:[d.map((s=>t.jsx(u,{service:s,category:e,setMobileMenuOpen:a},s.name))),s.length>3&&t.jsx("button",{onClick:()=>m(!h),className:"ml-3 mt-3 rounded-lg bg-gray-600 px-3 py-1 text-sm text-white transition-colors duration-200 hover:scale-x-105 hover:bg-white hover:text-[#30648B]",children:h?"Show less":"Show more"})]})})})]})})),f=x.memo((({setMobileMenuOpen:e})=>t.jsx("div",{className:"mt-2 w-full space-y-4 px-2",children:Object.entries(n).map((([s,a])=>t.jsx(v,{category:s,services:a,setMobileMenuOpen:e},s)))})));export{f as default};
