import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateTask } from '../../ducks/reducer';

class ListDisplayTwo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            render: false
        }
    }
    
    completeTask = (id) => {
        const arr = this.props.tasks
        arr[arr.findIndex(item => item.id === id)].completed = !arr[arr.findIndex(item => item.id === id)].completed
        this.props.updateTask(arr);
        this.setState({render: !this.state.render})
    }

    deleteTask = (id) => {
        const arr = this.props.tasks
        arr.splice(arr.findIndex(item => item.id === id), 1)
        this.props.updateTask(arr);
        this.setState({render: !this.state.render})
    }
    
    render() {
        // const { tasks } = this.props;
        // const list = tasks.map(item => {
        //     return(
        //         <div className="task" key={item.id}>
        //             <span className={item.completed ? "complete" : ""}>{item.title}</span>
        //             <button onClick={() => this.completeTask(item.id)}>Complete</button>
        //             <span className="delete" onClick={() => this.deleteTask(item.id)}>X</span>
        //         </div>
        //     )}
        // )
      return (
        <div>
          {/* {list} */}
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