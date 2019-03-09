import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.getColorCallback = props.getColorCallback
    this.state = {
      color: this.props.color
    };
  }

  handleClick = () => {
    this.setState({color: this.getColorCallback()})
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
