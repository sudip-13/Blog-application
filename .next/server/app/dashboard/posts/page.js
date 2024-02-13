(()=>{var e={};e.id=929,e.ids=[929],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},87262:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var a=s(50482),r=s(69108),o=s(62563),i=s.n(o),n=s(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let d=["",{children:["dashboard",{children:["posts",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,49153)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\posts\\page.jsx"]}]},{loading:[()=>Promise.resolve().then(s.bind(s,32729)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\posts\\loading.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,96339)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,87466)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,82917)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,65016)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,1429)),"D:\\Projects\\Next-Appliation\\blog-application\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\Next-Appliation\\blog-application\\app\\dashboard\\posts\\page.jsx"],p="/dashboard/posts/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/posts/page",pathname:"/dashboard/posts",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},33947:(e,t,s)=>{Promise.resolve().then(s.bind(s,8483))},8483:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(95344),r=s(69697),o=s(3729),i=s(8014),n=s(8428);s(45996);let l=()=>{let[e,t]=(0,o.useState)(""),[s,l]=(0,o.useState)([]),[d,c]=(0,o.useState)(null),[p,u]=(0,o.useState)(!1),h=i.Z.get("cookie-1"),m=(0,n.useRouter)();(0,o.useEffect)(()=>{(async()=>{try{let s=await fetch("http://localhost:8080/getuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:h})}),a=await s.json();if(a&&a.username){let e=a.username.email;t(e)}else throw Error("Failed to fetch user data or username is undefined");try{let t=await fetch("http://localhost:8080/getposts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderEmail:e})});if(!t.ok)throw Error("Failed to fetch posts");let s=await t.json();l(s)}catch(e){console.error("Failed to fetch posts",e)}}catch(e){console.error("Failed to fetch email",e)}})()},[h,e]);let x=async e=>{m.push(`/blogs/${e}`)},g=async e=>{c(e),u(!0)},f=async()=>{try{if((await fetch("http://localhost:8080/deletequery",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:d})})).ok)r.toast.success("post deleted successfully",{position:"top-right",autoClose:900,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),setTimeout(()=>{window.location.reload()},1e3);else throw Error("Failed to delete query")}catch(e){console.log("Delete opration failed, server",e)}},b=()=>{u(!1),c(null)},v=({post:e})=>{let[t,s]=(0,o.useState)(!1),[r,i]=(0,o.useState)(!1),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,a.jsxs)("div",{className:"mb-4 mt-10",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[a.jsx("p",{className:"font-semibold cursor-pointer hover:text-blue-500",onClick:()=>x(e.query),children:e.query}),(0,a.jsxs)("div",{className:"relative",ref:n,children:[a.jsx("button",{onClick:()=>{s(!t)},className:"inline-flex p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600",type:"button",children:a.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 4 15",children:a.jsx("path",{d:"M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})})}),t&&a.jsx("div",{className:"absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 mt-2",style:{maxWidth:"10rem"},children:(0,a.jsxs)("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200",children:[a.jsx("li",{children:a.jsx("a",{href:"#",className:"hover:bg-green-500 block px-4 py-2 dark:hover:text-white",children:"Edit"})}),a.jsx("li",{children:a.jsx("a",{href:"#",onClick:()=>g(e.query),className:"block px-4 py-2 hover:bg-red-500 dark:hover:text-white",children:"Delete"})})]})})]})]}),a.jsx("span",{className:"border-b border-gray-400 block mt-2"})]})};return(0,a.jsxs)("div",{className:"mt-20 ml-80 mr-20",children:[s&&s.length>0?s.map((e,t)=>a.jsx(v,{post:e},t)):a.jsx("p",{children:"No Available posts from this account"}),p&&a.jsx("div",{id:"deleteModal",tabIndex:"-1","aria-hidden":"true",className:"fixed inset-0 z-50 overflow-hidden flex justify-center items-center",children:a.jsx("div",{className:"absolute inset-0 overflow-hidden",children:a.jsx("div",{className:"flex justify-center items-center min-h-screen",children:(0,a.jsxs)("div",{className:"relative w-full max-w-md p-4 bg-white rounded-lg shadow-xl sm:p-6",children:[a.jsx("button",{onClick:b,type:"button",className:"absolute top-0 right-0 p-2 m-2 text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900",children:a.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),(0,a.jsxs)("div",{className:"text-center",children:[a.jsx("svg",{className:"text-gray-400 w-12 h-12 mx-auto","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),a.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Are you sure?"}),a.jsx("div",{className:"mt-2",children:a.jsx("p",{className:"text-sm text-gray-500",children:"Do you really want to delete this item? This action cannot be undone."})}),(0,a.jsxs)("div",{className:"mt-4",children:[a.jsx("button",{onClick:f,type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Yes, delete"}),a.jsx("button",{onClick:b,type:"button",className:"inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cancel"})]})]})]})})})})]})}},32729:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(25036);s(40002);let r=()=>a.jsx("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"}),a.jsx("div",{className:"w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"})]})})},49153:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>r,default:()=>i});let a=(0,s(86843).createProxy)(String.raw`D:\Projects\Next-Appliation\blog-application\app\dashboard\posts\page.jsx`),{__esModule:r,$$typeof:o}=a,i=a.default}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,19,697,976],()=>s(87262));module.exports=a})();