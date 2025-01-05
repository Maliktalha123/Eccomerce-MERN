import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "antd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
<Navbar />



      <BrowserRouter>
        <Routes>
          <Route
            path="/about"
            element={<Button type="primary">Button</Button>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
