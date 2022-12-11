import Error404 from '../components/Error/Error404';
import Lodgings from '../components/Lodgings/Lodgings';
import { useParams } from 'react-router-dom';
import LodgingInfos from "../data/lodging.json";

function Lodging() {
    const params = useParams(); 
    const product = 
    LodgingInfos.find((product) => params.id === product.id); // Trouver le logement correspondant à l'id
    if (product===undefined) {
        console.log("Wrong ID");
        return <Error404 />;
    }

    const key = product.id;
    const title = product.title;
    const location = product.location;
    const tags = product.tags;
    const host = product.host;
    const rating = product.rating;

    return (
        <div className="lodgings_infos">
            <Lodgings key={key} product={product} title={title} location={location} tags={tags} host={host} rating={rating} />
        </div>
    );
}
  
export default Lodging;