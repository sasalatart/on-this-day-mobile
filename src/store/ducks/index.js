import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dates from './dates';

export default combineReducers({
  dates,
  router: routerReducer,
});
