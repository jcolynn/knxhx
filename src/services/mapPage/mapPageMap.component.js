import React, { Component } from 'react';
import { Select } from 'antd';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';
import reqwest from 'reqwest'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { List, Avatar } from 'antd';

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

class MapPageMap extends Component {

  state = {
    lat: null,
    lng: null,
    latLngs: []
  }

  formattedAddressURL = (result) => {
     let formattedURL = 'https://nominatim.openstreetmap.org/search?q=';
     formattedURL += result.street.replace(/\s/g, '+');
     formattedURL += `,${result.city}`
     formattedURL += '&format=json&polygon=1&addressdetails=1'
     console.log(formattedURL, 'formm url')
     return formattedURL
  }

  goToDetail = (id) => {
      console.log(id, 'idd');
      this.props.goTo(id);
  }

  componentDidMount() {
      const self = this;
      this.props.results.forEach((result, index) => {
        reqwest({
            url: this.formattedAddressURL(result) //`https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=json&polygon=1&addressdetails=1`
          , method: 'get'
          , success: function (resp) {
              if (resp && resp.length) {
                self.setState({
                    latLngs: [...self.state.latLngs, {lat: resp[0].lat, lng: resp[0].lon, id: result.id}]
                }, () => {
                    self.setState({
                        map: <Map
                        key={index}
                        google={self.props.google}
                        initialCenter={{
                         lat: self.state.latLngs[0].lat,
                         lng: self.state.latLngs[0].lng
                       }}
                       zoom={15}
                        >
                        {
                            self.state.latLngs.map((latLng, _index) => (
                                <Marker
                                onClick={() => self.goToDetail(latLng.id)}
                                key={_index}
                                position={{ lat: latLng.lat, lng: latLng.lng }}
                              />
                            ))
                        }
    
   
                     
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
            self.setState({
                mapError: true
            })
        })
      })
      
  }

 
  render() {

    return (
        <div className="map-page-map-container">
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
})(MapPageMap);
