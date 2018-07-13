import { Map } from 'immutable';
import { normalize } from 'normalizr';
import { createSelector } from 'reselect';
import { goToDate } from './router';
import { getEntitiesState } from './entities';
import { datesSchema } from '../../schemas';
import { MONTHS } from '../../utils/dates';
import api from '../../utils/api';

const INITIAL_STATE = new Map({
  isLoading: false,
});

const TYPES = {
  LOAD: 'dates/LOAD',
};

export function loadEpisodes(monthName, day) {
  const month = MONTHS.findIndex(monthData => monthData[0] === monthName) + 1;

  return (dispatch) => {
    dispatch({
      type: TYPES.LOAD,
      payload: api
        .loadEpisodes(month, day)
        .then(data => normalize(data, datesSchema)),
    });
    dispatch(goToDate(month, day));
  };
}

export default function datesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${TYPES.LOAD}_PENDING`:
      return state.set('isLoading', true);
    case `${TYPES.LOAD}_FULFILLED`:
    case `${TYPES.LOAD}_REJECTED`:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export const getDatesState = state => state.dates;

export const getIsLoading = createSelector(
  getDatesState,
  datesState => datesState.get('isLoading'),
);

export const getDates = createSelector(
  getEntitiesState,
  entities => entities.get('dates'),
);

const getMonthName = (state, params) => params.monthName;

const getDay = (state, params) => params.day;

export const getDate = createSelector(
  getDates,
  getMonthName,
  getDay,
  (dates, monthName, day) => {
    const date = dates.get(`${monthName}-${day}`);
    return date && date.toJS();
  },
);
