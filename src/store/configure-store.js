import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import root from './ducks';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, root);

export const history = createHistory();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
];

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
