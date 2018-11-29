import React, { Component } from 'react'
import ListDisplayTwo from '../listDisplay/ListDisplayTwo';
import { connect } from "react-redux";
import { createTask } from '../../ducks/reducer'

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
            this.props.createTask(this.state.input)
            this.setState( {input: "", showMemo: false} )
        } else {this.setState({showMemo: true})}
    }
    
    render() {
        // console.log('this.props---------->', this.props)
    return (
      <div>
        <h2>What To-Do? v3</h2>
        {this.state.showMemo ? <p style={{color: 'red'}}>Please add a title</p> : <p></p>}
        <input type="text" value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
        <button onClick={this.createTask2}>Create Task</button>
        <ListDisplayTwo/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    const { tasks, loading } = state.task
  
    return {
      tasks,
      loading
    }
  }
  
  export default connect(mapStateToProps, {createTask})( TaskForm3 )