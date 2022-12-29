import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { logo } from "../../../assets";
import Navbar from "../../../components/Navbar";
import { itemTemplate } from "../../../helpers/itemTemplate";
// itemTemplate(label, key, icon, children)

const { Content } = Layout;
const PageLayout = () => {
  return (
    <Layout>
      <Navbar
        imgSrc={logo}
        title="PROJECT NAME"
        leftMenu={[
          itemTemplate(<Link to="/">LAYOUT 1</Link>, "/", <HomeOutlined />),
          itemTemplate(<Link to="/2">LAYOUT 2</Link>, "/2", <HomeOutlined />),
        ]}
        rightMenu={[itemTemplate("LOGIN", "/admin-login", <LoginOutlined />)]}
      />
      <Content>
        <Outlet />
      </Content>
      {/* <Footer>
        <LandingFooter />
      </Footer> */}
    </Layout>
  );
};

export default PageLayout;
