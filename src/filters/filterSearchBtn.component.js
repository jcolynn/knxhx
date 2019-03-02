import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import * as ServicesActions from '../services.actions';

const Option = Select.Option;

class FilterSearchBtn extends Component {

  componentDidMount() {
  
  }

  onSearch = () => {
    // this.props.servicesActions.fetchData();
  }

  render() {
    return (
        <Button onClick={this.onSearch} className="service-selected-option-search-btn" type="primary" icon="search">Search</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterSearchBtn));
