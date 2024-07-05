import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainLayout from "./MainLayout.jsx";
import ServicesLayout from "./ServicesLayout.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import App from "./App.jsx";

const ScheduleAppointment = lazy(() => import("./ScheduleAppointment.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Services = lazy(() => import("./Services.jsx"));
const About = lazy(() => import("./About.jsx"));
const MedicalDisclaimer = lazy(() => import("./MedicalDisclaimer.jsx"));
const InsurancesAccepted = lazy(() => import("./InsurancesAccepted.jsx"));
const ServicesPage = lazy(() => import("./ServicesPage.jsx"));
const ServiceDetailPage = lazy(() => import("./ServiceDetailPage.jsx"));
const NotFound = lazy(() => import("./NotFound.jsx"));
const Location = lazy(() => import("./Location.jsx"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<App />} />
      <Route
        path="location"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Location />
          </Suspense>
        }
      />
      <Route
        path="schedule-appointment"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ScheduleAppointment />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="medical-disclaimer"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <MedicalDisclaimer />
          </Suspense>
        }
      />
      <Route
        path="insurances-accepted"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <InsurancesAccepted />
          </Suspense>
        }
      />
    </Route>
    <Route path="/services" element={<ServicesLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path=":categoryId"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ServicesPage />
          </Suspense>
        }
      />
      <Route
        path=":categoryId/:serviceSlug"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ServiceDetailPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/services/" />} />
    </Route>
    <Route
      path="*"
      element={
        <Suspense fallback={<LoadingSpinner />}>
          <NotFound />
        </Suspense>
      }
    />
  </Routes>
);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Suspense fallback={<LoadingSpinner />}>
      <AppRoutes />
    </Suspense>
  </Router>,
);
