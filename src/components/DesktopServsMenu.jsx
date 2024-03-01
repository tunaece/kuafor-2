import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import './comps.css'
const DesktopServsMenu = () => {
  return (
    <motion.div className="desktop-serv-wrapper" 
    initial={{y:-200}} animate={{y:0}} transition={{duration:0.1}}
    exit={{y:-200,transition:{delay:0.1,duration:0.1}}}
    > 
      <motion.div className="desktopLinks"
      initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
      transition={{duration:0.1,delay:0.1}} 
      exit={{opacity:0,transition:{duration:0.1}}}
      >
         <Link>Saç İşlemleri</Link>
         <Link>Saç İşlemleri</Link>
         <Link>Saç İşlemleri</Link>
         <Link>Saç İşlemleri</Link>
         <Link>Saç İşlemleri</Link>
      </motion.div>
   </motion.div>
  )
}

export default DesktopServsMenu