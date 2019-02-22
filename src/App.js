import React, { Component } from 'react';
import MyComponent from './MyComponent.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: 'app title'
    }

    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event){
    this.setState({
      title: 'New App Title'
    });
  }
  

  render() {

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <MyComponent 
          title="This is the component title"
          name="Kevin"
        />
      </div>
    );
  }
}

export default App;
