import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../index.css'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="todoListName">
      <div className="header">
        <h1 className="text-center">Todo</h1>
        <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        >
        <input className="input" ref={node => (input = node)} placeholder="What need to be dones" />
        <button className="button" type="submit">Add Todo</button>
      </form>
      </div>
    </div>
  )
}

export default connect()(AddTodo)