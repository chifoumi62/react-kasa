function FicheLogementBoutton({ description}) {
  return (
    <div className="fiche-logement-body__description">
      <h1>description</h1>
      <button className="apropos_button" onClick={() => {
        const descriptionElement = document.querySelector(".descript");
        descriptionElement.style.display = descriptionElement.style.display === "block" ? "none" : "block";
        const arrow = document.querySelector(".arrow_descript");
        arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
      }}>
        <img src="src\assets\arrow_back_ios-24px at 2x.png" alt="arrow" className="arrow_descript"/>
      </button>
    
    <div className="descript" style={{ display: "none" }}>
      <p>{description}</p>
    </div>
    </div>
  )
}
export default FicheLogementBoutton;