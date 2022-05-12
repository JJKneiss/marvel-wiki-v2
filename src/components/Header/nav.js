import { NavLink } from "react-router-dom";
const Nav = (props, children) => {
    return (
        <nav>
            <ul className="links">
                <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;