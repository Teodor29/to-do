import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import RemovedTodoItem from "./RemovedTodoItem";
import TodoForm from "./TodoForm";

const TodoList = ({ history }) => {
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

    const updateRemovedTodo = (id, text) => {
        const updatedRemovedTodos = removedTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text };
            } else {
                return todo;
            }
        });
        setRemovedTodos(updatedRemovedTodos);
        localStorage.setItem(
            "removedTodos",
            JSON.stringify(updatedRemovedTodos)
        );
    };

    const handleMarkTodos = (id, checked) => {
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

    const handleMarkRemovedTodos = (id, checked) => {
        if (!checked) {
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
            const newRemovedTodos = removedTodos.filter(
                (todo) => !markedTodos.current.includes(todo.id)
            );
            const restored = removedTodos.filter((todo) =>
                markedTodos.current.includes(todo.id)
            );
            setRemovedTodos(newRemovedTodos);
            setTodos([...todos, ...restored]);
            localStorage.setItem(
                "removedTodos",
                JSON.stringify(newRemovedTodos)
            );
            localStorage.setItem("todos", JSON.stringify([...todos, ...restored]));
            markedTodos.current = [];
        }, 2500);
    };

    return (
        <>
            {history ? (
                <div className="container max-w-xl px-4 mx-auto md:my-auto flex flex-col flex-1">
                    {removedTodos.map((todo) => (
                        <RemovedTodoItem
                            key={todo.id}
                            todo={todo}
                            updateTodo={updateRemovedTodo}
                            onMark={handleMarkRemovedTodos}
                        />
                    ))}
                </div>
            ) : (
                <>
                    <div className="container max-w-xl px-4 mx-auto md:my-auto flex flex-col">
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                updateTodo={updateTodo}
                                onMark={handleMarkTodos}
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
            )}
        </>
    );
};

export default TodoList;
