import React from 'react';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo= this.addTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
 }

 changeStatus(todoId) {
  //console.log(`todo id : ${todoId}`);
  const newItems = this.state.items.map((todo) => {
    if (todo.id !== todoId) return todo;
    else {
      todo.done = !todo.done;
      return todo;
    }
  });
  this.setState({ items: newItems })
  }




 handleChange(e) {
    this.setState({value: e.target.value});
  }

addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }


render() {
    return (
    <div> 
    <input type="text" value={this.state.value} onChange={this.handleChange}/>
    <button className="addTodo" onClick={() => this.addTodo(this.state.value)}>Add</button>
    </div>
    );
 }
}