function FicheLogementHeader({ logement }) {
  return (
    <div className="fiche-logement-body">
            <div className="fiche-logement-body__container1">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                        ))}
                    </div>
            </div>

            <div className="fiche-logement-body__container2">
                    <div className="fiche-logement-body__host">
                        <h2>{logement.host.name}</h2>
                        <img src={logement.host.picture} alt="Host" className="host_picture" />
                    </div>
                    <div className="fiche-logement-body__rating">
                        <div className="stars">
                        {Array.from({ length: 5 }, (_, index) => (
                            <img
                            key={index}
                            src={index < logement.rating ? "src/assets/star-active 1.png" : "src\assets\star-inactive 1 (2).png"}
                            alt="star"
                            className="star"
                            />
                        ))}
                        </div>
                        
                    </div>
                    
            </div>
    </div>
  );
}
export default FicheLogementHeader;