import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import { setShodanOnline, createShodanEvent, setGideonOnline, status } from './actions/shodan';

const store = configureStore();

const socket = new WebSocket('ws://shodan.averr.in:8199/ws');
socket.addEventListener('message', m => {
  const event = JSON.parse(m.data);
  if (event.Event === 'shodanOnline') {
    store.dispatch(setShodanOnline(event));
  } else if (event.Event === 'gideonOnline') {
    store.dispatch(setGideonOnline(event));
  } else if (event.Event === 'status') {
    store.dispatch(status(event));
  } else {
    store.dispatch(createShodanEvent(event));
  }
});
const history = syncHistoryWithStore(hashHistory, store);

injectTapEventPlugin();
render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
