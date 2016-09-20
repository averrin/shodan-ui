import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents, gideonStatus, globalStatus, unreadCount } from './shodan';
import accountHistory from './account';
import notes from './notes';

const rootReducer = combineReducers({
  shodanStatus,
  gideonStatus,
  globalStatus,
  shodanEvents,
  accountHistory,
  unreadCount,
  notes,
  routing
});

export default rootReducer;
