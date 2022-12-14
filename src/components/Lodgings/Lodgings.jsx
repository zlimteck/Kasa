import "./Lodgings.css";
import full_star from "../../Assets/full_star.svg";
import empty_star from "../../Assets/empty_star.svg";

function Lodgings ({ product, title, location, tags, host, rating }) {
    let stars = []; // Tableau pour stocker les étoiles
    for (let x = 0; x < rating; x++) { // Boucle pour afficher les étoiles pleines
        stars.push(<img key={product.id + x} className="full" src={full_star} alt="Etoile de note pleine"/>);
    }
    for (let i = stars.length; i < 5; i++) { // Boucle pour afficher les étoiles vides
        stars.push(<img key={product.id + i} className="empty" src={empty_star} alt="Etoile de note vide"/>);
    }

    return (
        <div className="infos">
            <div className="lodging_infos">
                <h1 className="lodging_title">{title}</h1>
                <p className="lodging_location">{location}</p>
                <div className="lodging_tags">
                    {tags.map((tag, lodging) => (
                        <p key={lodging} className="lodging_tag_name">{tag}</p>
                    ))}
                </div>
            </div>
            <div className="host_infos">
                <div className="host">
                    <p className="host_name">{host.name}</p>
                    <img className="host_img" src={host.picture} alt="host"/>
                </div>
                <div className="rating_host">
                    <p className="rating_stars">{stars}</p>
                </div>
            </div>
        </div>
    )
}

export default Lodgings;