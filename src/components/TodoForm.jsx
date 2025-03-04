import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInput] = useState("");

    const handleUpdate = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
            addTodo(inputValue);
            setInput("");
        }
    };

    const handleBlur = () => {
        if (inputValue) {
            addTodo(inputValue);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col">
            <form className="flex justify-between items-center py-2 my-2">
                <input
                    type="text"
                    className="w-full p-2 bg-transparent focus:outline-0 focus:border-b border-slate-500"
                    placeholder=""
                    onChange={handleUpdate}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    value={inputValue}
                />
            </form>
        </div>
    );
};

export default TodoForm;
