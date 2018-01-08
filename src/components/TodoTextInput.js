import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  addListItem = ()=> {
        let mainFooter = document.querySelector('.tpl-footer');
        mainFooter.className +=" add-list-item";
    };

  render() {
    const closeAddListItem = ()=> {
        let mainFooter = document.querySelector('.tpl-footer');
        mainFooter.classList.remove("add-list-item");
    };

    return (
        <div className="new-item-wrap">
            <div className="new-item">
                <div className="input-field">
                    <input className={
                        classnames({
                            edit: this.props.editing,
                            'new-todo validate': this.props.newTodo
                        })}
                           type="text"
                           placeholder={this.props.placeholder}
                           autoFocus="true"
                           value={this.state.text}
                           onBlur={this.handleBlur}
                           onChange={this.handleChange}
                           onKeyDown={this.handleSubmit} />
                </div>
                <div className="btn btn-add-list" onKeyDown={this.handleSubmit} onClick={closeAddListItem}><img src="./image/close-white.svg" alt="" /></div>
            </div>
        </div>
    )
  }
}
