import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  setTitle = (eventArgs) => {
      this.setState({
          [eventArgs.target.name]: eventArgs.target.value
      })
  }

  formSubmit = (eventArgs) => {
      eventArgs.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title : ''});
  }

  render() {
    return (
      <form style={formStyle} onSubmit={this.formSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.setTitle}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={submitStyle}
        />
      </form>
    );
  }
}

const submitStyle = {
  flex: "1"
};

const formStyle = {
  display: "flex",
  marginBottom: "10px"
};

export default AddTodo;
