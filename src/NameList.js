import React from 'react';
import EditableItem from './EditableItem'

export default class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3]
    };
  }

  handleClickAdd() {
    this.setState({ items: [...this.state.items, ""] })
  }

  render() {
    const listItems = this.state.items.map((item) =>
      <EditableItem name={item} />
    );
    return (
      <div className="name-list">
        <span>Add names to the list</span>
        <ul>{listItems}</ul>
        <input onClick={this.handleClickAdd.bind(this)} value="Add Name" type="submit" />
      </div>
    );
  }
}