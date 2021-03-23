import React, { Component } from 'react';

export default class ColorSelector extends Component {
//Number five, we need to update this code so that when any one of these divs is clicked 
//the hexadecimal color value of that div becomes the selected color in Matrix.
//that is why we are adding "callback" fn
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
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
