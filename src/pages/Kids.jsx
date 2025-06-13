import Breadcrumb from "../components/Breadcrumb"
import KidsProductList from "../components/KidsProductList"

const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  
  { label: "Kids Ethnic Wear" },
]

export default function Kids() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Circular Category Cards */}
      <div className="container mx-auto px-4 py-8">
       
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Indian Kids Wear Clothes</h1>
        </div>

        {/* Welcome Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-md leading-relaxed">
        This festive season immerse your child in the tradition of Indian culture with the Andaaz fashion Kids Indian Wear collection. We have variety in all kids' Indian wear from girls' anarkali dresses, lehnga, and pantsuits to boys' kurta pajamas and dhoti kurta we have outfits that capture the essence of India's diverse heritage.
          </p>
        </div>
      </div>
      <KidsProductList/>
    </div>
  )
}