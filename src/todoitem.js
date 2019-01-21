import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderLeft: 'solid #ccc 1px',
      width: '100%',
      borderRight: 'solid #ccc 1px',
      borderBottom: 'dotted #ccc 1px',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="container" style={this.getStyle()}>
        <p style={{ paddingTop: '10px' }}>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          <span id="title" style={{ marginLeft: '10px', width: '100%'}}>{title}</span>
          <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  fontSize: '10px',
  marginTop: '5px',
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '3px 7px',
  paddingBottom: '4px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  outline: 'none'
}

export default TodoItem;
