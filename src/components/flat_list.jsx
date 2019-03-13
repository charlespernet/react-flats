import React, { Component } from 'react';
import flats from '../../data/flats.js'

import Flat from './flat.jsx';

class FlatList extends Component {

  flatAttrs = (flat) => {
    const optionsBase =  {
      key: flat.price,
      drawSelected: this.props.drawSelected
    }
    return {...optionsBase, ...flat}
  }

  buildFlats() {
    return flats.map(flat => {
      return <Flat {...this.flatAttrs(flat)} />
    })
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
