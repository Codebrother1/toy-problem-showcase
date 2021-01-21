import React, { Component } from 'react'



class EvenAndOdds extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    };
  }





  render(){
    return(
     
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={this.state.userInput}  className="inputLine" type="text"/>
        <button onClick={} className="confirmationButton"></button>
        <span className="resultsBox"></span>
        <span className="resultsBox"></span>
      </div>
    )
  }
}


export default EvenAndOdds;