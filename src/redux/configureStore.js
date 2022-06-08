import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducers from './Books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducers,
  checkReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
