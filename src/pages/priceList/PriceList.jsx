import { NavLink } from "react-router-dom"
import BakimFiyat from "./priceComponents/BakimFiyat"
import ElAyakFiyat from "./priceComponents/ElAyakFiyat"
import MakyajFiyat from "./priceComponents/MakyajFiyat"
import SacFiyat from "./priceComponents/SacFiyat"

const PriceList = () => {
  return (
    <div className="pt-3 pb-10">
      <SacFiyat/>
      <ElAyakFiyat/>
      <BakimFiyat/>
      <MakyajFiyat/>
      <div className="gelinDetaylı">
        <h1 className="fiyatGelinH1">Gelin Saçı ve Makyajı</h1>
        <NavLink to='/gelin-saci-ve-makyajı' 
        onClick={()=>window.scrollTo({ top: 0, left: 0, behavior: 'instant'})}
         className="gelinDetaylıBtn">Detaylı Bilgi</NavLink>
      </div>
    </div>
  )
}

export default PriceList