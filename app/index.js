import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Datastream from './utils/datastream';

import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);
// const datastream = new Datastream(store);

darkBaseTheme.palette.canvasColor = '#141414';
injectTapEventPlugin();
render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
