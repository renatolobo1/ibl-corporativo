import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponent from "./DirectionRenderComponent";
import { G_API_URL } from "../../utility/constants";
import DummyLocations from "../../utility/dummyLocations";
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

class Directions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultZoom: 15,
      map: null,
      center: {
        lat: -9.652856,
        lng: -35.7170687
      },
      currentLocation: {
        lat: "",
        lng: "",
        fromTitle: "LocalizacaoUsuario"
      }
    }

  }

  componentDidMount() {
    this.loadLocation();
  }


  loadLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            fromTitle: "LocalizacaoUsuario"
          },
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
        });

      });

    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { currentLocation, unitLocation } = this.props
    console.log(currentLocation)
    console.log(unitLocation)
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        defaultCenter={new window.google.maps.LatLng(23.21632, 72.641219)}
      >
        {DummyLocations.map((elem, index) => {
          return (
            <DirectionRenderComponent
              key={index}
              index={index + 1}
              strokeColor={elem.strokeColor}
              from={ currentLocation }
              to={ unitLocation }
            />
          );
        })}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Directions);
