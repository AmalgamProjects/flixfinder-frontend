import * as firebase from 'firebase/app';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { store } from './redux/store';
import Routes from './routes/Routes';
import Boot from './redux/boot';
import settings from './settings';

const App = () => (
  <Provider store={store}>
    <FirebaseAuthProvider {...settings.firebase} firebase={firebase}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </FirebaseAuthProvider>
  </Provider>
);

Boot()
  .then(() => App())
  // eslint-disable-next-line no-console
  .catch(error => console.error(error));

export default App;
