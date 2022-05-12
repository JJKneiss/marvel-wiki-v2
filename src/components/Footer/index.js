import { NavLink } from "react-router-dom";
const Footer = (props, children) => {
    console.log(props);
    return (
        <footer>
            <ul className="links">
                <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
                <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
            </ul>
            <p>
                <a href="https://github.com/JJKneiss" target="_blank" rel="noopener noreferrer">
                    Open-source code
                </a>
                <span> by Jamie Kneiss</span>
            </p>
            <p dangerouslySetInnerHTML={{ __html: props.attribution }} />
        </footer >
    )
}
export default Footer;