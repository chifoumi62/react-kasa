import arrow from '../assets/arrow_open.png'
import Boutton from './boutton';

function FicheLogementBoutton({ logement}) {
  const element={
    id:1,
    title:"Description",
    description:logement.description
  }
  
  return (
    <div className='fiche-logement-body__description'>
       <Boutton element={element}/>
    </div>
  )
}
export default FicheLogementBoutton;