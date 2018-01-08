import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle filled-in"
                 type="checkbox"
                 checked={todo.completed} />
          <label onClick={() => completeTodo(todo.id)}>
              <div className="title">
                {todo.text}
              </div>
          </label>
            <div className="btn-remove" onClick={() => deleteTodo(todo.id)}>
                <img src="./image/close.svg" alt=""/>
            </div>
        </div>
      )
    }

    return (
      <li className={classnames({
          completed: todo.completed,
          'list-item': this.state,
          editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
