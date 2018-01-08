import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends Component {
    static propTypes = {
        completedCount: PropTypes.number.isRequired,
        activeCount: PropTypes.number.isRequired,
        filter: PropTypes.string.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
        onShow: PropTypes.func.isRequired
    }

    renderTodoCount() {
        const { activeCount } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'

        return (
            <div className="todo-count">
                <strong>{activeCount || 'No'}</strong> {itemWord}
            </div>
        )
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        return (
            <a className={classnames({ selected: filter === selectedFilter })}
               style={{ cursor: 'pointer' }}
               onClick={() => onShow(filter)}>
                {title}
            </a>
        )
    }

    renderClearButton() {
        const { completedCount, onClearCompleted } = this.props
        if (completedCount > 0) {
            return (
                <button className="btn clear-completed"
                        onClick={onClearCompleted} >
                    Clear completed
                </button>
            )
        }
    }

    render() {
        return (
            <aside className="tpl-sidebar col s3">
                <div className="block-inner">
                    <div className="sidebar-content">
                        <div className="g-list _sidebar-list">
                            <div className="g-list _sidebar-list">
                                <ul className="list-wrap">
                                    {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                                        <li key={filter} className="list-item">
                                            {this.renderFilterLink(filter)}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        {this.renderTodoCount()}
                        {this.renderClearButton()}
                    </div>
                </div>
            </aside>
        )
    }
}
