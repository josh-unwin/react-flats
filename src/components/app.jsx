import React, { Component } from 'react';

import FlatList from './flat-list.jsx';
import flats from '../../data/flats.js';
import MapContainer from './map-container.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { center: { lat: flats[0].lat, lng: flats[0].lng }, zoom: 10, selectedFlat: flats[0].name };
    console.log(this.state.center.lat);
  }

  selectFlat = (lat, lng, name) => {
    this.setState({ center: { lat: lat, lng: lng }, zoom: 11, selectedFlat: name });
    console.log(`set state to ${this.state.center.lat} and ${this.state.center.lng}`);
  }

  render() {
     return (
      <div>
        <FlatList selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <MapContainer center={this.state.center} zoom={this.state.zoom} />
      </div>
    )
  }
}

export default App
