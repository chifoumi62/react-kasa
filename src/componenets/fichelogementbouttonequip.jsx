import arrow from '../assets/arrow_open.png'
import arrowClose from '../assets/arrow_close.png'
import { useState } from 'react';



function FicheLogementBouttonEquip ({ equipements }) {
    const [isOpen, setIsOpen] =useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fiche-logement-body__equipements">
            <div className="fiche-logement-body_boutton">
                <h1>Equipements</h1>
                <button className="apropos_button" onClick={toggleDescription}>
                    <img src={isOpen ? arrowClose : arrow} alt="arrow" className="arrow_equip" />
                </button>
            </div>
            {isOpen && (
                <div className="equip">
                     {equipements.map((equipement, index) => (
                        <ul key={index} className="equipement">
                            <li>{equipement}</li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    );
}
export default FicheLogementBouttonEquip;