import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="container max-w-2xl mx-auto items-center justify-between p-4 pb-2 flex">
            <h1 className="text-accent font-bold text-4xl">To Do List</h1>
            <Link
                to="/history"
                className="hover:text-accent-light"
            >
                History
            </Link>
        </div>
    );
};

export default Header;
