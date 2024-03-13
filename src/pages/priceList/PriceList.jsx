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
    </div>
  )
}

export default PriceList