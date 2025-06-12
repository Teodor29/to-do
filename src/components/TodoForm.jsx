import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInput] = useState("");
    const [isFocused, setIsFocused] = useState(false);

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
        setIsFocused(false);
        if (inputValue) {
            addTodo(inputValue);
            setInput("");
        }
    };

    return (
        <div className="w-full">
            <form
                className="flex justify-center items-center max-w-xl mx-auto w-full px-4"
                onSubmit={(e) => e.preventDefault()}
            >
                <label
                    className={`
                            focus:block items-center cursor-pointer
                            ${isFocused ? "block" : "hidden"}
                        `}
                >
                    <input type="checkbox" className="hidden peer" />
                    <div className="w-6 h-6 border-2 border-outline rounded-full peer-checked:bg-accent"></div>
                </label>
                <input
                    id="todoInput"
                    type="text"
                    className="w-full ml-4 py-2 bg-transparent outline-0 focus:border-b focus:border-outline"
                    placeholder=""
                    onChange={handleUpdate}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    value={inputValue}
                />
            </form>
        </div>
    );
};

export default TodoForm;
