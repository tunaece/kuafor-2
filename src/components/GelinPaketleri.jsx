import { BsDice1Fill } from "react-icons/bs";
import { BsDice2Fill } from "react-icons/bs";
import { BsDice3Fill } from "react-icons/bs";
import { BsDice4Fill } from "react-icons/bs";

const GelinPaketleri = () => {
return (
<div className="gelinpaket-wrapper">
   <div className="w-full ">
   <h1 className="paketh1">Gelinlere Özel Saç, Makyaj, Bakım Paketleri</h1>
   <div className="card-wrapper">
   <div className="paketCard">
      <h2 className="paketh2"><span>Standart</span><BsDice1Fill size={20} /></h2>
      <p className="paketFiyat">4000₺</p>
      <ul className="paket-ul">
         <li>1 Adet Saç Provası</li>
         <li>Gelin Saç Modeli</li>
         <li>Gelin Makyajı</li>
         <li>Günlük Kirpik Ekleme</li>
         <li>El-Ayak Bakımı Oje</li>
      </ul>
   </div>
   <div className="paketCard">
      <h2 className="paketh2"><span>Silver</span><BsDice2Fill size={20} /></h2>
      <p className="paketFiyat">5000₺</p>
      <ul className="paket-ul">
         <li>1 Adet Saç Provas</li>
         <li>Gelin Saç Modeli</li>
         <li>Gelin Makyajı</li>
         <li>Günlük Kirpik Ekleme</li>
         <li>El-Ayak Bakımı Oje</li>
         <li>Dekolte Makyajı</li>
         <li>Manikür</li>
         <li>Kaş Alımı ve Dizaynı</li>
      </ul>
   </div>
   <div className="paketCard">
      <h2 className="paketh2"><span>Gold</span><BsDice3Fill size={20} /></h2>
      <p className="paketFiyat">6000₺</p>
      <ul className="paket-ul">
         <li>2 Adet Saç Provas</li>
         <li>1 Adet Makyaj Provası</li>
         <li>Gelin Saç Modeli</li>
         <li>Gelin Makyajı</li>
         <li>Dekolte Makyajı</li>
         <li>Günlük Kirpik Ekleme</li>
         <li>Manikür</li>
         <li>Pedikür</li>
         <li>Saç Bakımı (Maske)</li>
         <li>Kaş Alımı ve Dizaynı</li>
      </ul>
   </div>
   <div className="paketCard">
      <h2 className="paketh2"><span>Premium</span><BsDice4Fill size={20} /></h2>
      <p className="paketFiyat">7000₺</p>
      <ul className="paket-ul">
         <li>2 Adet Saç Provas</li>
         <li>1 Adet Makyaj Provası</li>
         <li>Gelin Saç Modeli</li>
         <li>Gelin Makyajı</li>
         <li>Dekolte Makyajı</li>
         <li>Günlük Kirpik Ekleme</li>
         <li>Manikür</li>
         <li>Pedikür</li>
         <li>Saç Bakımı (Maske)</li>
         <li>Kaş Alımı ve Dizaynı</li>
         <li>Tüm Vücut Ağda</li>
      </ul>
   </div>
   </div>

</div>
</div>
)
}

export default GelinPaketleri