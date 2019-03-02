import React, { Component } from 'react';
import {
    Form, Input, Select, Button,
  } from 'antd';
import { APP_NAME } from '../constants/appName.constant';
import './feedback.css';

  const { Option } = Select;
  const { TextArea } = Input;

class Feedback extends Component {

    state = {};

    handleCurrencyChange = (currency) => {
        if (!('value' in this.props)) {
          this.setState({ currency });
        }
        this.triggerChange({ currency });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

      triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(Object.assign({}, this.state, changedValue));
        }
      }
    

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="feedback-form">
        <div>Feedback Type</div>
        <Form.Item>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please choose the type of feedback.' }],
          })(
            <Select
                value={this.state.currency}
                size="default"
                style={{ width: '100%' }}
                onChange={this.handleCurrencyChange}
                >
                    <Option value="crash">{APP_NAME} crashed or did not work correctly.</Option>
                <Option value="experience">My experience at this agency.</Option>
                <Option value="incorrectInfo">Report incorrect info so we can fix it.</Option>
                <Option value="suggestions">Suggestions for improving {APP_NAME}.</Option>
                </Select>
          )}
        </Form.Item>
        
        <div>Description</div>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please describe the issue.' }],
          })(
            <TextArea rows={4} />
          )}
        </Form.Item>
        
        <div>Name (optional)</div>
        <Input placeholder="" />
        <div>Email (optional)</div>
        <Input placeholder="" />
        <div>Phone number (optional)</div>
        <Input placeholder="" />
        <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: 'feedback' })(Feedback);
