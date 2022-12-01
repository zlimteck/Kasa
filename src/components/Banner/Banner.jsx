import kasa_ban from '../../Assets/kasa_ban.png';
import './Banner.css';

// Component Banner
function Banner() {
    return (
        <div className="banner">
            <img className="banner_img" src={kasa_ban} alt="Banniere de l'agence Kasa"/>
            <div className="banner_text_container">
                <p className="banner_text">Chez vous, <span className="underline">partout et ailleurs</span></p>
            </div>
        </div>
    )
}

export default Banner;
