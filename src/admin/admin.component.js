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
          <Row gutter={12}>
            <Col span={12} >
              <h3>Full Resource Name</h3>
              <h4>Required</h4>
              <p>Enter the name of the Agency or Site</p>
            </Col>
            <Col span={12} >
              <input type="text" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Description</h3>
              <h4>Required</h4>
              <p>Describe the resources and services that are offered</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Website</h3>
              <p>E.g. www.website.com</p>
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Hours</h3>
              <p>Enter the primary hours of operation for the Agency or Site</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Intake Process</h3>
              <p>Describe the intake process for people seeking services from this Agency or Site</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Program Fees</h3>
              <p>Describe any associated fees that this resource charges for its service, if any.</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Languages</h3>
              <p>List any languages spoken by staff at this Agency or Site</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Eligibility</h3>
              <p>Describe any criteria an individual must meet to be eligible for services from this Agnecy or Site</p>
            </Col>
            <Col span={12} >
              <textarea rows="4" cols="50" />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Handicap Accessibility</h3>
              <p>Is this resource ADA compliant?</p>
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Employer ID</h3>
              <p>Enter the 9 digit EIN with or without the dash after the first 2 numbers</p>
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
              <h3>Year Incorporated</h3>
              <p>Enter the year incorporated, such as '1999'</p>
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
          </Row>
          <Row gutter={12}>
            <Col span={12} >
            </Col>
            <Col span={12} >
            </Col>
            <Button type="primary">Submit</Button>
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
