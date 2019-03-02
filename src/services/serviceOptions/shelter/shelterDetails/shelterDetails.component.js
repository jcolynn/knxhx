import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../../../services.actions';

const Option = Select.Option;

class ShelterDetails extends Component {

  componentDidMount() {
    this.props.servicesActions.setServiceType('shelters');
    this.props.servicesActions.fetchData();
  }

  onChange = (value) => {
    this.props.servicesActions.setShelterTypeFilters(value);
  }

  render() {
    return (
      <div>
        hello
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
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShelterDetails));
