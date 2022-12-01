import kasa_ban from '../../Assets/kasa_ban.png';
import './Banner.css';

// Component Banner
function Banner() {
    return (
        <div className="banner">
            <img className="banner_img" src={kasa_ban} alt="Banniere de l'agence Kasa"/>
            <span className="banner_text_container">
                <p className="banner_text">Chez vous, partout et ailleurs</p>
            </span>
        </div>
    )
}

export default Banner;
