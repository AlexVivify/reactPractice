import React, { Component } from "react";

class Task extends Component {
  state = {};

  render() {
    return (
      <div>
        <strong> {this.props.task.title} </strong>
        {this.props.task.description}
        <button onClick={() => this.props.onDelete(this.props.task.title)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
