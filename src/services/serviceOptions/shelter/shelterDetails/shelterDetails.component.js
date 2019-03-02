import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../../../services.actions';

const Option = Select.Option;

class ShelterDetails extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    this.props.servicesActions.fetchDataById(this.props.match.params.id);
   
  }

  componentDidUpdate(prevProps) {

  }

  onChange = (value) => {
    this.props.servicesActions.setShelterTypeFilters(value);
  }

  render() {
    if (!this.props.serviceResults.length) {
      return null;
    }
    console.log(this.props.serviceResults, 'resultsss')
 
    return (
      <div>
        <div>{this.props.serviceResults[0].name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
    serviceResults: state.serviceResults,
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShelterDetails));
