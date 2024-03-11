
const Images = ({data,onClick}) => {

   const handleImgClick=(ix)=>{
      onClick(ix)
   }
return (<div className="imgPage">
  
  <div className="imgCont">
  {data.map((imgs,ix)=>(
    <div key={ix} className="imgWrapper">
      <img src={imgs.src} className="theImg" onClick={()=>handleImgClick(ix)}
      loading="eager|lazy"/>
    </div>
  ))}
  </div>
  </div>
)
}

export default Images