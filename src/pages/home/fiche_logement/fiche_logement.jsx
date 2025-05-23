import Carrousselle from "../../../componenets/carousselle";
import { useParams, Navigate } from "react-router-dom";
import FicheLogementBoutton from "../../../componenets/ficheLogementboutton";
import FicheLogementHeader from "../../../componenets/ficheLogementHeader";
import "../../../styles/fichelogement.scss";
import FicheLogementBouttonEquip from "../../../componenets/fichelogementbouttonequip";

const logements = [];
fetch("/data/logements_kasa.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    logements.push(...data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="*" />;
  } else {
    return (
      <div className="fiche_logement">
        <Carrousselle pictures={logement.pictures} />
        <div className="fiche-logement-header">
          <FicheLogementHeader logement={logement} />
        </div>
        <div className="fiche-logement-body_description">
          <FicheLogementBoutton logement={logement} />
          <FicheLogementBouttonEquip equipements={logement.equipments} />
        </div>
      </div>
    );
  }
}
export default FicheLogement;
