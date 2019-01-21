import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import Header from './header.js';
import AddTodo from './addtodo.js';
import Options from './options.js';
import Todos from './todos.js';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: []
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo;
    }) });
  }

  // Add Todo
  addTodo = (title) => {

    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    if(title !== '') {
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Delete Selected
  deleteSelected = () => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.completed !== true)] });
  }

  // Delete All
  deleteAll = () => {
    this.setState({ todos: [] });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Options deleteSelected={this.deleteSelected} deleteAll={this.deleteAll} />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
};


render(<App />, document.getElementById('root'));
