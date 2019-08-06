import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import Header from './components/Header';


class App extends Component {
  calculateGap = (stripe, ad, count) => {
    return parseInt(( stripe - ( ad * count ) ) / 2);
  }
  updateStripeData = (e) => {
    e.preventDefault();
    let newVal = e.currentTarget.value;
    let newValClean;
    isNaN(newVal) ? newValClean = newVal : newValClean = parseInt(newVal);
    const propertyToChange = e.currentTarget.name;
    this.setState({[propertyToChange]: newValClean});
  }
  state = {
    stripes: [],
    stripeWidth: 600,
    stripeItemWidth: 190,
    stripeItemHeight: 240,
    stripeItemImageWidth: 190,
    stripeItemImageHeight: 158,
    backgroundColor: "#ffffff",
    imagePlacement: "t",
    columns: 3,
    rows: 1,
    stripeID: null,
    containerID: null
  }
  render() {
    console.log(this.state);
    let stripeGapWidth = this.calculateGap(this.state.stripeWidth, this.state.stripeItemWidth, this.state.columns);
    console.log(stripeGapWidth);
    return (
      <div className="App">
      <Header />
      <InputBox details={this.state} handleChange={this.updateStripeData} />
      <OutputBox />
    </div>
    )
  }
}

export default App;