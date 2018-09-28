import React, { Component } from "react";

class AddNewTask extends Component {
  constructor() {
    super();
    this.state = {
      newTask: {}
    };
  }

  handleSubmit = e => {
    if (this.refs.title.value === "" || this.refs.description.value === "") {
      alert("Please insert all fields");
    } else {
      let newTask = {
        title: this.refs.title.value,
        description: this.refs.description.value
      };
      this.setState(newTask, function() {
        this.props.addNewTask(newTask);
      });
    }

    this.refs.title.value = "";
    this.refs.description.value = "";
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Add new task</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title </label> <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Description </label> <br />
            <input type="text" ref="description" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddNewTask;
