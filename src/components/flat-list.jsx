import flats from '../../data/flats.js';
import Flat from './flat.jsx';
import React, { Component } from 'react';

class FlatList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-list">
        { flats.map(flat => {
          return <Flat flat={flat} key={flat.name} selectFlat={this.props.selectFlat} selectedFlat={this.props.selectedFlat} />
        })}
      </div>
      )
  }
}

export default FlatList
