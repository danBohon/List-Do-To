import React, { Component } from 'react'
import ListDisplay from '../listDisplay/ListDisplay';

export default class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            tasks: [],
            showMemo: false,
        }
    }

    createTask = () => {
        if (this.state.input) {
            const task = {
                title: this.state.input,
                id: this.state.tasks.length + 1,
                completed: false
            }
            this.setState( {tasks: [...this.state.tasks, task], input: "", showMemo: false})
        } else {this.setState({showMemo: true})}
    }

    deleteTask = (id) => {
        const arr = this.state.tasks
        arr.splice(arr.findIndex(item => item.id === id), 1)
        this.setState({tasks: arr})
    }
    
    render() {
    return (
      <div>
        <h2>What To-Do? v2</h2>
        {this.state.showMemo ? <p style={{color: 'red'}}>Please add a title</p> : <p></p>}
        <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
        <button onClick={this.createTask}>Create Task</button>
        <ListDisplay tasks={this.state.tasks}
                    deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

