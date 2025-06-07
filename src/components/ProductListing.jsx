"use client"
import FilterSidebar from "./FilterSidebar"
import ProductGrid from "./ProductGrid"
import ProductListingHeader from "./ProductListingHeader"

export default function ProductListing() {
    const handleSortChange = (sortOption) => {
    console.log("Sort changed to:", sortOption)
    // Implement sorting logic here
  }
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center mb-6">Women's Ethnic Outfits and Dresses</h1>

      <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12">
        Shop the rich diversity of women's fashion with our Ethnic Wear for Women collection. We understand that beauty
        comes in all forms, and our ethnic wear caters to that diversity. Whether you're petite or plus size, our Indian
        Ethnic Wear for Women offers a wide range of styles to ensure you shine with confidence and sophistication.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <FilterSidebar />
       <div className="flex-1">
          {/* Product Listing Header */}
          <ProductListingHeader productCount={70} onSortChange={handleSortChange} />

          {/* Products Grid */}
          <div className="mt-6">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
