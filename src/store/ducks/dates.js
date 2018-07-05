import { Map } from 'immutable';
import { normalize } from 'normalizr';
import { createSelector } from 'reselect';
import {
  MONTHS,
  CURRENT_MONTH,
  CURRENT_DAY,
} from '../../utils/dates';
import api from '../../utils/api';
import { goToDate } from './router';
import { datesSchema } from '../../schemas';

const INITIAL_STATE = new Map({
  currentMonth: CURRENT_MONTH,
  currentDay: CURRENT_DAY,
  isLoading: false,
});

const TYPES = {
  SET_CURRENT: 'dates/SET_CURRENT',
  LOAD: 'dates/LOAD',
};

export function setDate(currentMonth, currentDay) {
  return {
    type: TYPES.SET_CURRENT,
    payload: {
      currentMonth,
      currentDay,
    },
  };
}

export function loadEpisodes(monthName, day) {
  const month = MONTHS.findIndex(monthData => monthData[0] === monthName) + 1;

  return (dispatch) => {
    dispatch({
      type: TYPES.LOAD,
      payload: api
        .loadEpisodes(month, day)
        .then(data => normalize(data, datesSchema)),
    });
    dispatch(goToDate());
  };
}

export default function datesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.SET_CURRENT: {
      const { currentDay, currentMonth } = action.payload;
      return state.merge({ currentDay, currentMonth });
    }
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

export const getCurrentDay = createSelector(
  getDatesState,
  datesState => datesState.get('currentDay'),
);

export const getCurrentMonth = createSelector(
  getDatesState,
  datesState => datesState.get('currentMonth'),
);

export const getIsLoading = createSelector(
  getDatesState,
  datesState => datesState.get('isLoading'),
);
