import React, { Component } from 'react';
import Input from './forwardRefChildComponent';

class ForwardRefParentComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      value: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: this.inputRef.current.value
    });
  };

  render() {
    return (
      <div>
        <h1>React ref - ForwardRef using createRef</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <Input ref={this.inputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ForwardRefParentComponent;
