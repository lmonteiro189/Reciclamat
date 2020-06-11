import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import './index.scss';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {
        lat: null,
        lng: null
      },
      initialPosition: {
        lat: 0,
        lng: 0
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.setState({
        ...this.state,
        initialPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    );
  }

  handleMapClick = ({ lat, lng }) => {
    this.setState({ marker: { lat, lng } });
    this.props.handleLocation(lat, lng);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMap
          apiKey={process.env.REACT_APP_key}
          defaultCenter={{
            lat: this.state.initialPosition.lat,
            lng: this.state.initialPosition.lng
          }}
          defaultZoom={11}
          onClick={this.handleMapClick}
          distanceToMouse={() => {}}
        >
          {this.state.marker.lat !== null && (
            <small lat={this.state.marker.lat} lng={this.state.marker.lng}>
              My Marker
            </small>
          )}
        </GoogleMap>
        {/* <GoogleMapReact
          style={{ height: '100vh', width: '100%' }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_key }}
          defaultCenter={{
            lat: 38.75,
            lng: -9
          }}
          defaultZoom={11}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact> */}
      </div>
    );
  }
}
export default SimpleMap;

// static defaultProps = {
//   center: {
//     lat: 38.75,
//     lng: -9
//   },
//   zoom: 11
// };
