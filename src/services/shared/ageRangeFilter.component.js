import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../services.actions';
import { COL_SPAN } from '../../constants/serviceFiltersColumnSpan.constant';

const Option = Select.Option;

class AgeRageFilter extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    this.props.servicesActions.setAgeFilters(value);
  }

  render() {
    return (
        <Col span={COL_SPAN}>
        <div>Ages Served</div>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="What age range are you looking for?"
      defaultValue={[]}
      onChange={(v) => this.onChange(v)}
    >
      <Option value="youth">Youth Only (Up to 25)</Option>
      <Option value="adults">Adults Only (18 and older)</Option>
    </Select>
    </Col>
    
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AgeRageFilter));
