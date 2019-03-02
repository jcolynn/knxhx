import React, { Component } from 'react';
import { Checkbox, Row, Col, Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../../services.actions';
import PagingInfo from '../../shared/pagingInfo.component';
import ServiceBreadcrumbs from '../../shared/serviceBreadcrumbs.component';
import { COL_SPAN } from '../../../constants/serviceFiltersColumnSpan.constant';
import AgeRangeFilter from '../../shared/ageRangeFilter.component';
import PopulationFilter from '../../shared/populationFilter.component';
import GenderFilter from '../../shared/genderFilter.component';
import RegionFilter from '../../shared/regionFilter.component';
import FilterSearchBtn from '../../shared/filterSearchBtn.component';
import ServiceResults from '../../shared/serviceResults.component';

const Option = Select.Option;

class Crisis extends Component {

  componentDidMount() {
    this.props.servicesActions.setServiceType('crises');
    this.props.servicesActions.fetchData();
  }

  render() {
    return (
      <div className="service-selected-option">
        <ServiceBreadcrumbs current="Crisis Results" history={this.props.history} />

        
      <div className="service-selected-filter-options">
   
        <Checkbox.Group style={{ width: '100%' }}>
    <Row>
      <Col span={COL_SPAN}>
      <div className="service-selected-filter">
      <div>Crisis</div>
         <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="What kind of crisis do you need help with?"
    defaultValue={[]}
    onChange={this.onChange}
  >
    <Option value="alcohol">Alcohol / Drugs</Option>
    <Option value="baby">Baby Surrender</Option>
    <Option value="domesticViolence">Domestic Violence / Sexual Assault</Option>
    <Option value="mentalHealth">Mental Health Crisis</Option>
    <Option value="runaways">Runaways</Option>
    <Option value="sexTraficking">Sex Traficking / Exploitation</Option>
    <Option value="suicidePrevention">Suicide Prevention</Option>
  </Select>
      </div>
      </Col>
      <AgeRangeFilter />
      <PopulationFilter />
      <GenderFilter />
      <RegionFilter />

    </Row>
  </Checkbox.Group>

    <FilterSearchBtn />
      </div>

      <div className="service-selected-option-results-container">
        <PagingInfo paging={this.props.paging} type="Crisis Help Results" />
        <ServiceResults />
        </div>
      
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Crisis));
