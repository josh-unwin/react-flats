import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.flat.lat, this.props.flat.lng, this.props.flat.name);
  }

  render() {
    console.log(this.props.selectedFlat);
    return (
      <div className={`card${this.props.flat.name == this.props.selectedFlat ? ' active' : ''}`} onClick={this.handleClick} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category"> {this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{ this.props.flat.name }</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat
