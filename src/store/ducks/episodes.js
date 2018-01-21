import { Map } from 'immutable';
import { normalize } from 'normalizr';
import { createSelector } from 'reselect';
import api from '../../utils/api';
import { MONTHS } from '../../utils/dates';
import { goToEpisodes } from './router';
import { episodesSchema } from '../../schemas';

const INITIAL_STATE = new Map({
  isLoading: false,
});

const TYPES = {
  LOAD: 'episodes/LOAD',
};

export default function episodesReducer(state = INITIAL_STATE, action) {
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

export function loadEpisodes(monthName, day) {
  const month = MONTHS.findIndex(monthData => monthData[0] === monthName) + 1;

  return (dispatch) => {
    dispatch({
      type: TYPES.LOAD,
      payload: api
        .loadEpisodes(month, day)
        .then(({ data }) => normalize(data, episodesSchema)),
    });
    dispatch(goToEpisodes());
  };
}

export const getEpisodes = state => state.episodes;

export const getIsLoading = createSelector(
  getEpisodes,
  episodes => episodes.get('isLoading'),
);
