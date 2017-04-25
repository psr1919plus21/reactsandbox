import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['photo', 'video']),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      })
    )
  };

  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return <a href={item.link} key={index}>{item.label} </a>
        })}
      </div>
    );
  }
}
