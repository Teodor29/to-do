import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="min-h-[100dvh] flex flex-col">
        <div className="mx-auto flex-1 flex flex-col w-full">
          <Header />
          <div className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/history" element={<TodoList history />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
