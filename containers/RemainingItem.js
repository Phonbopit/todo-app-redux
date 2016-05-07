// import { connect } from 'react-redux';
// import Footer from '../components/Footer';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     remaining: 50
//   }
// };

// const RemainingItem = connect(
//   mapStateToProps
// )(Footer)

// export default RemainingItem


import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

const mapStateToProps = (state) => {
  return {
    remaining: state.todos.reduce((count, todo) => {
      return todo.completed ? count : count + 1;
    }, 0)
  }
}

let RemainingItem = ({ remaining }) => {

  return (
    <span className="todo-count">
      <strong>{remaining}</strong><span></span> <span>items left</span>
    </span>
  )
}
RemainingItem = connect(
  mapStateToProps
)(RemainingItem)

export default RemainingItem
