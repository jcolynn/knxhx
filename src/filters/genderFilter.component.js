import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// import * as ServicesActions from '../services.actions';
import { COL_SPAN } from '../config/constants/serviceFiltersColumnSpan.constants';

const Option = Select.Option;

class PopulationFilter extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    // this.props.servicesActions.setPopulationFilters(value);
  }

  render() {
    return (
        <Col span={COL_SPAN}>
      <div className="service-selected-filter">
      <div>Gender</div>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="What gender/s should this shelter house?"
    defaultValue={[]}
    onChange={(v) => this.onChange(v)}
  >
    <Option value="male">Male</Option>
    <Option value="female">Female</Option>
    <Option value="queer">Queer</Option>
    <Option value="trans">Trans</Option>
    <Option value="preferNotToSay">Prefer not to say</Option>
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
      // servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopulationFilter));
