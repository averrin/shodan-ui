import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import shodan from './shodan';

const rootReducer = combineReducers({
  counter,
  shodan,
  routing
});

export default rootReducer;
