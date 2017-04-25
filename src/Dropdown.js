import React, {Component} from 'react'

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false};
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render () {
    console.log(this.state.isOpened);
    let dropdownText;

    if (this.state.isOpened) {
      dropdownText = (
        <div>
          <div>Here content of dropdown</div>
          <div>And here</div>
        </div>
      );
    }

    return (
      <div onClick={this.toggleState.bind(this)} className="dropdown">
        dropdown
        {dropdownText}
      </div>
    )
  }
}
