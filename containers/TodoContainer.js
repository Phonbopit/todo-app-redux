import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

let TodoContainer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type="text" />
      </form>
    </div>
  )
}
TodoContainer = connect()(TodoContainer)

export default TodoContainer
