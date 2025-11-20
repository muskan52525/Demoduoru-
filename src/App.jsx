import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ContactPage from "./Pages/ContactPage";
import Sobre from "./Pages/Sobre";
import Infrastructure from "./Pages/Infrastructure";

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/infrastructure" element={<Infrastructure/>} />
          <Route path="*" element={<div>Page Not Found</div>} />
         
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
