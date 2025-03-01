import React from 'react'
import TodoItem from './TodoItem'

const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Tailwind CSS' },
    { id: 3, text: 'Build a To Do List App' },
]

const TodoList = () => {
  return (
      <div className="container mx-auto max-w-lg bg-slate-900 p-4">
          <h1 className='text-orange-500 font-bold text-2xl' >To Do List</h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} />
            ))}
      </div>
  );
}

export default TodoList