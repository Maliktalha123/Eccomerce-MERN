import React from "react";
import viteLogo from "/vite.svg";
import {
  ProfileOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full ">
      <div className="w-2/12 border">
        <img src={viteLogo} alt="Company Logo" className="m-auto mt-2" />
      </div>
      <div className="flex flex-row space-x-4 w-8/12 border ">
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>....Y.</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>

        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>....Y.</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
        <li>.....</li>
      </div>
      <div className="w-2/12 flex gap-6 text-2xl pl-4">
        <SearchOutlined />
        <ShoppingCartOutlined />
        <ProfileOutlined />
      </div>
    </div>
  );
};

export default Navbar;
