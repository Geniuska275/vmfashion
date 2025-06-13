import Breadcrumb from "../components/Breadcrumb"
import JewelleryProductList from "../components/JewwlleryProductList";
import MenProductGrid from "../components/MenProductGrid"
import MenProductList from "../components/MenProductList"
import ProductList from "../components/ProductList";
import wall from "../images/jewellery.avif"

const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  
  { label: "Jewellery" },
]

export default function Jewellery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex justify-center iteme-center">
      <img src={wall}/>

      </div>


      {/* Circular Category Cards */}
      <div className="container mx-auto px-4 py-8">
       
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Indian Jewellery</h1>
        </div>

        {/* Welcome Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-md leading-relaxed">
      Explore a world of tradition and elegance with our Indian Jewellery collection. Each piece of our jewelry design is a testament to India's rich cultural heritage. From intricate jhumkas to regal necklaces, our Indian Jewellery is designed to make you feel rooted in tradition while shining with exquisite beauty.
          </p>
        </div>
      </div>
      <JewelleryProductList/>
    </div>
  )
}