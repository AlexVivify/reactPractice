import React, { Component } from "react";
import { list } from "postcss";

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>:
        {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
