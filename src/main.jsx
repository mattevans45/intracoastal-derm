import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Router, Route, Routes } from "react-router-dom";
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

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route
        index
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
    </Routes>
  </HashRouter>
);