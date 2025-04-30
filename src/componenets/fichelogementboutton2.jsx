function FicheLogementBoutton2 ({ equipements }) {
    return (
        <div className="fiche-logement-body__equipements">
            <div className="fiche-logement-body_boutton">
                    <h1>Equipements</h1>
                    <button className="apropos_button" onClick={() => {
                        const description = document.querySelector(".equip");
                        description.style.display = description.style.display === "block" ? "none" : "block";
                        const arrow = document.querySelector(".arrow_equip");
                        arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
                    }}>
                        <img src="public\arrow_open.png" alt="arrow" className="arrow_equip"/>
                    </button>
            </div>
                <div className="equip" style={{ display: "none" }}>
                    {equipements.map((equipement, index) => (
                        <ul key={index} className="equipement">
                            <li>{equipement}</li>
                        </ul>
                    ))}
                </div>
        </div>
    )   
}
export default FicheLogementBoutton2;