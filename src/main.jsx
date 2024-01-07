import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Location from "./Location.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Surgical from "./Surgical.jsx";
import General from "./General.jsx";
import Cosmetic from "./Cosmetic.jsx";
import About from "./About.jsx";
import Layout from "./Layout.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route
        index
        path="/intracoastal-derm/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/location"
        element={
          <Layout>
            <Location />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/services"
        element={
          <Layout>
            <Services />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/services/general-dermatology"
        element={
          <Layout>
            <General />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/services/cosmetic-dermatology"
        element={
          <Layout>
            <Cosmetic />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/services/surgical-dermatology/"
        element={
          <Layout>
            <Surgical />
          </Layout>
        }
      />
      <Route
        path="/intracoastal-derm/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Routes>
  </Router>
);
