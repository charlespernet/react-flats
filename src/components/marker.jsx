import React, { Component } from 'react';

class Marker extends Component {

  render() {
    if (this.props.lat && this.props.lng) {
      return <div className='marker'></div>
    } else {
      return null;
    }
  }
}

export default Marker;
