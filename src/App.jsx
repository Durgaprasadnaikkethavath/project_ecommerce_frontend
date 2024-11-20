import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";
import ImageCarousel from "./Components/ImageCarousel";
// import Navbar from "./Components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ShopContextProvider from "./Context/ShopContext";
// import ImageCarousel from "./Components/ImageCarousel";

const App = () => {
  return (
    <>
      <h1>New project e commerce project</h1>
      <h1>React Vite</h1>
      <h1>Project Working</h1>
      <p>durga</p>
      <p>carousel Images</p>
      <p>prasad naik</p>
      <p>project e</p>
      <p>React Vite Project</p>

      <Navbar />
      <ImageCarousel />
    </>
  );
};

export default App;
