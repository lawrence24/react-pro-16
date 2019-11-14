import React, { Component } from "react";
import { TodoBanner } from "./TodoBanner";
import { TodoRow } from "./TodoRow";
import { TodoCreator } from "./TodoCreator";

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
      ]
      //newItemText: ""
    };
  }

  updateNewTextValue = event => {
    this.setState({
      newItemText: event.target.value
    });
  };

  createNewTodo = task => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }]
      });
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam"
    });
  };

  toggleTodo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = () =>
    this.state.todoItems.map(item => (
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
    ));

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
          <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
            Add
          </button>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()} </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
