import React from "react";

const TodoItem = (todo) => {
    return (
        <div>
            <div className="flex justify-between items-center py-2 my-2">
                <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="hidden peer" />
                        <div className="w-6 h-6 border-2 border-slate-500 rounded-full peer-checked:bg-orange-500 peer-checked:border-orange-500"></div>
                    </label>
                        <span className="ml-4">{todo.text}</span>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
