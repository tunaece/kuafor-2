import './pages.css'
import { FaPhone } from "react-icons/fa";

const Home = () => {
return(
<>
   <div className="slider">
      <div className='landing'>
      <h1 className='slogan'>SLOGAN</h1>
      <a href='tel:+905541346670' className='ara'><span>İletişime Geç</span>
       <FaPhone size={18}/> </a>
      </div>
    </div>
</>
)
}

export default Home