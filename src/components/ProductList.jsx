"use client"
import FilterSidebar from "./FilterSidebar"
import ProductGrid from "./ProductGrid"
import ProductListingHeader from "./ProductListingHeader"

export default function ProductList() {
    const handleSortChange = (sortOption) => {
    console.log("Sort changed to:", sortOption)
    // Implement sorting logic here
  }
  return (
    <div className="container mx-auto px-4 py-8">
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
