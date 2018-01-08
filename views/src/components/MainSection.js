import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Sidebar'
import AddTodo from './AddTodo'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

    handleSave = text => {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <div className="all-active">
          <input className="toggle-all"
                 type="checkbox"
                 checked={completedCount === todos.length}
                 />
          <label onClick={actions.completeAll}/>
        </div>
      )
    }
  }

  renderSidebar(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    const addListItem = ()=> {
      let mainFooter = document.querySelector('.tpl-footer');
      mainFooter.className +=" add-list-item";
    };

    return (
      <div className="tpl-content-wrap container row no-col-padding">
          {this.renderSidebar(completedCount)}
          <div className="tpl-content-wrap col s9">
              <main className="tpl-content">
                  <div className="block-inner">
                      {this.renderToggleAll(completedCount)}
                      <div className="g-list _todo-list">
                          <ul className="list-wrap">
                              {filteredTodos.map(todo =>
                                  <TodoItem key={todo.id} todo={todo} {...actions} />
                              )}
                          </ul>
                      </div>
                  </div>
              </main>
              <footer className="tpl-footer">
                  <div className="block-inner">
                      <AddTodo addTodo={actions.addTodo} />
                      <div className="btn-add" onClick={addListItem}>
                          <img src="./image/add_tickit.svg" alt="" />
                      </div>
                  </div>
              </footer>
          </div>
      </div>
    )
  }
}
