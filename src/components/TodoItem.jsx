import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

const TodoItem = ({ todo, updateTodo, onMark }) => {
    const [checked, setChecked] = useState(false);
    const [inputValue, setInput] = useState(todo.text || "");
    const markedTodos = useRef([]);
    const removeTodoTimeout = useRef(null);

    const handleUpdate = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
            updateTodo(todo.id, inputValue);
            setInput("");
        }
    };

    const handleBlur = () => {
        if (inputValue) {
            updateTodo(todo.id, inputValue);
            setInput("");
        }
    };

    const handleCheckbox = () => {
        onMark(todo.id, !checked);
        setChecked(!checked);
    };

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
                        <div className="w-6 h-6 border-2 border-slate-500 rounded-full peer-checked:bg-accent peer-checked:border-accent"></div>
                    </label>
                    <input
                        type="text"
                        value={inputValue || todo.text}
                        className="ml-4 focus:outline-hidden border-b border-transparent focus:border-slate-500 py-2 w-full"
                        onClick={(e) => e.target.select()}
                        onChange={handleUpdate}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
