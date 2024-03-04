import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import "./index.css";
import Homepage from "./pages/Homepage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Homepage />
    </Layout>
  </React.StrictMode>
);
