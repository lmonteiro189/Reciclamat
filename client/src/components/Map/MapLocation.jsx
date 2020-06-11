import React, { Component } from 'react';
import SimpleMap from './SimpleMap';

class MapLocation extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }
  HandleonClick = (event) => {
    console.log(event);
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat, lng);

    // markers.push()
  };
  render() {
    return <div>new marker</div>;
  }
}

export default MapLocation;
