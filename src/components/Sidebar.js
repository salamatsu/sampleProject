import { Layout, Menu, Avatar } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ items = [], imgSrc, title = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="md"
      theme="light"
      width={300}>
      {imgSrc && (
        <div className="flex mt-3 p-3 items-center w-full">
          <img src={imgSrc} alt="" className="h-10" />
          <span className="text-lg hidden md:block">{title}</span>
        </div>
      )}
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={useLocation().pathname}
      />
    </Sider>
  );
};

export default Sidebar;
