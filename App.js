import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/configure-store';
import BackgroundWrapper from './src/components/BackgroundWrapper';
import DateSelect from './src/containers/DateSelect';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BackgroundWrapper>
          <DateSelect />
        </BackgroundWrapper>
      </PersistGate>
    </Provider>
  );
}
