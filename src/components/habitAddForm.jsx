import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form className="add" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Please enther your habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
