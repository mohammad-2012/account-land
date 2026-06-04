import{M as e,l as d,c as m,L as c,z as x,x as i,y as p,m as u,J as h}from"./index-D0Igh7f3.js";import{u as g}from"./DarkModeShadow-CSe2cAzg.js";import{B as f}from"./Background-B052ESPM.js";const b=()=>e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 px-6 py-2 rounded-full mb-6 backdrop-blur-sm animate-fadeInDown",children:[e.jsx(d,{className:"text-neon-purple animate-pulse"}),e.jsx("span",{className:"text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text ",style:{color:"var(--neon-cyan)"},children:"ویژه و پریمیوم"})]}),e.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-heading animate-fadeInUp",children:["اکانت‌های"," ",e.jsx("span",{style:{color:"var(--neon-cyan)"},className:"bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint bg-clip-text ",children:"هوش مصنوعی"})]}),e.jsx("p",{className:"text-lg md:text-xl text-muted max-w-3xl mx-auto animate-fadeInUp animation-delay-150",children:"بهترین اکانت‌های پریمیوم هوش مصنوعی با کیفیت عالی و قیمت مناسب"})]}),v=({product:a,darkModeShadow:t,isDarkMode:s})=>{let n=0;if(a.oldPrice){const o=parseFloat(a.price.toString().replace(/,/g,"").replace(" تومان","")),l=parseFloat(a.oldPrice.toString().replace(/,/g,"").replace(" تومان",""));n=Math.round((1-o/l)*100)}const r=()=>a.category==="ai"?e.jsx("svg",{className:"w-20 h-20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}):a.category==="telegram"?e.jsxs("svg",{className:"w-20 h-20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 14l-4-4m0 0l4-4m-4 4h8"})]}):e.jsx("svg",{className:"w-20 h-20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})});return e.jsx("div",{className:"group animate-fadeInUp",children:e.jsxs("div",{className:"relative h-full overflow-hidden transition-all duration-200 rounded-2xl hover:transform hover:-translate-y-1",style:{boxShadow:t},children:[e.jsxs("div",{className:`absolute top-3 right-3 z-20 bg-gradient-to-r ${a.color||"from-blue-500 to-cyan-500"} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`,children:[e.jsx(d,{className:"text-xs text-yellow-300"}),a.badge]}),e.jsxs("div",{className:`p-5 ${s?"bg-white/5":"bg-white/80"} backdrop-blur-sm border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-200 rounded-2xl h-full flex flex-col relative overflow-hidden`,children:[e.jsx("div",{className:"absolute inset-0 transition-all duration-300 pointer-events-none bg-gradient-to-r from-neon-cyan/0 via-neon-purple/0 to-neon-mint/0 group-hover:from-neon-cyan/5 group-hover:via-neon-purple/5 group-hover:to-neon-mint/5"}),e.jsx("div",{className:"relative h-48 mb-4 overflow-hidden rounded-xl",children:e.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl",children:e.jsx("div",{className:`text-6xl ${a.category==="ai"?"text-purple-500":"text-blue-500"}`,children:r()})})}),e.jsxs("div",{className:"mb-3 text-center",children:[e.jsx("h2",{className:"text-xl font-bold text-heading",children:a.name}),e.jsx("p",{className:"mt-1 text-xs leading-relaxed text-muted",children:a.shortDesc})]}),e.jsxs("div",{className:"mb-4 text-center",children:[e.jsxs("div",{className:"text-3xl font-bold text-[var(--color-cta)]",children:[a.price,e.jsx("span",{className:"text-sm text-muted",children:" تومان"})]}),a.oldPrice&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"text-sm line-through text-muted",children:[a.oldPrice," تومان"]}),e.jsxs("div",{className:"mt-1 text-xs text-green-500",children:[n,"% تخفیف ویژه"]})]})]}),e.jsxs("div",{className:"flex-grow mb-4 space-y-2",children:[a.features.slice(0,3).map((o,l)=>e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx(m,{className:"flex-shrink-0 text-xs text-green-500"}),e.jsx("span",{className:"text-secondary",children:o})]},l)),a.features.length>3&&e.jsxs("div",{className:"pt-1 text-xs text-center text-muted",children:["+",a.features.length-3," امکانات دیگر"]})]}),e.jsx("div",{className:"mt-2",children:e.jsxs(c,{to:`/checkout/${a.purchaseLink}`,className:"w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 group/site relative overflow-hidden border border-neon-cyan/40 hover:border-neon-cyan text-sm",style:{background:s?"rgba(0, 242, 255, 0.05)":"rgba(8, 145, 178, 0.05)",color:s?"#00f2ff":"#0891b2"},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 translate-x-[-100%] group-hover/site:translate-x-[100%] transition-transform duration-300"}),e.jsx(x,{size:14,className:"relative z-10"}),e.jsx("span",{className:"relative z-10",children:"مشاهده بقیه امکانات و خرید"})]})})]})]})})},y=({products:a,darkModeShadow:t,isDarkMode:s})=>e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6",children:a.map((n,r)=>e.jsx("div",{className:"animate-fadeInUp",style:{animationDelay:`${r*100}ms`},children:e.jsx(v,{product:n,darkModeShadow:t,isDarkMode:s})},n.id))}),j=()=>e.jsx("div",{className:"mt-12 sm:mt-16 text-center animate-fadeInUp animation-delay-200",children:e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r to-neon-mint rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"}),e.jsxs("div",{className:"relative bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-mint/10 backdrop-blur-md border border-neon-cyan/30 rounded-2xl px-4 sm:px-8 py-3 sm:py-5 overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"}),e.jsxs("div",{className:"flex items-center justify-center gap-2 sm:gap-3 flex-wrap",children:[e.jsx("div",{className:"relative",children:e.jsx(i,{className:"text-neon-cyan text-xl sm:text-2xl animate-rocket"})}),e.jsxs("div",{className:"text-center",style:{color:"var(--neon-cyan)"},children:[e.jsx("span",{className:"text-sm sm:text-lg font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-mint bg-clip-text",children:"اکانت‌های بیشتری به زودی اضافه خواهد شد..."}),e.jsxs("div",{className:"flex items-center justify-center gap-2 mt-1",children:[e.jsx("div",{className:"w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-cyan rounded-full animate-pulse"}),e.jsx("span",{className:"text-[10px] sm:text-xs text-muted",children:"در حال توسعه"}),e.jsx("div",{className:"w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-purple rounded-full animate-pulse animation-delay-300"})]})]}),e.jsx("div",{className:"relative",children:e.jsx(i,{className:"text-neon-purple text-xl sm:text-2xl animate-rocket animation-delay-500",style:{transform:"scaleX(-1)"}})})]})]})]})}),N=()=>{const a=[{icon:e.jsx(p,{className:"text-2xl sm:text-3xl"}),text:"گارانتی بازگشت وجه",desc:"تا ۷ روز ضمانت",bgGradient:"from-cyan-500/20 to-blue-500/20",borderColor:"border-cyan-500/30",glowColor:"#06b6d4"},{icon:e.jsx(u,{className:"text-2xl sm:text-3xl"}),text:"پشتیبانی ۲۴ ساعته",desc:"همیشه در دسترس",bgGradient:"from-purple-500/20 to-pink-500/20",borderColor:"border-purple-500/30",glowColor:"#a855f7"},{icon:e.jsx(m,{className:"text-2xl sm:text-3xl"}),text:"تضمین کیفیت",desc:"اصالت کالا",bgGradient:"from-emerald-500/20 to-green-500/20",borderColor:"border-emerald-500/30",glowColor:"#10b981"},{icon:e.jsx(h,{className:"text-2xl sm:text-3xl"}),text:"کاملاً اختصاصی",desc:"غیر اشتراکی",bgGradient:"from-sky-500/20 to-teal-500/20",borderColor:"border-sky-500/30",glowColor:"#06b6d4"}];return e.jsx("div",{className:"mt-12 sm:mt-16",children:e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5",children:a.map((t,s)=>e.jsx("div",{className:"group relative animate-fadeInUp",style:{animationDelay:`${s*100}ms`},children:e.jsxs("div",{className:`relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${t.bgGradient} border ${t.borderColor} backdrop-blur-sm`,style:{boxShadow:"0 4px 15px rgba(0,0,0,0.1)"},children:[e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{background:`radial-gradient(circle at 50% 0%, ${t.glowColor}30, transparent 70%)`}}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",style:{background:`linear-gradient(135deg, ${t.glowColor}20, ${t.glowColor}05)`,color:t.glowColor},children:t.icon}),e.jsx("h3",{className:"text-[11px] sm:text-xs md:text-sm font-bold text-heading mb-0.5 sm:mb-1",children:t.text}),e.jsx("p",{className:"text-[9px] sm:text-[10px] md:text-[11px] text-muted opacity-70",children:t.desc})]}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 group-hover:h-1 transition-all duration-300 rounded-full mx-auto w-0 group-hover:w-full",style:{background:`linear-gradient(90deg, transparent, ${t.glowColor}, transparent)`}})]})},s))})})},w=()=>e.jsx("style",{jsx:!0,children:`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-10px) translateX(6px);
        }
        50% {
          transform: translateY(-15px) translateX(-6px);
        }
        75% {
          transform: translateY(-10px) translateX(6px);
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }

      @keyframes rocket {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        25% {
          transform: translateY(-3px) rotate(-5deg);
        }
        75% {
          transform: translateY(3px) rotate(5deg);
        }
      }

      @keyframes bounce-slow {
        0%,
        100% {
          transform: translateY(0);
          opacity: 0.3;
        }
        50% {
          transform: translateY(-4px);
          opacity: 1;
        }
      }

      .animate-fadeInDown {
        animation: fadeInDown 0.25s ease-out;
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.25s ease-out forwards;
        opacity: 0;
      }

      .animate-float {
        animation: float 8s ease-in-out infinite;
      }

      .animate-bounce {
        animation: bounce 0.8s ease-in-out infinite;
      }

      .animate-rocket {
        animation: rocket 1.5s ease-in-out infinite;
      }

      .animate-bounce-slow {
        animation: bounce-slow 1s ease-in-out infinite;
      }

      .animation-delay-150 {
        animation-delay: 150ms;
      }

      .animation-delay-200 {
        animation-delay: 200ms;
      }

      .animation-delay-300 {
        animation-delay: 300ms;
      }

      .animation-delay-500 {
        animation-delay: 500ms;
      }

      .animation-delay-700 {
        animation-delay: 700ms;
      }

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `});function I({products:a}){const{darkModeShadow:t,isDarkMode:s}=g();return e.jsxs("div",{className:"min-h-screen pt-4",dir:"rtl",children:[e.jsx(f,{isDarkMode:s}),e.jsxs("div",{className:"container max-w-5xl px-4 mx-auto",children:[e.jsx(b,{}),e.jsx(y,{products:a,darkModeShadow:t,isDarkMode:s}),e.jsx(j,{}),e.jsx(N,{})]}),e.jsx(w,{})]})}export{I as default};
