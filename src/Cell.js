import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    let theCurrentColor = this.props.currentColor();
    this.setState({
      color: theCurrentColor
    })
  }

  render() {
    return (
      <div className="cell" onClick = {this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
