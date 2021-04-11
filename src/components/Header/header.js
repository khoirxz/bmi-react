// import "./style.css";

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="h-24 bg-gray-800 text-white shadow-xl">
            <h4 className="p-5 text-center">KALKULATOR BMI</h4>
            <ul className="flex justify-center h">
                <li className="px-2"><Link to="/">HOME</Link></li>
                <li className="px-2"><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
