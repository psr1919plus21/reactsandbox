import React, {Component} from 'react';

export default class Refs extends Component {

  submit() {
    console.log('submit');
    this.testInput.focus();
  }

  render() {
    return (
      <div>
        <h2>Test refs</h2>
        <input type="text" placeholder="test refs" ref={(input) => this.testInput = input } />
        <button onClick={this.submit.bind(this)}>submit</button>
      </div>
    );
  }
}
