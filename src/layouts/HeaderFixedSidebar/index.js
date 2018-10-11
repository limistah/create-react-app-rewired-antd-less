import React, { Component } from 'react'
import { Layout } from 'antd';
import SidebarMenuItems from './components/SidebarMenuItems';

const { Header, Content, Footer, Sider } = Layout;

const SidebarMenu = ({ menuItems }) => (
  <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
    <div className="logo" />
    <SidebarMenuItems menuItems={menuItems} key="asdasf"/>
  </Sider>
)

class HeaderWithFixedSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { menuItems } = this.props;
    return (
      <Layout>
        {menuItems ? <SidebarMenu menuItems={menuItems} /> : null}
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              ...
              <br />
              Really
              <br />...<br />...<br />...<br />
              long
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />...
              <br />...<br />...<br />...<br />...<br />...<br />
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HeaderWithFixedSidebar;
