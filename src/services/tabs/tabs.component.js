import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';

import { message } from 'antd';
import { Checkbox, Row, Col, Icon } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../services.actions';
import { COL_SPAN } from '../../constants/serviceFiltersColumnSpan.constant';
import './tabs.css';

const Option = Select.Option;

class Tabs extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    // this.props.servicesActions.setGenderFilters(value);
  }

  goToFavorites = () => {
    this.props.history.push('/services/favorites');
  }

  goToServices = () => {
    this.props.history.push('/services');
  }

  showAlert = () => {
    message.info('This feature is not yet available. :(');
  }

  getClass = (which) => {
    console.log(this.props.history, 'histttt')
    if (which === 'favorites') {
      return /favorites/.test(this.props.history.location.pathname) ? 'tab tab-active' : 'tab'
    }
    if (which === 'search') {
      return /favorites/.test(this.props.history.location.pathname) ? 'tab' : 'tab tab-active'
    }
    return 'tab'
  }

  render() {
    return (
        <div className="tabs">
            <div onClick={this.goToServices} className={this.getClass('search')}>
                <Icon type="search" />
                <div>Search</div>
            </div>
            <div onClick={this.showAlert} className="tab">
                <Icon type="global" />
                <div>Map</div>
            </div>
            <div onClick={this.goToFavorites} className={this.getClass('favorites')}>
                <Icon type="heart" />
                <div>Favorites</div>
            </div>
            <div onClick={this.showAlert} className="tab">
                <Icon type="ellipsis" />
                <div>More</div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      // servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabs));
