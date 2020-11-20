import React, { Component } from 'react';

export default class Cell extends Component {
  

state = {
      color: this.props.color
    }

    handleClick = () => {
      this.setState({
        color: this.props.selectedColor
      })
    }
  
  render() {
    return (
      <div className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
      </div>
      
    )
  }
  
}