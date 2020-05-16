import * as firebase from 'firebase/app';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/auth';
import { PersistGate } from 'redux-persist/integration/react';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { WithAuth } from './components/containers';
import createdStore from './redux/store';
import Routes from './routes/Routes';
import Boot from './redux/boot';
import settings from './settings';

const App = () => (
  <Provider store={createdStore.store}>
    <PersistGate loading={null} persistor={createdStore.persistor}>
      <FirebaseAuthProvider {...settings.firebase} firebase={firebase}>
        <BrowserRouter>
          <WithAuth />
          <Routes />
        </BrowserRouter>
      </FirebaseAuthProvider>
    </PersistGate>
  </Provider>
);

Boot()
  .then(() => App())
  // eslint-disable-next-line no-console
  .catch(error => console.error(error));

export default App;
