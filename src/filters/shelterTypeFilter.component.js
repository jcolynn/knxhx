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

class ShelterTypeFilter extends Component {

  componentDidMount() {
  
  }

  onChange = (value) => {
    // this.props.servicesActions.setPopulationFilters(value);
  }

  render() {
    return (
        <Col span={COL_SPAN}>
      <div className="service-selected-filter">
      <div>Shelter Type</div>
         <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="What kind of shelter are you looking for?"
    defaultValue={[]}
    onChange={(v) => this.onChange(v, 'type')}
  >
    <Option value="twoOneOne">2-1-1</Option>
    <Option value="ces">Coordinated Entry System (CES)</Option>
    <Option value="domesticViolence">Domestic Violence Shelters</Option>
    <Option value="emergencyShelters">Emergency Shelters</Option>
    <Option value="maternityShelters">Maternity Shelters</Option>
    <Option value="transitionalHousing">Transitional Housing</Option>
    <Option value="veteransHousing">Veterans Housing</Option>
    <Option value="winterShelter">Winter Shelter</Option>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShelterTypeFilter));
