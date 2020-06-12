import React, { Component, useState, useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import './index.scss';

const SimpleMap = (props) => {
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('position: ', position);
      setInitialPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  function handleMapClick(event) {
    // event.preventDefault();
    const { lat, lng } = event.latlng;
    setSelectedPosition([lat, lng]);
    props.handleLocation(lat, lng);
  }

  return (
    // Important! Always set the container height explicitly
    <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={selectedPosition} />

      {props.locations?.map((location, index) => {
        return <Marker key={index} position={[38, -9]} />;
      })}
    </Map>
  );
};
export default SimpleMap;

// static defaultProps = {
//   center: {
//     lat: 38.75,
//     lng: -9
//   },
//   zoom: 11
// };