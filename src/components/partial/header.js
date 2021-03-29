import PropTypes from "prop-types";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React from "react";
import { Layout } from "antd";

function Header(props) {
  const { Header } = Layout;
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: props.changeToggle,
        }
      )}
    </Header>
  );
}

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  changeToggle: PropTypes.func.isRequired,
};

export default Header;
