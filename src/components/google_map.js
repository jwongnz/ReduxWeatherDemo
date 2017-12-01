import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // Lifecycle method, called automatically once
  // component has been rendered to screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // allows this.refs.map in this Component
    return <div ref="map" />
  }
}