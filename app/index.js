import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import { setShodanOnline } from './actions/shodan';

const store = configureStore();

const socket = new WebSocket('ws://shodan.averr.in:8199/ws');
socket.addEventListener('message', m => {
  const event = JSON.parse(m.data);
  if (event.Event === 'shodanOnline') {
    store.dispatch(setShodanOnline(event));
  }
});
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
