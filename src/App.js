import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import Header from './components/Header';


class App extends Component {
  state = {
    stripes: [],
    stripeData: {}
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
      <Header />
      <InputBox />
      <OutputBox />
    </div>
    )
  }
}

export default App;