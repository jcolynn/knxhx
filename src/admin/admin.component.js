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


/*
class App extends Component {
  constructor(props) {
    super(props);

    app.initializeApp(config);

    this.db = app.firestore();
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
      id: uuid(),
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


      return ( <
          div className = "App" >
          <
          form onSubmit = {
            this.onSubmit
          } >
          <
          label className = "label-for"
          htmlFor = "service-name" > Service Name: < /label> <
          input className = "text"
          id = "service-name"
          type = "name"
          name = "name"
          value = {
            name
          }
          placeholder = "Name"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "phone" > Phone Number: < /label> <
          input id = "phone"
          className = "text"
          type = "phoneNumber"
          name = "phoneNumber"
          value = {
            phoneNumber
          }
          placeholder = "Phone Number"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "street" > Street: < /label> <
          input id = "street"
          className = "text"
          type = "street"
          name = "street"
          value = {
            street
          }
          placeholder = "Street"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "desc" > Description: < /label> <
          input id = "desc"
          className = "text"
          type = "description"
          name = "description"
          value = {
            description
          }
          placeholder = "description"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "zip" > Zip Code: < /label> <
          input id = "zip"
          className = "text"
          type = "zipCode"
          name = "zipCode"
          value = {
            zipCode
          }
          placeholder = "Zip Code"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "url" > URL: < /label> <
          input id = "url"
          className = "text"
          type = "url"
          name = "url"
          value = {
            url
          }
          placeholder = "url"
          onChange = {
            this.onChange
          }
          /> <
          label className = "label-for"
          htmlFor = "additionalEligibility" > Additional Requirements: < /label> <
          input id = "additionalEligibility"
          className = "text"
          type = "additionalEligibility"
          name = "additionalEligibility"
          value = {
            additionalEligibility
          }
          placeholder = "additionalEligibility"
          onChange = {
            this.onChange
          }
          />



 <
          h3 style = {
            {
              fontWeight: '400'
            }
          } > Populations Served(Choose all that apply): < /h3>  <
          div className = "card" >
          <
          div className = "chk" >
          <
          input id = "fosterYouth"
          type = "checkbox"
          value = {
            fosterYouth
          }
          onClick = {
            () => this.setState({
              fosterYouth: !fosterYouth
            })
          }
          /> <
          label htmlFor = "fosterYouth"
          className = "check-lbl" > Foster Youth < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "lgbtq"
          type = "checkbox"
          value = {
            lgbtq
          }
          onClick = {
            () => this.setState({
              lgbtq: !lgbtq
            })
          }
          /> <
          label htmlFor = "lgbtq"
          className = "check-lbl" > LGBTQ < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "parenting"
          type = "checkbox"
          name = "parenting"
          value = {
            parenting
          }
          onClick = {
            () => this.setState({
              parenting: !parenting
            })
          }
          /> <
          label htmlFor = "parenting"
          className = "check-lbl" > Parenting < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "probation"
          type = "checkbox"
          name = "probation"
          value = {
            probation
          }
          onClick = {
            () => this.setState({
              probation: !probation
            })
          }
          /> <
          label htmlFor = "parenting"
          className = "check-lbl" > Probation < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "veteran"
          type = "checkbox"
          name = "veteran"
          value = {
            veteran
          }
          onClick = {
            () => this.setState({
              veteran: !veteran
            })
          }
          /> <
          label htmlFor = "veteran"
          className = "check-lbl" > Veteran < /label> <
          /div> <
          /div>

<
          h3 style = {
            {
              fontWeight: '400'
            }
          } > Genders Served(Choose all that apply): < /h3> <
          div className = "card" >
          <
          div className = "chk" >
          <
          input id = "male"
          type = "checkbox"
          value = {
            male
          }
          onClick = {
            () => this.setState({
              male: !male
            })
          }
          /> <
          label htmlFor = "male"
          className = "check-lbl" > Male < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "female"
          type = "checkbox"
          value = {
            female
          }
          onClick = {
            () => this.setState({
              female: !female
            })
          }
          /> <
          label htmlFor = "female"
          className = "check-lbl" > Female < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "trans"
          type = "checkbox"
          name = "trans"
          value = {
            trans
          }
          onClick = {
            () => this.setState({
              trans: !trans
            })
          }
          /> <
          label htmlFor = "trans"
          className = "check-lbl" > Trans < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "queer"
          type = "checkbox"
          name = "queer"
          value = {
            queer
          }
          onClick = {
            () => this.setState({
              queer: !queer
            })
          }
          /> <
          label htmlFor = "queer"
          className = "check-lbl" > Queer < /label> <
          /div> <
          /div>

<
          h3 style = {
            {
              fontWeight: '400'
            }
          } > Type of Shelter Provided(Choose all that apply): < /h3> <
          div className = "card" >
          <
          div className = "chk" >
          <
          input id = "domestic"
          type = "checkbox"
          name = "domestic"
          value = {
            domesticViolenceShelter
          }
          onClick = {
            () => this.setState({
              domesticViolenceShelter: !domesticViolenceShelter
            })
          }
          /> <
          label htmlFor = "domestic"
          className = "check-lbl" > Domestic Violence Shelter < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "emergency"
          type = "checkbox"
          name = "emergencyShelter"
          value = {
            emergencyShelter
          }
          onClick = {
            () => this.setState({
              emergencyShelter: !emergencyShelter
            })
          }
          /> <
          label htmlFor = "emergency"
          className = "check-lbl" > Emergency Shelter < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "maternity"
          type = "checkbox"
          value = {
            maternityShelter
          }
          onClick = {
            () => this.setState({
              maternityShelter: !maternityShelter
            })
          }
          /> <
          label htmlFor = "maternity"
          className = "check-lbl" > Maternity Shelter < /label> <
          /div> <
          div className = "chk" >
          <
          input id = "transitionalHousing"
          type = "checkbox"
          name = "transitionalHousing"
          value = {
            transitionalHousing
          }
          onClick = {
            () => this.setState({
              transitionalHousing: !transitionalHousing
            })
          }
          /> <
          label htmlFor = "transitionalHousing"
          className = "check-lbl" > Transitional Housing < /label> <
          /div>

          <
          div className = "chk" >
          <
          input id = "veteranHousing"
          type = "checkbox"
          name = "veteranHousing"
          value = {
            veteranHousing
          }
          onClick = {
            () => this.setState({
              veteranHousing: !veteranHousing
            })
          }
          /> <
          label htmlFor = "veteranHousing"
          className = "check-lbl" > Veteran Housing < /label> <
          /div> <
          /div>



          <
          div className = "chk" >
          <
          label htmlFor = "handicap" > Check
          if your service is handicap accessible: < /label> <
          input id = "handicap"
          type = "checkbox"
          value = {
            handicap
          }
          onClick = {
            () => this.setState({
              handicap: !handicap
            })
          }
          /> <
          /div>


          <
          div className = "chk" >
          <
          label htmlFor = "over18" > Check
          if your service is
          for adults only: < /label> <
          input id = "over18"
          type = "checkbox"
          name = "over18"
          value = {
            over18
          }
          onClick = {
            () => this.setState({
              over18: !over18
            })
          }
          /> <
          /div>





          <
          button type = "submit" > Submit < /button> <
          /form> <
          /div>


*/