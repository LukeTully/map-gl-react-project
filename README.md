## Mapbox GL Integration

Display trees within the currently selected site using a circle for each tree and a rectangular translucent bounding box around each site (of trees).

![Mapbox](docs/mapbox/map.jpg)


### Requirements

- Add a layer that can fill the site bounding box with a slightly transparent colour.
- The redux store doesn't contain trees, so that will need to be hooked up to the api.
- Add a layer that can draw the positions of the trees using circles.
