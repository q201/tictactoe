import React,{StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";



const root = createRoot(document.getElementById("root"));
root.render(
  
  
  <>
    <Header />
    <App/>
    <Footer/>
  </>
);