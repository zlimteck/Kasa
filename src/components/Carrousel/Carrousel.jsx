import "./Carrousel.css";
import { useState } from "react";
import nextArrow from "../../Assets/nextArrow.svg";
import prevArrow from "../../Assets/prevArrow.svg";


function Carrousel({ pictures }) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }; // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }; // Si l'image actuelle est la première, on revient à la dernière, sinon on passe à l'image précédente

    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    } // Si le tableau est vide, on ne retourne rien.

    return (
        <div className="carrousel">
            <div className="images_container">
                <img key={pictures.id} className="carrousel_img" src={pictures[current]} alt={pictures.title}/>
            </div>
            <div className="buttons_container">
                {length > 1 && ( // Si il y a plus d'une image, on affiche les flèches
                    <>
                    <img className="carrousel_prev" src={prevArrow} onClick={prevSlide} alt="Fleche precedente"/>
                    <img className="carrousel_next" src={nextArrow} onClick={nextSlide} alt="Fleche suivante"/>
                    </>
                )}
            </div>
        </div>
    )
}

export default Carrousel;
