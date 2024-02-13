(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3317],{2102:function(e,r,t){Promise.resolve().then(t.bind(t,6399))},1370:function(e,r){"use strict";async function t(e){let r=document.cookie.split(";").map(e=>e.trim()).find(r=>r.startsWith("".concat(e,"=")));if(!r)return null;{let[,e]=r.split("=");return e}}r.Z=t},6399:function(e,r,t){"use strict";t.r(r);var a=t(3827),s=t(4090),o=t(7907),l=t(1370),i=t(6123),n=t(5096);r.default=function(){let[e,r]=(0,s.useState)(""),[t,d]=(0,s.useState)(""),[h,c]=(0,s.useState)(""),[u,g]=(0,s.useState)(null),x=(0,o.useRouter)(),p=(0,s.useCallback)(async()=>{let e=await (0,l.Z)("cookie-1");try{let t=await fetch("http://localhost:8080/verifyJWT",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});200===t.status?console.log("User loggedin"):(console.log("You are not eligible to access this route ! Please login first"),x.push("/login"));let a=await fetch("http://localhost:8080/getuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}),s=await a.json();if(s&&s.username){let e=s.username.email;r(e)}else console.log("failed to fetch Email")}catch(e){console.error("Server error autologin failed",e)}},[x]);(0,s.useEffect)(()=>{p()},[p]);let m=async r=>{r.preventDefault();let a=new FormData;a.append("senderEmail",e),a.append("query",t),a.append("queryDescription",h),a.append("queryPic",u);try{let e=await fetch("http://localhost:8080/postnewquery",{method:"POST",body:a});if(!e.ok)throw Error("Failed to post query");await e.json(),i.toast.success("Query posted successfully",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}catch(e){i.toast.error("Failed to submit query. Please try again",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}};return(0,a.jsx)("div",{className:"ml-72 mt-32 mr-10",children:(0,a.jsxs)("form",{children:[(0,a.jsx)("p",{className:"mb-3 font-semibold font-sans text-yellow-500",children:"Include your heading here to suggest additional feeds to help resolve issue"}),(0,a.jsx)("div",{className:"px-4 py-2 bg-white rounded dark:bg-gray-800",children:(0,a.jsx)("input",{id:"comment",className:"block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Add your heading here...",onChange:e=>d(e.target.value.toLowerCase()),required:!0})}),(0,a.jsx)("p",{className:"mb-3 mt-10 font-semibold font-sans text-yellow-500",children:"Give a brief explanation of your question so that other users may comprehend it."}),(0,a.jsxs)("div",{className:"w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 border-b dark:border-gray-600",children:[(0,a.jsxs)("div",{className:"flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1 rtl:space-x-reverse sm:pe-4",children:[(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 20",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",d:"M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"})}),(0,a.jsx)("span",{className:"sr-only",children:"Attach file"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:(0,a.jsx)("path",{d:"M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"})}),(0,a.jsx)("span",{className:"sr-only",children:"Embed map"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,a.jsx)("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),(0,a.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Upload image"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[(0,a.jsx)("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"}),(0,a.jsx)("path",{d:"M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Format code"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"})}),(0,a.jsx)("span",{className:"sr-only",children:"Add emoji"})]})]}),(0,a.jsxs)("div",{className:"flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4",children:[(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 18",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"})}),(0,a.jsx)("span",{className:"sr-only",children:"Add list"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"})}),(0,a.jsx)("span",{className:"sr-only",children:"Settings"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,a.jsx)("path",{d:"M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"}),(0,a.jsx)("path",{d:"M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Timeline"})]}),(0,a.jsxs)("button",{type:"button",className:"p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsxs)("svg",{className:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,a.jsx)("path",{d:"M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"}),(0,a.jsx)("path",{d:"M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Download"})]})]})]}),(0,a.jsxs)("button",{type:"button","data-tooltip-target":"tooltip-fullscreen",className:"p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,a.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",fill:"none",viewBox:"0 0 19 19",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5m0 6-5 5"})}),(0,a.jsx)("span",{className:"sr-only",children:"Full screen"})]}),(0,a.jsxs)("div",{id:"tooltip-fullscreen",role:"tooltip",className:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700",children:["Show full screen",(0,a.jsx)("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]}),(0,a.jsx)("div",{className:"px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800",children:(0,a.jsx)("textarea",{id:"editor",rows:"8",className:"block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",placeholder:"Describe your query here...",value:n.Query,onChange:e=>c(e.target.value.toLowerCase()),required:!0})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-6 mt-7",children:[(0,a.jsx)("label",{className:"block",children:(0,a.jsx)("input",{type:"file",onChange:e=>g(e.target.files[0]),className:"mt-3 block w-full text-sm text-slate-500 file:mr-4 mr-44 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"})}),(0,a.jsx)("button",{type:"submit",className:"inline-flex px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",onClick:m,children:"Post Query"})]})]})})}},7907:function(e,r,t){"use strict";var a=t(5313);t.o(a,"useRouter")&&t.d(r,{useRouter:function(){return a.useRouter}})}},function(e){e.O(0,[3180,6123,2971,8069,1744],function(){return e(e.s=2102)}),_N_E=e.O()}]);