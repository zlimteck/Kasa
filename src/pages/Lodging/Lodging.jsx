import Error404 from '../../components/Error/Error404';
import Lodgings from '../../components/Lodgings/Lodgings';
import { useParams } from 'react-router-dom';
import LodgingInfos from "../../data/lodging.json";
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import './Lodging.css';

function Lodging() {
    const params = useParams(); 
    const product = 
    LodgingInfos.find((product) => params.id === product.id); // Trouver le logement correspondant à l'id// Trouver le logement correspondant à l'id
    if (product===undefined) {
        console.log("Wrong ID");
        return <Error404 />;
    }

    const key = product.id;
    const pictures = product.pictures;
    const title = product.title;
    const location = product.location;
    const tags = product.tags;
    const host = product.host;
    const rating = product.rating;
    const description = product.description;
    const equipments = product.equipments;

    return (
        <div className="lodging_container">
            <div className="lodging_images">
                <Carrousel
                key={key}
                pictures={pictures}
                />
            </div>
            <div className="lodgings_infos">
                <Lodgings 
                key={key} 
                product={product} 
                title={title} 
                location={location} 
                tags={tags} 
                host={host} 
                rating={rating} 
                />
            </div>
            <div className="logding_collapse">
                <div className="collapse_description">
                    <Collapse 
                    title="Description"
                    texte={description}
                    />
                </div>
                <div className="collapse_equipments">
                    <Collapse 
                    title="Equipements"
                    texte={equipments}
                    />
                </div>
            </div>
        </div>
    );
}
  
export default Lodging;