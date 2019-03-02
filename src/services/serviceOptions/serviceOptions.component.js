import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './serviceOptions.css';

const ServiceOption = (props) => (
    <div onClick={props.go} className={props.active ? 'service-option' : 'service-option'}>
        <Icon type={props.icon} />
        <div>{props.mask}</div>
    </div>
)

class ServiceOptions extends Component {

    options = [
        {
            mask: 'Shelter / Housing',
            icon: 'home',
            route: 'shelters',
            active: true
        },
        {
            mask: 'Addition',
            icon: 'alert',
            route: 'addiction',
            active: true
        },
        {
            mask: 'Children / Youth',
            icon: 'coffee'
        },
        {
            mask: 'Education',
            icon: 'user',
            route: 'drop-in'
        },
        {
            mask: 'Employment',
            icon: 'heart',
            route: 'health'
        },
        {
            mask: 'Family Support',
            icon: 'bank',
            route: 'legal'
        },
        {
            mask: 'Financial',
            icon: 'phone',
            route: 'hotline'
        },
        {
            mask: 'Food',
            icon: 'bell',
            route: 'education'
        },
        {
            mask: 'General',
            icon: 'dollar',
            route: 'jobs'
        },
        {
            mask: 'Health',
            icon: 'dashboard',
            route: 'transit'
        },
        {
            mask: 'Law / Legal',
            icon: 'thunderbolt',
            route: 'benefits'
        },
        {
            mask: 'Mental Health',
            icon: 'global',
            route: 'more'
        },
        {
            mask: 'Older Adults',
            icon: 'global',
            route: 'more'
        },
        {
            mask: 'Transportation',
            icon: 'global',
            route: 'more'
        }
    ]

    goTo = (which, active) => {
        if (active) {
            this.props.history.push(`/services/${which}`);
        }
    }

  render() {
    return (
        <div>
             <div className="welcome-text">How can we help?</div>
             <div className="service-options">
                {
                    this.options.map((option, index) => (
                        <div key={index}>
                            <ServiceOption go={() => this.goTo(option.route, true)} {...option} />
                        </div>
                    ))
                }
            </div>
        </div>
   
    );
  }
}

export default ServiceOptions;

