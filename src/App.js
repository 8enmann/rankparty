import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      ranked: []
    };
  }
  onItemRanked(item, ranking) {
  }
  componentDidMount() {
    this.setState({
      allItems: ['bear', 'fish', 'lobster', 'camel', 'cat', 'dog', 'hamster'],
      ranked: [
        ['cat', 1],
        ['dog', 2],
        ['hamster', 2]
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>All items</h2>
        {this.state.allItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <h2>Ranked items</h2>
        {this.state.ranked.map((item, index) => (
          <p key={index}>{item[0]} {item[1]}</p>
        ))}
      </div>
    );
  }
}

export default App;
