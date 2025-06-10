import React from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  return (
      <div className="min-h-screen bg-background text-text-primary text-lg">
          <div className="mx-auto min-h-screen flex flex-col flex-grow">
              <Header />
              <TodoList />
          </div>
      </div>
  );
}

export default App
