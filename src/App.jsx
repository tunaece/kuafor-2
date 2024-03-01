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


function App() {
return (
<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hakkimizda" element={<About/>} />
    <Route path="/sac-islemleri" element={<Sac/>} />
    <Route path="/el-ayak-islemleri" element={<ElAyak/>} />
    <Route path="/makyaj-islemleri" element={<Makyaj/>} />
    <Route path="/agda-islemleri" element={<Agda/>} />
    <Route path="/gelin-saci-ve-makyajı" element={<Gelin/>} />
    <Route path="/mikro-kaynak" element={<Mikro/>} />
  </Routes>
</>
)
}

export default App
