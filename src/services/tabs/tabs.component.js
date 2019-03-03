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

  showAlert = () => {
    message.info('This feature is not yet available. :(');
  }

  render() {
    return (
        <div className="tabs">
            <div className="tab tab-active">
                <Icon type="search" />
                <div>Search</div>
            </div>
            <div onClick={this.showAlert} className="tab">
                <Icon type="global" />
                <div>Map</div>
            </div>
            <div onClick={this.showAlert} className="tab">
                <Icon type="heart" />
                <div>Favorite</div>
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
