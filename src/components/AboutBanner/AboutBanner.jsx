import about_ban from '../../Assets/about_ban.png';
import './AboutBanner.css';

// Component Banner
function AboutBanner() {
    return (
        <div className="aboutbanner">
            <img className="aboutbanner_img" src={about_ban} alt="Banniere de la page About du site de l'agence Kasa"/>
        </div>
    )
}

export default AboutBanner;