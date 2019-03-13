import React, { Component } from 'react';

class Flat extends Component {


  render() {
    const flatStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.url})`
    }

    return(
      <div className="card" style={flatStyle}>
        <div className="card-category">150 EUR</div>
        <div className="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
