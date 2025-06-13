import Breadcrumb from "../components/Breadcrumb"
import MenProductGrid from "../components/MenProductGrid"
import MenProductList from "../components/MenProductList"
import ProductList from "../components/ProductList"
const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  
  { label: "Men Ethnic Wear" },
]

export default function Men() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Circular Category Cards */}
      <div className="container mx-auto px-4 py-8">
       
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Ethnic Men’s Fashion Wear</h1>
        </div>

        {/* Welcome Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-md leading-relaxed">
         Discover timeless elegance with our Indian Men's Clothing collection. From traditional kurta pajamas to modern sherwanis, our range embodies the rich heritage of Indian fashion. Explore our collection of Indian Dresses for Men and redefine your style with classic Indian attire designed to make men look their best.
          </p>
        </div>
      </div>
      <MenProductList/>
    </div>
  )
}
