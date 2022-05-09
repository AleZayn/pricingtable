import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/Navigations/NavBar";
import Home from "./layouts/Screens/Home/Home";
import Login from "./layouts/Screens/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
