import React, { Component } from 'react'



class FilterObject extends Component{
  constructor(props) {
    super(props);
  this.state = {
      unFilteredArray: [{},{},{}],
      userInput: "",
      filteredArray: [],

    };
  }
  render(){
    return(
     
      <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText"></span>
      <input className="inputLine"  type="text"  onChange={this.state.userInput} />
      <button className="confirmationButton" onClick={}  ></button>
      <span className="resultsBox filterObjectRB"></span>
      </div>
    )
  }
}


export default FilterObject;