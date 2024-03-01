import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'
import './comps.css'
const DesktopServsMenu = () => {
  return (
    <motion.div className="desktop-serv-wrapper"> 
      <motion.div className="desktopLinks">
         <NavLink to='sac-islemleri' activeclass='active' >Saç İşlemleri</NavLink>
         <NavLink to='/makyaj-islemleri'>Makyaj İşlemleri</NavLink>
         <NavLink to='/gelin-saci-ve-makyajı'>Gelin Saçı ve Makyajı</NavLink>
         <NavLink to='/agda-islemleri'>Ağda İşlemleri</NavLink>
         <NavLink to='/el-ayak-islemleri'>El & Ayak İşlemleri</NavLink>
         <NavLink to='/mikro-kaynak'>Mikro Kaynak</NavLink>

      </motion.div>
   </motion.div>
  )
}

export default DesktopServsMenu