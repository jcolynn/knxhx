import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import './App.css';
import Filters from './filters/filters.component';


const { Header, Content, Footer } = Layout;


class Main extends Component {

  render() {
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Shelters</Menu.Item>
                    <Menu.Item key="2">Admin Login</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
            
                <Filters />
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
           
        </div>
    );
  }
}

export default withRouter(Main);
