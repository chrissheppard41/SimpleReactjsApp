import React, { Component } from 'react';

class List extends Component {
  render() {
    const listItems = this.props.data.map((item, index) =>
      <li key={index}>{item}</li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
  }
}

export default List;
