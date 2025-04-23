
import '../styles/logements.scss';
import { Link } from 'react-router-dom';

const logements=[];
    await fetch('src/data/logements_kasa.json')
    .then((response) => response.json()) 
    .then((data) => {
        console.log(data);
        logements.push(...data); 
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

function Logements() {
  return (
    <div className="logements">
      {logements.map((logement) => (
        <Link to={`/fiche_logement/${logement.id}`} key={logement.id} className="logement">
          <img src={logement.cover} alt={logement.title} className="logement_img"/>
          <h2 className="logement_title">{logement.title}</h2>
        </Link>
      ))}
    </div>
  );
}
export default Logements;