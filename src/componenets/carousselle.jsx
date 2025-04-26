import {useState} from "react";
import '../styles/carrousselle.scss';

function Carrousselle({pictures}) {

    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % pictures.length);
    const prev = () => setIndex((index - 1 + pictures.length) % pictures.length);

  return (
      <div className="carrousselle">
            <img src={pictures[index]} alt={`Image ${index}`} className="carrousselle_img"/>
            <div className="carrousselle_buttons">
                    <button onClick={prev} className="carrousselle_buttons__prev">
                        <img src="src/assets/arrow_forward_ios-24px 1.png" alt="arrow" className="arrow_prev"/>
                    </button>
                    <button onClick={next} className="carrousselle_buttons__next">
                        <img src="src/assets/arrow_back_ios-24px 1.png" alt="arrow" className="arrow_next"/>
                    </button>
            </div>
      </div>
  );
}

export default Carrousselle;