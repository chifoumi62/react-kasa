function Carrousselle() {
  return (
    <div className="carrousselle">
      <div className="carrousselle__container">
            <img src="{logement.picture[0]}" alt="photo appartement" className="carrousselle_item"/>
            <img src="picture[1]" alt="photo appartement" className="carrousselle_item"/>
            <img src="picture[2]" alt="photo appartement" className="carrousselle_item"/>
            <img src="picture[3]" alt="photo appartement" className="carrousselle_item"/>
            <img src="picture[4]" alt="photo appartement" className="carrousselle_item"/>
      </div>
    </div>
  );
}
export default Carrousselle;