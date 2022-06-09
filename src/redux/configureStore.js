import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './Books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
