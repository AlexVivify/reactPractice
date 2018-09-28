import React, { Component } from "react";
import Task from "./Task";
import AddNewTask from "./AddNewTask";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "HTML",
          description: "Input tag missing"
        },
        {
          title: "JavaScript",
          description: "Undefined value returned"
        }
      ]
    };
  }
  deleteTask = title => {
    // const counters = this.state.counters.filter(c => c.id !== counterId);
    let tasks1 = this.state.tasks.filter(c => c.title !== title);

    this.setState({ tasks: tasks1 });
  };

  listTasks = () => {
    return (
      <ul>
        {this.state.tasks.map(task => (
          <Task onDelete={this.deleteTask} task={task} key={task.description} />
        ))}
      </ul>
    );
  };

  handleAddNewTask = task => {
    let tasks = this.state.tasks;

    tasks.push(task);
    this.setState(tasks);
  };

  render() {
    return (
      <div>
        <h1>My Tasks</h1>
        {this.listTasks()}
        <hr />
        <AddNewTask addNewTask={this.handleAddNewTask} />
      </div>
    );
  }
}

export default Tasks;
