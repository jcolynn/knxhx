import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import ShelterResults from './shelterResults/shelterResults.component';
import * as ServicesActions from '../../services.actions';
import PagingInfo from '../../shared/pagingInfo.component';
import ServiceBreadcrumbs from '../../shared/serviceBreadcrumbs.component';
import { COL_SPAN } from '../../../constants/serviceFiltersColumnSpan.constant';
import AgeRageFilter from '../../shared/ageRangeFilter.component';
import PopulationFilter from '../../shared/populationFilter.component';
import GenderFilter from '../../shared/genderFilter.component';
import RegionFilter from '../../shared/regionFilter.component';
import FilterSearchBtn from '../../shared/filterSearchBtn.component';
import ServiceResults from '../../shared/serviceResults.component';
import firebase from '../../../Firebase';

const Option = Select.Option;

/* firebase */

class Shelter extends Component {

  componentDidMount() {

    console.log(firebase, 'firebaseee')

    /*
    firebase.firestore().collection('service_providers').limit(10).get().then(result => {
      console.log(result, 'resultt')
      this.setState({
          loadingResults: false
      });
      const results = [];
      if (result.docs) {
          result.docs.forEach(doc => {
            console.log(doc.data(), 'data!')
              if (doc.exists) {
                  results.push(doc.data());
              }
          })
      }
      this.props.onSetSamplesResults(results);
  })
*/

    this.props.servicesActions.setServiceType('shelters');
    this.props.servicesActions.fetchData();
  }

  onChange = (value) => {
    this.props.servicesActions.setShelterTypeFilters(value);
  }

  render() {
    return (
      <div className="service-selected-option">
        <ServiceBreadcrumbs current="Shelter" history={this.props.history} />
        
      <div className="service-selected-filter-options">
   
        <Checkbox.Group style={{ width: '100%' }}>
    <Row>
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
    <Option value="domesticViolence">Domestic Violence Shelters</Option>
    <Option value="emergencyShelters">Emergency Shelters</Option>
    <Option value="maternityShelters">Maternity Shelters</Option>
    <Option value="transitionalHousing">Transitional Housing</Option>
    <Option value="veteransHousing">Veterans Housing</Option>
  </Select>
      </div>
      </Col>
      <AgeRageFilter />
      <PopulationFilter />
      <GenderFilter />

    </Row>
  </Checkbox.Group>
  <FilterSearchBtn />
      </div>
      <div className="service-selected-option-results-container">
        <PagingInfo paging={this.props.paging} type="Shelters" />
        <ServiceResults />
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
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shelter));
