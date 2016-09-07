import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import shodan from './shodan';

const rootReducer = combineReducers({
  shodan,
  routing
});

export default rootReducer;
