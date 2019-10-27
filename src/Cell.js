import React, { Component } from "react";
import Matrix from "./Matrix";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  handleClick = (event) => {
    this.setState({color: this.props.getColor()});
  }

  render() {
    return (
      <div className="cell" 
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}>

        </div>
    );
  }
}
