import { useNavigate } from "react-router-dom"
import './comps.css'

const ServiceCards = () => {
   const navigate = useNavigate()
   const detayli=(link)=>{
      navigate(link)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant'});
   }

   const services = [
      {
         title: 'SAÇ İŞLEMLERİ',
         link: '/sac-islemleri',
         image: '/public/assets/dark-hair.jpg'
      },
      {
         title:'MAKYAJ İŞLEMLERİ',
         link:'/makyaj-islemleri',
         image:'/public/assets/makyaj.jpg'
      },
      {
         title:'GELİN SAÇI VE MAKYAJI',
         link:'/gelin-saci-ve-makyajı',
         image:'/public/assets/bride-hair.jpg'
      },
      {
         title:'EL & AYAK İŞLEMLERİ',
         link:'/el-ayak-islemleri',
         image:'/public/assets/protez-tirnak.jpg'
      },
      {
         title:'MİKRO KAYNAK',
         link:'/mikro-kaynak',
         image:'/public/assets/mikro.jpg'
      },
      {
         title:'AGDA İŞLEMLERİ',
         link:'/agda-islemleri',
         image:'/public/assets/agda.jpg'
      }
   ]
return (
<div className="serv-wrapper">
{
   services.map((serv,ix)=>(
      <div style={{backgroundImage:`url(${serv.image})`,backgroundPosition:'center'}}
       className="servCard"  key={ix}
      onClick={()=> detayli(serv.link)}>
         <h2 className="servTitle"> {serv.title} </h2>
         <button onClick={()=>detayli(serv.link)}
         className="servLink">Detaylı Bilgi</button>
      </div>
   ))
}
</div>
)
}

export default ServiceCards