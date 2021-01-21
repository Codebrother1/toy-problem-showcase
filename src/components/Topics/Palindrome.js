import React, { Component } from 'react'





  class Palindrome extends Component{
    constructor(props) {
      super(props);
    this.state = {
      
        userInput: "",
        palindrome: ""
  
      };
    }
  render(){
    return(
      <div className="puzzleBox filterStringPB">
          <input type="text" className="inputLine" onChange={this.state.userInput}/>
          <button className="confirmationButton" onClick={}></button>
          <span className="resultsBox"></span>
          <h4>Palindrome</h4>
      </div>
    
    )
  }
}


export default Palindrome;