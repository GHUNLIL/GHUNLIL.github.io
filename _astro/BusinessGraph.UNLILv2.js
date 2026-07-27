import{j as e}from"./jsx-runtime.CZQVsTRK.js";

const t=[
  {name:"中俄跨境商贸",width:"68%",color:"hsl(var(--chart-1))",icon:"trade",labelClass:"text-[10px]"},
  {name:"TikTok业务",width:"43%",color:"hsl(var(--chart-2))",icon:"music",labelClass:"text-xs"},
  {name:"服务器业务",width:"38%",color:"hsl(var(--chart-4))",icon:"server",labelClass:"text-xs"},
  {name:"俄剧业务",width:"32%",color:"hsl(var(--chart-5))",icon:"video",labelClass:"text-xs"},
  {name:"公众号业务",width:"30%",color:"hsl(var(--chart-3))",icon:"message",labelClass:"text-xs"}
];

const r=({type:t})=>{
  const r={width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};
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
  className:"flex h-full w-full flex-col justify-center gap-3 p-4",
  "aria-label":"UNLIL 业务板块",
  "data-layout":"original",
  children:t.map((t,n)=>e.jsxs("div",{
    className:"flex min-w-0 items-center gap-4",
    children:[
      e.jsx("span",{
        className:"flex size-7 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-[#e9d3b6]",
        title:t.name,
        children:e.jsx(r,{type:t.icon})
      }),
      e.jsx("div",{
        className:"flex min-w-0 flex-1 items-center gap-2",
        children:[
          e.jsx("span",{
            className:"h-8 shrink-0 rounded-lg",
            style:{width:t.width,backgroundColor:t.color}
          }),
          e.jsx("span",{
            className:`shrink-0 whitespace-nowrap font-semibold text-foreground ${t.labelClass}`,
            children:t.name
          })
        ]
      })
    ]
  },n))
});

export{n as default};
