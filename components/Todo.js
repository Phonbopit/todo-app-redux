import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    className={completed ? 'completed' : ''}

  >

    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={onClick}
        checked={completed}/>
      <label>{text}</label>
      <button className="destroy"></button>
    </div>

  </li>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
