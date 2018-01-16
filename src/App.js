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

  // Initialize by checking the current address of the browser
  // look at the smart contract's list of committers and judges
  // If viewer is an active committer, then show the commitment details
  // If viewer is an active judge, show commitment details and the certify button
  // If neither, show the create Commitment view

  constructor(props){
    super(props);
    this.state = {
      viewer: "0xViewer"
    }
  }

  getCommitments = () => {
    var commitments = [
      {id:1, committer: "0xViewer", judge: "0xJudge", title:"Lose weight", active:true},
      {id:2, committer: "0x11", judge:"0xJudge", title:"Make Money", active:true}
    ];

    var foundCommitments = commitments.map((commitment) =>
      commitment.committer == this.state.viewer && commitment.active &&
      <li><Commitment title={commitment.title} committerAddress={commitment.committer} judgeAddress={commitment.judge} viewerAddress={this.state.viewer} active={commitment.active} /></li>
    )
    return foundCommitments
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Accountable</h1>
        </header>
        <ul>{this.getCommitments()}</ul>
      </div>
    );
  }
}


export default App;
