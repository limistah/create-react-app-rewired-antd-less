import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import storeActions from './actions';
import reducers from './reducers';

export const store = createStore(
  combineReducers({ state: reducers }),
  applyMiddleware(thunk)
);

export const actions = { ...storeActions };
