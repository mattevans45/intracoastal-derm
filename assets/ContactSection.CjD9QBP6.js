import{r as e,j as a,I as t,J as s}from"./vendor.tRZekmLq.js";const l=()=>{const[l,n]=e.useState({name:"",email:"",message:""}),o=e=>{const{name:a,value:t}=e.target;n({...l,[a]:t})},[i,r]=e.useState(!1),m=()=>{r(!i)};return a.jsx("section",{className:"container w-full mx-auto overflow-hidden text-gray-600 body-font",children:a.jsxs("div",{className:"py-10 mx-5",children:[a.jsxs("div",{className:"rounded-xl relative mb-4 lg:mb-0",children:[a.jsx("iframe",{className:"block top-0 w-full h-[90dvh] rounded-lg",loading:"lazy",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.623264414451!2d-78.0224513612766!3d34.21672311123845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1932ebadfab9%3A0x2861072cfbf4756!2s509%20Olde%20Waterford%20Way%20STE%20103%2C%20Leland%2C%20NC%2028451!5e0!3m2!1sen!2sus!4v1704332166267!5m2!1sen!2sus",title:"Intracoastal Dermatology Office Location",allowFullScreen:""}),i?a.jsxs("div",{className:"bg-white z-30 flex flex-nowrap items-center justify-end mx-auto absolute bottom-0 w-full py-2 rounded shadow-md transition-all duration-300 ease-in-out",children:[a.jsx("h5",{className:"title-font font-semibold text-center transition-all duration-300 ease-in-out text-gray-900 tracking-widest mx-4 ",children:"Intracoastal Dermatology"}),a.jsx("button",{onClick:m,className:"text-white flex bg-slate-500/75 border-0 py-0 w-10 h-7 justify-center items-center mr-4 px-3 focus:outline-none hover:bg-slate-600 rounded text-lg",children:a.jsx(t,{})})]}):a.jsxs("div",{className:"bg-white flex flex-wrap z-30 items-start absolute bottom-0  w-full rounded shadow-md transition-all duration-300 ease-in-out",children:[a.jsxs("div",{className:"lg:w-1/2 py-2 px-6",children:[a.jsx("button",{onClick:m,className:"text-white absolute right-0 top-0 bg-slate-500/75 border-0 py-2 px-3  focus:outline-none hover:bg-slate-600 rounded text-lg",children:a.jsx(s,{})}),a.jsx("h2",{className:"font-semibold text-gray-900 tracking-widest text-sm",children:"OFFICE ADDRESS"}),a.jsxs("p",{className:"mt-1 text-gray-950",children:["509 Olde Waterford Way",a.jsx("br",{}),"Suite 103 ",a.jsx("br",{}),"Leland, NC 28451"]})]}),a.jsxs("div",{className:"flex flex-col lg:w-1/2 px-6 mt-4 lg:mt-0",children:[a.jsx("h2",{className:"font-semibold text-gray-900",children:"EMAIL"}),a.jsx("a",{href:"mailto:intracoastaldermatology@gmail.com",className:"text-sm text-[#30648B] leading-tight",children:"intracoastaldermatology@gmail.com"}),a.jsx("h2",{className:"font-semibold text-gray-900 tracking-widest text-xs mt-4",children:"PHONE"}),a.jsx("p",{className:"leading-relaxed",children:"(910) 631-0301"})]})]})]}),a.jsxs("div",{className:"rounded-xl mt-10 p-4 bg-white",children:[a.jsx("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"Contact"}),a.jsx("p",{className:"leading-relaxed mb-5 text-gray-600",children:"Send us a message to schedule an appointment, consultation, or anything else!"}),a.jsxs("form",{onSubmit:e=>{e.preventDefault();const{name:a,email:t,message:s}=l,o=`mailto:intracoastaldermatology@gmail.com?subject=${encodeURIComponent("Website Contact Form Submission")}&body=${encodeURIComponent(`Name: ${a}\nEmail: ${t}\n\nMessage:\n${s}`)}`;window.location.href=o,n({name:"",email:"",message:""})},children:[a.jsxs("div",{className:"relative mb-4",children:[a.jsx("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:"Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:l.name,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:l.email,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"Message"}),a.jsx("textarea",{id:"message",name:"message",value:l.message,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]}),a.jsx("button",{type:"submit",className:"text-white bg-[#30648B] border-0 py-2 px-6 focus:outline-none hover:bg-[#30648B]/90 rounded text-lg",children:"Send Message"})]}),a.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Thank you!"})]})]})})};export{l as default};
