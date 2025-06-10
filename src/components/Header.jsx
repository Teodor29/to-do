const Header = () => {
    const handleClear = () => {
        if (window.confirm("Are you sure you want to clear all todos?")) {
            localStorage.removeItem("todos");
            localStorage.removeItem("removedTodos");
            window.location.reload();
        }
    };

    return (
        <div className="container max-w-2xl mx-auto p-6 pb-0 flex">
            <h1 className="text-accent font-bold text-4xl mb-2">To Do List</h1>
            <button
                className="ml-auto p-2 hover:cursor-pointer hover:underline"
                onClick={handleClear}
            >
                Clear
            </button>
        </div>
    );
};

export default Header;
