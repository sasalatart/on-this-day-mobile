import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Route } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from '../store/configure-store';
import BackgroundWrapper from '../components/BackgroundWrapper';
import DateSelect from '../containers/DateSelect';
import DateContainer from '../containers/Date';

const { store, persistor } = configureStore();

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <BackgroundWrapper>
            <Route exact path="/" component={DateSelect} />
            <Route path="/date" component={DateContainer} />
          </BackgroundWrapper>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}
