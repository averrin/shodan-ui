import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Datastream from './utils/datastream';

import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);
const datastream = new Datastream(store);

injectTapEventPlugin();
render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes}  datastream={datastream}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
