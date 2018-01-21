import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { CURRENT_MONTH, CURRENT_DAY } from '../../utils/dates';

const INITIAL_STATE = new Map({
  month: CURRENT_MONTH,
  day: CURRENT_DAY,
});

export const TYPES = {
  SET_DATE: 'dates/SET_DATE',
};

export function setDate(month, day) {
  return {
    type: TYPES.SET_DATE,
    payload: {
      month,
      day,
    },
  };
}

export default function datesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.SET_DATE: {
      const { day, month } = action.payload;
      return state.merge({ day, month });
    }
    default:
      return state;
  }
}

export const getDates = state => state.dates;

export const getDay = createSelector(
  getDates,
  dates => dates.get('day'),
);

export const getMonth = createSelector(
  getDates,
  dates => dates.get('month'),
);
