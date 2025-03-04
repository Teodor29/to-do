import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    return (
        <div className="container mx-auto max-w-md p-4 md:bg-background2 md:ring-3 ring-slate-700 md:rounded-2xl md:my-20">
            <h1 className="text-accent font-bold text-4xl mb-2 md:mb-6">
                To Do List
            </h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default TodoList;
