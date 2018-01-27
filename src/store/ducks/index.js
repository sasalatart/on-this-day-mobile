import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dates from './dates';
import episodes from './episodes';
import entities from './entities';

export default combineReducers({
  dates,
  episodes,
  entities,
  router: routerReducer,
});
