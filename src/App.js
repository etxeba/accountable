import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Commitment extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      committerAddress: props.committerAddress,
      judgeAddress: props.judgeAddress,
      viewerAddress: props.viewerAddress,
      active: props.active
    };
  }

  render() {
    return (
      <div className="Commitment">
        <h1>{this.state.title}</h1>
        <p>Committer: {this.state.committerAddress}</p>
        <p>Judge: {this.state.judgeAddress}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
