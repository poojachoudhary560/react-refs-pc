import React, { Component } from 'react';

class CreateRefComponent extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      value: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: this.textInput.current.value
    });
  };

  render() {
    return (
      <div>
        <h1>React ref - createRef</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateRefComponent;
