import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import './App.css';
import Services from './services/services.component';
import Home from './home/home.component';
import Announcements from './announcements/announcements.component';
import Feedback from './feedback/feedback.component';
import About from './about/about.component';
import NeedHelpNow from './needHelpNow/needHelpNow.component';
import { APP_NAME } from './constants/appName.constant';

const { Header, Sider, Content, Footer } = Layout;


class Main extends Component {

  onSelectMenuItem = (which) => {
    this.props.history.push(`/${which}`);
  }

  getSelected = () => {
      const { pathname } = this.props.location;
      if (/services/.test(pathname)) {
          return '1';
      }
      if (/announcements/.test(pathname)) {
          return '2';
      }
      if (/i-need-help-now/.test(pathname)) {
          return '3';
      }
      if (/feedback/.test(pathname)) {
          return '4';
      }
      if (/about/.test(pathname)) {
          return '5';
      }
      return '1';
  }

  render() {
    return (
      <Layout className="layout">
     
      <Layout>
        <Switch>
            <Route path="/services" component={Services} />
            <Route path="/announcements" component={Announcements} />
            <Route path="/i-need-help-now" component={NeedHelpNow} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route path="/" component={Services} />
          </Switch>

      </Layout>
    </Layout>
    );
  }
}

export default withRouter(Main);

/*
   <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.getSelected()]}>
            <Menu.Item onClick={() => this.onSelectMenuItem('home')} key="0">
              <Icon type="home" />
              <span className="nav-text">Home</span>
            </Menu.Item>
            <Menu.Item onClick={() => this.onSelectMenuItem('services')} key="1">
              <Icon type="appstore" />
              <span className="nav-text">Services</span>
            </Menu.Item>
            <Menu.Item onClick={() => this.onSelectMenuItem('announcements')} key="2">
              <Icon type="notification" />
              <span className="nav-text">Announcements</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => this.onSelectMenuItem('i-need-help-now')}>
              <Icon type="alert" />
              <span className="nav-text">I Need Help Now</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => this.onSelectMenuItem('feedback')}>
              <Icon type="team" />
              <span className="nav-text">Feedback</span>
            </Menu.Item>
          </Menu>
        </Sider>
*/