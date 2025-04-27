function FicheLogementBoutton2 ({ equipements }) {
    return (
        <div className="fiche-logement-body__equipements">
            <h1>Equipements</h1>
            <button className="apropos_button" onClick={() => {
                const description = document.querySelector(".equip");
                description.style.display = description.style.display === "block" ? "none" : "block";
                const arrow = document.querySelector(".arrow_equip");
                arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
            }}>
                <img src="src\assets\arrow_back_ios-24px 2@2x.png" alt="arrow" className="arrow_equip"/>
            </button>
            <div className="equip" style={{ display: "none" }}>
                {equipements.map((equipement, index) => (
                    <span key={index} className="equipement">{equipement}</span>
                ))}
            </div>
        </div>
    )   
}
export default FicheLogementBoutton2;