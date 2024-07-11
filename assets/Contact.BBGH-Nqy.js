import{r as e,j as t,D as a}from"./vendor.tRZekmLq.js";const s=()=>{const[s,n]=e.useState({name:"",email:"",message:""}),o=e=>{const{name:t,value:a}=e.target;n({...s,[t]:a})};return t.jsxs("section",{className:"container max-w-4xl mx-auto p-6 z-10",children:[t.jsxs(a,{children:[t.jsx("title",{children:"Contact - Intracoastal Dermatology"}),t.jsx("meta",{name:"description",content:"Contact Intracoastal Dermatology to schedule an appointment, consultation, or for any inquiries."}),t.jsx("link",{rel:"canonical",href:"https://intracoastal-dermatology.com/contact"}),t.jsx("meta",{property:"og:title",content:"Contact - Intracoastal Dermatology"}),t.jsx("meta",{property:"og:description",content:"Contact Intracoastal Dermatology to schedule an appointment, consultation, or for any inquiries."}),t.jsx("meta",{property:"og:url",content:"https://intracoastal-dermatology.com/contact"})]}),t.jsxs("div",{className:"flex justify-center mb-10 lg:flex-row",children:[t.jsxs("div",{className:"title-font text-center transition-all duration-300 ease-in-out text-gray-900 tracking-widest mx-4",children:[t.jsx("h2",{className:"font-semibold text-gray-900 tracking-widest text-sm",children:"OFFICE ADDRESS"}),t.jsxs("p",{className:"mt-1 text-gray-950",children:["509 Olde Waterford Way",t.jsx("br",{}),"Suite 103 ",t.jsx("br",{}),"Leland, NC 28451"]})]}),t.jsxs("div",{className:"flex flex-col lg:w-1/2 px-6 mt-4 lg:mt-0",children:[t.jsx("h2",{className:"font-semibold text-gray-900",children:"EMAIL"}),t.jsx("a",{href:"mailto:intracoastaldermatology@gmail.com",className:"text-md overflow-y-auto text-[#30648B] leading-tight max-w-full break-all",children:"intracoastaldermatology@gmail.com"}),t.jsx("h2",{className:"font-semibold text-gray-900 tracking-widest text-sm mt-4",children:"PHONE"}),t.jsx("p",{className:"leading-relaxed",children:"(910) 631-0301"})]})]}),t.jsxs("div",{className:"flex flex-col justify-center items-center min-h-screen mt-10 rounded-lg bg-white p-2",children:[t.jsx("h2",{className:"mb-8 text-gray-600 text-center text-4xl font-bold",children:"Appointment Form"}),t.jsx("div",{className:"w-full max-w-4xl  bg-white rounded-lg shadow-lg",children:t.jsx("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScUZCOgPHXlIyHcbbIIInU8Ud6PeUqt_3h-pxqk2_LTXihmtA/viewform?embedded=true",className:"w-full h-screen rounded-lg",title:"Appointment Form",children:"Loading…"})})]}),t.jsxs("div",{className:"justify-center rounded-lg p-4 mt-10 bg-white flex flex-col mx-10",children:[t.jsx("h2",{className:"text-gray-900 text-lg mb-1 font-medium title-font",children:"Contact"}),t.jsx("p",{className:"leading-relaxed mb-5 text-gray-600",children:"Send us a message to schedule an appointment, consultation, or anything else!"}),t.jsxs("form",{onSubmit:e=>{e.preventDefault();const{name:t,email:a,message:o}=s,l=`mailto:intracoastaldermatology@gmail.com?subject=${encodeURIComponent("Website Contact Form Submission")}&body=${encodeURIComponent(`Name: ${t}\nEmail: ${a}\n\nMessage:\n${o}`)}`;window.location.href=l,n({name:"",email:"",message:""})},children:[t.jsxs("div",{className:"relative mb-4",children:[t.jsx("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:"Name"}),t.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),t.jsxs("div",{className:"relative mb-4",children:[t.jsx("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),t.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),t.jsxs("div",{className:"relative mb-4",children:[t.jsx("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"Message"}),t.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:o,className:"w-full bg-white rounded border border-gray-300 focus:border-[#30648B] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]}),t.jsx("button",{type:"submit",className:"text-white bg-[#30648B] border-0 py-2 px-6 focus:outline-none hover:bg-[#30648B]/90 rounded text-lg",children:"Send Message"})]}),t.jsx("p",{className:"text-xs text-gray-500 mt-3",children:"Thank you!"})]})]})};export{s as default};
