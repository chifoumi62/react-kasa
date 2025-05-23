import StarRating from "./star";

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
          <img
            src={logement.host.picture}
            alt="Host"
            className="host_picture"
          />
        </div>
        <StarRating rating={logement.rating} />
      </div>
    </div>
  );
}
export default FicheLogementHeader;
