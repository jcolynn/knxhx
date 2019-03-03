import React, { Component } from 'react';
import { Breadcrumb, Button, Form, Input } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';


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

    const { getFieldDecorator } = this.props.form;
    return (
        <React.Fragment>
          <Form>
          <Form.Item
          label="Full Resource Name"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('fullResourceName', {
            rules: [{ required: true, message: 'Please input your resource name!' }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Website Address"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('websiteAddress', {
            rules: [],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item
          label="Description"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input your description!' }],
          })(
            <Input />
          )}
        </Form.Item>



        <Form.Item
          label="Primary Hours of Operation"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('hours', {
            rules: [{ required: true, message: 'Please input the hours!' }],
          })(
            <TextArea />
          )}
        </Form.Item>

        <Form.Item
          label="Intake Process"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('intakeProcess', {
            rules: [{ required: true, message: 'Please input the hours!' }],
          })(
            <TextArea />
          )}
        </Form.Item>

        <Form.Item
          label="Program Feeds"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('programFees', {
            rules: [{ required: true, message: 'Please input the hours!' }],
          })(
            <TextArea />
          )}
        </Form.Item>

        <Form.Item
          label="Languages"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('languages', {
            rules: [{ required: true, message: 'Please input the languages!' }],
          })(
            <TextArea />
          )}
        </Form.Item>

        <Form.Item
          label="Eligibility"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('eligibity', {
            rules: [{ required: true, message: 'Please input the languages!' }],
          })(
            <TextArea />
          )}
        </Form.Item>

        <Form.Item
          label="Handicap Accessible"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('handicapAccessible', {
            rules: [],
          })(
            <Checkbox />
          )}
        </Form.Item>


        <Form.Item
          label="Employer ID"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('employerID', {
            rules: [{ required: true, message: 'Please input your description!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item
          label="Year Incorporated"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('yearIncorporated', {
            rules: [],
          })(
            <Input />
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit">Submit Record</Button>

        <Button type="secondary" htmlType="cancel">Cancel</Button>

          </Form>
          
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

export default Form.create({ name: 'admin' })(withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin)));