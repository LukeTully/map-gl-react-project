import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as turf from '@turf/turf';

import Map, { Layer, Sources, GeoJSON } from '../components/map';

import { centerMapOnSite, mapSetCenter, mapSetZoom } from '../model/map';

class InteractiveMap extends Component {
  render() {
    const { bounding } = this.props.currentSite;
    const trees = {
      byId: this.props.trees.byId,
      ids: this.props.trees.ids
    }
    // Create a GeoJSON multipolygon outline for the bounding box
    const boundingFeature = turf.polygon(
      [
        [
          [bounding.left, bounding.top],
          [bounding.right, bounding.top],
          [bounding.right, bounding.bottom],
          [bounding.left, bounding.bottom],
          [bounding.left, bounding.top]
        ]
      ],
      { name: 'Bounding Area' }
    );
    // Create a list of circles to represent trees
    const treeFeatures = trees.ids.map(tree => {
      return turf.circle([trees.byId[tree].long, trees.byId[tree].lat], 0.002);
    });

    // Create GeoJSON FeatureCollection with our list of circles
    const treeCollection = turf.featureCollection(treeFeatures);

    return (
      <Map {...this.props}>
        <Sources>
          <GeoJSON id="bounding-box" data={boundingFeature} />
          <GeoJSON id="trees-source" data={treeCollection} />
        </Sources>
        <Layer
          id="bounding-box"
          type="line"
          paint={{
            'line-width': 2,
            'line-color': '#fff'
          }}
          source="bounding-box"
        />
        <Layer
          id="bounding-box-fill"
          type="fill"
          source="bounding-box"
          paint={{
            'fill-color': '#fff',
            'fill-opacity': 0.2
          }}
        />
        <Layer
          id="trees"
          type="fill"
          source="trees-source"
          paint={{
            'fill-color': '#fff'
          }}
        />
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSite: state.sites.byId[state.sites.selected],
    center: state.map.center,
    zoom: state.map.zoom,
    trees: state.trees
  };
}

const mapDispatchToProps = {
  centerMapOnSite,
  mapSetCenter,
  mapSetZoom
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractiveMap);
