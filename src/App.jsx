import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div className="font-inter min-h-screen bg-background text-text-primary text-lg">
                <div className="mx-auto min-h-screen flex flex-col flex-grow">
                    <Header />
                    <Routes>
                        <Route path="/" element={<TodoList />} />
                        <Route path="/history" element={<TodoList history />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
