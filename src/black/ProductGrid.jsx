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
      <h1>All products - coming soon ...</h1>
    </div>
  )
}

export default ProductGrid
