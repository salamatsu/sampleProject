import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { logo } from "../../../assets";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { itemTemplate } from "../../../helpers/itemTemplate";

// itemTemplate(label, key, icon, children)
const { Content } = Layout;
const PageLayout2 = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar
        imgSrc={logo}
        title="PROJECT NAME"
        items={[
          itemTemplate(<Link to="/2">DASHBOARD</Link>, "/2", <HomeOutlined />),
          itemTemplate(
            <Link to="/2-forms">FORMS</Link>,
            "/2-forms",
            <HomeOutlined />
          ),
          itemTemplate("ACCOUNTS", "accounts", <HomeOutlined />, [
            itemTemplate(
              <Link to="/2-admin">ADMIN</Link>,
              "/2-admin",
              <HomeOutlined />
            ),
            itemTemplate(
              <Link to="/2-users">USERS</Link>,
              "/2-users",
              <HomeOutlined />
            ),
          ]),
          itemTemplate(
            <Link to="/2-reports">REPORTS</Link>,
            "/2-reports",
            <HomeOutlined />
          ),
        ]}
      />
      <Layout>
        <Navbar
          title="PROJECT NAME"
          drawerLogo={logo}
          leftMenu={[
            itemTemplate(<Link to="/">LAYOUT 1</Link>, "/", <HomeOutlined />),
            itemTemplate(<Link to="/2">LAYOUT 2</Link>, "/2", <HomeOutlined />),
          ]}
          rightMenu={[itemTemplate("LOGIN", "/admin-login", <LoginOutlined />)]}
        />
        <Layout>
          <Content style={{ width: "100%" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout2;
