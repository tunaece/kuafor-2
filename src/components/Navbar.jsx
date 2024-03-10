import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import { NavLink } from 'react-router-dom'
import './comps.css'
import { useState, useRef, useEffect } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import DesktopServsMenu from "./DesktopServsMenu";


const Navbar = () => {
   const [mobileMenu,setMobileMenu]=useState(true)
   const [services,setServices]=useState(false)
   const [desktopMenu,setDesktopMenu]=useState(false)
   const menuRef = useRef()
   const scroll=()=>{window.scrollTo({ top: 0, left: 0, behavior: 'instant'});}
   const handleMenuClick=()=>{
      setMobileMenu(!mobileMenu)
      setServices(false)
      scroll()
   }
   const handleHamClick=()=>{
      setMobileMenu(!mobileMenu)
      setServices(false)
   }
   const handleServices=()=>{
      setServices(!services)
   }
   const handleLogoClick=()=>{
      setMobileMenu(true)
      setServices(false)
      scroll()
   }

   useEffect(()=>{
      const handler=(e)=>{
         if(!menuRef.current.contains(e.target)){
            handleHamClick()
         }
      } 
      !mobileMenu&&
         document.addEventListener('mousedown',handler)
         return()=>{
            document.removeEventListener('mousedown',handler)
         }
   })

return (
<div className=" sticky top-0" ref={menuRef}>
   <nav className="block bg-black">
      <div className="theNavbar">
      

      <div className='theLogo'>
         <NavLink to='/' onClick={handleLogoClick}>LOGO</NavLink>
      </div>
      <div className="hidden lg:flex space-x-10 [&>*]:hover:cursor-pointer ">
            <FaInstagram color="#df9f14" size={35} className="hover:scale-125 transition-all" />
            <FaTiktok color="#df9f14" size={30} className="hover:scale-125 transition-all"/>
            <FaYoutube color="#df9f14" size={35} className="hover:scale-125 transition-all"/>
            <CiFacebook color="#df9f14" size={35} className="hover:scale-125 transition-all"/>
      </div>
      <div className='theMenu'>
         <NavLink to='/' onClick={scroll}>Ana Sayfa</NavLink>
         <NavLink to='/hakkimizda' onClick={scroll}>Hakkımızda</NavLink>
         <NavLink to='/fiyat-listesi' onClick={scroll}>Fiyat Listesi</NavLink>
         <NavLink to='/gorseller' onClick={scroll}>Görseller</NavLink>
         <button className="desktopServBtn" 
         onClick={()=>setDesktopMenu(!desktopMenu)}>
            <span>Hizmetlerimiz</span> 
         {desktopMenu? <FaChevronUp/> : <FaChevronDown/>} </button>

         
      </div>
   <div className=" h-full p-4 md:hidden"
   onClick={handleHamClick}>
      <div className="hamburger-button" > 
         {mobileMenu?<IoMdMenu className="hamburger" size={42}/> :
         <MdClose size={42} className="hamburger"/>} 
      </div>
   </div>
      </div> 
      <AnimatePresence>
      {!mobileMenu && 
         <motion.div className="mobileMenu" 
            initial={{y:-100}} animate={{y:0}} exit={{y:-200,opacity:0}}
            transition={{duration:0.1}} 
         >
            <motion.div className="space-y-5" 
            initial={{opacity:0, y:10}} animate={{opacity:1,y:0}}
            transition={{duration:0.2,delay:0.1}}>
            <NavLink to='/' className='mobileLinks'
            onClick={handleMenuClick} >Ana Sayfa</NavLink>
            <NavLink to='/hakkimizda' className='mobileLinks'
            onClick={handleMenuClick} >
               Hakkımızda</NavLink>
               <NavLink className='mobileLinks' to='/fiyat-listesi'
               onClick={handleMenuClick}>
                  Fiyat Listesi</NavLink>
            <button 
            className="inline-flex items-center space-x-1"
             onClick={handleServices}>
               <span>Hizmetlerimiz</span> 
               {!services? <FaChevronDown size={15}/> :
               <FaChevronUp size={15}/>} 
               </button>
               <AnimatePresence>
               {services&&
               <motion.div className="bg-zinc-900 border-b border-t border-yellow-500" 
                  initial={{height:0}}
                  animate={{height:'auto'}}
                  transition={{duration:0.1,ease:'easeOut'}} 
                  exit={{height:0,
                     transition:{delay:0.1,duration:0.1}}}
                  >
               <motion.div className="[&>*]:block space-y-5 py-4"
                initial={{opacity:0}} animate={{opacity:1}}
                transition={{duration:0.1,delay:0.2}}
                exit={{opacity:0,transition:{delay:0,duration:0.1}}}>
                  <NavLink onClick={handleMenuClick} 
                  to='/sac-islemleri'>Saç İşlemleri</NavLink>
                  <NavLink onClick={handleMenuClick} 
                  to='/el-ayak-islemleri' >El & Ayak İşlemleri</NavLink>
                  <NavLink onClick={handleMenuClick} 
                  to='/makyaj-islemleri'>Makyaj İşlemleri</NavLink>
                  <NavLink onClick={handleMenuClick} 
                  to='/bakim-islemleri'>Bakım İşlemleri</NavLink>
                  <NavLink onClick={handleMenuClick} 
                  to='/gelin-saci-ve-makyajı'>Gelin Saçı ve Makyajı</NavLink>
                  <NavLink onClick={handleMenuClick} 
                  to='/mikro-kaynak'>Mikro Kaynak</NavLink>
               </motion.div>
               </motion.div>
               }
               </AnimatePresence>
            </motion.div>
            <motion.div className="flex justify-center items-center mt-8 space-x-7"
               initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
               transition={{duration:0.2,delay:0.2}}
            >

            <FaInstagram color="#df9f14" size={30}/>
            <FaTiktok color="#df9f14" size={26}/>
            <FaYoutube color="#df9f14" size={30}/>
            <CiFacebook color="#df9f14" size={30}/>

            </motion.div>
         </motion.div>
      }
      </AnimatePresence>
   </nav>
   <AnimatePresence>
   {desktopMenu&& 
   
      <DesktopServsMenu /> 
   }
   </AnimatePresence>
</div>
)
}

export default Navbar