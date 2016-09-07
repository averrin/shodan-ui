import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents, gideonStatus } from './shodan';

const rootReducer = combineReducers({
  shodanStatus,
  gideonStatus,
  shodanEvents,
  routing
});

export default rootReducer;
