import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware';
import createHistory from 'history/createMemoryHistory';
import root from './ducks';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
};

export const history = createHistory();
const persistedReducer = persistReducer(persistConfig, connectRouter(history)(root));

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  promiseMiddleware(),
];

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
