import React, { Component } from 'react'
// import 'Spinner/css'
export class Spinner extends Component {
  render() {
    return (
        <div class="hourglassBackground container">
        <div class="hourglassContainer">
          <div class="hourglassCurves"></div>
          <div class="hourglassCapTop"></div>
          <div class="hourglassGlassTop"></div>
          <div class="hourglassSand"></div>
          <div class="hourglassSandStream"></div>
          <div class="hourglassCapBottom"></div>
          <div class="hourglassGlass"></div>
        </div>
      </div>
    )
  }
}

export default Spinner