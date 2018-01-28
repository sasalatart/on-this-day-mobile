import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dates from './dates';
import entities from './entities';

export default combineReducers({
  dates,
  entities,
  router: routerReducer,
});
