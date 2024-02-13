(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7702],{7351:function(e,s,t){Promise.resolve().then(t.bind(t,632))},1370:function(e,s){"use strict";async function t(e){let s=document.cookie.split(";").map(e=>e.trim()).find(s=>s.startsWith("".concat(e,"=")));if(!s)return null;{let[,e]=s.split("=");return e}}s.Z=t},632:function(e,s,t){"use strict";t.r(s);var r=t(3827),l=t(4090),a=t(1370),o=t(7907);s.default=()=>{let[e,s]=(0,l.useState)(""),[t,n]=(0,l.useState)(""),[i,c]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),m=(0,o.useRouter)();async function f(){let e=await (0,a.Z)("cookie-1");try{let t=await fetch("http://localhost:8080/verifyJWT",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});200===t.status?console.log("User logged in"):(console.log("You are not eligible to access this route! Please login first"),m.push("/login"));let r=await fetch("http://localhost:8080/getuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});if(r.ok){let e=(await r.json()).username.email;s(e),n(e);let t=await fetch("http://localhost:8080/counttotalquery",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderEmail:e})});if(t.ok){let e=await t.json(),s=await e;c(s)}else console.log("Internal server error");let l=await fetch("http://localhost:8080/counttotalposts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});if(l.ok){let e=await l.json(),s=await e;u(s)}else console.log("Internal server error");let a=await fetch("http://localhost:8080/counttotalcomments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authorEmail:e})});if(a.ok){let e=await a.json(),s=await e;x(s)}else console.log("Internal server error")}else console.log("Internal server error")}catch(e){console.error("Server error autologin failed",e)}}return(0,l.useEffect)(()=>{f()}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-wrap ml-64 mt-16",children:[(0,r.jsx)("div",{className:"w-full md:w-1/2 xl:w-1/3 p-6",children:(0,r.jsx)("div",{className:"bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5",children:(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)("div",{className:"flex-shrink pr-4",children:(0,r.jsx)("div",{className:"rounded-full p-5 bg-green-600",children:(0,r.jsx)("i",{className:"fa fa-wallet fa-2x fa-inverse"})})}),(0,r.jsxs)("div",{className:"flex-1 text-right md:text-center",children:[(0,r.jsx)("h2",{className:"font-bold uppercase text-gray-600",children:"Total Queries"}),(0,r.jsxs)("p",{className:"font-bold text-3xl text-black",children:[i," ",(0,r.jsx)("span",{className:"text-green-500",children:(0,r.jsx)("i",{className:"fas fa-caret-up"})})]})]})]})})}),(0,r.jsx)("div",{className:"w-full md:w-1/2 xl:w-1/3 p-6",children:(0,r.jsx)("div",{className:"bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5",children:(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)("div",{className:"flex-shrink pr-4",children:(0,r.jsx)("div",{className:"rounded-full p-5 bg-yellow-600",children:(0,r.jsx)("i",{className:"fas fa-user-plus fa-2x fa-inverse"})})}),(0,r.jsxs)("div",{className:"flex-1 text-right md:text-center",children:[(0,r.jsx)("h2",{className:"font-bold uppercase text-gray-600",children:"Comments"}),(0,r.jsxs)("p",{className:"font-bold text-3xl text-black",children:[h,(0,r.jsx)("span",{className:"text-yellow-600",children:(0,r.jsx)("i",{className:"fas fa-caret-up"})})]})]})]})})}),(0,r.jsx)("div",{className:"w-full md:w-1/2 xl:w-1/3 p-6",children:(0,r.jsx)("div",{className:"bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5",children:(0,r.jsxs)("div",{className:"flex flex-row items-center",children:[(0,r.jsx)("div",{className:"flex-shrink pr-4",children:(0,r.jsx)("div",{className:"rounded-full p-5 bg-blue-600",children:(0,r.jsx)("i",{className:"fas fa-server fa-2x fa-inverse"})})}),(0,r.jsxs)("div",{className:"flex-1 text-right md:text-center",children:[(0,r.jsx)("h2",{className:"font-bold uppercase text-gray-600",children:"Total Posts"}),(0,r.jsx)("p",{className:"font-bold text-3xl text-black",children:d})]})]})})})]}),(0,r.jsx)("div",{className:"p-4 sm:ml-64",children:(0,r.jsx)("div",{className:"p-4 rounded-lg",children:(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center rounded bg-gray-50 h-52 dark:bg-gray-800 p-6",children:[(0,r.jsx)("h3",{className:"font-bold text-white text-2xl mt-3",children:"Have Confusion?"}),(0,r.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-500 mt-3",children:"Have any queries? Let us know by posting. You will be notified in the comments box when someone resolves your query. The whole process may take some time, so lets get started!"}),(0,r.jsxs)("a",{href:"/dashboard/query",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 inline-flex items-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})}),(0,r.jsx)("span",{children:"Make a Query"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center rounded bg-gray-50 h-52 dark:bg-gray-800 p-6",children:[(0,r.jsx)("h3",{className:"font-bold text-white text-2xl mt-3",children:"Solve Query"}),(0,r.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-500 mt-3",children:"Solve other queries to helps others. You can get hired my making soluutions if it is correct. Do your best to make your crrier by community."}),(0,r.jsxs)("a",{href:"/dashboard/solve",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 inline-flex items-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})}),(0,r.jsx)("span",{children:"Solve Query"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center rounded bg-gray-50 h-52 dark:bg-gray-800 p-6",children:[(0,r.jsx)("h3",{className:"font-bold text-white text-2xl mt-3",children:"Not Designed !"}),(0,r.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-500 mt-3",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus labore dicta ab natus iste fugit voluptatem doloribus vero."}),(0,r.jsxs)("a",{href:"#",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 inline-flex items-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})}),(0,r.jsx)("span",{children:"Make a Query"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center rounded bg-gray-50 h-52 dark:bg-gray-800 p-6",children:[(0,r.jsx)("h3",{className:"font-bold text-white text-2xl mt-3",children:"Feedback"}),(0,r.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-500 mt-3",children:"Let us know how is your personal experience to browse here. Submit a form by clicking here. Your feedback is valuable for us."}),(0,r.jsxs)("a",{href:"/feedback",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 inline-flex items-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})}),(0,r.jsx)("span",{children:"Feedback"})]})]})]})})})]})}},7907:function(e,s,t){"use strict";var r=t(5313);t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}})}},function(e){e.O(0,[2971,8069,1744],function(){return e(e.s=7351)}),_N_E=e.O()}]);