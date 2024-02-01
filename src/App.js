import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import Shop from "./components/shop/shop";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
