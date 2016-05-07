import React, { Component } from 'react';
import { render } from 'react-dom';
import AddTodo from './containers/TodoContainer';
import TodoListContainer from './containers/TodoListContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Footer from './components/Footer';

// create store from reducers
let store = createStore(todoApp);

class App extends Component {

  render() {
    return (
      <section className="todoapp">
        <h1>Redux todos</h1>
        <AddTodo />
        <TodoListContainer />
        <Footer items="xx"/>
      </section>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todoApp')
);
