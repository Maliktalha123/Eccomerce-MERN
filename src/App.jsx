import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "antd";
import Navbar from "./components/Navbar";
import About from "./screen/About";
import AllProducts from "./screen/AllProducts";
import Users from "./screen/Admin/Users";
import Products from "./screen/Admin/Products";
import Categories from "./screen/Admin/Categories";
import Subcategories from "./screen/Admin/Subcategories";
import AdminPage from "./screen/Admin/AdminPage";

function App() {
  const AdminLayout = () => {
    return (
      <div>
        <h2>Admin Panel</h2>
        <Outlet />
      </div>
    );
  };
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="subcategories" element={<Subcategories />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
