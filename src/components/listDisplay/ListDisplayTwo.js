import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTasks, deleteTask } from '../../ducks/reducer';

class ListDisplayTwo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            render: false
        }
    }

    componentDidMount() {
        this.props.getTasks();
    }
    
    completeTask = (id) => {
        const arr = this.props.tasks
        arr[arr.findIndex(item => item.id === id)].completed = !arr[arr.findIndex(item => item.id === id)].completed
        this.props.updateTask(arr);
        this.setState({render: !this.state.render})
    }

    deleteTask = (id) => {
        // const arr = this.props.tasks
        // arr.splice(arr.findIndex(item => item.id === id), 1)
        // this.props.updateTask(arr);
        // this.setState({render: !this.state.render})
        this.props.deleteTask(id);
    }
    
    render() {
        console.log('this.props---------->', this.props)
        const { tasks } = this.props;
        const list = tasks.map(item => {
            return(
                <div className="task" key={item.id}>
                    <h3 className={item.completed ? "complete" : ""}>{item.title}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => this.completeTask(item.id)}>Complete</button>
                    <span className="delete" onClick={() => this.deleteTask(item.id)}>X</span>
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
    const { tasks, loading } = state.task
  
    return {
        tasks,
        loading
    }
  }
  
  export default connect(mapStateToProps, {getTasks, deleteTask})( ListDisplayTwo )