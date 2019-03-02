import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { List, message, Avatar, Spin, Icon } from 'antd';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { formattedURLWithQuery } from '../../../../utils/api.utils';
import * as ServicesActions from '../../../services.actions';

class ShelterResults extends Component {

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
          title={<a href={item.href}>{item.address}</a>}
          description={item.description}
        />
        {item.content}
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
        paging: state.paging,
        results: state.serviceResults
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        servicesActions: bindActionCreators(ServicesActions, dispatch),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShelterResults));
