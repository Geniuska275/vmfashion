"use client"

import { useState, useEffect } from "react"
// import placeholderImage from "../assets/placeholder.jpg"

function ProductGrid({ category }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // In a real app, you would fetch products from an API
    // For now, we'll create mock data
    const mockProducts = Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      name: `Fashion Item ${i + 1}`,
      description: "Elegant design with premium fabric",
      category: ["lehengas", "anarkalis", "sararas", "drapes", "made-to-measure"][i % 5],
      image: "",
    }))

    if (category) {
      setProducts(mockProducts.filter((product) => product.category === category))
    } else {
      setProducts(mockProducts)
    }
  }, [category])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-black border border-amber-300/30 rounded-lg p-4 hover:border-amber-300 transition-colors"
        >
          <div className="aspect-square bg-gray-900 mb-4 rounded-md overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
          </div>
          <h3 className="font-playfair text-xl font-medium mb-2">{product.name}</h3>
          <p className="text-amber-200/80">{product.description}</p>
        </div>
      ))}

      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-xl">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid
