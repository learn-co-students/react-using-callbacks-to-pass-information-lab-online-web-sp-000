import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.colorSelectorCallback = props.colorSelectorCallback
    this.state = {
      color: this.props.color
    };
  }

  handleClick = () => {
    this.setState({color: this.colorSelectorCallback()})
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
