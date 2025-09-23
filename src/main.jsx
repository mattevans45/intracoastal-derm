// 'use-client';

// import React, { Suspense, lazy, useEffect } from "react";


// import { useRouter } from 'next/router';


// import MainLayout from "./MainLayout.jsx";
// import ServicesLayout from "./ServicesLayout.jsx";
// import LoadingSpinner from "./components/LoadingSpinner.jsx";
// import App from "./App.jsx";
// import ErrorBoundary from "./components/ErrorBoundary.jsx";


// const ScheduleAppointment = lazy(() => import("./ScheduleAppointment.jsx"));
// const Contact = lazy(() => import("./Contact.jsx"));
// const Services = lazy(() => import("./Services.jsx"));
// const About = lazy(() => import("./About.jsx"));
// const MedicalDisclaimer = lazy(() => import("./MedicalDisclaimer.jsx"));
// const InsurancesAccepted = lazy(() => import("./InsurancesAccepted.jsx"));
// const ServicesPage = lazy(() => import("./ServicesPage.jsx"));
// const ServiceDetailPage = lazy(() => import("./ServiceDetailPage.jsx"));
// const NotFound = lazy(() => import("./NotFound.jsx"));
// const Location = lazy(() => import("./Location.jsx"));

// const SuspenseWrapper = ({ children }) => (
//   <Suspense fallback={<LoadingSpinner />}>
 
//       {children}

//   </Suspense>
// );

// const Main = () => {

//   return (
//     <h1></h1>
//     // <Routes>
//     //   <Route path="/" element={<MainLayout />}>
//     //     <Route index element={<App />} />
//     //     <Route path="location" element={<SuspenseWrapper><Location /></SuspenseWrapper>} />
//     //     <Route path="schedule-appointment" element={<SuspenseWrapper><ScheduleAppointment /></SuspenseWrapper>} />
//     //     <Route path="contact" element={<SuspenseWrapper><Contact /></SuspenseWrapper>} />
//     //     <Route path="about" element={<SuspenseWrapper><About /></SuspenseWrapper>} />
//     //     <Route path="medical-disclaimer" element={<SuspenseWrapper><MedicalDisclaimer /></SuspenseWrapper>} />
//     //     <Route path="insurances-accepted" element={<SuspenseWrapper><InsurancesAccepted /></SuspenseWrapper>} />
//     //   </Route>
//     //   <Route path="/services" element={<ServicesLayout />}>
//     //     <Route index element={<SuspenseWrapper><Services /></SuspenseWrapper>} />
//     //     <Route path="general" element={<SuspenseWrapper><ServicesPage category="general" /></SuspenseWrapper>} />
//     //     <Route path="cosmetic" element={<SuspenseWrapper><ServicesPage category="cosmetic" /></SuspenseWrapper>} />
//     //     <Route path="surgical" element={<SuspenseWrapper><ServicesPage category="surgical" /></SuspenseWrapper>} />
//     //     <Route path=":category/:serviceName" element={<SuspenseWrapper><ServiceDetailPage /></SuspenseWrapper>} />
//     //   </Route>
//     //   <Route path="*" element={<SuspenseWrapper><NotFound /></SuspenseWrapper>} />
//     //   <Route path="/404" element={<NotFound />} />
//     // </Routes>
//   );
// };

// if (typeof window !== 'undefined') {
//   const rootElement = document.getElementById('root');
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <Main />
//     </React.StrictMode>
//   );
// }
// // ReactDOM.createRoot(rootElement).render(
// //   <React.StrictMode>

// //       <Router>
   
// //           <Suspense fallback={<LoadingSpinner />}>
// //             <Main />
// //           </Suspense>
       
// //       </Router>

// //   </React.StrictMode>
// // );

// export default Main;