import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"></div>;

class MapContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props.center);
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
        <Marker
          lat={this.props.center.lat}
          lng={this.props.center.lng}
        />
      </GoogleMapReact>
      </div>
    )
  }
}

export default MapContainer
