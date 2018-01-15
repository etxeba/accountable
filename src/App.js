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
        <p>You are: {this.state.viewerAddress}</p>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Accountable</h1>
        </header>
        <Commitment title="I will lose weight" committerAddress="0x11" judgeAddress="0xjudge" viewerAddress="0x12" active={true} />
      </div>
    );
  }
}


export default App;
