import React, { Component } from 'react';

export default class Cell extends Component {
  
  // color prop is used to set the initial state of component 
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  // 7. Set up another click event using handleClick class method 
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  // state.color is then used to modify the backgroundColor of the returned div "cell"
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}