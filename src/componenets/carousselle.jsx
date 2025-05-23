import { useState } from "react";
import "../styles/carrousselle.scss";
import arrowleft from "../assets/arrow_left.png";
import arrowright from "../assets/arrow_right.png";

function Carrousselle({ pictures }) {
  let [index, setIndex] = useState(0);

  let next = () => setIndex((index + 1) % pictures.length);
  let prev = () => setIndex((index - 1 + pictures.length) % pictures.length);

  if (pictures.length === 1) {
    return (
      <div className="carrousselle">
        <img
          src={pictures[index]}
          alt={`Image ${index + 1}`}
          className="carrousselle_img"
        />
      </div>
    );
  } else {
    return (
      <div key={index} className="carrousselle">
        <img
          src={pictures[index]}
          alt={`Image ${index + 1}`}
          className="carrousselle_img"
        />
        <div className="carrousselle_index">
          {index + 1} / {pictures.length}
        </div>
        <div className="carrousselle_buttons">
          <button onClick={prev} className="carrousselle_buttons__prev">
            <img src={arrowright} alt="arrow" className="arrow_prev" />
          </button>
          <button onClick={next} className="carrousselle_buttons__next">
            <img src={arrowleft} alt="arrow" className="arrow_next" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carrousselle;
