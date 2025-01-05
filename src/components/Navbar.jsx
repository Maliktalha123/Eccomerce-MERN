import React from "react";
import viteLogo from "/vite.svg";
import {
  ProfileOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <img src={viteLogo} alt="Company Logo" />
      </div>
      <div>
        <p className="text-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi odit deleniti eius nihil, inventore voluptatibus perferendis ad!</p>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
      </div>
      <div>
        <SearchOutlined />
        <ShoppingCartOutlined />
        <ProfileOutlined />
      </div>
    </div>
  );
};

export default Navbar;
