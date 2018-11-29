import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTasks, deleteTask, completeTask } from '../../ducks/reducer';

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
        this.props.completeTask(id);
    }

    deleteTask = (id) => {
        this.props.deleteTask(id);
    }
    
    render() {
        // console.log('this.props---------->', this.props)
        const { tasks } = this.props;
        const list = tasks.map(item => {
            return(
                <div className="task" key={item.id}>
                    <Link to={`/task${item.id}`}>
                    <h3 className={item.completed ? "complete" : ""}>{item.title}</h3>
                    </Link>
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
  
  export default connect(mapStateToProps, {getTasks, deleteTask, completeTask})( ListDisplayTwo )