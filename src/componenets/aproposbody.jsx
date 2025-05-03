import '../styles/aproposbody.scss'
import Boutton from './boutton'

const element2 = [
    {
        id: 1,
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        id: 2,
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrive de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme",
    },
    {
        id: 3,
        title: "Service",
        description: "la qualité de service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction,que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
        id: 4,
        title: "Responsabilité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }   
]



function Aproposbody() {
    return (
        <div className="aproposbody">
            <div key={element2[0].id} className="aproposbody_text">
                <Boutton element={element2[0]}/>
            </div>
            <div key={element2[1].id} className="aproposbody_text">
                <Boutton element={element2[1]}/>
            </div>
            <div key={element2[2].id} className="aproposbody_text">
                <Boutton element={element2[2]}/>
            </div>
            <div key={element2[3].id} className="aproposbody_text">
                <Boutton element={element2[3]}/>
            </div>
            
        </div>
    )
}   
export default Aproposbody