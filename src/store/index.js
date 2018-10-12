import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reduxActions from './actions';
import reduxReducers from './reducers';

export const store = createStore(
  reduxReducers,
  applyMiddleware(thunk)
);

export const actions = reduxActions;
