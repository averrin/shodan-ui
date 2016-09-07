import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents, gideonStatus, globalStatus } from './shodan';

const rootReducer = combineReducers({
  shodanStatus,
  gideonStatus,
  globalStatus,
  shodanEvents,
  routing
});

export default rootReducer;
