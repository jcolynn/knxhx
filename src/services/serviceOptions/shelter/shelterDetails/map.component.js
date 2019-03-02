import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { List, Avatar } from 'antd';
import * as ServicesActions from '../../../services.actions';
import './shelterDetails.css';

const Option = Select.Option;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class MapComponent extends Component {

  state = {
    data: {}
  }

 
  render() {

    return (
        <div className="map-container">
   <Map
   style={{maxWidth: '30rem', maxHeight: '30rem'}}
   google={this.props.google} zoom={14}>

<Marker onClick={this.onMarkerClick}
        name={'Current location'} />

<InfoWindow onClose={this.onInfoWindowClose}>

</InfoWindow>
</Map>

        </div>
   
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBQ8Zu00hjE5_Sr-I3C-u4inNSt1Oe23R8')
})(MapComponent);