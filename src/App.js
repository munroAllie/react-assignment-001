import React, { Component } from 'react';
import './App.css';
import Userinput from './Components/userinput/userinput';
import Useroutput from './Components/useroutput/useroutput';

const listnameStyle = {
  textAlign: 'left',
  margin: "6px"

}

class App extends Component {


  state = {
    employees: [
      { name: "Allie", profession: "UX Designer" },
      { name: "John", profession: "Teacher / Programmer " }
    ],
    listname: "List Name"
  }

  listNameHandler = (event) => {
    this.setState({
      listname: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> React the complete guide</h1>
          <h2> Assignment 001 - Allie Munro </h2>
        </div>
        <Userinput listName={this.listNameHandler} value={this.state.listname} />
        <h1 style={listnameStyle}>{this.state.listname}</h1>
        <Useroutput name={this.state.employees[0].name} profession={this.state.employees[0].profession} />
        <Useroutput name={this.state.employees[1].name} profession={this.state.employees[1].profession} />
      </div>
    );
  }
}

export default App;
