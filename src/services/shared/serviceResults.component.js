import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { List, message, Avatar, Spin, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as ServicesActions from '../services.actions';

class ServiceResults extends Component {

    goToDetails = (id) => {
        console.log(id, 'idd')
        this.props.history.push(`/services/${this.props.serviceType}/${id}`);
    }

    getBedsAvailable = (item) => {
      console.log(item, 'item')
      if (item.bedsAvailable && item.bedsUsed && item.bedsUsed < item.bedsAvailable) {
        return `There are ${item.bedsAvailable - item.bedsUsed} beds available`;  
      } 
    }

  render() {
    return (
      <div className="service-selected-option-results">
          <List
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
        key={item.title}
      >
        <List.Item.Meta
          title={<a onClick={() => this.goToDetails(item.id)}>{item.name}</a>}
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
    console.log(state, 'state...')
    return {
        serviceType: state.serviceType,
        paging: state.paging,
        results: state.serviceResults
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        servicesActions: bindActionCreators(ServicesActions, dispatch),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceResults));
