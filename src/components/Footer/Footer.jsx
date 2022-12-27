import kasa_logo_footer from '../../Assets/kasa_logo_footer.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <img className="footer_logo" src={kasa_logo_footer} alt="Logo de l'agence Kasa"/>
                <div className="footer_text">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;