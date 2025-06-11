import { Link,useLocation } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
    const location = useLocation();
    const isHistory = location.pathname === "/history";

    const handleClear = () => {
        if (window.confirm("Are you sure you want to clear all todos?")) {
            localStorage.removeItem("removedTodos");
            window.location.reload();
        }
    };

    return (
        <div className="container text-accent max-w-2xl mx-auto items-center justify-between p-4 pb-2 flex">
            {isHistory ? (
                <>
                    <Link
                        to="/"
                        className="hover:text-accent-light flex items-center gap-2"
                    >
                        <FaAngleLeft className="text-2xl" />
                        To Do List
                    </Link>
                    <button
                        className="hover:cursor-pointer hover:text-red-400 ml-auto text-red p-2 gap-2 flex items-center"
                        onClick={handleClear}
                    >
                        Delete
                        <AiOutlineDelete className="inline-block mr-2" />
                    </button>
                </>
            ) : (
                <>
                    <h1 className="font-bold text-4xl">To Do List</h1>
                    <Link
                        to="/history"
                        className="hover:text-accent-light text-xl p-2"
                    >
                        <FaHistory className="inline-block mr-2" />
                    </Link>
                </>
            )}
        </div>
    );
};

export default Header;
