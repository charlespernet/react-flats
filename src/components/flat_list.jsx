import React, { Component } from 'react';
import flats from '../../data/flats.js'

import Flat from './flat.jsx';

class FlatList extends Component {
  buildFlats() {
    return flats.map(flat => <Flat {...flat} />)
  }

  render() {
    return(
      <div className='flat-list'>
        {this.buildFlats()}
      </div>
    )
  }
}

export default FlatList;
