import Carrousselle from "../../../componenets/carousselle";
import FicheLogementBody from "../../../componenets/ficheLogementBody";
import { useParams,useNavigate } from "react-router-dom";

    
function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logements = [];
  fetch('src/data/logements_kasa.json')
    .then((data) => {
        console.log(data);
        const logement2 = logements.find((logement) => logement.id === id);
        logements.push(...logement2); 
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

 
  console.log(logements);
  console.log(id);
  return (
    <div className="fiche_logement">
      <Carrousselle/>
      <FicheLogementBody/>
    </div>
  )
}
export default FicheLogement;