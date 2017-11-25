import React from 'react';



export default class EditableItem extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: props.name
    };

    this.li_styles = {
      listStyle: "none",
      border: "#292937 thin solid",
      padding: "5px",
      marginTop: "2px",
      borderRadius: "0.2em",
      backgroundColor: "#9fb6cd",
      color: "#f0f8ff",
      minHeight:"1em"

    };
  }

  onBlur(event) {
    this.setState({ name: event.target.value, editing: false });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onBlur(e);
    }
  }

  handleClick() {
    console.log("click")
    if (!this.state.editing) {
      this.setState({ editing: true });
    }
  }

  handleInputRef(input) {
    if (typeof (input) === "object" && input !== null) {
      this.input = input;
      input.focus()
    }
  }

  handleChange() {
    if (typeof (this.input) === "object" && this.input !== null) {
      this.setState({ name: this.input.value })
    }
  }

  render() {
    const edit_view = (<li style={this.li_styles}>
      <input type="text" ref={this.handleInputRef.bind(this)}
        value={this.state.name}
        onBlur={this.onBlur.bind(this)}
        onKeyPress={this.onKeyPress.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    </li>)
    const non_edit_view = (<li style={this.li_styles} onClick={this.handleClick.bind(this)} >
      {this.state.name}
    </li>)
    return (this.state.editing ? edit_view : non_edit_view)
  }
}