import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx'

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.88184,
      lng: 2.343371
    },
    zoom: 11
  }

  render() {
    return(
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDFuVYi8VmADnN_S7jcUmsWk3rYZB66mFI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker {...this.props.markerPos} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
