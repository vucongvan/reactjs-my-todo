import PropTypes from "prop-types";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

function SideBar(props) {
  const { Sider } = Layout;

  let location = useLocation();

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/" icon={<UserOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/todo" icon={<VideoCameraOutlined />}>
          <Link to="/todo">Todo</Link>
        </Menu.Item>
        <Menu.Item key="/router" icon={<UploadOutlined />}>
          <Link to="/router"> Router Demo</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SideBar;
