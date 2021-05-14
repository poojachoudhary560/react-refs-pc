import React, { Component } from 'react';
import Input from './callbackRefChildComponent';

class CallbackRefParentComponent extends Component {
  state = {
    value: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: this.textInput.value
    });
  };

  render() {
    return (
      <div>
        <h1>React ref - Parent Child Callback Ref</h1>
        <h3>Value: {this.state.value}</h3>
        <Input inputRef={el => (this.textInput = el)} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CallbackRefParentComponent;
