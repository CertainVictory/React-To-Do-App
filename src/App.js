import React, { Component } from "react";
import "./App.css";
import ToDos from './ToDos';
import AddForm from './AddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React ToDo App</h1>
        </header>
        <AddForm />
        <div className="todo-list">
          <ToDos />
        </div>
      </div>
    );
  }
}
export default App;
