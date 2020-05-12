import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'Auth',
  storage,
  whitelist: ['UserReducer', 'displayName'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    ...reducers,
  }),
);

const configureStore = () => {
  const createdStore = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );
  const persistedStore = persistStore(createdStore);
  (window as Window).store = createdStore; // Making store globally available

  return { store: createdStore, persistor: persistedStore };
};

const { store, persistor } = configureStore();

sagaMiddleware.run(rootSaga);

export default { store, persistor };
