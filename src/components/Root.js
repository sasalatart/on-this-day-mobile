import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Route } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from '../store/configure-store';
import BackgroundWrapper from '../components/BackgroundWrapper';
import DateSelect from '../containers/DateSelect';
import Episodes from '../containers/Episodes';

const { store, persistor } = configureStore();

export default function Root() {
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
