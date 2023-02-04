import GlobalNav from './GlobalNav.jsx';
import'./Header.css';
function Header({onNav}){
    return (
        <header className ="header">
            <img 
            src ="http://placekitten.com/100/100?image=1"
            className="header__logo"
            alt="Feline Overlords Logo"
            />
            <h1 className="header__title">
                I welcome our Feline Overlords
            </h1>
            <GlobalNav className="header__nav" onNav={onNav}/>
        </header>
    );
}
export default Header;