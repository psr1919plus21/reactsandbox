import React, {Component} from 'react';
import './Registrationform.css';

export default class Registrationform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit. email value is ' + this.state.email);
  }


  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          className="registration-input"
          type="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmailChange.bind(this)}
        />
      </form>
    );
  }
}
