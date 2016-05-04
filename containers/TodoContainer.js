import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import { createStore } from 'redux';
import todos from '../reducers/todos';

let store = createStore(todos);

let Todo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        console.log('before ------------');
        console.log(store.getState())
        dispatch(addTodo(input.value));
        console.log('after -------------');
        console.log(store.getState())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

Todo = connect()(Todo);

export default Todo
