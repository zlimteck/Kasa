import about_ban from '../../Assets/about_ban.png';
import about_ban_mobile from '../../Assets/about_ban_mobile.png';
import { useState, useEffect } from 'react';
import './AboutBanner.css';

//Fonction pour changer l'image en fonction de la taille de l'écran
function useChangeImage() {
    const [image, setImage] = useState(about_ban); //Récupère l'image de base
    const [width, setWidth] = useState(window.innerWidth); //Récupère la largeur de l'écran
    useEffect(() => {
     const handleResize = () => setWidth(window.innerWidth); //Récupère la largeur de l'écran à chaque fois qu'on redimensionne la fenêtre
        window.addEventListener('resize', handleResize); //Ajoute un écouteur d'évènement pour redimensionner la fenêtre
        if (width < 480) {
            setImage(about_ban_mobile);
        } else {
            setImage(about_ban);
        }
        return () => window.removeEventListener('resize', handleResize); //Supprime l'écouteur d'évènement
    }, [width]); //Tableau de dépendances pour que l'effet ce declenche à chaque fois que width change
    return image;
}

// Component Banner
function AboutBanner() {
    return (
        <div className="aboutbanner">
            <img className="aboutbanner_img" src={useChangeImage()} alt="Banner de la page a propos"/>
        </div>
    )
}

export default AboutBanner;