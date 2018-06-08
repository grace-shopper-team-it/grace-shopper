import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import product from './product';
import cart from './cart';
import category from './category';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
  stateReconciler: autoMergeLevel2,
};

const reducer = combineReducers({ user, product, cart, category });
const pReducer = persistReducer(persistConfig, reducer);
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
export const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);

// export default store;
export * from './user';
