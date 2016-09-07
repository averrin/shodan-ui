import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { shodanStatus, shodanEvents } from './shodan';

const rootReducer = combineReducers({
  shodanStatus,
  shodanEvents,
  routing
});

export default rootReducer;
