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
    stripeType: "Email",
    stripeWidth: 600,
    width: 190,
    height: 240,
    imageWidth: 190,
    imageHeight: 158,
    backgroundColor: "#ffffff",
    fontName: "Arial",
    fontSize: 16,
    fontColor: "#333",
    titleUnderline: false,
    extraSpace: 0,
    imagePlacement: "t",
    verticalTitleAlign: "middle",
    columns: 3,
    rows: 1,
    stripeName: "",
    stripeID: null,
    containerID: null,
    esp: null,
    domain: "stripe.rs-stripe.com",
    imageFormat: "GIF",
    contentRating: "G"
  }
  render() {
    let stripeGapWidth = this.calculateGap(this.state.stripeWidth, this.state.stripeItemWidth, this.state.columns);
    return (
      <div className="App">
      <Header />
      <InputBox details={this.state} handleChange={this.updateStripeData} />
      <OutputBox details={this.state} />
    </div>
    )
  }
}

export default App;