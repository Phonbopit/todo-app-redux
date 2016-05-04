import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoContainer from './containers/TodoContainer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/todos';

let store = createStore(todoApp);



class App extends Component {

  render() {
    return (
      <div>
        <h3>Hello World</h3>
        <TodoContainer />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todoApp')
);
