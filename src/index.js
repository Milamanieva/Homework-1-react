import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import TodoInput from './todoInput'
import TodoItem from './todoItem'

const root = document.getElementById("root");

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          {id: 0, text: "Get out of bed, Wed Sep 13 2017"},
          {id: 1, text: "Brush teeth,Thu Sep 14 2017"},
          {id: 2, text: "Eat breakfast,Fri Sep 15 2017"}
        ],
        nextId: 3
      };
  
      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
    }


    addTodo(){

    }
  
  
    removeTodo(id) {
      this.setState({
          todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }
  
    render() {
      return (
        <div classname="App">
          <div classname="todo-wrapper">
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
  
ReactDOM.render(<App />,document.getElementById('root'));
