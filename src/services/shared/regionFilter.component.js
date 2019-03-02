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

class RegionFilter extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    this.props.servicesActions.setRegionFilters(value);
  }

  render() {
    return (
        <Col span={COL_SPAN}>
      <div className="service-selected-filter">
      <div>Region</div>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="In what region should this shelter be?"
    defaultValue={[]}
    onChange={(v) => this.onChange(v)}
  >
    <Option value="region1">Region 1</Option>
    <Option value="region2">Region 2</Option>
  </Select>


      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegionFilter));
