
function FicheLogementBody( logement) {
  return (
    <div className="fiche-logement-body">
      <div className="fiche-logement-body__description">
        <h1>{logement.title}</h1>
        <h2>paris</h2>

        <p>coucou</p>
      </div>
      <div className="fiche-logement-body__equipements">
        <h2>Équipements</h2>
       
      </div>
    </div>
  );
}
export default FicheLogementBody;