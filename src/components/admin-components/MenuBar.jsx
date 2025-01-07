import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: <Link to="users">All Users</Link>,
  },
  {
    key: "2",
    icon: <DesktopOutlined />,

    label: <Link to="products">Products</Link>,
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: <Link to="categories">Catgories</Link>,
  },
  {
    key: "4",
    icon: <ContainerOutlined />,
    label: <Link to="subcategories">Subcatgories</Link>,
  },
];
const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default MenuBar;
