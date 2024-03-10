import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'
import './comps.css'
const DesktopServsMenu = () => {
  const scroll=()=>{window.scrollTo({ top: 0, left: 0, behavior: 'instant'});}
  return (
    <motion.div className="desktop-serv-wrapper"> 
      <motion.div className="desktopLinks">
         <NavLink to='sac-islemleri' activeclass='active' onClick={scroll}
         >Saç İşlemleri</NavLink>
         <NavLink to='/makyaj-islemleri' onClick={scroll}>Makyaj İşlemleri</NavLink>
         <NavLink to='/gelin-saci-ve-makyajı' onClick={scroll}>Gelin Saçı ve Makyajı</NavLink>
         <NavLink to='/bakim-islemleri' onClick={scroll}>Bakım İşlemleri</NavLink>
         <NavLink to='/el-ayak-islemleri' onClick={scroll}>El & Ayak İşlemleri</NavLink>
         <NavLink to='/mikro-kaynak' onClick={scroll}>Mikro Kaynak</NavLink>

      </motion.div>
   </motion.div>
  )
}

export default DesktopServsMenu