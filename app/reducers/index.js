import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents, gideonStatus, globalStatus } from './shodan';
import accountHistory from './account';

const rootReducer = combineReducers({
  shodanStatus,
  gideonStatus,
  globalStatus,
  shodanEvents,
  accountHistory,
  routing
});

export default rootReducer;
