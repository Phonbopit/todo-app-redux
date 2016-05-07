import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

let TodoContainer = ({ dispatch }) => {
  let input

  return (
    <header className="header">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="new-todo" placeholder="What needs to be done?" ref={node => {
          input = node
        }} />
      </form>
    </header>
  )
}
TodoContainer = connect()(TodoContainer)

export default TodoContainer
