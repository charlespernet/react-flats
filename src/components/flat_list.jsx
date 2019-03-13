import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';
    return(
      <div className='flat-list'>
        <Flat url={url} />
      </div>
    )
  }
}

export default FlatList;
