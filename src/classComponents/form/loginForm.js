import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();

    this.state = {
      errors: []
    };
  }

  componentDidMount() {
    //this.username.focus();

    //find
    ReactDOM.findDOMNode(this.username.current).focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const errors = this.handleValidation(username, password);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  };

  handleValidation = (username, password) => {
    const errors = [];
    if (username.length === 0) {
      errors.push('Username cannot be empty');
    }
    if (password.length < 6) {
      errors.push('Password should be atleast 6 characters long');
    }
    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>React Login Form using createRef</h1>
        <form onSubmit={this.handleSubmit}>
          {errors.map(err => (
            <p key={err}>{err}</p>
          ))}
          <div>
            <label>Username:</label>
            <input type="text" ref={this.username} />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" ref={this.password} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
