import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { getTasks, deleteTask, completeTask } from '../../ducks/reducer';

class OneTask extends Component {
  render() {
      const {id} = this.props.match.params
      console.log('this.props---------->', this.props)
      const {tasks} = this.props
      const task = tasks[id]
      console.log('task---------->', task)
    return (
      <div>
        {task.title ? <h1>{task.title}</h1> : <h1></h1>}
        {/* <h2>{task.description}</h2> */}
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
  
  export default withRouter(connect(mapStateToProps, {getTasks, deleteTask, completeTask})( OneTask ))
