import React, { Component } from 'react'





  class FilterString extends Component{
    constructor(props) {
      super(props);
    this.state = {
        unFilteredArray: ["", "", ""],
        userInput: "",
        filteredArray: [],
  
      };
    }
  render(){
    return(
        <div className="puzzleBox filterStringPB">
          <span className="puzzleText"></span>
          <input type="text" className="inputLine" onChange={this.state.userInput}/>
          <button className="confirmationButton" onClick={}></button>
          <span className="resultsBox filterStringRB"></span>
          <h4>Filter String</h4>
      </div>
    
    )
  }
}


export default FilterString;