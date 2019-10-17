import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div id={str} key={idx} onClick={this.stealBackgroundColor} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  stealBackgroundColor = (event) => {
    let color = event.target.style
    this.props.callbackFromParent(color.backgroundColor);
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
