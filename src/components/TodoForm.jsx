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
        <div className="w-full">
            <form
                className="flex justify-center items-center max-w-2xl mx-auto w-full px-6"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    id="todoInput"
                    type="text"
                    className="w-full px-4 py-2 bg-transparent outline-0 focus:border-b focus:border-slate-500"
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
