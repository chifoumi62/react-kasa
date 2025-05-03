import arrow from '../assets/arrow_open.png'

function Boutton ({element}) {
        return(
                <div className="aproposbody_text">
                    <div className="article_apropos">
                        <h1>{element.title}</h1>
                        <button className="apropos_button" onClick={() => {
                            const description = document.querySelector(`.description_${element.id}`);
                            description.style.display = description.style.display === "block" ? "none" : "block";
                            const arrow = document.querySelector(`.arrow_apropos_${element.id}`);
                            arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
                        }}>
                            <img src={arrow} alt="arrow" className={`arrow_apropos_${element.id}`} />
                        </button>
                    </div>
                    <div className={`description_${element.id}`} style={{ display: "none" }}>
                        <p>{element.description}</p>
                    </div>
                </div>
            )}
export default Boutton

            
    