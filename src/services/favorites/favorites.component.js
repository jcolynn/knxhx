import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { List, message, Avatar, Spin, Icon } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../services.actions';

const Option = Select.Option;

const IconText = ({ type, text }) => (
  <span>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
<Icon className="yellow-icon" type="star" theme="filled"  style={{ marginRight: 2 }}/>
    <Icon className="yellow-icon" type={type} style={{ marginRight: 2 }} />
  </span>
);

class Favorites extends Component {

  componentDidMount() {
    this.props.servicesActions.setServiceType('shelters');
    this.props.servicesActions.fetchDataForFavorites();
  }

  goToDetails = (id) => {
    console.log(id, 'idd')
    this.props.history.push(`/services/${this.props.serviceType}/${id}`);
}


  onChange = (value) => {
    // this.props.servicesActions.setAgeFilters(value);
  }

  getBedsAvailable = (item) => {
    console.log(item, 'item')
    if (item.bedsAvailable && item.bedsUsed && item.bedsUsed < item.bedsAvailable) {
      return `${item.bedsAvailable - item.bedsUsed} beds currently available!`;  
    } 
  }

  render() {
    return (
        <div>
             <List
             className="favorites-list"
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        this.props.servicesActions.setPaging({
            page: page
        });
        this.props.servicesActions.fetchData();
      },
      pageSize: 20,
      total: this.props.paging.count
    }}
    dataSource={this.props.results}
    renderItem={item => (
      <List.Item
        onClick={() => this.goToDetails(item.id)}
        key={item.title}
        actions={[<IconText type="star-o" text="4.5 / 5" />]}
        extra={<Icon type="right" />}
      >
        <List.Item.Meta
          title={<a >{item.name} <Icon className="red-icon" type="heart" theme="filled"  style={{ marginRight: 2 }}/></a>}
          description={item.description.slice(0, 200) + '...'}
        />
        {this.getBedsAvailable(item)}
      </List.Item>
    )}
  />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state tops...')
  return {
    serviceType: state.serviceType,
    results: state.serviceResults,
      paging: state.paging,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      servicesActions: bindActionCreators(ServicesActions, dispatch),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));
