import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import './index.css';

const root = document.getElementById("root");



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          {id: 0, text: "Get out of bed","done":true},
          {id: 1, text: "Brush teeth", "done":false},
          {id: 2, text: "Eat breakfast","done":false}
        ],
        nextId: 3
      };
  

      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
    }


    addTodo(todoText) {
      let todos = this.state.todos.slice();
      todos.push({id: this.state.nextId, text: todoText});
      this.setState({
        todos: todos,
        nextId: ++this.state.nextId
      });
    }
    
  
  
    removeTodo(id) {
      this.setState({
          todos: this.state.todos.filter((todo,index) => todo.id !== id)
        });
    }
  
    render() {
      return (
        <div className="App">
          <div className="todo-wrapper">
            <Header />
            <TodoInput todoText="" addTodo={this.addTodo} />
            <ul>
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                })
              }
            </ul>
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(< App />,document.getElementById('root'));
