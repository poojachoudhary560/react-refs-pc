import React, { Component } from 'react';

class CallbackRefComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: this.textInput.value
    });
  };

  render() {
    return (
      <div>
        <h1>React ref - callback ref</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={e => (this.textInput = e)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CallbackRefComponent;
