import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateTask } from '../../ducks/reducer';

class ListDisplayTwo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            complete: false,
        }
    }
    
    completeTask = () => {
        this.setState({ complete: true })
        console.log('this.props---------->', this.props)
    }

    deleteTask = (id) => {
        const arr = this.props.tasks
        arr.splice(arr.findIndex(item => item.id === id), 1)
        this.props.updateTask({tasks: arr})
    }
    
    render() {
        const { tasks } = this.props;
        const list = tasks.map(item => {
            return(
                <div className="task" key={item.id}>
                    <span className={this.state.complete ? "complete" : ""}>{item.title}</span>
                    <button onClick={this.completeTask}>Complete</button>
                    <span className="delete" onClick={() => this.props.deleteTask(item.id)}>X</span>
                </div>
            )}
        )
      return (
        <div>
          {list}
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
  
  export default connect(mapStateToProps, {updateTask})( ListDisplayTwo )