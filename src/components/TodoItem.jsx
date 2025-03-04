import React, { useRef, useState } from "react";

const TodoItem = ({ todo, removeTodo }) => {
    const removeTimeout = useRef(null);
    const [checked, setChecked] = useState(false);

    const handleCheckbox = (id) => {
        if (!checked) {
            removeTimeout.current = setTimeout(() => {
                removeTodo(id);
            }, 2000);
        } else {
            clearTimeout(removeTimeout.current);
            removeTimeout.current = null;
        }
        setChecked(!checked);
    };

    return (
        <div>
            <div className="flex justify-between items-center py-2 my-2">
                <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="hidden peer"
                            checked={checked}
                            onClick={() => handleCheckbox(todo.id)}
                            onChange={() => {}}
                        />
                        <div className="w-6 h-6 border-2 border-slate-500 rounded-full peer-checked:bg-accent peer-checked:border-accent"></div>
                    </label>
                    <input
                        type="text"
                        value={todo.text}
                        className="ml-4 focus:outline-hidden focus:border-b border-slate-500"
                        onClick={(e) => e.target.select()}
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
