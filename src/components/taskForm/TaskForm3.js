import React, { Component } from 'react'
import ListDisplayTwo from '../listDisplay/ListDisplay';
import { connect } from "react-redux";
import { updateTask } from '../../ducks/reducer'

class TaskForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            showMemo: false,
        }
    }

    createTask2 = () => {
        if (this.state.input) {
            const task = {
                title: this.state.input,
                id: this.props.tasks.length + 1,
                completed: false
            }
            const tasks = [...this.props.tasks, task]
            this.props.updateTask(tasks)
            this.setState( {input: "", showMemo: false} )
        } else {this.setState({showMemo: true})}
    }

    deleteTask = (id) => {
        const arr = this.state.tasks
        arr.splice(arr.findIndex(item => item.id === id), 1)
        this.setState({tasks: arr})
    }
    
    render() {
        // console.log('this.props---------->', this.props)
    return (
      <div>
        <h2>What To-Do? v3</h2>
        {this.state.showMemo ? <p style={{color: 'red'}}>Please add a title</p> : <p></p>}
        <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
        <button onClick={this.createTask2}>Create Task</button>
        <ListDisplayTwo tasks={this.props.tasks}
                    deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const { tasks } = state
  
    return {
      tasks: tasks
    }
  }
  
  export default connect(mapStateToProps, {updateTask})( TaskForm3 )