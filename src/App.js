import React, { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import InteraterSample from './IteraterSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(color)
  return color;
}
class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
      this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <ValidationSample />
        <br />
        <br />
        <ScrollBox />
        <br />
        <br />
        <InteraterSample />
        <br/>
        <br/>
        <button onClick={this.handleClick}> 랜덤색상 </button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
