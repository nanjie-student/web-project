import {useState} from 'react';
import menu from "./menu.js";
import './gg-menu.css';
import "./GlobalNav.css";

console.log(menu);
function GlobalNav({className,onNav}){
    const list = menu.map(item =>{
        return (
            <li className="global-nav__item" key={item.name}>
                <a  onClick = {onNav} className="global-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a>
            </li>
        );
    });
    const [showMenu, setShowMenu] = useState(false);
    const menuIcon = showMenu ? '.gg-close' :'gg-menu';
    const menuClass = showMenu ? 'global-nav__list--open': 'global-nav__list--closed';
    return (
        <nav className={`global-nav ${className}`}>
            {/* <ul className="global-nav__list">
                <li className="global-nav__item">
                    <a className="gloabl-nav__link" href="/">
                        Home
                    </a>
                </li>
                <li className="global-nav__item">
                    <a className="gloabl-nav__link" href="/about.html">
                        About
                    </a>
                </li>
                <li className="global-nav__item">
                    <a className="gloabl-nav__link" href="/cats.html">
                        Cats
                    </a>
                </li>
            </ul>  */}
            <button 
                className = "global-nav__toggle" 
                onClick={() => setShowMenu(!showMenu)}
                aria-label ={showMenu ? "Close Menu" : "Open Menu"}
            >
            <span className = { menuIcon }/>
            </button>
            { showMenu && (
            <ul className={`global-nav__list ${menuClass}`}>
                { list }
            </ul>
            )}
        </nav>
    );
}
export default GlobalNav;