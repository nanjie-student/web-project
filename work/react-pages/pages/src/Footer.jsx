import './Footer.css';
function Footer(){
    return (
        <footer className="footer">
            <ul className="footer__social footer__list">
                <li className="footer__item">
                    <a className="footer-social__link" href="/"> Social</a>
                </li>
                <li className="footer__item">
                    <a className="footer-social__link" href="/"> Some</a>
                </li>
                <li className="footer__item">
                    <a className="footer-social__link" href="/">link </a>
                </li>
            </ul>
            <ul className="footer__company footer__list">
                <li className="footer__item">
                    <a className="footer__link" href="/"> company</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/"> product</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/"> produce</a>
                </li>
            </ul>
            <ul className="footer__legal footer__list">
                <li className="footer__item">
                    <a className="footer__link" href="/"> law</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/"> legal</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/"> list</a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;