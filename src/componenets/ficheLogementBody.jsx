
function FicheLogementBody({ location,title, description, host, rating, equipements, tags }) {
  return (
    <div className="fiche-logement-body">
      <div className="fiche-logement-body__container1">
          <h1>{title}</h1>
          <h2>{location}</h2>
        <div className="fiche-logement-body__tags">
         
        </div>
            <div className="fiche-logement-body__description">

                    <h1>description</h1>
                        <button className="apropos_button" onClick={() => {
                            const description = document.querySelector(".descript");
                            description.style.display = description.style.display === "block" ? "none" : "block";
                            const arrow = document.querySelector(".arrow_descript");
                            arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
                        }}>
                            <img src="src\assets\arrow_back_ios-24px 2@2x.png" alt="arrow" className="arrow_descript"/>
                        </button>
            </div>
                    <div className="descript" style={{ display: "none" }}>
                        <p>{description}</p>
                    </div>
      </div>
      <div className="fiche-logement-body__equipements">
        <h2>Équipements</h2>
       
      </div>
    </div>
  );
}
export default FicheLogementBody;