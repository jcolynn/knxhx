import React, { Component } from 'react';
import { Card } from 'antd';
import { APP_NAME } from '../constants/appName.constant';
import './about.css';

class About extends Component {

  render() {
    return (
      <div className="about-content">
          <Card
            style={{ width: 300 }}
            >
            <p>{APP_NAME} helps users experiencing a tough time find free service(s) such as showers, shelter, food, education, help lines, and more. The {APP_NAME} app is free to all.</p>
            </Card>
      </div>
    );
  }
}

export default About;
