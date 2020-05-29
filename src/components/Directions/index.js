import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';

const googleMapsApiKey = "AIzaSyByiVhg7D1CD-0ZiAB43aYuqU8OvWtSksU";

const Directions = props => {

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom,
    latitude,
    longitude
  } = props;

    return (
      <Map
        googleMapURL={
          'https://maps.googleapis.com/maps/api/js?key=' +
          googleMapsApiKey +
          '&libraries=geometry,drawing,places'
        }
        markers={[
          {latitude: "-9.652641", longitude: "-35.7209077"},
          {latitude: "-9.652856", longitude: "-35.7170687"}
        ]}
        loadingElement={loadingElement || <div style={{height: `100%`}}/>}
        containerElement={containerElement || <div style={{height: "80vh"}}/>}
        mapElement={mapElement || <div style={{height: `100%`}}/>}
        defaultCenter={defaultCenter ||  {lat: 25.798939, lng: -80.291409}}
        defaultZoom={defaultZoom || 11}
      />
      // <h1>{latitude} - {longitude}</h1>
    );
};

export default Directions;
