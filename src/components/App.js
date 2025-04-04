import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Categories from "./Categories";
import Items from "./items";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<h1>Welcome home</h1>}/>
        <Route path="categories" element={<Categories/>}>
        <Route path=":category" element={<Items/>}/>
        </Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
