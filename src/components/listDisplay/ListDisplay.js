import React, { Component } from 'react'

export default class ListDisplay extends Component {
    constructor() {
        super();
        this.state ={
            complete: false,
        }
    }

    completeTask = () => {
        this.setState({ complete: true })
    }
    
    render() {
        const { tasks } = this.props;
        const list = tasks.map(item => {
            return(
                <div className="task" key={item.id}>
                    <span className={this.state.complete ? "complete" : ""}>{item.title}</span>
                    <button onClick={this.completeTask} disabled={this.state.complete}>Complete</button>
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

