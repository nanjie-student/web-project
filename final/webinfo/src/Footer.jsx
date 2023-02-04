import './Footer.css';
import footerLinks from './footerLinks';

function Footer() {
  const list = footerLinks.map( item => {
    return (
      <li className="footer__item" key={item.name}>
        <a className="footer__link" href={item.path}>{item.name}</a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <ul className="footer__list">
        {list}
      </ul>
    </footer>
  );
}

export default Footer;

