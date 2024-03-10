import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex justify-center pt-14 h-[calc(100svh-80px)] bg-red-50">
      <div className="text-center"> 
      <h1 className="text-3xl mb-8">Aradığınız sayfa bulunamadı</h1>
      <Link to='/'
      className="bg-blue-700 py-2 px-3 text-white hover:bg-blue-600"
      >  
        Ana Sayfaya Dön</Link>
      </div>
    </div>
  )
}

export default NotFound