import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Option = Select.Option;

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      street: '',
      city: 'Knoxville',
      state: 'TN',
      zipCode: '',
      url: '',
      additionalEligibility: '',
      description: '',
      //id: uuid(),
      domesticViolenceShelter: false,
      emergencyShelter: false,
      female: false,
      fosterYouth: false,
      handicap: false,
      lgbtq: false,
      male: false,
      maternityShelter: false,
      over18: false,
      parenting: false,
      probation: false,
      queer: false,
      trans: false,
      transitionalHousing: false,
      veteran: false,
      veteranHousing: false
    }
  }
  componentDidMount() {
  
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    let doc = this.state;
    this.db.collection('service_providers').add(doc)
      .then(() => console.log('success'))
      .catch((error) => console.log(error))
    event.preventDefault();

  }

  render() {
    const {
      name,
      phoneNumber,
      street,
      zipCode,
      url,
      additionalEligibility,
      description,
      domesticViolenceShelter,
      emergencyShelter,
      female,
      fosterYouth,
      handicap,
      lgbtq,
      male,
      maternityShelter,
      over18,
      parenting,
      probation,
      queer,
      trans,
      transitionalHousing,
      veteran,
      veteranHousing
    } = this.state;

    return (
        <React.Fragment>
          <Row>
            <h1>Add a New Resource Record</h1>
            <p>Use the provided form to add your new resource listing.</p>
          </Row>
          <Row>
            
          </Row>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      // servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
