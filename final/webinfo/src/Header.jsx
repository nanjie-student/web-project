import { useState } from 'react';
import './Header.css';
import ThemeSwitcher from './ThemeSwitcher';
function Header({ onNav, theme, toggleTheme }) {
    const [ showMenu, setShowMenu ] = useState(false);
    const showClass = showMenu ? '' : 'header__nav--open';
  
    return (
      <header className="header">
        <nav className={`header__nav ${showClass}`} onNav = {onNav}>
            <ul className="header-nav__list">
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page= "Articles"
                    href="#home">Home
                    </a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page= "Register"
                    href="#register">Register
                    </a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page= "About"
                    href="#about">About
                    </a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page= "TodoList"
                    href="#todoList">TodoList
                    </a>
                </li>
                <li className="header-nav__item">
                    <a className="header-nav__link" onClick={onNav} data-page= "FAQ"
                    href="#faq">FAQ
                    </a>
                </li>
            </ul>
        </nav>
        <button className="header__toggle" onClick={() => setShowMenu(!showMenu)}
      ><i className="gg-menu"/></button>
        <h1 className="header__title"> Welcome our Lama's world</h1>
        <ThemeSwitcher className="header__theme-switcher" theme={theme} toggleTheme={toggleTheme}/>
        <img className="header__logo" src="./images/main.jpg" alt="Lama Overlords Logo"/>
        <span className="header__subtitle">Web development articles</span>
      </header>
    );
} 
export default Header;
  