import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Map from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markerPos: {}
    }
  }

  drawSelected = (position) => {
    this.setState({ markerPos: position })
  }

  render() {
    return(
      <div>
        <FlatList drawSelected={this.drawSelected} />
        <Map markerPos={this.state.markerPos} />
      </div>
    )
  }
}

export default App;
