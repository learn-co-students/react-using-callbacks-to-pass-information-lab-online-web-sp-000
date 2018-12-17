import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  changeColour = () => {
    const newColour = this.props.handleClick();
    this.setState({ color: newColour });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={() => this.changeColour()}
      />
    );
  }
}
