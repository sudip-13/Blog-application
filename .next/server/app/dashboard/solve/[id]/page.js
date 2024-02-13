(()=>{var e={};e.id=970,e.ids=[970],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},67622:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>c,routeModule:()=>x,tree:()=>d});var a=t(50482),s=t(69108),o=t(62563),i=t.n(o),l=t(68300),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["dashboard",{children:["solve",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,46926)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\solve\\[id]\\page.jsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,35944)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\solve\\[id]\\loading.js"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,21432)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\solve\\loading.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,96339)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,87466)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,82917)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,65016)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,1429)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\solve\\[id]\\page.jsx"],h="/dashboard/solve/[id]/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/solve/[id]/page",pathname:"/dashboard/solve/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5366:(e,r,t)=>{Promise.resolve().then(t.bind(t,77662))},77662:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var a=t(95344),s=t(3729),o=t(8014),i=t(69697);t(45996);var l=t(8428);let n=({params:e})=>{let r=decodeURIComponent(e.id),[t,n]=(0,s.useState)(""),[d,c]=(0,s.useState)(""),[h,p]=(0,s.useState)(""),x=o.Z.get("cookie-1"),u=(0,l.useRouter)();(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("http://localhost:8080/getuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:x})}),r=await e.json();if(r&&r.username){let e=r.username.email,t=r.username.username;p(t),c(e)}else throw Error("Failed to fetch user data or username is undefined")}catch(e){}})()},[x]);let g=async e=>{e.preventDefault();try{if((await fetch("http://localhost:8080/addcomment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r,authorEmail:d,authorName:h,description:t})})).ok)i.toast.success("post published",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),setTimeout(()=>{u.push("/dashboard/solve")},1e3);else throw Error("Failed to fetch comments")}catch(e){i.toast.error("Failed to publish post",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),console.error("Failed to publish post",e)}};return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"ml-80 mt-28 mr-10",children:[a.jsx("h1",{className:"mb-8 text-yellow-500 font-semibold",children:r}),a.jsx("div",{children:(0,a.jsxs)("form",{onSubmit:g,children:[(0,a.jsxs)("div",{className:"w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 border-b dark:border-gray-600",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1 rtl:space-x-reverse sm:pe-4",children:[(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 20",children:a.jsx("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",d:"M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"})}),a.jsx("span",{className:"sr-only",children:"Attach file"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:a.jsx("path",{d:"M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"})}),a.jsx("span",{className:"sr-only",children:"Embed map"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[a.jsx("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),a.jsx("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})]}),a.jsx("span",{className:"sr-only",children:"Upload image"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[a.jsx("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"}),a.jsx("path",{d:"M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"})]}),a.jsx("span",{className:"sr-only",children:"Format code"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"})}),a.jsx("span",{className:"sr-only",children:"Add emoji"})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4",children:[(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 18",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"})}),a.jsx("span",{className:"sr-only",children:"Add list"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"})}),a.jsx("span",{className:"sr-only",children:"Settings"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[a.jsx("path",{d:"M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"}),a.jsx("path",{d:"M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"})]}),a.jsx("span",{className:"sr-only",children:"Timeline"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[a.jsx("path",{d:"M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"}),a.jsx("path",{d:"M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]}),a.jsx("span",{className:"sr-only",children:"Download"})]})]})]}),(0,a.jsxs)("button",{type:"button","data-tooltip-target":"tooltip-fullscreen",className:"p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[a.jsx("svg",{className:"w-4 h-4","aria-hidden":"true",fill:"none",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5m0 6-5 5"})}),a.jsx("span",{className:"sr-only",children:"Full screen"})]}),(0,a.jsxs)("div",{id:"tooltip-fullscreen",role:"tooltip",className:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",children:["Show full screen",a.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]}),a.jsx("div",{className:"px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800",children:a.jsx("textarea",{id:"editor",rows:"8",className:"block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",placeholder:"Write an article...",onChange:e=>n(e.target.value.toLowerCase()),required:!0})})]}),a.jsx("button",{type:"submit",className:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",children:"Publish post"})]})})]})})}},35944:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(25036);t(40002);let s=()=>a.jsx("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"})]})})},46926:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>s,default:()=>i});let a=(0,t(86843).createProxy)(String.raw`D:\Projects\Next-Appliation\blog-application\app\dashboard\solve\[id]\page.jsx`),{__esModule:s,$$typeof:o}=a,i=a.default},21432:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(25036);t(40002);let s=()=>a.jsx("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"})]})})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,19,697,976],()=>t(67622));module.exports=a})();