import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from './model/';

import InteractiveMap from './containers/InteractiveMap';

import '../styles/app.scss';
import ProjectsIndex from './containers/ProjectsIndex';

render(
  <Provider store={store}>
    <ProjectsIndex />
  </Provider>
, document.getElementById('application'));
