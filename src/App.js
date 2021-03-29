import React from 'react';
import 'antd/dist/antd.css';
// import Todo from "./components/todo/index"
import { Layout } from "antd";
import { useState } from "react";
import SideBar from './components/partial/sidebar';
import Header from './components/partial/header';

const {Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  function changeToggle () {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{  minHeight: '100vh' }}>
      <SideBar collapsed = {collapsed}/>
      <Layout className="site-layout">
        <Header collapsed = {collapsed} changeToggle = {changeToggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
