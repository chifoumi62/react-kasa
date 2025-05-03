import arrow from '../assets/arrow_open.png'
import Boutton from './boutton';

function FicheLogementBoutton({ logement}) {
  const element={
    id:logement.id,
    title:"description",
    description:logement.description
  }
  return (
    <Boutton element={element}/>
  )
}
export default FicheLogementBoutton;