import Breadcrumb from "../components/Breadcrumb"
import video from "../images/bridal.mp4"


const breadcrumbItems = [{ label: "VM Fashion", href: "/" }, { label: "The Bridal Couture" }]

export default function Bridal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

     
     
     
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Bridal Couture</h1>
          <p className="text-md md:text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Step into bridal elegance with our handcrafted lehengas, sarees, and gowns. Adorned with intricate
            embroidery and luxe fabrics, each piece exudes regal charm.
          </p>
        </div>
      <div className="Hero">
            <video src={video} muted autoPlay loop className=""/> 
            

      {/* Content Overlay */}
        <div className="text-center absolute top-[200px] left-[150px]  md:top-[700px] md:left-[600px]">
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View Collection
          </button>
        
      </div> 
</div>
    

    
      </div>
    
  )
}
