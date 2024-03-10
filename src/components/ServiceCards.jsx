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
         clas: 'sac'
      },
      {
         title:'MAKYAJ İŞLEMLERİ',
         link:'/makyaj-islemleri',
         clas:'makyaj'
      },
      {
         title:'GELİN SAÇI VE MAKYAJI',
         link:'/gelin-saci-ve-makyajı',
         clas:'gelin'
      },
      {
         title:'EL & AYAK İŞLEMLERİ',
         link:'/el-ayak-islemleri',
         clas:'elayak'
      },
      {
         title:'MİKRO KAYNAK',
         link:'/mikro-kaynak',
         clas:'mikro'
      },
      {
         title:'BAKIM İŞLEMLERİ',
         link:'/bakim-islemleri',
         clas:'bakim'
      }
   ]
return (
<div className="serv-wrapper">
{
   services.map((serv,ix)=>(
      <div 
       className={serv.clas} id="servCard"  key={ix}
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