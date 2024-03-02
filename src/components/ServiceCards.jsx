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
         title: 'SAÇ VE MAKYAJ',
         link: '/sac-islemleri'
      },
      {
         title:'MAKYAJ İŞLEMLERİ',
         link:'/makyaj-islemleri'
      },
      {
         title:'GELİN SAÇI VE MAKYAJI',
         link:'/gelin-saci-ve-makyajı'
      },
      {
         title:'EL & AYAK İŞLEMLERİ',
         link:'/el-ayak-islemleri'
      },
      {
         title:'MİKRO KAYNAK',
         link:'/mikro-kaynak'
      },
      {
         title:'AGDA İŞLEMLERİ',
         link:'/agda-islemleri'
      }
   ]
return (
<div className="serv-wrapper">
{
   services.map((serv,ix)=>(
      <div className="servCard"  key={ix}
      onClick={()=> navigate(serv.link)}>
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