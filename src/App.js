import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import Header from './components/Header';


class App extends Component {
  calculateGap = (stripe, ad, count) => {
    return parseInt(( stripe - ( ad * count ) ) / 2);
  }
  state = {
    stripes: [],
    stripeData: {
      stripeWidth: 600,
      stripeItemWidth: 190,
      stripeItemHeight: 240,
      stripeItemImageWidth: 190,
      stripeItemImageHeight: 158,
      backgroundColor: "#ffffff",
      imagePlacement: "t",
      adCount: 3,
      stripeID: null,
      containerID: null
    }
  }
  render() {
    console.log(this.state);
    let stripeGapWidth = this.calculateGap(this.state.stripeData.stripeWidth, this.state.stripeData.stripeItemWidth, this.state.stripeData.adCount);
    console.log(stripeGapWidth);
    return (
      <div className="App">
      <Header />
      <InputBox details={this.state.stripeData} />
      <OutputBox />
    </div>
    )
  }
}

export default App;