import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState={}) {
const middleware = [thunk, Logger];
 return createStore(
  rootReducer,
   applyMiddleware(...middleware)
 );
}