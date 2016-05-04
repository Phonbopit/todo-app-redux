import { combineReducers, createStore } from 'redux';
import todos from './todos';

export const store = createStore(todos);

const todoApp = combineReducers({
  todos
});

export default todoApp
