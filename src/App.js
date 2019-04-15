import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <MyComponent/>
      <br/>
      <br/>
      <EventPractice/>
      <br/>
      <br/>
      <ValidationSample/>
      <br/>
      <br/>
      <ScrollBox/>
      </React.Fragment>
    );
  }
}

export default App;
