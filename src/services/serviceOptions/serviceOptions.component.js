import React, { Component } from 'react';
import { Layout, Menu, Icon, AutoComplete, Input } from 'antd';
import './serviceOptions.css';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const ServiceOption = (props) => (
    <div onClick={props.go} className={props.active ? 'service-option' : 'service-option'}>
        <Icon type={props.icon} />
        <div>{props.mask}</div>
    </div>
)

const dataSource = [{
    title: 'Helen Ross McNabb-Maple Grove Apts.',
    children: [{
      title: 'Helen Ross McNabb-Maple Grove Apts.',
      count: 10000,
    }, {
        title: 'Positively Living HUD',
        count: 10000,
    }],
  }];

  
  
  function renderTitle(title) {
    return (
      <span>
        Shelters
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </span>
    );
  }
  
  const options = dataSource.map(group => (
    <OptGroup
      key={group.title}
      label={renderTitle(group.title)}
    >
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
        </Option>
      ))}
    </OptGroup>
  )).concat([
   
  ]);

class ServiceOptions extends Component {

    options = [
        {
            mask: 'Shelter / Housing',
            icon: 'home',
            route: 'shelters',
            active: true
        },
        {
            mask: 'Addiction',
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

    onClick = () => {
        console.log('clickk')
        this.props.history.push('/services/shelters/YtWD681AWkDPKPLnk6Xr')
    }

  render() {
    return (
        <div className="service-options">
             <div className="welcome-text">How can we help?</div>
             <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="Search..."
        optionLabelProp="value"
        onSelect={this.onClick}
      >
        <Input   suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
             <div className="service-options">
                {
                    this.options.map((option, index) => (
                        <div key={index}>
                            <ServiceOption go={() => this.goTo('shelters', true)} {...option} />
                        </div>
                    ))
                }
            </div>
        </div>
   
    );
  }
}

export default ServiceOptions;

