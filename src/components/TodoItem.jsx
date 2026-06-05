import React, { useState } from 'react'

const TodoItem = ({ todo, updateTodo, deleteTodo, onMark }) => {
  const [checked, setChecked] = useState(false)
  const [inputValue, setInput] = useState(todo.text || '')

  const handleUpdate = (e) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      updateTodo(todo.id, inputValue)
      document.getElementById('todoInput').focus()
    }
  }

  const handleBlur = () => {
    if (inputValue.trim()) {
      updateTodo(todo.id, inputValue)
    } else {
      deleteTodo(todo.id)
    }
  }

  const handleCheckbox = () => {
    onMark(todo.id, !checked)
    setChecked(!checked)
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              checked={checked}
              onChange={handleCheckbox}
            />
            <div className="w-6 h-6 border-2 border-border rounded-full peer-checked:bg-accent "></div>
          </label>
          <input
            type="text"
            value={inputValue}
            className="ml-4 focus:outline-hidden py-2 w-full"
            onClick={(e) => e.target.focus()}
            onChange={handleUpdate}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
