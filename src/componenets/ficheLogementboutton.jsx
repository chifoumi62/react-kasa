function FicheLogementBoutton({ description}) {
  return (
    <div className="fiche-logement-body__description">
      <div className="fiche-logement-body_boutton">
          <h1>description</h1>
          <button className="apropos_button" onClick={() => {
            const descriptionElement = document.querySelector(".descript");
            descriptionElement.style.display = descriptionElement.style.display === "block" ? "none" : "block";
            const arrow = document.querySelector(".arrow_descript");
            arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
          }}>
            <img src="public\arrow_open.png" alt="arrow" className="arrow_descript"/>
          </button>
      </div>
    
      <div className="descript" style={{ display: "none" }}>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default FicheLogementBoutton;