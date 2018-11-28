import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import TaskForm from './components/taskForm/TaskForm';
// import TaskForm2 from './components/taskForm/TaskForm2';
import TaskForm3 from './components/taskForm/TaskForm3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-logo">To</span>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-logo">Do</span>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-logo">List</span>
        </header>
        <div className="content">
          {/* <TaskForm /> */}
          {/* <TaskForm2 /> */}
          <TaskForm3 />
        </div>
      </div>
    );
  }
}

export default App;
