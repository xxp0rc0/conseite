import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Homepage/Homepage";
// import "./pages/home.css";
import Brands from "./pages/Brands/Brands";
import Collection from "./pages/Collection/Collection";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product/Product";
import { Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories/StoriesList/Stories";
import StoriesDetail from "./pages/Stories/StoriesDetail/StoriesDetail";
import Login from "./pages/LoginReg/Login/Login";
import Register from "./pages/LoginReg/Register/Register";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Collection />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/brands" element={<Brands />} />
        <Route path='/stories/:id' element={<StoriesDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
