import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import {withRouter} from 'react-router-dom';
import 'rc-banner-anim/assets/index.css';
import { Breadcrumb, Button, Modal } from 'antd'
import './home.css';
import { APP_NAME } from '../constants/appName.constant';
import About from '../about/about.component';
import ServiceOptions from '../services/serviceOptions/serviceOptions.component';

const BgElement = Element.BgElement;


class Home extends Component {

  state = {
    visible: false
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(this, 'thiss')
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      visible: false
    });
  }

  render() {
    console.log(this.state, 'state')
    return (
      <div className="navbar">
        <div className="navbar-option" onClick={this.showModal}>
        What
       
        </div>
        <div className="navbar-option">
          When
        </div>
        <div className="navbar-option">
          Where
        </div>
        <Modal
          title="What type of service"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ServiceOptions />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Home);

/*
<BannerAnim prefixCls="banner-user">
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 50, opacity: 0, type: 'from' }}>
            {APP_NAME}
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <Button onClick={() => this.props.history.push('/services')} className="service-selected-option-search-btn" type="primary" icon="appstore">Explore the services</Button>
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 50, opacity: 0, type: 'from' }}>
            Need shelter tonight?
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <Button onClick={() => this.props.history.push('/services/shelters')} className="service-selected-option-search-btn" type="primary" icon="appstore">Explore shelters</Button>
          </TweenOne>
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="2" 
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 50, opacity: 0, type: 'from' }}>
            Having a crisis?
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            <Button onClick={() => this.props.history.push('/services/shelters')} className="service-selected-option-search-btn" type="primary" icon="alert">Find help</Button>
          </TweenOne>
        </Element>
      </BannerAnim>
      <About />
*/