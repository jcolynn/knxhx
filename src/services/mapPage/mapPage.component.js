import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { List, message, Avatar, Spin, Icon } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../services.actions';
import MapPageMap from './mapPageMap.component';

const Option = Select.Option;

const IconText = ({ type, text }) => (
  <span>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
    <Icon className="yellow-icon" type={type} style={{ marginRight: 2 }} />
  </span>
);

class MapPage extends Component {

  componentDidMount() {
    this.props.servicesActions.setServiceType('shelters');
    this.props.servicesActions.fetchDataForMaps();
  
  }

  goToDetails = (id) => {
    console.log(id, 'idd')
    this.props.history.push(`/services/${this.props.serviceType}/${id}`);
}


  onChange = (value) => {
    // this.props.servicesActions.setAgeFilters(value);
  }

  getBedsAvailable = (item) => {
    console.log(item, 'item')
    if (item.bedsAvailable && item.bedsUsed && item.bedsUsed < item.bedsAvailable) {
      return `${item.bedsAvailable - item.bedsUsed} beds currently available!`;  
    } 
  }

  goTo = (id) => {
    this.props.history.push(`/services/shelters/${id}`)
  }

  render() {
    if (!this.props.results.length) {
      return null;
    }
    return (
        <MapPageMap goTo={this.goTo} results={this.props.results} />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
    serviceType: state.serviceType,
    results: state.serviceResults,
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapPage));
