import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  render() {
    return <h3>Hello World</h3>;
  }
}

render(
  <App />,
  document.getElementById('todoApp')
);
