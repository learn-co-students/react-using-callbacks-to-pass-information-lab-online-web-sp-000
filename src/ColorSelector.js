import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{ backgroundColor: str }} />
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

// We need to update this code so that when any one of these divs is clicked the hexadecimal color value of that div becomes the selected color in Matrix. For click events, we know we'll have to add an event and provide a callback on the div element itself
// Inside this callback, we'll call this.props.setSelectedColor(), but where would this callback function need to be defined