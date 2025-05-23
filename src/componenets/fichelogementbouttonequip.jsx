import Boutton from "./boutton";

function FicheLogementBouttonEquip({ equipements }) {
  const element2 = equipements.map((equipement, index) => (
    <ul key={index} className="equipement">
      <li>{equipement}</li>
    </ul>
  ));

  const element = {
    id: 1,
    title: "Equipements",
    description: element2,
  };

  return (
    <div className="fiche-logement-body__equipements">
      <Boutton element={element} />
    </div>
  );
}
export default FicheLogementBouttonEquip;
