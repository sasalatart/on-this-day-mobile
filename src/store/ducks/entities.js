import { Map } from 'immutable';
import { REHYDRATE } from 'redux-persist/lib/constants';

const INITIAL_STATE = new Map();

export default function entitiesReducer(state = INITIAL_STATE, action) {
  if (!action.payload || !action.payload.entities || action.type === REHYDRATE) {
    return state;
  }

  const { entities } = action.payload;

  return Object.keys(entities).reduce(
    (newState, entityName) => (
      newState.get(entityName)
        ? newState.mergeIn([entityName], entities[entityName])
        : newState.setIn([entityName], new Map(entities[entityName]))
    ),
    state,
  );
}
