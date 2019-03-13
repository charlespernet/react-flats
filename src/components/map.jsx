import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render() {
    return(
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDFuVYi8VmADnN_S7jcUmsWk3rYZB66mFI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} />
      </div>
    )
  }
}

// <GoogleMapReact
//   bootstrapURLKeys={{ key: 'AIzaSyDFuVYi8VmADnN_S7jcUmsWk3rYZB66mFI' }}
//   defaultCenter={this.props.center}
//   defaultZoom={this.props.zoom}
// />
  // TODO: MARKER
  // <AnyReactComponent
  //   lat={59.955413}
  //   lng={30.337844}
  //   text="My Marker"
  // />
// </GoogleMapReact>

export default Map;
