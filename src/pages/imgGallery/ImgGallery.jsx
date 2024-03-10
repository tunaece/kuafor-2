import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { slides } from "./imgs";
import './imgs.css'
import Images from "./Images";

const ImgGallery = () => {
  const [idx,setIdx] = useState(-1);


return (
<>
<h2 className="text-center my-3">Büyütmek için resme tıklayın.</h2>
<Images data={slides} onClick={(current)=>setIdx(current)} />
  <Lightbox
    open={idx >= 0}
    close={() => setIdx(-1)}
    index={idx}
    slides={slides}
    plugins={[Thumbnails]}
  />
</>
)
}

export default ImgGallery