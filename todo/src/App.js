import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      newItemText: ""
    };
  }

  updateNewTextValue = event => {
    this.setState({
      newItemText: event.target.value
    });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam"
    });
  };

  render = () => (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To Do List (
        {this.state.todoItems.filter(t => !t.done).length} items to do)
      </h4>
      <button className="btn btn-primary m-2" onClick={this.changeStateData}>
        Change
      </button>
      <div className="container-fluid">
        <div>
          <input
            className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
          ></input>
          <button
            className="btn btn-primary mt-1"
            onClick={this.createNewTodo0}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
