import React from 'react';
import ReactDOM from 'react-dom';
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);
