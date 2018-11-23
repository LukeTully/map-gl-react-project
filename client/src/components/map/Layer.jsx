import React, { Component } from 'react';
import MapContext from './context';

/* Component for managing a MapBoxGL map layer */
export class Layer extends Component {
  componentDidUpdate(previous) {
    const { id, map, type, paint, source } = this.props;

    if (map) {
      // Remove the layer from the map if it exists
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      // Check for a source on the map
      if (!map.getSource(source)) {
        console.error(
          `Adding a layer with a source that doesn't exist. Make sure sources come before layers.`
        );
      }

      // Add a layer to the map
      map.addLayer({
        id,
        type,
        source,
        paint
      });
    }
  }

  componentWillUnmount() {
    this.props.map.removeLayer(this.props.id);
  }

  render() {
    return null;
  }
}

export default props => (
  <MapContext.Consumer>
    {context => <Layer {...props} {...context} />}
  </MapContext.Consumer>
);
