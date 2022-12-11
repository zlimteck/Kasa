import { Link } from 'react-router-dom';
import { useState } from "react";
import './Card.css';
import Lodgings from '../../data/lodging.json';

function Card(){
    const [ lodgings ] = useState(Lodgings);
    return (
        <div className="gallery">
            {lodgings.map((lodging) => (
                <Link to={`/Lodging/${lodging.id}`} key={lodging.id} className="card_link">
                    <div className="card_container">
                        <img className="card_img" src={lodging.cover} alt="logement"/>
                        <div className="card_title">
                            <strong>{lodging.title}</strong>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card;