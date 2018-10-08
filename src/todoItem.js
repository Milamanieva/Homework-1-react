import React from 'react';


export default class TodoItem extends React.Component {
    constructor(props) {
     super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    changeStatus(id) {
        this.props.changeStatus(id);
    }

    render() {
        const checkedClass = this.props.todo.done ? 'done' : "";
        console.log (this.props.todo.done, checkedClass);
        return (
            <div className="todoWrapper">
            <input
              type="checkbox"
              onChange={() => {
                this.props.changeStatus(this.props.id);
              }}
              checked={this.props.todo.done}
            />
            <span className={checkedClass} >{this.props.todo.text}</span> <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button> 
            </div>
        )
    }
}

