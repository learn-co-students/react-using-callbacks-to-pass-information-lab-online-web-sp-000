import React, { Component } from 'react';

export default class ColorSelector extends Component {
  // constructor(props){
  //   super(props)
  //   // this.handleColorChange = this.handleColorChange.bind(this)
  // }

  handleColorChange = (e) => {
    e.target.getAttribute('data-hex')
    // alert(e.target.style.backgroundColor.hex)
    this.props.onColorChange(e.target.getAttribute('data-hex'))
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      console.log(idx)
      console.log(str)
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}  data-hex={str} onClick={this.handleColorChange}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
