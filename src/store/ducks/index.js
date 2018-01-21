import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dates from './dates';
import episodes from './episodes';

export default combineReducers({
  dates,
  episodes,
  router: routerReducer,
});
