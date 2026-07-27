import{j as e}from"./jsx-runtime.CZQVsTRK.js";

const t=[
  {name:"服务器业务",width:"92%",color:"hsl(var(--chart-1))",icon:"server"},
  {name:"俄剧业务",width:"82%",color:"hsl(var(--chart-2))",icon:"video"},
  {name:"TikTok业务",width:"72%",color:"hsl(var(--chart-4))",icon:"music"},
  {name:"公众号业务",width:"62%",color:"hsl(var(--chart-5))",icon:"message"},
  {name:"中俄贸易",width:"52%",color:"hsl(var(--chart-3))",icon:"trade"}
];

const r=({type:t})=>{
  const r={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};
  if(t==="server")return e.jsxs("svg",{...r,children:[
    e.jsx("rect",{x:4,y:4,width:16,height:6,rx:1.5}),
    e.jsx("rect",{x:4,y:14,width:16,height:6,rx:1.5}),
    e.jsx("path",{d:"M8 7h.01M8 17h.01M12 7h5M12 17h5"})
  ]});
  if(t==="video")return e.jsxs("svg",{...r,children:[
    e.jsx("rect",{x:3,y:5,width:18,height:14,rx:2}),
    e.jsx("path",{d:"m10 9 5 3-5 3z"})
  ]});
  if(t==="music")return e.jsxs("svg",{...r,children:[
    e.jsx("path",{d:"M9 18V5l10-2v13"}),
    e.jsx("circle",{cx:6,cy:18,r:3}),
    e.jsx("circle",{cx:16,cy:16,r:3})
  ]});
  if(t==="message")return e.jsxs("svg",{...r,children:[
    e.jsx("path",{d:"M20 14a4 4 0 0 1-4 4H9l-5 3v-7a7 7 0 1 1 16 0Z"}),
    e.jsx("path",{d:"M8 12h.01M12 12h.01M16 12h.01"})
  ]});
  return e.jsxs("svg",{...r,children:[
    e.jsx("path",{d:"M4 8h14m0 0-4-4m4 4-4 4"}),
    e.jsx("path",{d:"M20 16H6m0 0 4 4m-4-4 4-4"})
  ]});
};

const n=()=>e.jsx("section",{
  className:"flex h-full w-full flex-col justify-center gap-3 p-4 sm:gap-3.5 sm:p-5",
  "aria-label":"UNLIL 业务板块",
  children:t.map((t,n)=>e.jsxs("div",{
    className:"flex min-w-0 items-center gap-3",
    children:[
      e.jsx("span",{
        className:"flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-[#e9d3b6] shadow-[0_0_12px_rgba(233,211,182,0.08)]",
        title:t.name,
        children:e.jsx(r,{type:t.icon})
      }),
      e.jsx("div",{
        className:"min-w-0 flex-1",
        children:e.jsx("div",{
          className:"flex h-10 min-w-[7.2rem] items-center justify-center rounded-xl px-3 text-center text-sm font-semibold tracking-wide text-[#11131d] shadow-[0_4px_14px_rgba(0,0,0,0.18)] sm:h-12 sm:text-base",
          style:{width:t.width,backgroundColor:t.color},
          children:t.name
        })
      })
    ]
  },n))
});

export{n as default};
