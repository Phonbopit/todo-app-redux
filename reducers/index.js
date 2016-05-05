import { combineReducers, createStore } from 'redux';
import todos from './todos';
import filter from './filters';

// combine 2 reducers with combineReducers()
const todoApp = combineReducers({
  todos,
  filter
});

export default todoApp
