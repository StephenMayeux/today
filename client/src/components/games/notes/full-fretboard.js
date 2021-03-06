import React, { Component } from 'react';
import Tuner from '../../views/tuner';

class FullFretboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuning: ["e", "a", "d", "g", "b", "e"]
    };
  }



  render() {
    console.log(this.state);
    return (
      <div>
        <div>Fill in the Fretboard</div>

        <Tuner />

        <input
          className="FullFretboardAnswer"
          type="text"
          placeholder="Enter note" />
        <button action="submit" className="btn submitAnswer">Answer</button>

        <button className="btn start">Start</button>
        <div className="timer">timer here</div>

      </div>
    )
  }
}

export default FullFretboard;
