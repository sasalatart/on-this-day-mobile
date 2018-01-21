import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Route } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './src/store/configure-store';
import BackgroundWrapper from './src/components/BackgroundWrapper';
import DateSelect from './src/containers/DateSelect';
import Episodes from './src/containers/Episodes';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <BackgroundWrapper>
            <Route exact path="/" component={DateSelect} />
            <Route path="/episodes" component={Episodes} />
          </BackgroundWrapper>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}
