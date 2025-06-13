import Breadcrumb from "../components/Breadcrumb"
import ProductList from "../components/ProductList"
const breadcrumbItems = [
  { label: "Vm Fashion", href: "/" },
  { label: "Women Clothing", href: "/women" },
  { label: "Indo Western" },
]

export default function IndoWestern() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Circular Category Cards */}
      <div className="container mx-auto px-4 py-8">
       
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Indo Western Dresses for Women</h1>
        </div>

        {/* Welcome Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-md leading-relaxed">
           Discover the fusion of elegance and tradition with Indo Western dresses by Andaaz Fashion. Elevate your style with exquisite Indo Western outfits, blending the richness of Indian ethnic wear with the chicness of Western fashion. Explore a stunning range of Indo-Western attire for women, curated to perfection.
          </p>
        </div>
      </div>
      <ProductList/>
    </div>
  )
}
