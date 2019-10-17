import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setCell = (selectedColor) => {
    this.setState = {
      color: selectedColor
    }
  }

  colorCell = (event) => {
    let color = this.props.printCurrentSelection
    this.setCell(color)
    event.target.style.backgroundColor = color
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorCell}>
      </div>
    )
  }
}
