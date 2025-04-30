import '../styles/aproposbody.scss'

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
            {element2.map((element) => (
                <div key={element.id} className="aproposbody_text">
                    <div className="article_apropos">
                        <h1>{element.title}</h1>
                        <button className="apropos_button" onClick={() => {
                            const description = document.querySelector(`.description_${element.id}`);
                            description.style.display = description.style.display === "block" ? "none" : "block";
                            const arrow = document.querySelector(`.arrow_apropos_${element.id}`);
                            arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
                        }}>
                            <img src="public\arrow_open.png" alt="arrow" className={`arrow_apropos arrow_apropos_${element.id}`} />
                        </button>
                    </div>
                    <div className={`description_${element.id}`} style={{ display: "none" }}>
                        <p>{element.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}   
export default Aproposbody