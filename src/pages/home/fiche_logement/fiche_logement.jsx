import Carrousselle from "../../../componenets/carousselle";
import { useParams} from "react-router-dom";
import FicheLogementBoutton from "../../../componenets/ficheLogementboutton";
import FicheLogementBoutton2 from "../../../componenets/fichelogementboutton2";
import '../../../styles/fichelogement.scss';


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
          <div className="fiche-logement-body">
              <div className="fiche-logement-body__container1">
                  <h1 className="logement_titre">{logement.title}</h1>
                  <p className="logement_location">{logement.location}</p>
                <div className="fiche-logement-body__tags">
                  {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
          <div className="fiche-logement-body__container2">
            <div className="fiche-logement-body__host">
              <h2>{logement.host.name}</h2>
              <img src={logement.host.picture} alt="Host" className="host_picture" />
            </div>
            <div className="fiche-logement-body__rating">
              <h2>{logement.rating}</h2>
              <img src="src\assets\star.png" alt="Star" className="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="fiche-logement-body_description">
      <FicheLogementBoutton description={logement.description} />
      <FicheLogementBoutton2 equipements={logement.equipments} />
      </div>
    </div>
    ))
)}
export default FicheLogement;