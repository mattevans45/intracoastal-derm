import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Location from "./Location.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Surgical from "./Surgical.jsx";
import General from "./General.jsx";
import Cosmetic from "./Cosmetic.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";
import ScrollToTop from "./ScrollToTop.js";
import "./index.css";
import ServicesPage from "./ServicesPage.jsx";
import ServiceDetailPage from "./ServiceDetailPage.jsx";
import MedicalDisclaimer from "./MedicalDisclaimer.jsx";
import InsurancesAccepted from "./InsurancesAccepted.jsx";
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <HashRouter basename="/">
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/location"
        element={
          <Layout>
            <Location />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <Services />
          </Layout>
        }
      />
      <Route
        path="/services/general-dermatology"
        element={
          <Layout>
            <General />
          </Layout>
        }
      />
      <Route
        path="/services/cosmetic-dermatology"
        element={
          <Layout>
            <Cosmetic />
          </Layout>
        }
      />
      <Route
        path="/services/surgical-dermatology"
        element={
          <Layout>
            <Surgical />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      
      />
            <Route
        path="/medical-disclaimer"
        element={
          <Layout>
            <MedicalDisclaimer />
          </Layout>
        }
      
      />
      <Route
        path="/insurances-accepted"
        element={
          <Layout>
            <InsurancesAccepted />
          </Layout>
        }
      
      />
       <Route
        path="/services/:categoryId"
        element={
          <Layout>
            <ServicesPage />
          </Layout>
        }
      />
       <Route
        path="/services/:categoryId/:serviceId"
        element={
          <Layout>
            <ServiceDetailPage />
          </Layout>
        }
      />
         <Route
        path="*"
        element={<Navigate to="/services/" />}
      />
    </Routes>

  </HashRouter>
);
