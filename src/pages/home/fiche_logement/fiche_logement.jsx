import Carrousselle from "../../../componenets/carousselle";
import { useParams} from "react-router-dom";
import FicheLogementBoutton from "../../../componenets/ficheLogementboutton";
import FicheLogementBoutton2 from "../../../componenets/fichelogementboutton2";
import FicheLogementHeader from "../../../componenets/ficheLogementHeader";
import '../../../styles/fichelogement.scss';
import StarRating from "../../../componenets/star";


const logements = [];
await fetch('src/data/logements_kasa.json')
  .then((response) => response.json()) 
  .then((data) => {
      console.log(data);
      logements.push(...data); 
  })
  .catch((error) => {
      console.error('Error fetching data:', error);
  });

function FicheLogement() {
  const { id } = useParams();
  return (
    logements.filter((logement) => logement.id === id).map((logement) => (
      
    <div className="fiche_logement" key={logement.id}>
      <Carrousselle pictures={logement.pictures}/>
    <div className="fiche-logement-header">
        <FicheLogementHeader logement={logement} />
    </div>
    <div className="fiche-logement-body_description">
      <FicheLogementBoutton logement={logement} />
      <FicheLogementBoutton2 equipements={logement.equipments} />
    </div>
    </div>
    ))
)}
export default FicheLogement;