import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sac from "./pages/servicePages/Sac";
import ElAyak from "./pages/servicePages/ElAyak";
import Makyaj from "./pages/servicePages/Makyaj";
import Gelin from "./pages/servicePages/Gelin";
import Mikro from "./pages/servicePages/Mikro";
import Agda from "./pages/servicePages/Agda"; 
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ImgGallery from "./pages/imgGallery/ImgGallery";
import PriceList from "./pages/priceList/PriceList";


function App() {
return (
<>
  <Navbar/>
  <Routes>
    <Route path="*" element={<NotFound/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/hakkimizda" element={<About/>} />
    <Route path="/sac-islemleri" element={<Sac/>} />
    <Route path="/el-ayak-islemleri" element={<ElAyak/>} />
    <Route path="/makyaj-islemleri" element={<Makyaj/>} />
    <Route path="/bakim-islemleri" element={<Agda/>} />
    <Route path="/gelin-saci-ve-makyajı" element={<Gelin/>} />
    <Route path="/mikro-kaynak" element={<Mikro/>} />
    <Route path="/gorseller" element={<ImgGallery/>} />
    <Route path="/fiyat-listesi" element={<PriceList/>} />
  </Routes>
  <Footer/>
</>
)
}

export default App
