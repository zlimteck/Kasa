import about_ban from '../../Assets/about_ban.png';
import about_ban_mobile from '../../Assets/about_ban_mobile.png';
import './AboutBanner.css';

// Evenement pour ecouter le changement de resolution de l'ecran et changer l'image de la banniere
function changeImage() {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 480) {
            document.querySelector('.aboutbanner_img').src = about_ban_mobile;
        } else {
            document.querySelector('.aboutbanner_img').src = about_ban;
        }
    })
    return (window.innerWidth < 480 ? about_ban_mobile : about_ban); // Retourne l'image de la banniere en fonction de la resolution de l'ecran
};

// Component Banner
function AboutBanner() {
    return (
        <div className="aboutbanner">
            <img className="aboutbanner_img" src={changeImage()} alt="Banniere de la page A Propos du site de l'agence Kasa"/>
        </div>
    )
}

export default AboutBanner;