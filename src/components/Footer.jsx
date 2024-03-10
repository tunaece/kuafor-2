import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import './comps.css'


const Footer = () => {
return (
<div className="md:flex bg-gray-950 text-white pb-8">
   <div className="w-full h-full py-10 flex justify-center">
   <div className="footer-media-wrapper">
      <h3 className="mb-3 text-xl">Sosyal Medya</h3>
      <a href=""> <span><FaInstagram/> <span>Instagram</span> </span> </a>
      <a href=""> <span><FaTiktok/> <span>TikTok</span> </span> </a>
      <a href=""> <span><FaYoutube/> <span>Youtube</span> </span> </a>
      <a href=""> <span><FaFacebook/> <span>Facebook</span> </span> </a>
      
   </div>
   </div>
   <div className="rights-reserved">Tüm hakları saklıdır. © 2024</div>
</div>
)
}

export default Footer