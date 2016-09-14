import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ShodanPage from './containers/ShodanPage';
import MoneyPage from './containers/MoneyPage';
import NotesPage from './containers/NotesPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/shodan" component={ShodanPage} />
    <Route path="/money" component={MoneyPage} />
    <Route path="/notes" component={NotesPage} />
  </Route>
);
