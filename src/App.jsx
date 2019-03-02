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
import MainComponent from './Main.component';

const { Header, Sider, Content, Footer } = Layout;


class App extends Component {

  onSelectMenuItem = (which) => {
    this.props.history.push(which);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={MainComponent} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;

/*
<Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => { console.log(broken); }}
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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
        <Menu.Item key="5" onClick={() => this.onSelectMenuItem('about')}>
          <Icon type="bulb" />
          <span className="nav-text">About</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/announcements" component={Announcements} />
          <Route path="/i-need-help-now" component={NeedHelpNow} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
     
    
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
*/