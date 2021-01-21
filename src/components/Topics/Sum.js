import React, { Component } from 'react'



class Sum extends Component{
  constructor(props) {
    super(props);
  this.state = {
    
      number1: 0,
      number2: 0,
      sum: null
  };
  }

  render(){
    return(
      <div className="puzzleBox sumPB">
        <input type="text" className="inputLine" onChange={this.state.number1}/>
        <input type="text" className="inputLine" onChange={this.state.number2}/>
        <button className="confirmationButton" onClick={}></button>
        <span className="resultBox"></span>
      </div>
    )
  }
}


export default Sum;