import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [removedTodos, setRemovedTodos] = useState([]);
    const markedTodos = useRef([]);
    const removeTodoTimeout = useRef(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
            console.log("storedTodos", JSON.parse(storedTodos));
        }
        const storedRemovedTodos = localStorage.getItem("removedTodos");
        if (storedRemovedTodos) {
            setRemovedTodos(JSON.parse(storedRemovedTodos));
            console.log("storedRemovedTodos", JSON.parse(storedRemovedTodos));
        }
    }, []);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const updateTodo = (id, text) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text };
            } else {
                return todo;
            }
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleMark = (id, checked) => {
        if (checked) {
            if (!markedTodos.current.includes(id)) {
                markedTodos.current.push(id);
            }
        } else {
            markedTodos.current = markedTodos.current.filter(
                (todoId) => todoId !== id
            );
        }

        if (removeTodoTimeout.current) {
            clearTimeout(removeTodoTimeout.current);
        }
        removeTodoTimeout.current = setTimeout(() => {
            const newTodos = todos.filter(
                (todo) => !markedTodos.current.includes(todo.id)
            );
            const removed = todos.filter((todo) =>
                markedTodos.current.includes(todo.id)
            );
            setTodos(newTodos);
            setRemovedTodos([...removedTodos, ...removed]);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            localStorage.setItem(
                "removedTodos",
                JSON.stringify([...removedTodos, ...removed])
            );
            markedTodos.current = [];
        }, 2500);
    };

    return (
        <>
            <div className="container max-w-2xl px-6 mx-auto md:my-auto flex flex-col">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodo={updateTodo}
                        onMark={handleMark}
                    />
                ))}
            </div>
            <div
                className="w-full mx-auto flex flex-col flex-1"
                onClick={() => {
                    todoInput.focus();
                }}
            >
                <TodoForm addTodo={addTodo} />
            </div>
        </>
    );
};

export default TodoList;
