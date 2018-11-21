import React, { Component } from 'react';
import ListDisplay from '../listDisplay/ListDisplay';

export default class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            tasks: [],
        }
    }

    render() {
        class Task {
            constructor(title, id) {
                this.title = title;
                this.id = id;
                this.completed = false;
            }
        }
    return (
      <div>
        <p>What To-Do?</p>
        <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>

        <button onClick={() => this.setState({ 
            tasks: [...this.state.tasks, new Task(this.state.input, this.state.tasks.length + 1)],
            input:""})}>Create Task
        </button>
        <ListDisplay tasks={this.state.tasks}/>
      </div>
    )
  }
}
