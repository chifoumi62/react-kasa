import arrow from '../assets/arrow_open.png'
import arrowClose from '../assets/arrow_close.png'
import { useState } from 'react';



function Boutton({ element }) {
    const [isOpen, setIsOpen] =useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="aproposbody_text">
            <div className="article_apropos">
                <h1>{element.title}</h1>
                <button className="apropos_button" onClick={toggleDescription}>
                    <img src={isOpen ? arrowClose : arrow} alt="arrow" className={`arrow_apropos_${element.id}`} />
                </button>
            </div>
            {isOpen && (
                <div className={`description_${element.id}`}>
                    <p>{element.description}</p>
                </div>
            )}
        </div>
    );
}
export default Boutton;

            
    