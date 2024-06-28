import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Location from "./Location.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Surgical from "./Surgical.jsx";
import General from "./General.jsx";
import Cosmetic from "./Cosmetic.jsx";
import About from "./About.jsx";
import MainLayout from "./MainLayout.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import "./index.css";
import ServicesPage from "./ServicesPage.jsx";
import ServiceDetailPage from "./ServiceDetailPage.jsx";
import MedicalDisclaimer from "./MedicalDisclaimer.jsx";
import InsurancesAccepted from "./InsurancesAccepted.jsx";
import ServicesLayout from "./ServicesLayout.jsx";
import ScheduleAppointment from "./ScheduleAppointment.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <App />
          </MainLayout>
        }
      />
      <Route
        path="/location"
        element={
          <MainLayout>
            <Location />
          </MainLayout>
        }
      />
            <Route
        path="/schedule-appointment"
        element={
          <MainLayout>
            <ScheduleAppointment />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/services"
        element={
          <ServicesLayout>
            <Services />
          </ServicesLayout>
        }
      />
      <Route
        path="/services/general-dermatology"
        element={
          <ServicesLayout>
            <General />
          </ServicesLayout>
        }
      />
      <Route
        path="/services/cosmetic-dermatology"
        element={
          <ServicesLayout>
            <Cosmetic />
          </ServicesLayout>
        }
      />
      <Route
        path="/services/surgical-dermatology"
        element={
          <ServicesLayout>
            <Surgical />
          </ServicesLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/medical-disclaimer"
        element={
          <MainLayout>
            <MedicalDisclaimer />
          </MainLayout>
        }
      />
      <Route
        path="/insurances-accepted"
        element={
          <MainLayout>
            <InsurancesAccepted />
          </MainLayout>
        }
      />
      <Route
        path="/services/:categoryId"
        element={
          <ServicesLayout>
            <ServicesPage />
          </ServicesLayout>
        }
      />
      <Route
        path="/services/:categoryId/:serviceId"
        element={
          <ServicesLayout>
            <ServiceDetailPage />
          </ServicesLayout>
        }
      />
      <Route path="*" element={<Navigate to="/services/" />} />
    </Routes>
  </BrowserRouter>
);
