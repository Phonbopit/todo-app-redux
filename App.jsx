import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    render() {
        let message = this.props.message;
        return <h3>{message}</h3>
    }
}

render(
  <App message="Hello World" />,
  document.getElementById('todoApp')
);
