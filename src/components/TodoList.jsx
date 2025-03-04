import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [removedTodos, setRemovedTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        const storedRemovedTodos = localStorage.getItem("removedTodos");
        if (storedRemovedTodos) {
            setRemovedTodos(JSON.parse(storedRemovedTodos));
        }
    }
    , []);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const removeTodo = (id) => {
        console.log("delete", id);
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        const removedTodo = todos.find((todo) => todo.id === id);
        setRemovedTodos([...removedTodos, removedTodo]);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        localStorage.setItem("removedTodos", JSON.stringify([...removedTodos, removedTodo]));
    };

    console.log("removedTodos", removedTodos);

    return (
        <div className="container mx-auto max-w-md p-4 md:rounded-2xl md:my-auto flex flex-col">
            <h1 className="text-accent font-bold text-4xl mb-2 md:mb-6">
                To Do List
            </h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
            <TodoForm addTodo={addTodo} />
            <div className="flex-1"
                onClick={() => {todoInput.focus();}}
            >
            </div>
        </div>
    );
};

export default TodoList;
