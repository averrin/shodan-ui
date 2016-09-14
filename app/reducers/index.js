import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents, gideonStatus, globalStatus } from './shodan';
import accountHistory from './account';
import notes from './notes';

const rootReducer = combineReducers({
  shodanStatus,
  gideonStatus,
  globalStatus,
  shodanEvents,
  accountHistory,
  notes,
  routing
});

export default rootReducer;
