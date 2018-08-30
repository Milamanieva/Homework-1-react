import React from 'react';


export default class TodoItem extends React.Component {
    constructor(props) {
     super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className="todoWrapper">
             <input type ="checkbox" checked = {this.props.completed} />
            <p className = {this.props.completed ? 'completed': ''}> {this.state.todos}</p>
            {this.props.todo.text} <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button> 
            </div>
        )
    }
}