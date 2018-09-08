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
        return (
            <div className="todoWrapper">
            <input
              type="checkbox"
              onChange={() => {
              props.changeStatus(props.id);
              }}
              checked={props.done}
            />
            {this.props.todo.text} <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button> 
            </div>
        )
    }
}

