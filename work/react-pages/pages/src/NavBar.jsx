function NavBar({onNav}){
    
    return (
        <div onClick={onNav}>
            <a  href="/" data-target ="Home">Home</a>
            <a  href="/about" data-target="About">About</a>  
            <a href="/cats" data-target="Cats">Cats</a>
        </div>
    );
}
export default NavBar;