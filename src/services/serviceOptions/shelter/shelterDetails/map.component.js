import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';
import reqwest from 'reqwest'
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
    lat: null,
    lng: null
  }

  formattedAddressURL = () => {
     let formattedURL = 'https://nominatim.openstreetmap.org/search?q=';
     formattedURL += this.props.street.replace(/\s/g, '+');
     formattedURL += `,${this.props.city}`
     formattedURL += '&format=json&polygon=1&addressdetails=1'
     console.log(formattedURL, 'formm url')
     return formattedURL
  }

  componentDidMount() {
      const self = this;
      reqwest({
        url: this.formattedAddressURL() //`https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&polygon=1&addressdetails=1`
      , method: 'get'
      , success: function (resp) {
          if (resp && resp.length) {
            self.setState({
                lat: resp[0].lat,
                lng: resp[0].lon
            }, () => {
                self.setState({
                    map: <Map
                    style={{maxHeight: '20rem'}}
                    google={self.props.google}
                    initialCenter={{
                     lat: self.state.lat,
                     lng: self.state.lng
                   }}
                   zoom={15}
                   onClick={self.onMapClicked}
                    >
                 
                 <Marker onClick={self.onMarkerClick} />
                 
                 <InfoWindow onClose={self.onInfoWindowClose}>
                   <div>hello</div>
                 </InfoWindow>
                 </Map>
                })
                console.log(self.state, 'self state')
            })
            console.log(resp, 'resppp')
          }
    
        }
    }).catch((err) => {
        console.log('helloooo')
        self.setState({
            mapError: true
        })
    })
  }

 
  render() {

    return (
        <div className="map-container">
           {this.state.mapError && <div className="map-error">We are unable to render the map. Too many requests. Please check back later.</div>}
   {
   this.state.map
   }
        </div>
   
      
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBQ8Zu00hjE5_Sr-I3C-u4inNSt1Oe23R8')
})(MapComponent);

/*
reqwest({
        url: this.formattedAddressURL() //`https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&polygon=1&addressdetails=1`
      , method: 'get'
      , success: function (resp) {
          if (resp && resp.length) {
            self.setState({
                lat: resp[0].lat,
                lng: resp[0].lon
            }, () => {
                self.setState({
                    map: <Map
                    style={{maxHeight: '20rem'}}
                    google={self.props.google}
                    initialCenter={{
                     lat: self.state.lat,
                     lng: self.state.lng
                   }}
                   zoom={15}
                   onClick={self.onMapClicked}
                    >
                 
                 <Marker onClick={self.onMarkerClick} />
                 
                 <InfoWindow onClose={self.onInfoWindowClose}>
                   <div>hello</div>
                 </InfoWindow>
                 </Map>
                })
                console.log(self.state, 'self state')
            })
            console.log(resp, 'resppp')
          }
    
        }
    })
*/