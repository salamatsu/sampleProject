import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { imagePlaceHolder } from "../constants/staticConst";

const LeftMenu = ({ mode, items = [] }) => (
  <Menu
    mode={mode}
    overflowedIndicator={false}
    defaultSelectedKeys={useLocation().pathname}
    items={items}
  />
);

const RightMenu = ({ mode, items = [] }) => {
  return <Menu mode={mode} overflowedIndicator={false} items={items} />;
};

const Navbar = ({
  imgSrc,
  drawerLogo = imagePlaceHolder,
  title = "",
  leftMenu = [],
  rightMenu = [],
}) => {
  const { Header } = Layout;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <Header style={{ backgroundColor: "#fff", padding: 0 }}>
      <nav className=" w-full" style={{ marginBottom: 1 }}>
        <div className="flex justify-between">
          <div className="leftMenu">
            {imgSrc && (
              <div className="logo ">
                <img alt="iFuel" className="h-[60px] m-auto" src={imgSrc} />
              </div>
            )}
            <LeftMenu mode="horizontal" items={leftMenu} />
          </div>
          <div className="rightMenu">
            <RightMenu mode="horizontal" items={rightMenu} className="w-full" />
          </div>
        </div>
        <div className="navbar-menu w-full">
          <Drawer
            placement="right"
            closable={true}
            onClose={showDrawer}
            open={visible}
            style={{ zIndex: 99999 }}>
            <Link to="/ifuel">
              <div className="flex">
                <img
                  alt="iFuel"
                  className="h-8 w-auto sm:h-10"
                  src={imgSrc || drawerLogo}
                />
                <span className="text-lg block md:hidden">{title}</span>
              </div>
            </Link>

            <LeftMenu mode={"inline"} items={leftMenu} />
            <RightMenu mode={"inline"} items={rightMenu} />
          </Drawer>
        </div>
        <Button className="menuButton" type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </nav>
    </Header>
  );
};

export default Navbar;
