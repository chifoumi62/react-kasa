import '../data/logements_kasa.json';
import '../styles/logements.scss';

const logements=[];
    fetch('src/data/logements_kasa.json')
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
        <div key={logement.id} className="logement">
          <img src={logement.cover} alt={logement.title} className='logement_img'/>
          <h2 className='logement_title'>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default Logements;