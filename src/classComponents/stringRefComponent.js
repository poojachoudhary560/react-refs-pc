import React, { Component } from 'react';

class StringRefComponent extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: this.refs.textInput.value
    });
  };

  render() {
    return (
      <div>
        <h1>React ref - String Ref</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default StringRefComponent;
