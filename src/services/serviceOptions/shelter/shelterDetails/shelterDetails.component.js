import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { List, Avatar } from 'antd';
import * as ServicesActions from '../../../services.actions';
import './shelterDetails.css';
import Map from './map.component';

const Option = Select.Option;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

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
 
    const result = this.props.serviceResults[0];
    return (
      <div className="shelter-details-container">
      <div className="shelter-details-left">
      <div className="shelter-details-name">{result.name}</div>
      <div className="shelter-details-beds-available">4 beds currently available!</div>
      <div className="shelter-details-city">{result.street} {result.city} {result.state} {result.zipCode} </div>
      <div className="shelter-details-beds-available">{result.phoneNumber}</div>


      <Map street={result.street} city={result.city} state={result.state} zipCode={result.zipCode} />


      <div className="shelter-details-data">{result.additionalEligibility}</div>
      <div className="shelter-details-data">{result.description}</div>
    
    
      <ul>
        {result.domesticViolenceShelter && <li>Domestic Violence Shelter</li>}
        {result.emergencyShelter && <li>Emergency Shelter</li>}
        {result.female && <li>Female</li>}
        {result.male && <li>Male</li>}
        {result.fosterYouth && <li>Foster or Former Foster Youth</li>}
        {result.lgbtq && <li>LGBTQ</li>}
        {result.maternityShelter && <li>Maternity Shelter</li>}
        {result.over18 && <li>Over 18</li>}
        {result.parenting && <li>Parenting or Pregnant</li>}
        {result.probation && <li>Probation / Parole / Re-entering</li>}
        {result.queer && <li>Queer</li>}
        {result.trans && <li>Trans</li>}
        {result.transitionalHousing && <li>Transitional Housing</li>}
        {result.veteransHousing && <li>Veteran's Housing</li>}
      </ul>

      <a href={result.url} className="shelter-details-data">{result.url}</a>
   <br />
   <br />
   <br />
      </div>
      
  
 




   
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